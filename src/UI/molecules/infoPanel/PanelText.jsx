import React from "react";

export default function PanelText({title, subtitle}){
    return(
        <>
            <article className="text-center relative md:after:content-[''] md:after:absolute md:after:h-3/4 md:after:translate-y-[-50%] md:after:w-1 md:after:right-[-20%] md:after:top-2/4 md:after:bg-white md:after:last:hidden">
                <h1 className="text-3xl sm:text-[50px] xl:text-[4.5rem] font-ibm font-bold text-white">{title}</h1>
                <p className="text-white text-md sm:text-[3vw] md:text-lg lg:mt-7 font-ibm">{subtitle}</p>
            </article>
        </>
    )
}