import React from 'react'

import Link from '@/UI/atoms/link'
import SectionContainer from '@/UI/organism/sectionContainer'

export default function HealthSection(){
        return(
            <>
                <section className='w-full py-[130px]'>
                    <div className="container mx-auto px-3">
                        <SectionContainer className="gap-x-[50px] gap-y-[50px] flex-col-reverse lg:flex-row ">
                            <article className='w-full'>
                                <h2 
                                    className='font-ibm font-bold text-myblack capitalize text-5xl mb-5 2xl:max-w-[60%]'>
                                    the future of <span className='text-blue'>quality health</span></h2>

                                <div className="mt-5 flex flex-col gap-3 2xl:max-w-[80%]"> 
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nec risus feugiat lectus risus sed ullamcorper. Auctor semper fermentum volutpat integer vel. In rhoncus elementum nunc, malesuada mi sed. Nibh est sit lobortis id semper.</p>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nec risus feugiat lectus risus sed ullamcorper. Auctor semper fermentum volutpat integer vel. In rhoncus elementum nunc, malesuada mi sed. Nibh est sit lobortis id semper.</p>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nec risus feugiat lectus risus sed ullamcorper. sed. Nibh est sit lobortis id semper.</p>
                                </div>
                                <Link href='#' className="text-blue group flex items-center capitalize text-lg md:mb-10 mb-[-30px] mt-4">
                                        learn more
                                        <i className='ml-2 group-hover:translate-x-[10px] group-hover:rotate-[180deg] transition duration-300 bx bx-arrow-back bx-rotate-180' ></i>
                                    </Link>
                            </article>
                            <figure className='w-full'>
                                <img src="/img/doctors-2.png" alt="a doctor giving an advice to his patient" />
                            </figure>
                        </SectionContainer>
                    </div>
                </section>
            </>
        )
}