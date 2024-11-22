import React from 'react'
import { BiLike } from 'react-icons/bi'
import { BsFillFolderFill } from 'react-icons/bs'
import { FaRegUserCircle } from 'react-icons/fa'
import { IoHomeOutline } from 'react-icons/io5'
import { Link } from 'react-router-dom'
import home from "../img/Home.png"
import footer1 from "../img/footer1.png"
import footer2 from "../img/footer2.png"
import footer3 from "../img/footer3.png"

const Footer = () => {
  return (
    <div className='w-full rounded-tl-xl rounded-tr-xl border shadow-md fixed bottom-0 left-0 right-0'>
       <div className='container justify-between flex items-center py-3'>
        <div className='w-8 h-8'>
        <img src={home} alt="" />
        </div>
        <div className='w-8 h-8 text-3xl'>
        <Link to="/personals">
           <img src={footer1} alt="" />
        </Link>
        </div>
        <div className='w-8 h-8 '>
          <Link to="/likesh">
          <img src={footer2} alt="" />
          </Link>
        </div>
        <div className='w-8 h-8 text-3xl'>
          <Link to="/profiless">
          <img src={footer3} alt="" />
          </Link>
        </div>
       </div>
    </div>
  )
}

export default Footer