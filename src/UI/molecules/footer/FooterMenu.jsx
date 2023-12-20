import React from 'react'

import Link from '@/UI/atoms/link'

export default function FooterMenu(){
        return(
            <>
                <div className="w-full mt-7 lg:mt-0">
                    <h1 className='capitalize font-ibm text-white font-extrabold text-2xl'>usefull links</h1>

                    <div className="mt-5 flex flex-col gap-1">
                        <Link label="visit about us page" href="#" className="capitalize hover:decoration-solid text-lg font-ibm text-white">about us</Link>
                        <Link label="visit our privacy and policy" href="#" className="capitalize hover:decoration-solid text-lg font-ibm text-white">privacy policy</Link>
                        <Link label="visit our mission" href="#" className="capitalize hover:decoration-solid text-lg font-ibm text-white">our mission</Link>
                        <Link label="visit our team" href="#" className="capitalize hover:decoration-solid text-lg font-ibm text-white">our team</Link>
                    </div>
                </div>
            </>
        )
}