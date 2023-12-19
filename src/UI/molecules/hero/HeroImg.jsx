import React from "react";

export default function HeroImg(){
    return(
        <>
            <div className="relative xl:absolute bottom-0 h-full w-full xl:h-auto lg:w-auto right-0">
                <img 
                    src="/img/doctor.png" 
                    alt="image of doctor"
                    className="object-cover absolute bottom-0 xl:static "/>
            </div>
        </>
    )
}

