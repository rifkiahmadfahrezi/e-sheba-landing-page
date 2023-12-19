import React from "react";


export default function HeroText(){
    return (
        <>
        <div className="mb-5 text-center xl:text-left">
            <h1 
                className="font-bold z-10 font-ibm text-black text-[10vw] sm:text-[64px] w-34  lg:w-3/4 xl:w-full lg:mx-auto xl:mx-0"
                >Find & Search Your <span 
                    className="text-blue relative cursor-text after:z-[-1] after:content-[url(/img/underscore.svg)] after:bottom-[-30px] after:absolute after:left-0">
                    Favourite</span> Doctor</h1>
            <p
                className="text-darkblue text-[4vw] sm:text-[18px] mt-9">Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br/> Sem velit viverra amet faucibus.</p>
        </div>
        </>
    )
}