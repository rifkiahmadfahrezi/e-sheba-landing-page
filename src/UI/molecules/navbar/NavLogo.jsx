import React from "react";

import Logo from '@/UI/atoms/logo'
import Link from '@/UI/atoms/link'

export default function NavLogo(){
    return(
        <>
            <Link label="our logo" href='/'>
                <Logo />
            </Link>
        </>
    )
}