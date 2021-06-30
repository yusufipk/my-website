import { createClient } from "contentful";
import { useState } from "react";
import List from "../components/list";
import Head from "next/head";

export default function Blog({ blog }) {
  const [search, setSearch] = useState("");

  const filteredPosts =
    search.length === 0
      ? blog
      : blog.filter((post) =>
          post.fields.title.toLowerCase().includes(search.toLowerCase())
        );

  return (
    <div className="blog">
      <Head>
        <title>Blog - Yusuf Ipek</title>
        <meta name="description" content="Latest posts I've written." />
        <meta property="og:title" content="Blog - Yusuf Ipek" />
        <meta property="og:description" content="Latest posts I've written." />
        <meta
          property="og:image"
          content={
            "https://images.ctfassets.net/adn4iqhmi2t3/3ukKXyWxX1FxGqJyBel0Hu/08c3e76caa77480372fa88f0c61961d4/blog.png?"
          }
        />
      </Head>
      <h2 className="heading-2 u-margin-bottom-smaller">Latest Posts</h2>
      <hr />
      <input
        className="blog__searchbar"
        type="text"
        placeholder="Search post"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <ul className="blog__list">
        <List posts={filteredPosts} />
      </ul>
    </div>
  );
}

export async function getStaticProps() {
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_KEY,
  });

  const res = await client.getEntries({
    content_type: "blog",
    order: "-fields.date",
  });

  return {
    props: {
      blog: res.items,
    },
    revalidate: 10,
  };
}
