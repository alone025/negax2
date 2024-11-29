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
const [buy, setBuy] = useState(false);


  return (
    <div className="container relative flex pb-[55px] flex-col items-center pt-[68px]">
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

      {buy && (
        <div
          onClick={() => setBuy(false)}
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
        />
      )}


      {buy && (
        <dialog
          id="modal"
          className="fixed text-center max-w-[350px] lg:max-w-[380px] w-full z-50 p-2 flex flex-col rounded top-1/2"
        >
          <p className="text-base lg:text-2xl font-mulish font-normal">
          Оплата
          </p>
          <p className="font-mulish mt-1 font-normal text-sm lg:text-base">
          Чтобы купить этот товар:
            <br />
            -Оплатите через Каспий 7000 тг на номер
            <br />
            <span >+7-771-422-10-50</span> - Кулпарам К.
            <br />
            <a href="https://api.whatsapp.com/send?phone=77051669055&text=https://neke.site/market/detail/1" className="hover:underline font-semibold">- Отправить чек товара администратору</a> .
            <br />
          </p>
          <div className="btngroup justify-center flex flex-row gap-2">
            <button
              id="closeModal"
              onClick={()=> setBuy(false)}
              className="border max-w-[300px] w-full mt-3 border-[#634F9E] font-mulish p-1 text-[#634F9E] text-xs lg:text-base rounded"
            >
              Отмена
            </button>
          </div>
        </dialog>
      )}

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
        <button  onClick={() => setBuy(true)} className="bg-[#6A59A7] py-2 rounded px-8 text-white font-mulish font-normal text-base">
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
