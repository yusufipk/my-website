import Head from "next/head";
import { createClient } from "contentful";
import ListProject from "../components/ListProject";

export default function Projects({ project }) {
  return (
    <div className="projects">
      <Head>
        <title>Projects - Yusuf Ipek</title>
        <meta name="description" content="These are my coding projects." />
        <meta property="og:title" content="Projects - Yusuf Ipek" />
        <meta
          property="og:description"
          content="These are my coding projects."
        />
        <meta
          property="og:image"
          content={
            "https://images.ctfassets.net/adn4iqhmi2t3/4V9vjZRUIDJSND48kVh792/a7ad4cdaf6d30e43e88430a31bc9379a/projects.png"
          }
        />
      </Head>
      <h1 className="heading-1">Projects</h1>
      <hr />
      <ListProject project={project} />
    </div>
  );
}

export async function getStaticProps() {
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_KEY,
  });

  const res = await client.getEntries({
    content_type: "projects",
    order: "-fields.number",
  });

  return {
    props: {
      project: res.items.reverse(),
    },
    revalidate: 10,
  };
}
