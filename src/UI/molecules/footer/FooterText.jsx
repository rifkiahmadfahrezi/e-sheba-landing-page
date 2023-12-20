import React from 'react'

import Link from '@/UI/atoms/link'

export default function FooterText(){
        return(
            <>
                <div className="w-full mt-7 lg:mt-0">
                    <h1 className='font-ibm text-white font-bold text-2xl'>E-Sheba</h1>

                    <div className="my-5 flex flex-col gap-2 text-white text-md">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nec risus feugiat lectus risus sed ullamcorper. Auctor semper fermentum.</p>
                        <p>volutpat integer vel. In rhoncus elementum nunc, malesuada mi sed. Nibh est sit lobortis id semper.</p>
                    </div>

                    <div className="">
                        <Link label="visit our official facebook" href='#'><i className='bx bxl-facebook text-white'></i></Link>
                        <Link label="visit our official instagram" href='#'><i className='bx bxl-instagram-alt text-white'></i></Link>
                        <Link label="visit our official x or twitter" href='#'><i className='bx bxl-twitter text-white'></i></Link>
                    </div>
                </div>
            </>
        )
}