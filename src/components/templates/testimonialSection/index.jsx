import React from 'react'

import SectionContainer from '@/UI/organism/sectionContainer'
import TestiImageGroup from '@/UI/molecules/testimonialSection/TestiImageGroup'
import Card from '@/UI/molecules/card'

export default function TestimonialSection(){
        return(
            <>
                <section id="testimonials" className='bg-lightblue py-[150px]'>
                    <div className="container mx-auto px-3">
                        <SectionContainer className='flex flex-col lg:flex-row gap-x-36 gap-y-20 items-center justify-between'>
                            <article className='w-full'>
                                <h2 
                                    className='font-ibm font-bold text-myblack capitalize text-5xl mb-5'>
                                        What <span className='text-blue'>Our Member’s</span> Saying About Us</h2>
                                <p className='text-md'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sem velit viverra amet faucibus.</p>

                                <figure className='mt-3 flex items-center justify-between'>
                                    <TestiImageGroup />

                                    <p className='text-myblack font-ibm font-semibold'>100+ reviews</p>
                                </figure>

                            </article>
                            <Card className='w-full group ml-0 border border-slate-700'>
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center gap-6">
                                       <figure className="w-[70px] h-[70px]">
                                         <img src={`/img/avatars/4.png`} className='w-full object-cover' alt="" />
                                       </figure>
                                        <div className="">
                                            <h6 className='capitalize font-ibm font-semibold text-md'>jane cooper</h6>
                                            <p>12/4/17</p>
                                        </div>
                                    </div>

                                    <div className="flex gap-1">
                                        {Array(5).fill(0).map((_,i) => {
                                            return <i key={i} className='bx bxs-star text-yellow-300 text-xl sm:text-3xl group-hover:animate-bounce transition-all duration-200'></i>
                                        })}
                                    </div>
                                </div>

                                <p className='text-md text-myblack mt-8'>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sem velit viverra amet faucibus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sem velit viverra amet faucibus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sem velit viverra amet faucibus.
                                </p>
                            </Card>
                        </SectionContainer>
                    </div>
                </section>
            </>
        )
}