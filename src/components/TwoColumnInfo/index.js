import React from 'react'
import BlogList from '@site/src/components/BlogList';
import HandBookList from '@site/src/components/HandBookList';

const blogs = {
    title: 'Blog',
    url: '/blog'
}
    
const handbook = {
    title: 'Handbook',
    items: [
        {
            subtitle: 'About the Company',
            url: '/docs/handbook/About/about_ondsel'
        },
        {
            subtitle: 'About the Project',
            url: '/docs/handbook/About/FreeCAD'
        }
    ],
    url: '/docs/handbook'
}

export default function TwoColumnInfo ({data}) {
    return (
        <section className='backimg'>
            <div className='pt-10 pb-5'>
                <div className='container'>
                    <div className='row'>
                        <div className='flex two_column_layout w_full p16 gap30'>
                        <BlogList title={blogs.title} url={blogs.url} data={data}/>
                        <HandBookList title={handbook.title} url={handbook.url} items={handbook.items}/>

                            {/* {data.map((item, index)=>( */}
                                {/* <div key={index}> */}
                                    {/* <InfoList title={item.title} data={item.items} url={item.url}/> */}
                                {/* </div> */}
                            {/* ))} */}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}