import React from 'react'
import { HiHeart, HiOutlineX } from 'react-icons/hi'

function LikesItem() {
  return (
    <div className='w-full relative min-h-[230px] bg-[#ACACAC] text-white rounded-xl'>
        <div className='absolute top-4 left-4 flex flex-col font-semibold text-[12px] leading-4'>
            <p>Катя, 20 лет</p>
            <p>Казахстан, Астана</p>
            <p>№8836</p>
        </div>
        <div className='absolute bg-white text-gray-400 left-[10%] w-10 h-10 rounded-full flex justify-center items-center text-3xl bottom-6'>
        <HiOutlineX />
        </div>
        <div className='absolute bgcolorr right-[10%] w-10 h-10 rounded-full flex justify-center items-center text-3xl bottom-6'>
        <HiHeart className='text-red-400' />
        </div>

    </div>
  )
}

export default LikesItem