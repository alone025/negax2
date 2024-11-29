import { useState } from "react";
import checkSvg from "../img/check.svg";
import Slider from "./Slider";

const VipPage = () => {
  const [buy, setBuy] = useState(false);
  const [buy2, setBuy2] = useState(false);

  return (
    <div className="min-h-screen pt-9">
      <header className="flex items-center py-4 bg-white">
        <h1 className="text-2xl leading-9 font-mulish font-medium text-[#5E5E5E]">
          Платные пакеты
        </h1>
      </header>

      {buy && (
        <div
          onClick={() => setBuy(false)}
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
        />
      )}

      {buy2 && (
        <div
          onClick={() => setBuy2(false)}
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
        />
      )}

      {buy && (
        <dialog
          id="modal"
          className="fixed text-center max-w-[350px] lg:max-w-[380px] w-full z-50 p-2 flex flex-col rounded top-1/2"
        >
          <p className="text-base lg:text-lg font-mulish font-normal">
            Тариф Сайт Вип{" "}
          </p>
          <p className="font-mulish mt-1 font-normal text-sm lg:text-base">
            Чтобы получить подписку:
            <br />
            -Оплатите через Каспий 15000₸ на номер
            <br />
            <span className="font-semibold">+7-771-422-10-50</span> - Кулпарам К.
            <br />
            -Отправьте чек на Ватсап <a href="https://api.whatsapp.com/send?phone=77051669055" className="hover:underline font-semibold">+7-705-166-90-55</a> .
            <br />
            -Напишите название тарифа
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

      {buy2 && (
       <dialog
       id="modal"
       className="fixed text-center max-w-[350px] lg:max-w-[380px] w-full z-50 p-2 flex flex-col rounded top-1/2"
     >
       <p className="text-base lg:text-lg font-mulish font-normal">
       Тариф Вип Пакет
       </p>
       <p className="font-mulish mt-1 font-normal text-sm lg:text-base">
         Чтобы получить подписку:
         <br />
         -Оплатите через Каспий 15000₸ на номер
         <br />
         <span className="font-semibold">+7-771-422-10-50</span> - Кулпарам К.
         <br />
         -Отправьте чек на Ватсап <a href="https://api.whatsapp.com/send?phone=77051669055" className="hover:underline font-semibold">+7-705-166-90-55</a> .
         <br />
         -Напишите название тарифа
       </p>
       <div className="btngroup justify-center flex flex-row gap-2">
         <button
           id="closeModal"
           onClick={()=> setBuy2(false)}
           className="border max-w-[300px] w-full mt-3 border-[#634F9E] font-mulish p-1 text-[#634F9E] text-xs lg:text-base rounded"
         >
           Отмена
         </button>
       </div>
     </dialog>
      )}

      <div className="p-4 hidden md:flex gap-5 flex-row">
        <div className="rounded-xl w-full shadow-md">
          <div className="bg-[#EDABC6] text-center rounded-t-xl py-3">
            <h2 className="text-white font-mulish font-bold text-lg">
              САЙТ ВИП
            </h2>
          </div>
          <div className="p-3 min-h-[225px] sm:p-4 text-center">
            <p className="text-[#000000] font-mulish font-light text-sm lg:text-base mb-4">
              30 дней
            </p>
            <div className="flex flex-col w-auto gap-6 items-start">
              <p className="text-[13px] flex font-mulish items-center gap-2 sm:gap-4 leading-4 font-black text-[#565555] ">
                <span className="text-3xl">
                  <img src={checkSvg} alt="" />
                </span>
                Откроются все номера - 1 месяц
              </p>
              <p className="text-[13px] flex font-mulish justify-center items-center gap-2 sm:gap-4 leading-4 font-black text-[#565555] ">
                <span className="text-3xl">
                  <img src={checkSvg} alt="" />
                </span>
                Откроются все фото - 1 месяц
              </p>
              <p className="text-[13px] flex justify-center items-center font-mulish gap-2 sm:gap-4 leading-4 font-black text-[#565555] ">
                <span className="text-3xl">
                  <img src={checkSvg} alt="" className="min-w-4" />
                </span>
                Можете отправлять свою анкету девушкам на сайте - 1 месяц
              </p>
              <p className="text-[13px] flex font-mulish justify-center items-center gap-2 sm:gap-4 leading-4 font-black text-[#565555] ">
                <span className="text-3xl">
                  <img src={checkSvg} alt="" />
                </span>
                Ваша анкета будет на сайте - 1 месяц
              </p>
            </div>
          </div>
          <button onClick={()=> setBuy(true)} className="bg-[#6A59A7] text-white w-full py-3 rounded-b-xl font-mulish text-sm font-bold mt-4">
            Оплатить 15000₸
          </button>
        </div>

        <div className="rounded-xl h-full w-full shadow-md">
          <div className="bg-[#EDABC6] text-center rounded-t-xl py-3">
            <h2 className="text-white font-mulish font-bold text-lg">
              ВИП ПАКЕТ
            </h2>
          </div>
          <div className="p-3 min-h-[225px] sm:p-4 text-center">
            <p className="text-[#000000] font-mulish font-light text-sm lg:text-base mb-4">
              30 дней
            </p>
            <div className="flex flex-col w-auto gap-6 items-start">
              <p
                onClick={() => window.open("https://neke-anketa.kz/#price")}
                className="text-[13px] cursor-pointer hover:underline flex font-mulish items-center gap-2 sm:gap-4 leading-4 font-black text-[#565555] "
              >
                <span className="text-3xl">
                  <img src={checkSvg} alt="" />
                </span>
                neke-anketa.kz/#price
              </p>
            </div>
          </div>
          <button onClick={()=> setBuy2(true)} className="bg-[#6A59A7] text-white w-full py-3 rounded-b-xl font-mulish text-sm font-bold mt-4">
            Оплатить 15000₸
          </button>
        </div>
      </div>

      <div className=" md:hidden">
        <Slider />
      </div>
    </div>
  );
};

export default VipPage;
