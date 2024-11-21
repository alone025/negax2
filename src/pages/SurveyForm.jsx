import React, { useState } from "react";
import logo from "../img/logo.png";
import { useNavigate } from "react-router-dom";
const SurveyForm = () => {
  const [gender, setGender] = useState("");
 const navigate =useNavigate()

 function handlePersonalForm(e){
    e.preventDefault()
    navigate("/personalform")
 }

  const handleGenderSelect = (selectedGender) => {
    setGender(selectedGender);
  };

  return (
    <div className="flex flex-col items-center pt-16 px-4 min-h-screen   relative">
      <header className="absolute container top-5 flex justify-between items-center w-full">
        <div className="flex items-center gap-3">
          <img className="w-[40px]  " src={logo} alt="" />
          <h1 className="font-normal colorr text-[12px] leading-4 ">
            NIKAH.SPACE
          </h1>
        </div>
      </header>
      <div className="bg-white p-6 w-full"> 
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
            <div className="w-6 h-6 relative z-10 rounded-full bg-gray-200 text-gray-400 text-xs flex items-center justify-center">
              2
            </div>
            <div className="w-6 h-6 relative z-10 rounded-full bg-gray-200 text-gray-400 text-xs flex items-center justify-center">
              3
            </div>
            <div className="w-6 h-6 relative z-10 rounded-full bg-gray-200 text-gray-400 text-xs flex items-center justify-center">
              4
            </div>
          </div>
        </div>

        <h2 className="text-center text-xl font-semibold mb-6">Анкета</h2>

        {/* Gender selection */}
        <div className="flex justify-around mb-6">
          <button
            onClick={() => handleGenderSelect("male")}
            className={`w-24 py-2 border rounded-lg ${
              gender === "male" ? "bg-purple-600 text-white" : "text-gray-700"
            }`}
          >
            Мужской
          </button>
          <button
            onClick={() => handleGenderSelect("female")}
            className={`w-24 py-2 border rounded-lg ${
              gender === "female" ? "bg-purple-600 text-white" : "text-gray-700"
            }`}
          >
            Женский
          </button>
        </div>

        {/* Name inputs */}
        <div className="mb-6 border p-5 rounded-lg">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Как к вам можно обращаться?
          </label>
          <input
            type="text"
            placeholder="Имя"
            className="w-full mb-3 px-3 py-2 border rounded-lg focus:ring-2 focus:ring-purple-500"
          />
          <input
            type="text"
            placeholder="Фамилия"
            className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-purple-500"
          />
        </div>

        {/* Location inputs */}
        <div className="mb-6 border p-5 rounded-lg">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Откуда вы?
          </label>
          <select className="w-full mb-3 px-3 py-2 border rounded-lg focus:ring-2 focus:ring-purple-500">
            <option value="">Страна</option>
            <option value="Uzbekistan">Узбекистан</option>
            <option value="Kazakhstan">Казахстан</option>
          </select>
          <select className="w-full mb-3 px-3 py-2 border rounded-lg focus:ring-2 focus:ring-purple-500">
            <option value="">Город</option>
            <option value="Tashkent">Ташкент</option>
            <option value="Almaty">Алматы</option>
          </select>
          <select className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-purple-500">
            <option value="">Национальность</option>
            <option value="Uzbek">Узбек</option>
            <option value="Kazakh">Казах</option>
          </select>
        </div>

        {/* Navigation buttons */}
        <div className="flex justify-between gap-3 flex-col">
          <button className="w-full py-2 border border-purple-600 text-purple-600 rounded-full">
            Назад
          </button>
          <button onClick={handlePersonalForm} className="w-full py-2 bg-gradient-to-r from-purple-600 to-pink-500 text-white rounded-full">
            Далее
          </button>
        </div>
      </div>
    </div>
  );
};

export default SurveyForm;
