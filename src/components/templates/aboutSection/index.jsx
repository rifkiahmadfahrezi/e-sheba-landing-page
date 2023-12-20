import React from 'react'

import SectionTitle from '@/UI/atoms/sectionTitle'
import Card from '@/UI/molecules/section/Card'
import SectionContainer from '@/UI/organism/sectionContainer'
import CheckedList from '@/UI/molecules/list/CheckedList'
import Link from '@/UI/atoms/link'

export default function AboutSection(){

        const cardInfo = [
            {
                id: 1,
                img: "/img/covid-icon.svg",
                title: "covid-19 test",
                text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sem velit viverra amet faucibus.'
            },
            {
                id: 2,
                img: "/img/lungs-icon.svg",
                title: "heart lungs",
                text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sem velit viverra amet faucibus.'
            },
            {
                id: 3,
                img: "/img/food-icon.svg",
                title: "suppliment",
                text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sem velit viverra amet faucibus.'
            },
            {
                id: 4,
                img: "/img/head-icon.svg",
                title: "mental health",
                text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sem velit viverra amet faucibus.'
            },
        ] 

        return(
            <>
                <section id='about' className='w-full py-[150px]'>
                    <div className="container mx-auto px-5">
                        <SectionContainer className="flex-col">
                            <SectionTitle title="our consulting spesialist"/>

                            <div className="grid grid-cols-auto-fit gap-4 mt-9">
                                {cardInfo.map(card => {
                                    return  <Card 
                                        key={card.id} 
                                        img={card.img} 
                                        title={card.title} 
                                        text={card.text}/>
                                })}
                            </div>
                        </SectionContainer>
                        <SectionContainer className="mt-[150px] gap-[70px] flex-col lg:flex-row justify-between">
                            <figure className='w-full'>
                              <img src="/img/doctors.png"  className='w-full object-cover' alt="a doctor doing surgery" />
                            </figure>
                            
                            <article className='w-full flex flex-col items-start justify-between'>
                                <div className="">
                                   <SectionTitle title="why you choose us?"/>

                                    <CheckedList classList="mt-10 ml-8">
                                        {Array(5).fill(0).map((x,i) => {
                                            return <CheckedList.Item key={i} text="Lorem ipsum dolor sit amet, consectetur adipiscing elit."/>
                                        })}
                                    </CheckedList>
                                </div>

                                <Link 
                                    label="visit for more information"
                                    href='#' 
                                    className="text-blue group flex items-center capitalize text-lg md:mb-10 mb-[-30px]">
                                    learn more
                                    <i className='ml-2 group-hover:translate-x-[10px] group-hover:rotate-[180deg] transition duration-300 bx bx-arrow-back bx-rotate-180' ></i>
                                </Link>
                            </article>
                        </SectionContainer>
                    </div>
                </section>
            </>
        )
}