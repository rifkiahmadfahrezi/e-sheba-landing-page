import React from "react";

import HeroSearchInput from "@/UI/molecules/hero/HeroSearchInput";

export default function HeroSearchBox(){
    return (
        <>
            <form action="" className="flex bg-white sm:w-3/4 xl:w-full justify-between py-3 px-5 rounded-full gap-1 md:gap-3 mx-auto xl:mx-0">
                <div className="flex flex-col md:flex-row md:justify-center">
                    <HeroSearchInput icon="bxs-face" placeholder="Doctor's name"/>
                    <HeroSearchInput icon="bx-location-plus" placeholder="Location"/>
                </div>
                <button>
                    <i className="bx bx-search p-5 bg-blue text-white rounded-full mr-[-10px]"></i>
                </button>
            </form>
        </>
    )
}