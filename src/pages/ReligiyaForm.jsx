import React from "react";
import logo from "../img/logo.png"
import { useNavigate } from "react-router-dom";
const ReligiyaForm = () => {
const navigate = useNavigate();

function handleKontakForm(e){
    e.preventDefault();
    navigate("/kontakform")
}



  return (
    <div className="flex flex-col items-center pt-16 px-4 min-h-screen   relative">
    <header className="absolute container top-5 flex justify-between items-center w-full">
          <div className="flex items-center gap-3">
              <img className="w-[40px]  " src={logo} alt="" />
              <h1 className="font-normal colorr text-[12px] leading-4 ">NIKAH.SPACE</h1>
          </div>
    </header>
      <div className="bg-white rounded-lg p-6 w-full container ">
      <div className="flex flex-col justify-between gap-3 items-center mb-6">
          <div className="flex items-center justify-between w-full ">
            <span className="text-sm font-medium text-purple-600">Анкета</span>
            <span className="text-sm font-medium text-purple-600">Анкета</span>
            <span className="text-sm font-medium text-purple-600">Анкета</span>
            <span className="text-sm font-medium text-purple-600">Анкета</span>
          </div>
          <div className="flex items-center relative justify-between w-full gap-2">
            <div className="relative z-10 w-6 h-6 rounded-full bg-purple-600 text-white text-xs flex items-center justify-center">
              1
            </div>
            <div className="absolute w-full z-[0] h-1 bg-cyan-400 "></div>
            <div className="w-6 h-6 relative z-10 rounded-full bg-purple-600 text-white text-xs flex items-center justify-center">
              2
            </div>
            <div className="w-6 h-6 relative z-10 rounded-full bg-purple-600 text-white text-xs flex items-center justify-center">
              3
            </div>
            <div className="w-6 h-6 relative z-10 rounded-full bg-gray-200 text-gray-400 text-xs flex items-center justify-center">
              4
            </div>
          </div>
        </div>

        <h2 className="text-center text-xl font-semibold mb-6">Религия</h2>

        {/* Расскажите о себе Section */}
        <div className="mb-6 border rounded-lg p-5">
          <h3 className="text-sm font-semibold mb-3">Религия</h3>
          <div className="space-y-3">
            <select className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-purple-500">
              <option value="">Читаете ли вы намаз?</option>
              <option value="single">Читаете ли вы намаз?</option>
              <option value="married">Читаете ли вы намаз?</option>
            </select>
            <select className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-purple-500">
              <option value="">Умеете ли вы читать К'уран?</option>
              <option value="0">Умеете ли вы читать К'уран?</option>
              <option value="1-2">Умеете ли вы читать К'уран?</option>
            </select>
            <select className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-purple-500">
              <option value="">Носите ли вы бороду?</option>
              <option value="hanafi">Ханафи</option>
              <option value="shafi">Шафи</option>
            </select>
          </div>
        </div>

        {/* Buttons */}
        <div className="flex justify-between flex-col gap-3">
          <button className="w-full py-2 border border-purple-600 text-purple-600 rounded-full">
            Назад
          </button>
          <button onClick={handleKontakForm} className="w-full py-2 bg-gradient-to-r from-purple-600 to-pink-500 text-white rounded-full">
            Далее
          </button>
        </div>
      </div>
    </div>
  );
};

export default ReligiyaForm;
