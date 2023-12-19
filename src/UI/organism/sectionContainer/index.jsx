import React from 'react'


export default function SectionContainer({className ,children}){
        return(
            <>
                <section className={`flex my-5 ${className}`}>
                    {children}
                </section>
            </>
        )
}