import React from 'react'

import FooterText from '@/UI/molecules/footer/FooterText'
import FooterMenu from '@/UI/molecules/footer/FooterMenu'
import FooterMap from '@/UI/molecules/footer/FooterMap'

export default function Footer(){
        return(
            <>
                <footer className='w-full bg-blue'>
                    <div className="container mx-auto px-3 py-14 flex flex-col items-center">
                        <div className="flex lg:flex-row flex-col relative items-start gap-7 justify-between after:content-[''] after:absolute after:w-full after:h-[2px] after:bg-white after:bottom-0 pb-10 after:rounded-full after:left-0">
                            <FooterText />
                            <FooterMenu />
                            <FooterMap />
                        </div>
                        <p className='text-center mt-5 text-slate-100'>&copy; 2023 design by <a href="https://www.figma.com/community/file/1170008021377081653" className='decoration-double'>Manjurul islam</a> & 
                        developed by <a href="https://github.com/rifkiahmadfahrezi" className='decoration-double'>Rifki ahmad fahrezi</a></p>
                    </div>
                </footer>
            </>
        )
}