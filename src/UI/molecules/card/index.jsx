import React from 'react'


export default function Card({className, children}){
        return(
            <>
                <div className={`p-8 bg-white rounded-xl ${className}`}>
                    {children}
                </div>
            </>
        )
}