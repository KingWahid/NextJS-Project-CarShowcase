"use client";

import { CustomFilterProps } from '@/typings'
import React, {useState, Fragment} from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { Listbox, ListboxButton, ListboxOption, Transition, ListboxOptions } from '@headlessui/react';
import { updateSearchParams } from '@/utils';

export default function CustomFilter({title, options}: CustomFilterProps) {
  const [selected, setSelected] = useState(options[0])
  const router = useRouter();
  const { push } = router;

  const handleUpdateParams = (e: {type: string, value: string}) => {
    const newPathName = updateSearchParams(title, e.value.toLowerCase());
    

    push(newPathName)

  }

  return (
    <div className='w-fit'>
      <Listbox
      value={selected}
      onChange={(e) =>{
        setSelected(e);
        handleUpdateParams(e);
      }}
      >
        <div className='relative w-fit z-10'>
          <ListboxButton className="relative w-full min-w-[127px] flex justify-between items-center cursor-default rounded-lg bg-white py-2 px-3 text-left shadow-md sm:text-sm border">
            <span className='block truncate'>{selected.title}</span>
            <Image 
              src='chevron-up-down.svg'
              alt='cevron'
              width={20}
              height={20}
              className='ml-4 object-contain'
            />
          </ListboxButton>
          <Transition
           as={Fragment}
           leave='transition ease-in duration-100'
           leaveFrom="opacity-100"
           leaveTo="opacity-0"
          >
            <ListboxOptions className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
              {options.map((option)=>(
                <ListboxOption
                  key={option.title}
                  value={option}
                  className={({active}) => `relative cursor-default select-none py-2 px-4 ${active ? 'bg-black text-white' : 'text-gray-900'}`}
                >
                  {({selected})=>(
                    <span className={`block truncate ${selected ? 'font-medium' : 'font-normal'}`}>
                      {option.title}
                    </span>
                  )}
                </ListboxOption>
              ))}
            </ListboxOptions>
          </Transition>
        </div>
      </Listbox>
    </div>
  )
}
