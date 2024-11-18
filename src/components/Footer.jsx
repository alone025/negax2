import React from 'react'
import { BiLike } from 'react-icons/bi'
import { BsFillFolderFill } from 'react-icons/bs'
import { FaRegUserCircle } from 'react-icons/fa'
import { IoHomeOutline } from 'react-icons/io5'

const Footer = () => {
  return (
    <div className='w-full rounded-tl-xl rounded-tr-xl bg-green-400 shadow-md fixed bottom-0 left-0 right-0'>
       <div className='container justify-between flex items-center py-3'>
        <div className='w-8 h-8'>
        <IoHomeOutline className='text-3xl' />
        </div>
        <div className='w-8 h-8 text-3xl'>
        <BsFillFolderFill />
        </div>
        <div className='w-8 h-8 '>
        <BiLike className="text-3xl"/>
        </div>
        <div className='w-8 h-8 text-3xl'>
        <FaRegUserCircle />
        </div>
       </div>
    </div>
  )
}

export default Footer