import React from "react";
import Link from "@docusaurus/Link";

export default function HandBookList({ title, url, items }) {
  return (
    <div>
      <div className="m20">
        <Link className="text_gray font_bold text-3xl" to={url}>
          {title}
        </Link>
      </div>
      <div>
        {items.map((item, index) => (
          <div key={item.url}>
            <Link key={index} to={item.url} className="text_gray">
              <p>{item.subtitle}</p>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
