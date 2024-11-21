import React, { useState } from "react";
import logo from "../img/logo.png"
import { HiChevronLeft } from "react-icons/hi";
import { useNavigate } from "react-router-dom";
const RegisterState = () => {
  const [countryCode, setCountryCode] = useState("+62");
  const [phoneNumber, setPhoneNumber] = useState("");
  const navigate = useNavigate();

  function registerVerification(e){
    e.preventDefault();
    navigate("/registerverification")
  }


  return (
    <div className="flex flex-col items-center pt-16 px-4 min-h-screen   relative">
      <header className="absolute container top-5 flex justify-between items-center w-full">
            <div className="flex items-center gap-3">
                <img className="w-[40px]  " src={logo} alt="" />
                <h1 className="font-normal colorr text-[12px] leading-4 ">NIKAH.SPACE</h1>
            </div>
      </header>
      <div className="bg-white rounded-lg p-6 w-wull">
        <div className="mb-4">
          <button className="text-gray-600 flex items-center">
            <span className="mr-2"><HiChevronLeft/></span>
          </button>
        </div>
        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Страна
          </label>
          <div className="relative">
            <select
              className="w-full border border-gray-300 rounded-md p-2.5 focus:ring-2 focus:ring-purple-500 focus:outline-none"
              value={countryCode}
              onChange={(e) => setCountryCode(e.target.value)}
            >
              <option value="+62">IDN (+62)</option>
              <option value="+1">USA (+1)</option>
              <option value="+91">IND (+91)</option>
            </select>
          </div>
        </div>
        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Номер телефона
          </label>
          <div className="relative">
            <input
              type="text"
              className="w-full border border-gray-300 rounded-md p-2.5 focus:ring-2 focus:ring-purple-500 focus:outline-none"
              placeholder="+62812 0101 0101"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
            />
            <span className="absolute right-3 top-2/4 transform -translate-y-2/4 text-gray-500">
              📱
            </span>
          </div>
        </div>
        <button onClick={registerVerification} className="mt-12 w-full bg-purple-600 text-white py-2.5 rounded-md text-sm font-medium hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500">
          Продолжить
        </button>
        <div className="mt-6 text-sm text-gray-500">
          <label className="flex items-start">
            <input
              type="checkbox"
              className="mr-2 border-gray-300 rounded focus:ring-purple-500"
            />
            Для регистрации вам должно быть не менее 18 лет. Регистрируясь, вы
            соглашаетесь с Лицензионным соглашением NIKAH.SPACE, Политикой
            приватности и Правилами оплаты.
          </label>
        </div>
      </div>
    </div>
  );
};

export default RegisterState;
