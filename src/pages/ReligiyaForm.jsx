
import logo from "../img/logo2.png"
import { useNavigate } from "react-router-dom";
const ReligiyaForm = () => {
const navigate = useNavigate();


function handleKontakFormPrev(e){
  e.preventDefault();
  navigate("/personalform")
}

function handleKontakForm(e){
    e.preventDefault();
    navigate("/kontakform")
}



  return (
    <div className="flex flex-col items-center pt-16 px-4 min-h-screen   relative">
    <header className="absolute container top-5 flex justify-between items-center w-full">
          <div className="flex items-center gap-3">
              <img className="w-[40px]  " src={logo} alt="" />
              <h1 onClick={()=> window.open("/", "_current")} className="font-normal cursor-pointer rgb-text font-pro-monument text-[13px] md:text-2xl leading-4 ">NIKAH.SPACE</h1>
          </div>
    </header>
      <div className="bg-white rounded-lg p-6 w-full">
      <div className="flex flex-col justify-between gap-3 items-center mb-6">
          <div className="flex items-center justify-between w-full ">
            <span className="text-sm font-normal font-mulish text-[#BBC8E8]">
              Анкета
            </span>
            <span className="text-sm font-normal font-mulish text-[#BBC8E8]">
              Анкета
            </span>
            <span className="text-sm font-normal font-mulish  text-[#634F9E]">
              Анкета
            </span>
            <span className="text-sm font-normal font-mulish text-[#BBC8E8]">
              Анкета
            </span>
          </div>
          <div className="flex items-center relative justify-between w-full gap-2">
            <div className="relative font-mulish z-10 text-lg w-7 h-7 bg-[#EDABC6] rounded-full text-white flex items-center justify-center">
              1
            </div>
            <div className="absolute w-full z-[0] h-1 bg-[#BBC8E8] "></div>
            <div className="w-7 h-7 font-mulish text-lg relative z-10 bg-[#EDABC6] rounded-full text-[#fff] flex items-center justify-center">
              2
            </div>
            <div className="w-7 h-7 font-mulish text-lg relative z-10 rounded-full bg-rgb  text-[#fff] flex items-center justify-center">
              3
            </div>
            <div className="w-7 h-7 font-mulish text-lg relative z-10 rounded-full bg-[#EDABC6] text-[#fff] flex items-center justify-center">
              4
            </div>
          </div>
        </div>


        <h2 className="text-center text-xl font-mulish font-semibold mb-6">Религия</h2>

        {/* Расскажите о себе Section */}
        <div className="mb-6 border border-[#634F9E] p-5 rounded-2xl">
          <h3 className="block font-mulish font-normal text-base text-[#242430] mb-2">Религия</h3>
          <div className="space-y-3">
            <select className="w-full font-mulish outline-none px-3 py-2 border rounded-lg focus:ring-2 focus:ring-purple-500">
              <option value="">Читаете ли вы намаз?</option>
              <option value="single">Да</option>
              <option value="married">Нет</option>
            </select>
            <select className="w-full font-mulish outline-none px-3 py-2 border rounded-lg focus:ring-2 focus:ring-purple-500">
              <option value="">Умеете ли вы читать К&rsquo;уран?</option>
              <option value="0">Да</option>
              <option value="1-2">Нет</option>
            </select>
            <select className="w-full font-mulish outline-none px-3 py-2 border rounded-lg focus:ring-2 focus:ring-purple-500">
              <option value="">Носите ли вы бороду?</option>
              <option value="hanafi">Ханафи</option>
              <option value="shafi">Шафи</option>
            </select>
          </div>
        </div>

        {/* Buttons */}
        <div className="flex justify-between flex-col gap-3">
        <button onClick={handleKontakFormPrev} className="w-full text-base font-normal font-mulish py-3 text-purple-700 border-2 border-purple-700 rounded-full text-center">
            Назад
          </button>
          <button
            onClick={handleKontakForm}
            className="w-full py-3 text-base btn-rgb text-white font-mulish rounded-full"
          >
            Далее
          </button>
        </div>
      </div>
    </div>
  );
};

export default ReligiyaForm;
