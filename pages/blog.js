import { createClient } from "contentful";
import Link from "next/link";
import { useState } from "react";
import List from "../components/list";

export default function Blog({ blog }) {
  const [search, setSearch] = useState("");

  const filteredPosts =
    search.length === 0
      ? blog
      : blog.filter((post) =>
          post.fields.title.toLowerCase().includes(search.toLowerCase())
        );

  console.log(blog);
  return (
    <div className="blog">
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
  };
}