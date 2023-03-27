import React from 'react'
import InfoList from '@site/src/components/InfoList';

const data = [
    {
        title: 'Blog',
        items: [
            'Exploring the Assembly 2 workbench', 
            'FreeCAD needs a default assembly workbench-introduction', 
            'I hire people to work on a FOSS project. Here is how I evaluate GitHub profiles'
        ]
    },
    {
        title: 'Handbook',
        items: [
            'About the Company',
            'About the Project',
            'Project Roadmap'
        ]
    }
]

export default function TwoColumnInfo () {
    return (
        <section className='backimg'>
            <div className='pt-10 pb-5'>
                <div className='container'>
                    <div className='row'>
                        <div className='flex two_column_layout w_full p16 gap30'>
                            {data.map((item, index)=>(
                                <div key={index}>
                                    <InfoList title={item.title} data={item.items}/>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}