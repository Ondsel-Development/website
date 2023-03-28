import React from 'react'
import Link from '@docusaurus/Link';

export default function HandBookList({title, url, items}) {
    console.log(items)
    return(
        <div>
            <div className='m20' >
                <Link className='c_grey font_bold text_lg' to={url}>{title}</Link>
            </div>
            <div>
                {items.map((item, index)=>(
                    <div>
                        <Link key={index} to={item.url} className='c_grey'><p>{item.subtitle}</p></Link>
                    </div>
                ))}
            </div>
        </div>
    )
}