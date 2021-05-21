import React from "react";
import Link from "next/link";

export default function List({ posts }) {
  return (
    <React.Fragment>
      {posts.map((post) => (
        <li className="blog__post" key={post.sys.id}>
          <Link href={`/blog/${post.fields.slug}`}>{post.fields.title}</Link>
        </li>
      ))}
    </React.Fragment>
  );
}
