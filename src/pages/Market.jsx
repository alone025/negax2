import logo from "../img/logo2.png";
import tasbex from "../img/tasbex.png";
import Footer from "../components/Footer";
import { useState } from "react";

const Market = () => {

  const [dote, setDote] = useState(false)

  const toggleDropdown = () => {
    setDote(!dote);
  };

const [active , setActive] = useState('0')

  return (
    <div className="container flex pb-[55px] flex-col items-center pt-[68px]">
      <header className="absolute container top-5 flex justify-between items-center w-full">
        <div className="flex items-center gap-3">
          <img className="w-[40px]  " src={logo} alt="" />
          <h1
            onClick={() => window.open("/", "_current")}
            className="font-normal cursor-pointer rgb-text font-pro-monument text-[13px] md:text-2xl leading-4"
          >
            NIKAH.SPACE
          </h1>
        </div>
        <div className="cursor-pointer relative">
          <p onClick={toggleDropdown} className="rgb-text text-base font-mulish font-bold">Категории</p>
          {dote && (
        <div className="absolute z-50 cursor-pointer right-0 top-7 w-fit bg-white rounded-md shadow-lg">
          <button onClick={toggleDropdown} className="w-full font-mulish z-50 px-4 py-2 text-left text-gray-700 hover:bg-blue-500 hover:text-white rounded-t-md">
          Категории
          </button>
          
        </div>
      )}
        </div>
      </header>

      {dote && (
        <div
          onClick={toggleDropdown}
          className="fixed inset-0 z-40"
        />
      )}

      <h1 className="text-2xl md:text-[34px] rgb-text font-monsetrat text-center leading-7">
        Маркет
      </h1>

      <hr className="my-5 w-full" />

      <div className="cardse-litt min-w-[380px] flex flex-row gap-2">
        <div className="c1 bg-rgb rounded p-[1px]">
          <p onClick={()=> setActive(active == '1' ? '0' : '1')} className={`font-mulish ${active == '1' ? 'text-white':'bg-white text-[#555555]'} cursor-pointer font-normal text-sm p-2 rounded`}>
            Мусульманские товары
          </p>
        </div>
        <div className="c2 bg-rgb rounded p-[1px]">
          <p onClick={()=> setActive(active == '2' ? '0' : '2')}  className={`font-mulish ${active == '2' ? 'text-white':'bg-white text-[#555555]'} cursor-pointer font-normal text-sm p-2 rounded`}>
            Таспих
          </p>
        </div>
      </div>

      {
        active == '0' || active == '2' ? <>
         <div className="img mt-6">
        <img src={tasbex} alt="" />
      </div>
      <div className="texts min-w-[380px] mt-4">
        <div className="t1">
          <h3 className="text-2xl font-mulish font-normal text-[#212529] mb-1">
            Таспих 001
          </h3>
          <p className="text-base font-mulish font-normal text-[#212529] mb-4">
            Электронный таспих с usb зарядкой
          </p>
        </div>
        <hr className="my-4 w-full" />
        <div className="t2">
          <p className="text-sm font-mulish font-normal text-[#212529]">
            7000тг
          </p>
        </div>
        <hr className="my-4 w-full" />
      </div>
      <div className="btns-g min-w-[380px] flex flex-row gap-4 pb-2">
        <button onClick={()=> window.open("/market/asd", "_current")} className="border border-solid border-[#6A59A7] py-2 rounded px-6 text-[#6A59A7] font-mulish font-normal text-base">
          Подробнее
        </button>
        <button className="bg-[#6A59A7] py-2 rounded px-8 text-white font-mulish font-normal text-base">
          Купить
        </button>
      </div>
      </> : <div className="mb-4"></div>
      }  
      <Footer />
    </div>
  );
};


export default Market;
