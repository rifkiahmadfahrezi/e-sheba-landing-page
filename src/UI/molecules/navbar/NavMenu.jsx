import React from "react";

import Link from '@/UI/atoms/link'

export default function NavMenu(){
    return (
        <>
            <div className="flex flex-col text-center mb-9 md:mb-0 md:flex-row gap-6">
                <Link 
                    label="go to home section"
                    href="/" 
                    className="font-ibm hover:px-[unset] text-lg capitalize hover:text-blue text-darkblue font-bold relative py-1 after:content-[''] after:w-full after:bg-blue after:absolute after:bottom-0 after:left-0 after:h-[2px] after:scale-x-[0] after:origin-right hover:after:origin-left after:transition  after:duration-300 hover:after:scale-x-[1]"
                    >Home</Link>
                <Link label="go to about section"
                    href="/" 
                    className="font-ibm hover:px-[unset] text-lg capitalize hover:text-blue text-darkblue font-bold relative py-1 after:content-[''] after:w-full after:bg-blue after:absolute after:bottom-0 after:left-0 after:h-[2px] after:scale-x-[0] after:origin-right hover:after:origin-left after:transition  after:duration-300 hover:after:scale-x-[1]"
                    >about</Link>
                <Link 
                    label="go to application section"
                    href="/" 
                    className="font-ibm hover:px-[unset] text-lg capitalize hover:text-blue text-darkblue font-bold relative py-1 after:content-[''] after:w-full after:bg-blue after:absolute after:bottom-0 after:left-0 after:h-[2px] after:scale-x-[0] after:origin-right hover:after:origin-left after:transition  after:duration-300 hover:after:scale-x-[1]"
                    >application</Link>
                <Link 
                    label="go to about section"
                    href="/" 
                    className="font-ibm hover:px-[unset] text-lg capitalize hover:text-blue text-darkblue font-bold relative py-1 after:content-[''] after:w-full after:bg-blue after:absolute after:bottom-0 after:left-0 after:h-[2px] after:scale-x-[0] after:origin-right hover:after:origin-left after:transition  after:duration-300 hover:after:scale-x-[1]"
                    >story</Link>
            </div>
        </>
    )
}