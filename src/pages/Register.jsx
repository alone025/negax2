import { TbWorld } from "react-icons/tb"
import logo from "../img/logo.png"
import React from 'react'
import { MdOutlineEmail, MdPhoneIphone } from "react-icons/md"
import { FaTelegram } from "react-icons/fa"
import { Link } from "react-router-dom"

function Register() {
  return (
    <div className='mt-3 relative flex flex-col items-center justify-between container bg-white font-sans text-gray-800'>
        <header className="absolute container top-0 flex justify-between items-center w-full">
            <div className="flex items-center gap-3">
                <img className="w-[40px]  " src={logo} alt="" />
                <h1 className="font-normal colorr text-[12px] leading-4 ">NIKAH.SPACE</h1>
            </div>
            <div className="flex text-purple-700 gap-2 text-lg items-center">
            <TbWorld />
                <select>
                    <option value="rus">rus</option>
                    <option value="eng">eng</option>
                </select>
            </div>
        </header>
        <main className="w-full container mt-14 min-h-[70vh] gap-20 flex flex-col items-center justify-evenly">
              <div  className="flex flex-col gap-3">
                <p className="text-[#ACACAC] text-xl text-center leading-6">Добро пожаловать в </p>
                <h1 className="text-[(99.36deg, #6a59a7 32.12%, #edabc6 73.62%)] text-[42px] text-center leading-[47px]">NIKAH.SPACE</h1>
                <p className="text-sm leading-4 text-center text-[#6A59A7]">САЙТ ЗНАКОМСТВ ДЛЯ МУСУЛЬМАН</p>
              </div>
              <div className="w-full gap-3 flex flex-col text-white">
              <h1 className="text-center text-gray-600 text-[34px] leading-[42px] font-semibold mb-6">Регистрация</h1>
                <button className="w-ful rounded-md flex  cursor-pointer items-center justify-center gap-4 py-2 bg-[#634F9E]">
                <MdPhoneIphone className="text-2xl" /><p>по номеру телефона</p>
                </button>
                <button className="w-ful rounded-md flex  cursor-pointer items-center justify-center gap-4 py-2 shadow-md text-[#634F9E] hover:bg-[#634F9E] hover:text-white duration-300">
                <FaTelegram className="text-2xl" /><p>через Telegram</p>
                </button>
                <button className=" w-ful rounded-md flex  cursor-pointer items-center justify-center gap-4 py-2 shadow-md text-[#634F9E] hover:bg-[#634F9E] hover:text-white duration-300">
                <MdOutlineEmail className="text-2xl" /><p>через email</p>
                </button>
                 
                <Link className="mt-20 w-ful rounded-md flex  cursor-pointer items-center justify-center gap-4 py-2 shadow-md text-[#634F9E] hover:bg-[#634F9E] hover:text-white duration-300" to="/login">
                <button className="">
                <p>Вход</p>
                </button>
                </Link>
              
              </div>

        </main>       
    </div>
  )
}
export default Register