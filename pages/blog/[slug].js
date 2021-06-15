import Head from "next/head";
import Image from "next/image";
import { createClient } from "contentful";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { BLOCKS } from "@contentful/rich-text-types";
import { MARKS } from "@contentful/rich-text-types";

export default function PostDetails({ posts }) {
  if (!posts)
    return (
      <div className="loading">
        <Head>
          <title> Loading... </title>
        </Head>
        <h1 className="heading-1 u-center-text">Loading...</h1>
      </div>
    );

  const { featuredImage, title, tags, post, date, description } = posts.fields;

  const options = {
    renderNode: {
      [BLOCKS.EMBEDDED_ASSET]: (node) => (
        <div className="post__image">
          <Image
            src={`https:${node.data.target.fields.file.url}`}
            alt={node.data.target.fields.file.fileName}
            width={node.data.target.fields.file.details.image.width}
            height={node.data.target.fields.file.details.image.height}
          />
        </div>
      ),

      [BLOCKS.OL_LIST]: (node, children) => {
        return (
          <div className="post__list">
            <ol> {children} </ol>
          </div>
        );
      },
      [BLOCKS.UL_LIST]: (node, children) => {
        return (
          <div className="post__list">
            <ul> {children} </ul>
          </div>
        );
      },
      [BLOCKS.PARAGRAPH]: (node, children) => {
        if (
          node.content.length === 1 &&
          node.content[0].marks.find((x) => x.type === "code")
        ) {
          return <div>{children}</div>;
        }
        return <p>{children}</p>;
      },
    },
    renderMark: {
      [MARKS.CODE]: (text) => {
        return <pre> {text}</pre>;
      },
    },
  };

  return (
    <div className="post">
      <Head>
        <title>{title} - Blog</title>
        <meta property="og:title" content={`${title} - Yusuf Ipek`} />
        <meta property="og:description" content={description} />
        <meta
          property="og:image"
          content={`https:${featuredImage.fields.file.url}`}
        />
      </Head>

      <div className="post__featured">
        <Image
          src={`https:${featuredImage.fields.file.url}`}
          width={featuredImage.fields.file.details.image.width}
          height={featuredImage.fields.file.details.image.height}
        />
      </div>

      <h1 className="heading-1 u-center-text">{title}</h1>
      <hr />

      <div className="post__metadata">
        <div className="post__metadata-tags">
          {tags.map((tag) => (
            <span key={tag}>{tag.toUpperCase()}</span>
          ))}
        </div>

        <span>
          {date.slice(8, 10)}
          {date.slice(4, 8)}
          {date.slice(0, 4)}
        </span>
      </div>

      <div className="post__text">
        {documentToReactComponents(post, options)}
      </div>
    </div>
  );
}

const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_KEY,
});

export const getStaticPaths = async () => {
  const res = await client.getEntries({ content_type: "blog" });

  const paths = res.items.map((item) => {
    return {
      params: { slug: item.fields.slug },
    };
  });

  return {
    paths,
    fallback: true,
  };
};

export async function getStaticProps({ params }) {
  const { items } = await client.getEntries({
    content_type: "blog",
    "fields.slug": params.slug,
  });

  if (!items.length) {
    return { redirect: { destination: "/404", permanent: false } };
  }

  return {
    props: { posts: items[0] },
    revalidate: 10,
  };
}
