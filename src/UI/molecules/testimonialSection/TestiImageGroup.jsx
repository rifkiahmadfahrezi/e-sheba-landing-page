import React from 'react'


export default function TestiImageGroup(){
        const images = ['1.png','2.png','3.png','4.png','5.png','6.png']

        return(
            <>
                <div className="flex">
                    {images.map((img, i) => {
                        return (
                        <div key={i} 
                            className="ml-[-20px] w-[50px] h-[50px] sm:w-[70px] sm:h-[70px] first:ml-0 hover:mr-[20px] last:hover:ml-[-20px] hover:ml-0 transition-all duration-200">
                            <img  src={`/img/avatars/${img}`} className='w-full object-cover' alt="" />
                        </div>)
                    })}
                </div>
            </>
        )
}