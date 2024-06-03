"use client"
import React from 'react'
import Image from 'next/image'
import { CustomButtonProps } from '@/typings'

export default function CustomButton({title, containerStyles, handleClick, btnType, textStyles, rightIcon}: CustomButtonProps) {
  return (
    <button
        disabled={false}
        type={btnType || "button"}
        className={`flex flex-row items-center py-3 px-6 outline-solid ${containerStyles}`}
        onClick={handleClick}
    >
      <span className={`flex-1 ${textStyles}`}>
        {title}   
      </span>
      {rightIcon && (
        <div className='relative w-6 h-6'>
          <Image
            src={rightIcon}
            alt='right icon'
            fill
            className='object-contain'
          />
        </div>
      )}
    </button>
  )
}
