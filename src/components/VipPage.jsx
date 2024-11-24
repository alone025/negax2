import checkSvg from "../img/check.svg"
import Slider from "./Slider";


const VipPage = () => {
  return (
    <div className="min-h-screen pt-9">

      <header className="flex items-center py-4 bg-white">
        <h1 className="text-2xl leading-9 font-mulish font-medium text-[#5E5E5E]">Платные пакеты</h1>
      </header>

      <div className="p-4 hidden md:flex gap-5 flex-row">
        <div className="rounded-xl w-full shadow-md">
          <div className="bg-[#EDABC6] text-center rounded-t-xl py-3">
            <h2 className="text-white font-mulish font-bold text-lg">САЙТ ВИП</h2>
          </div>
          <div className="p-3 min-h-[225px] sm:p-4 text-center">
            <p className="text-[#000000] font-mulish font-light text-sm lg:text-base mb-4">30 дней</p>
            <div className="flex flex-col w-auto gap-6 items-start">
                <p className="text-[13px] flex font-mulish items-center gap-2 sm:gap-4 leading-4 font-black text-[#565555] ">
                    <span className="text-3xl"><img src={checkSvg} alt="" /></span>
                    Откроются все номера - 1 месяц
                </p>
                <p className="text-[13px] flex font-mulish justify-center items-center gap-2 sm:gap-4 leading-4 font-black text-[#565555] ">
                    <span className="text-3xl"><img src={checkSvg} alt="" /></span>
                    Откроются все фото - 1 месяц
                </p>
                <p className="text-[13px] flex justify-center items-center font-mulish gap-2 sm:gap-4 leading-4 font-black text-[#565555] ">
                    <span className="text-3xl"><img src={checkSvg} alt="" className="min-w-4" /></span>
                    Можете отправлять свою анкету
                    девушкам на сайте - 1 месяц
                </p>
                <p className="text-[13px] flex font-mulish justify-center items-center gap-2 sm:gap-4 leading-4 font-black text-[#565555] ">
                    <span className="text-3xl"><img src={checkSvg} alt="" /></span>
                    Ваша анкета будет на сайте - 1 месяц
                </p>
            </div>
          </div>
          <button className="bg-[#6A59A7] text-white w-full py-3 rounded-b-xl font-mulish text-sm font-bold mt-4">
          Оплатить 15000₸
          </button>
        </div>

        <div className="rounded-xl h-full w-full shadow-md">
          <div className="bg-[#EDABC6] text-center rounded-t-xl py-3">
            <h2 className="text-white font-mulish font-bold text-lg">ВИП ПАКЕТ</h2>
          </div>
          <div className="p-3 min-h-[225px] sm:p-4 text-center">
            <p className="text-[#000000] font-mulish font-light text-sm lg:text-base mb-4">30 дней</p>
            <div className="flex flex-col w-auto gap-6 items-start">
                <p onClick={()=> window.open("https://neke-anketa.kz/#price")} className="text-[13px] cursor-pointer hover:underline flex font-mulish items-center gap-2 sm:gap-4 leading-4 font-black text-[#565555] ">
                    <span className="text-3xl"><img src={checkSvg} alt="" /></span>
                    neke-anketa.kz/#price
                </p>
               
            </div>
          </div>
          <button className="bg-[#6A59A7] text-white w-full py-3 rounded-b-xl font-mulish text-sm font-bold mt-4">
          Оплатить 15000₸
          </button>
        </div>
        
      </div>

    <div className=" md:hidden">
    <Slider/>
    </div>
    </div>
  );
};

export default VipPage;
