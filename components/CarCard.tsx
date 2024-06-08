'use client'
import Image from "next/image"
import { CarProps } from "@/typings"
import CustomButton from "./CustomButton"
import { calculateCarPrice, calculateCarRent } from "@/utils"
import { useState } from "react"
import CarDetails from "./CarDetails"     


type CarCardProps = {
  car: CarProps
}

export default function CarCard({car}: CarCardProps) {
  const {city_mpg, year, make, model, transmission, drive, cylinders} = car;
  const [isOpen, setIsOpen] = useState(false)

  const carPrice = calculateCarPrice(city_mpg, cylinders)
  const carRent = calculateCarRent(city_mpg, year);
  

  return (
    <div className="flex flex-col p-6 justify-center items-start text-black-100 bg-gray-100 hover:bg-white hover:shadow-md rounded-3xl group">
      <div className="w-full flex justify-between items-start gap-2">
        <h2 className="text-[22px] leading-[26px] font-bold capitalize">
          {make} {model}
        </h2>
      </div> 
      
      <div className="relative w-full h-40 my-3 object-contain mt-10">
        <Image 
          src='/car01.png'
          alt="car model"
          fill
          priority
          className="object-contain"
        />
      </div>

      <p className="flex mt-6 text-[20px] font-bold text-gray-500">
        <span className="self-start text-[14px] font-semibold">
          $
        </span>
          {carPrice}
      </p>

      <p className="flex text-[20px] font-bold text-gray-500">
        <span className="self-start text-[14px] font-semibold">
          $
        </span>
          {carRent}
        <span className="self-end text-[14px] font-medium">
          /day
        </span>
      </p>



      <div className="relative flex w-full mt-8">
        <div className="flex group-hover:invisible w-full justify-between text-gray">
          <div className="flex flex-col items-center justify-center gap-2">
            <Image 
              src="/steering-wheel.svg" alt="steering wheel"
              width={20} height={20}
            />
            <p className="text-[14px]">{transmission === 'a' ? "Automatic":"Manual"}</p>
          </div>
          <div className="flex flex-col items-center justify-center gap-2">
            <Image 
              src="/tire.svg" alt="tire"
              width={20} height={20}
            />
            <p className="text-[14px]">{drive.toUpperCase()}</p>
          </div>
          <div className="flex flex-col items-center justify-center gap-2">
            <Image 
              src="/gas.svg" alt="fuel"
              width={20} height={20}
            />
            <p className="text-[14px]">{city_mpg}</p>
          </div>
        </div>

        <div className="hidden group-hover:flex absolute bottom-0 w-full z-10">
          <CustomButton 
            title="View More"
            containerStyles="w-full py-[16px] rounded-full bg-black"
            rightIcon="/right-arrow.svg"
            textStyles="text-white text-[14px] leading-[17px] font-bold"
            handleClick={() => setIsOpen(true)}
          />
        </div>
      </div>
      
      <CarDetails car={car} isOpen={isOpen} closeModal={() => setIsOpen(false)}/>
    </div>
  )
}
