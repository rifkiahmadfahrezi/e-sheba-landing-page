import React from 'react'


export default function Card({img, title, text}){
        return(
            <>
                <div className="bg-white border transition duration-200  border-slate-700 rounded-lg p-7 hover:bg-blue group">
                    <figure className="flex flex-col gap-2">
                        <img src={img} width="90" height="90" className='object-cover' alt="" />
                        <figcaption className='mt-3'>
                            <h1 className='group-hover:text-white font-ibm text-2xl capitalize mb-2 font-semibold'>{title}</h1>
                            <p className='group-hover:text-white text-slate-600 text-md'>{text}</p>
                        </figcaption>
                    </figure>
                </div>
            </>
        )
}