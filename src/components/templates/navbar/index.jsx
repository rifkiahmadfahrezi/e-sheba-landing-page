import React from "react";

import NavLogo from '@/UI/molecules/navbar/NavLogo';
import NavMenu from "@/UI/molecules/navbar/NavMenu";
import NavButton from "@/UI/molecules/navbar/NavButton";

export default function Navbar(){
    return (
        <> 
            <nav className="w-full fixed top-0 left-0 bg-white">
                <div className="container px-3 mx-auto py-5 flex justify-between items-center">
                    <NavLogo />
                    <NavMenu />
                    <NavButton />
                </div>
            </nav>
        </>
    )
}