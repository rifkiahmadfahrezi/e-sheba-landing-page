import React from "react";

import HeroText from "@/UI/molecules/hero/HeroText";
import HeroSearchBox from "@/UI/organism/hero/HeroSearchBox";
import HeroImg from "@/UI/molecules/hero/HeroImg";
import InfoPanel from "../infoPanel";

export default function Hero(){
    return (
        <>
        <header className="bg-lightblue w-full h-screen max-h-[900px] grid items-center relative">
           <div className="container mx-auto h-full">
                <div 
                    className="relative flex xl:flex-row flex-col items-center xl:justify-between justify-center px-2 h-full
                    after:content-[''] after:absolute after:w-full after:h-full after:bg-ellipse after:bg-no-repeat after:bottom-[50px] xl:after:bottom-[128px] after:object-contain after:bg-bottom xl:after:bg-right-bottom xl:after:right-[-100px] after:right-[unset]">
                    <section className="z-10 relative  ">
                        <HeroText />

                        <div className="mt-9">
                            <HeroSearchBox />       
                        </div>
                    </section>
                    <div className="z-10 relative w-2/4 hidden xl:block xl:w-full h-full ">
                        <HeroImg />
                    </div>
                </div>

           </div>
                <InfoPanel />
        </header>
        </>
    )
}