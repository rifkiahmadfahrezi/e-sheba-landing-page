import React from 'react'

import Card from '@/UI/molecules/card'


export default function SubscribeNewslater(){
        return(
            <>
               <section className="w-full pb-[130px]">
                    <div className="container mx-auto px-3">
                        <Card className="flex flex-col py-32 justify-center items-center bg-blue">
                            <h1 className='capitalize text-white font-ibm text-[23px] text-center sm:text-[30px] lg:text-[40px] font-semibold'>Subscribe To Our Newsletter</h1>
                            <form action="" className='flex w-full lg:w-3/6 relative mt-5'>
                                <input aria-label="e-mail for subscribe to our newslater" type="text" className='w-full h-16 bg-white py-3 px-5 rounded-full'/>
                                <button id="subscribe" title='subscribe newslater' type="submit" role="button" aria-pressed="false" className='py-3 px-4 absolute right-3 top-2/4 translate-y-[-50%] rounded-full bg-blue text-white'>
                                    <i className='bx bx-arrow-back bx-rotate-180' ></i></button>
                            </form>
                        </Card>
                    </div>
                </section>  
            </>
        )
}