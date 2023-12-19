import React, {useState, useEffect, useRef} from "react";

import NavLogo from '@/UI/molecules/navbar/NavLogo';
import NavMenu from "@/UI/molecules/navbar/NavMenu";
import NavButton from "@/UI/molecules/navbar/NavButton";

export default function Navbar(){

    const [ menuOpen, setMenuOpen ] = useState(false)
    const [ pageScrolled, setPageScrolled ] = useState(false)
    const navbarRef = useRef()

    useEffect(()=> {
        (window.innerWidth >= 765) ? setMenuOpen(true) : setMenuOpen(false)
    }, [])


    function menuToggler(){
        if (menuOpen && window.innerWidth <= 765) {
            setMenuOpen(false)
            navbarRef.current.classList.remove('bg-white')
        } else {
            setMenuOpen(true)
            navbarRef.current.classList.add('bg-white')
        }
    }

    window.addEventListener('resize', ()=>{
        if(window.innerWidth >= 765){
            setMenuOpen(true)
            navbarRef.current?.classList.remove('bg-white')
        }else{
            setMenuOpen(false)
            navbarRef.current?.classList.add('bg-white')
        } 
    })
    window.addEventListener('scroll', () => {
        (window.scrollY >= 100) ? setPageScrolled(true) : setPageScrolled(false)
    })

    return (
        <> 
            <nav ref={navbarRef} className={`transition-all py-3 duration-200 w-full z-[99] fixed top-0 left-0 ${pageScrolled ? 'bg-lightblue' : 'bg-transparent'}`}>
                <div className="container px-3 mx-auto py-3  flex justify-between items-center">
                    <NavLogo />

                    <div onClick={() => menuToggler()} className="flex md:hidden p-1 flex-col h-9 w-12  justify-between z-[99] cursor-pointer">
                        <span 
                            className={`transition duration-500 ${menuOpen ? 'rotate-45 translate-y-1': null} bg-blue w-full h-1`}></span>
                        <span 
                            className={`transition duration-500 ${menuOpen ? 'scale-x-0': null} bg-blue w-full h-1`}></span>
                        <span 
                            className={`transition duration-500 ${menuOpen ? 'rotate-[-45deg] translate-y-[-20px]' : null} bg-blue w-full h-1`}></span>
                    </div>

                    <div className={`z-[-1] md:z-[99] transition duration-500 absolute top-[60px] left-0 w-full h-fit py-5 flex-col md:flex-row bg-white md:bg-transparent items-center justify-center md:static flex lg:w-[63%] md:w-[75%]  md:justify-between ${menuOpen ? 'translate-y-[0]' : 'translate-y-[-150%]'}`}>
                        <NavMenu />
                        <NavButton />
                    </div>
                </div>
            </nav>
        </>
    )
}