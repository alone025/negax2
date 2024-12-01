
import { useState } from "react";
import logo from "../img/logo2.png"
import { useNavigate } from "react-router-dom";
const KontakForm = () => {

  const navigate = useNavigate();

  const [wa, setWA] = useState("");
const [ins, setIns] = useState("");
const [tg, setTG] = useState("");
const [fc, setFC] = useState("");
const [future, setFuture] = useState("");

const [about, setAbout] = useState("");




  const [error, setError] = useState("");


  function handleFotoPagePrev(e){
    e.preventDefault()
    navigate("/religiyaform")
  }

  function handleFotoPage(e){
    e.preventDefault()
    if (!wa) setError("Введите свой адрес в социальной сети или оставьте его недоступным.(нету)");
    else if (!ins) setError("Введите свой адрес в социальной сети или оставьте его недоступным.(нету)");
    else if (!tg) setError("Введите свой адрес в социальной сети или оставьте его недоступным.(нету)");
    else if (!fc) setError("Введите свой адрес в социальной сети или оставьте его недоступным.(нету)");
    else if (!future) setError("Напишите о своей будущей супруге!");
    else if (future.length < 50) setError('Напишите не менее 50 слов о своем будущем супруге!');
    else if (!about) setError("Напишите о себе!");
    else if (about.length < 30) setError("Напишите о себе не менее 50 слов!!");

    else navigate("/fotopage")
  }


    return (
    <div className="flex flex-col items-center pt-16 px-4 min-h-screen relative">
    <header className="absolute container top-5 flex justify-between items-center w-full">
          <div className="flex items-center gap-3">
              <img className="w-[40px]" src={logo} alt="" />
              <h1 onClick={()=> window.open("/", "_current")} className="font-normal cursor-pointer rgb-text font-pro-monument text-[13px] leading-4 md:text-2xl">NIKAH.SPACE</h1>
          </div>
    </header>
      <div className="bg-white rounded-lg pt-3 sm:p-6 w-full">
      <div className="flex flex-col justify-between gap-3 items-center mb-6">
          <div className="flex items-center justify-between w-full ">
            <span className="text-sm font-normal font-mulish text-[#BBC8E8]">
              Анкета
            </span>
            <span className="text-sm font-normal font-mulish text-[#BBC8E8]">
              Анкета
            </span>
            <span className="text-sm font-normal font-mulish text-[#BBC8E8]">
              Анкета
            </span>
            <span className="text-sm font-normal font-mulish text-[#634F9E]">
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
            <div className="w-7 h-7 font-mulish text-lg relative z-10 rounded-full bg-[#EDABC6] text-[#fff] flex items-center justify-center">
              3
            </div>
            <div className="w-7 h-7 font-mulish text-lg relative z-10 rounded-full  bg-rgb   text-[#fff] flex items-center justify-center">
              4
            </div>
          </div>
        </div>

        <h2 className="text-center text-xl font-mulish font-semibold mb-6">Контакты</h2>

        {/* Расскажите о себе Section */}
        <div className="mb-6 border border-[#634F9E] p-3 sm:p-5 rounded-2xl">
          <h3 className="block font-mulish font-normal text-base text-[#242430] mb-2">Контакты</h3>
          <div className="space-y-3">
            <input
            onChange={(e)=>setWA(e.target.value)}
            value={wa}
              type="text"
              placeholder="Номер в WhatsApp:"
              className="w-full px-3 py-2 font-mulish outline-none border rounded-lg focus:ring-2 focus:ring-purple-500"
            />
            <input
            onChange={(e)=>setIns(e.target.value)}
            value={ins}
              type="text"
              placeholder="Ссылка на instagram:"
              className="w-full px-3 py-2 font-mulish outline-none border rounded-lg focus:ring-2 focus:ring-purple-500"
            />
            <input
                 onChange={(e)=>setTG(e.target.value)}
                 value={tg}
              type="text"
              placeholder="Ссылка на telegram:"
              className="w-full px-3 py-2 font-mulish outline-none border rounded-lg focus:ring-2 focus:ring-purple-500"
            />
            <input
                 onChange={(e)=>setFC(e.target.value)}
                 value={fc}
              type="text"
              placeholder="Ссылка на facebook:"
              className="w-full px-3 py-2 font-mulish outline-none border rounded-lg focus:ring-2 focus:ring-purple-500"
            />
          </div>
        </div>
        <div className="mb-6 border border-[#634F9E] p-5 rounded-2xl">
          <div className="space-y-3">
            <h1 className="block font-mulish font-normal text-base text-[#242430] mb-2">О будущей супруге:</h1>
            <textarea      onChange={(e)=>setFuture(e.target.value)}
            value={future} placeholder="Я здесь, когда тебе нужен солнечный день.Мы можем петь вместе на пляже и горетькостры ночью при лунном свете..." className="w-full focus:ring-2 focus:ring-purple-500 h-[63px] px-3 py-2 font-mulish outline-none text-[10px] border rounded-lg text-[#5E5E5E]"/>
            
            <h1    className="block font-mulish font-normal text-base text-[#242430] mb-2" >О cебе:</h1>
            <textarea onChange={(e)=>setAbout(e.target.value)}
            value={about} placeholder="Я здесь, когда тебе нужен солнечный день.Мы можем петь вместе на пляже и горетькостры ночью при лунном свете..." className="w-full focus:ring-2 focus:ring-purple-500 h-[63px] px-3 py-2 font-mulish outline-none text-[10px] border rounded-lg text-[#5E5E5E]"/>
            
          </div>
        </div>

        {/* Buttons */}
        <div className="flex justify-between flex-col gap-3">
        <button onClick={handleFotoPagePrev} className="w-full text-base font-normal font-mulish py-3 text-purple-700 border-2 border-purple-700 rounded-full text-center">
            Назад
          </button>
          <button
            onClick={handleFotoPage}
            className="w-full py-3 text-base btn-rgb text-white font-mulish rounded-full"
          >
            Далее
          </button>
        </div>
        {error !== "" && <p className="text-center font-mulish text-red-600 text-base mt-1">{error}</p>}

      </div>
    </div>
  );
};

export default KontakForm;
