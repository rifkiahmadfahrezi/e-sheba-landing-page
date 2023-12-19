import React from 'react'


export default function CheckedList({children, classList}){
        return(
            <>
                <ul className={`list-image-[url(/img/checked-icon.svg)] ${classList}`}>
                    {children}
                </ul>
            </>
        )
}   

export function Item({text}){
    return(
        <>
            <li className='mb-2 text-sm sm:text-md xl:text-lg'>{text}</li>
        </>
    )
}

CheckedList.Item  = Item