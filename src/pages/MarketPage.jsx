
import { useState } from "react";
import tasbex from "../img/tasbex.png"

const  MarketDetail = () => {

  const [buy, setBuy] = useState(false);

  
  return (
    <div className="container relative mx-auto p-4">
      <h2 onClick={()=> window.open("/market", "_current")} className="text-3xl font-mulish cursor-pointer font-bold text-center text-gray-800 mb-6">
        Market
      </h2>


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

      <div className="w-full h-64 md:h-96 mb-4">
        <img
          src={tasbex}
          alt={''}
          className="w-full h-full object-cover rounded"
        />
      </div>

      <h1 className="text-2xl font-mulish md:text-3xl font-bold text-gray-800 mb-2">
      Таспих 001

      </h1>

      <p className="text-xl font-mulish text-green-600 font-semibold mb-4">
      7000тг
      </p>

     
      <p className="text-gray-700 font-mulish leading-6 mb-6">Электронный таспих с usb зарядкой</p>

      <button onClick={()=> setBuy(true)} className="w-full font-mulish bg-blue-500 text-white py-3 rounded-lg font-semibold hover:bg-blue-600 transition">
        Купить
      </button>
    </div>
  );
};

export default MarketDetail;
