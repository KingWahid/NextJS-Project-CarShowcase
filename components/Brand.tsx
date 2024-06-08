import Image from 'next/image'
import React from 'react'

const Brand = () => {
  return (
    <section className='xl:pt-8 xl:h-[200px] bg-white flex flex-col justify-center'>
        <div className='container mx-auto'>
            <div className='grid grid-cols-3 gap-6 place-items-center xl:flex xl:flex-wrap xl:gap-x-20 xl:justify-center'>
                <div>
                    <Image
                        src='/bmw.svg'
                        alt='bmw'
                        width={85}
                        height={50}
                    />
                </div>
                <div>
                    <Image
                        src='/audi.svg'
                        alt='audi'
                        width={85}
                        height={50}
                    />
                </div>
                <div>
                    <Image
                        src='/mazda.svg'
                        alt='mazda'
                        width={85}
                        height={50}
                    />
                </div>
                <div>
                    <Image
                        src='/mercedes.svg'
                        alt='ford'
                        width={85}
                        height={50}
                    />
                </div>
                <div>
                    <Image
                        src='/ford.svg'
                        alt='ford'
                        width={85}
                        height={50}
                    />
                </div>
                <div>
                    <Image
                        src='/vw.svg'
                        alt='vw'
                        width={85}
                        height={50}
                    />
                </div>
            </div>
        </div>
    </section>
  )
}

export default Brand