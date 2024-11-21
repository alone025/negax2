import React from "react";
import logo from "../img/logo.png"
const FotoPage = () => {
  return (
    <div className="flex flex-col items-center justify-center pt-16 px-4 min-h-screen container  relative">
    <header className="absolute container top-5 flex justify-between items-center w-full">
          <div className="flex items-center gap-3">
              <img className="w-[40px]  " src={logo} alt="" />
              <h1 className="font-normal colorr text-[12px] leading-4 ">NIKAH.SPACE</h1>
          </div>
    </header>
      {/* Image Upload Box */}
      <div className="flex flex-col items-center justify-center w-full h-1/2  rounded-md">
        <div className="text-white text-6xl bg-gray-400 h-full">
          {/* Camera Icon (You can replace this with an actual icon from a library like Heroicons) */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="w-12 h-12"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.232 5H8.768A1.768 1.768 0 007 6.768v10.464A1.768 1.768 0 008.768 19h6.464A1.768 1.768 0 0017 17.232V6.768A1.768 1.768 0 0015.232 5z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M10.5 13a2.5 2.5 0 115 0 2.5 2.5 0 01-5 0z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.232 5H8.768A1.768 1.768 0 007 6.768v10.464A1.768 1.768 0 008.768 19h6.464A1.768 1.768 0 0017 17.232V6.768A1.768 1.768 0 0015.232 5z"
            />
          </svg>
        </div>
        <h1>Добавьте до 5 фото</h1>
      </div>

      {/* Buttons */}
      <div className="flex flex-col items-center w-full space-y-4">
        {/* Back Button */}
        <button className="w-full py-3 text-purple-700 border-2 border-purple-700 rounded-full text-center">
          Назад
        </button>
        {/* Save Button */}
        <button className="w-full py-3 text-white rounded-full bg-gradient-to-r from-purple-700 to-pink-400">
          Сохранить
        </button>
      </div>
    </div>
  );
};

export default FotoPage;
