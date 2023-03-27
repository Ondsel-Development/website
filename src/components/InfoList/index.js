import React from 'react'

export default function InfoList({title, data}) {
    
    return(
        <div>
            <div className='c_grey font_bold text_lg m30'>{title}</div>
            <div className='c_grey'>
                {data.map((item, index)=>(
                    <p key={index}>{item}</p>
                ))}
            </div>
        </div>
    )
}