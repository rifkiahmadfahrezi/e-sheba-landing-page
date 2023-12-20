import React from "react";

export default function HeroSearchInput({icon = null, placeholder}){
    return(
        <> 
            <div className="flex items-center jusify-between lg:w-2/4">
                <label htmlFor="doctor_name">
                    <i className={`bx ${icon}`}></i>
                </label>
                <input 
                    aria-label={`search ${placeholder}`}
                    type="search" 
                    className="font-ibm py-2 px-4 placeholder:text-black outline-none" 
                    placeholder={placeholder}/>
                <i className='bx bx-chevron-down'></i>
            </div>
        </>
    )
}