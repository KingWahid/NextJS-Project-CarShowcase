"use client"

import { SearchManufacturerProps } from '@/typings'
import React, { useState, Fragment } from 'react'
import { Combobox ,Transition, ComboboxInput, ComboboxButton, ComboboxOptions, ComboboxOption } from '@headlessui/react'
import Image from 'next/image'
import { manufacturers } from '@/constant'

const SearchManufacturer = ({manufacturer, setManufacturer}: SearchManufacturerProps) => {
    const [query, setquery] = useState("");

    const filteredManufactures = query === "" ? manufacturers : manufacturers.filter((item) => (
        item.toLowerCase()
        .replace(/\s+/g, "")
        .includes(query.toLowerCase().replace(/\s+/g, "")))
    )
  return (
    <div className='flex-1 flex max-sm:w-full justify start items-center'>
        <Combobox>
            <div className='relative w-full'>
                <ComboboxButton className="absolute top-[14px]">
                    <Image 
                        src="/car-logo.svg"
                        width={20}
                        height={20}
                        alt='Car Logo'
                        className='ml-4'
                    />
                </ComboboxButton>
                   
                <ComboboxInput 
                    className="w-full h-[48px] pl-12 p-4 rounded-l-full max-sm:rounded-full bg-light-white outline-none cursor-pointer text-sm"
                    placeholder='Volkswegen'
                    displayValue={(manufacturer: string) => manufacturer}
                    onChange={(event) => setquery(event.target.value)}
                    />
            </div>

            <Transition
                as={Fragment}
                leave="transition ease-in duration-100"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
                afterLeave={() => setquery('')}
            >
                <ComboboxOptions
              className='absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm'
              static
            >
              {filteredManufactures.length === 0 && query !== "" ? (
                <ComboboxOption
                  value={query}
                  className='"w-full h-[48px] pl-12 p-4 rounded-l-full max-sm:rounded-full bg-light-white outline-none cursor-pointer text-sm'
                >
                  Create "{query}"
                </ComboboxOption>
              ) : (
                filteredManufactures.map((item) => (
                  <ComboboxOption
                    key={item}
                    className={({ active }) =>
                      `relative search-manufacturer__option ${
                        active ? "bg-primary-blue text-black" : "text-gray-900"
                      }`
                    }
                    value={item}
                  >
                    {({ selected, active }) => (
                      <>
                        <span className={`block truncate ${selected ? "font-medium" : "font-normal"}`}>
                          {item}
                        </span>

                        {/* Show an active blue background color if the option is selected */}
                        {selected ? (
                          <span className={`absolute inset-y-0 left-0 flex items-center pl-3 ${active? "text-white": "text-pribg-primary-purple"}`}
                          ></span>
                        ) : null}
                      </>
                    )}
                  </ComboboxOption>
                ))
              )}
            </ComboboxOptions>
            </Transition>
        </Combobox>
    </div>
  )
}

export default SearchManufacturer