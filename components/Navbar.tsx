import React from 'react'
import Link from 'next/link';
import Image from 'next/image'
import { BoltIcon } from '@heroicons/react/20/solid'

import CustomButton from './CustomButton';

export default function Navbar() {
  return (
    <header className='w-full absolute z-10'>
        <nav className='max-w-[1440px] mx-auto flex justify-around items-center sm:px-16 px-6 py-4'>
            <CustomButton
                title="Contact Us"
                btnType='button'
                containerStyles='text-primary-black rounded-full bg-white min-w[130px] border-2 border-gray font-bold'
            />
            <Link href="/" className='flex justify-center items-center'>
                <BoltIcon className='h-6 w-6'/>
                <Image
                    src="/paradise-logo.png"
                    alt="Paradise Logo"
                    width={118}
                    height={18}
                    className='object-contain'
                />
            </Link>
            <CustomButton 
                title="Sign In"
                btnType='button'
                containerStyles='text-white rounded-full bg-black min-w[130px] border-2 border-gray font-bold'/>
        </nav>
    </header>
  )
}
