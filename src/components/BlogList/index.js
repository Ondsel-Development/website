import React from "react";
import Link from "@docusaurus/Link";

export default function BlogList({ title, url, data }) {
  return (
    <div>
      <div className="m20">
        <Link className="text_gray font_bold text-3xl" to={url}>
          {title}
        </Link>
      </div>
      <div>
        {data.slice(0, 3).map((item, index) => (
          <Link
            key={index}
            to={`/blog/${item.content.frontMatter.slug}`}
            className="text_gray"
          >
            <p>{item.content.frontMatter.title}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
