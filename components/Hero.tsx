"use client"
import React from 'react'
import CustomButton from './CustomButton'
import Image from 'next/image'


export default function Hero() {
    const handleScroll = () => {

    }
  return (
    <div className='flex flex-col gap-5 relative z-0 max-w-[1440px] mx-auto'>
        <div className='flex-1 pt-36 sm:px-16 px-6'>
            <div className='2xl:text-[72px] sm:text-[64px] text-[50px] font-extrabold'>
                <span className='text-gray-300'>The easiest</span> way to Find — the Most suitable car for <span className='text-gray-300'>Yourself!</span> 
            </div>
            <p className='text-gray-400 text-[28px]'>We carry many cars with the most advanced features in the world.</p>
        </div>
            

    <div className='flex justify-center items-center w-full'>
        <div className="relative pt-12">
            <Image src='/Audi.jpg' alt='hero' width={1300} height={200} className="object-contain px-2 rounded-3xl "/>
                <div className="absolute top-0 right-[150px] h-16 w-16">
                    <CustomButton 
                        title="Explore Cars"
                        containerStyles="bg-black text-white rounded-full mt-6 border-8 border-white w-40 "
                        handleClick={handleScroll}
                    />
                </div>
            </div>
        </div>
    </div>
  )
}
