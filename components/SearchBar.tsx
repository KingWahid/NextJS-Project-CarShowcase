"use client"
import React, { useState } from 'react';
import { SearchManufacturer } from './';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

const SearchButton = ({otherClasses}: {otherClasses: string}) => (
  <button type='submit' className={`-ml-3 z-10 ${otherClasses}`}>
    <Image
      src='/magnifying-glass.svg'
      alt='magnifiying glass'
      width={40}
      height={40}
      className='object-contain'
    />
  </button>
)

export default function SearchBar() {
    const [manufacturer, setManufacturer] = useState('');
    const [model, setModel] = useState('');
    const router = useRouter();
    const {push} = router

    function handleSearch (e: React.FormEvent<HTMLFormElement>) {
      e.preventDefault();
      if (manufacturer === '' && model === '') {
        return alert('Please fill in the search bar');
      }

      updateSearchParams(model.toLocaleLowerCase(), manufacturer.toLocaleLowerCase())
    }

    const updateSearchParams = (model: string, manufacturer: string) => {
        const searchParams = new URLSearchParams(window.location.search);

        if(model){
          searchParams.set('model', model);
        } else {
          searchParams.delete('model')
        }

        if(manufacturer){
          searchParams.set('manufacturer', manufacturer);
        } else {
          searchParams.delete('manufacturer')
        }

        const newPathName = `${window.location.pathname}?${searchParams.toString()}`

        push(newPathName)
    }
  return (
    <form onSubmit={handleSearch} className='flex items-center justify-start max-sm:flex-col w-full relative max-sm:gap-4 max-w-3xl'>
        <div className='flex-1 max-sm:w-full flex justify-start items-center relative'>
            <SearchManufacturer
                manufacturer={manufacturer}
                setManufacturer={setManufacturer}
            />
            <SearchButton otherClasses='sm:hidden'/>
        </div>
        <div className="flex-1 max-sm:w-full flex justify-start items-center relative border">
          <Image
            src='/model-icon.png'
            width={25}
            height={25}
            className='absolute w-[20px] h-[20px] ml-4'
            alt=''
          />
          <input 
            type="text" 
            name='model' 
            value={model}
            onChange={(e) => setModel(e.target.value)}
            placeholder='Tiguan'
            className='w-full h-[48px] pl-12 p-4 bg-light-white rounded-r-full max-sm:rounded-full outline-none cursor-pointer text-sm'
          />
          <SearchButton otherClasses='sm:hidden' />
        </div>
        <SearchButton otherClasses='max-sm:hidden' />
    </form>
  )
}

