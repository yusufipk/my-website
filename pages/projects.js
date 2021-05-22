import Head from "next/head";
import { createClient } from "contentful";
import ListProject from "../components/ListProject";

export default function Projects({ project }) {
  return (
    <div className="projects">
      <Head>
        <title>Projects</title>
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
