import React from "react";
import { GoCheck } from "react-icons/go";

const VipPage = () => {
  return (
    <div className="min-h-screen pt-9">
      {/* Header */}
      <header className="flex items-center py-4 bg-white">
        <h1 className="text-2xl leading-9 font-semibold text-gray-800">Платные пакеты</h1>
      </header>

      {/* Card */}
      <div className="p-4">
        <div className="bg-white rounded-xl shadow-md p-6">
          <div className="bg-pink-100 text-center rounded-t-xl py-3">
            <h2 className="text-pink-600 font-bold text-lg">САЙТ ВИП</h2>
          </div>
          <div className="p-4 text-center">
            <p className="text-gray-600 text-sm mb-4">30 дней</p>
            <div className="flex flex-col w-auto gap-2 items-start">
                <p className="text-[13px] flex  items-center gap-4 leading-4 font-black text-[#565555] ">
                    <span className="text-3xl"><GoCheck /></span>
                    Откроются все номера - 1 месяц
                </p>
                <p className="text-[13px] flex justify-center items-center gap-4 leading-4 font-black text-[#565555] ">
                    <span className="text-3xl"><GoCheck /></span>
                    Откроются все фото - 1 месяц
                </p>
                <p className="text-[13px] flex gap-4 leading-4 font-black text-[#565555] ">
                    <span className="text-3xl"><GoCheck /></span>
                    Можете отправлять свою анкету
                    девушкам на сайте - 1 месяц
                </p>
                <p className="text-[13px] flex justify-center items-center gap-4 leading-4 font-black text-[#565555] ">
                    <span className="text-3xl"><GoCheck /></span>
                    Откроются все номера - 1 месяц
                </p>
            </div>
          </div>
          <button className="bg-purple-600 text-white w-full py-3 rounded-b-xl text-sm font-medium mt-4">
            Оплатить 15000т
          </button>
        </div>
      </div>

      {/* Bottom Navigation */}
    </div>
  );
};

export default VipPage;
