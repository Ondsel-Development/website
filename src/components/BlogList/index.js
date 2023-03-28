import React from 'react'
import Link from '@docusaurus/Link';

export default function BlogList({title, url, data}) {
    return(
        <div>
            <div className='m20' >
            <Link className='c_grey font_bold text_lg' to={url}>{title}</Link>
            </div>
            <div>
                {data.slice(0, 3).map((item, index)=>(
                    <Link key={index} to={`/blog/${item.content.frontMatter.slug}`} className='c_grey'><p>{item.content.frontMatter.title}</p></Link>
                ))}
            </div>
        </div>
    )
}