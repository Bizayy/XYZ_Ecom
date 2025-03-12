'use client'
import React, { useEffect, useState } from 'react'
import slides from '../utils/slides'
import Link from 'next/link'
import Image from 'next/image'

const HomepageSlider = () => {
    const [current, setCurrent] = useState(0);

    // useEffect(() => {
    //     const interval = setInterval(() => {
    //         setCurrent(prev => prev === slides.length - 1 ? 0 : prev + 1);
    //     }, 3000);
    //     return () => clearInterval(interval);
    // }
    //     , []);


    return (
        <div className='h-[calc(100vh-80px)] overflow-hidden relative'>
            <div className='w-max h-full flex transition-all ease-in-out duration-1000' style={
                {
                    transform: `translateX(-${current * 100}vw)`
                }
            }>

                {slides.map(slide => (
                    <div className={`${slide.bg} w-screen h-full flex flex-col md:flex-row items-center gap-8`} key={slide.id}>
                        {/* Text Section */}
                        <div className='md:w-1/2 h-max flex flex-col items-center gap-3 md:gap-5 text-center py-8'>
                            <h1 className='text-xl sm:text-2xl lg:3xl xl:text-4xl'>{slide.description}</h1>
                            <h2 className='text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-semibold'>{slide.title}</h2>
                            <Link href={slide.url}>
                                <button className='rounded-md p-2 text-sm text-white ring-1 ring-gray-500 bg-black hover:bg-white hover:text-black'>
                                    SHOP NOW
                                </button>
                            </Link>
                        </div>
                        {/* Image Section */}
                        <div className='w-full h-full md:w-1/2 relative'>
                            <Image src={slide.img} fill sizes='100%' className='object-cover w-full' alt={`${slide.title} image`} />
                        </div>

                    </div>

                ))}
            </div>

            {/* ragination Dots */}
            <div className='absolute m-auto bottom-7 left-1/2 -translate-x-1/2 z-10 flex items-center gap-4'>
                {slides.map((slide, index) => (
                    <div key={slide.id} className={`w-3 h-3 rounded-full ring-1 ring-gray-300 cursor-pointer flex items-center
                                                        justify-center ${current === index ? "scale-150" : ""}`} onClick={() => setCurrent(index)}>
                        {current === index && (
                            <div className='w-[6px] h-[6px] rounded-full bg-white md:bg-gray-600'></div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    )
}

export default HomepageSlider
