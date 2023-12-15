import React, {useState, useEffect} from "react";

import NavLogo from '@/UI/molecules/navbar/NavLogo';
import NavMenu from "@/UI/molecules/navbar/NavMenu";
import NavButton from "@/UI/molecules/navbar/NavButton";

export default function Navbar(){

    const [ menuOpen, setMenuOpen ] = useState(false)

    function menuToggler(){
        (menuOpen && window.innerWidth <= 765) ? setMenuOpen(false) : setMenuOpen(true)
    }

    window.addEventListener('resize', ()=>{
        (window.innerWidth >= 765) ? setMenuOpen(true) : setMenuOpen(false)
    })

    return (
        <> 
            <nav className="w-full z-[99] fixed top-0 left-0 bg-white">
                <div className="container px-3 mx-auto py-5 flex justify-between items-center">
                    <NavLogo />

                    <div onClick={() => menuToggler()} className="flex md:hidden p-1 flex-col h-9 w-12  justify-between z-[99] cursor-pointer">
                        <span 
                            className={`transition duration-500 ${menuOpen ? 'rotate-45 translate-y-1': null} bg-blue w-full h-1`}></span>
                        <span 
                            className={`transition duration-500 ${menuOpen ? 'scale-x-0': null} bg-blue w-full h-1`}></span>
                        <span 
                            className={`transition duration-500 ${menuOpen ? 'rotate-[-45deg] translate-y-[-20px]' : null} bg-blue w-full h-1`}></span>
                    </div>

                    <div className={`z-[-1] transition duration-500 absolute top-[70px] left-0 w-full h-fit py-5 flex-col md:flex-row bg-white items-center justify-center md:static flex lg:w-[65%] md:w-[75%]  md:justify-between ${menuOpen ? 'translate-y-[0]' : 'translate-y-[-150%]'}`}>
                        <NavMenu />
                        <NavButton />
                    </div>
                </div>
            </nav>
        </>
    )
}