"use client"

import {useRouter} from 'next/navigation';
import { ShowMoreProps } from '@/typings';
import CustomButton from './CustomButton';
import { updateSearchParams } from '@/utils';

const ShowMore = ({pageNumber, isNext}: ShowMoreProps) => {
    const router = useRouter();
    const {push} = router

    const handleNavigation = () => {
        const newLimit = (pageNumber + 1) * 10;
        const newPathName = updateSearchParams("limit", `${newLimit}`)

        push(newPathName);
    }


  return (
    <div className='w-full flex-center gap-5 mt-10'>
        {!isNext && (
            <CustomButton 
                title='Show More'
                btnType='button'
                containerStyles='bg-black rounded-full text-white'
                handleClick={handleNavigation}
            />
        )}

    </div>
  )
}

export default ShowMore