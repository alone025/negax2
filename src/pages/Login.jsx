
import logo from "../img/logo2.png"

import { Link } from "react-router-dom";
import { MdOutlineEmail, MdPhoneIphone } from "react-icons/md";
import { FaTelegram } from "react-icons/fa";
const Login = () => {
  return (
    <div className=" mt-3 relative pb-12 flex flex-col items-center justify-between container bg-white font-sans text-gray-800">
        <header className="absolute container top-0 flex justify-between items-center w-full">
            <div className="flex items-center gap-3">
                <img className="w-[40px]  " src={logo} alt="" />
                <h1 onClick={()=> window.open("/", "_current")} className="font-normal cursor-pointer rgb-text font-pro-monument text-[13px] leading-4 md:text-2xl">NIKAH.SPACE</h1>
            </div>
            <div className="flex rgb-text gap-2 text-lg items-center">
            <svg xmlns="http://www.w3.org/2000/svg" width="27" height="27" viewBox="0 0 27 27" fill="none">
  <path d="M13.5 2.74219C11.3723 2.74219 9.2924 3.37312 7.52328 4.55521C5.75417 5.73729 4.37532 7.41743 3.56108 9.38316C2.74685 11.3489 2.53381 13.5119 2.9489 15.5987C3.36399 17.6856 4.38858 19.6024 5.89308 21.1069C7.39759 22.6114 9.31445 23.636 11.4013 24.0511C13.4881 24.4662 15.6511 24.2532 17.6168 23.4389C19.5826 22.6247 21.2627 21.2458 22.4448 19.4767C23.6269 17.7076 24.2578 15.6277 24.2578 13.5C24.2545 10.6479 23.12 7.91353 21.1032 5.89678C19.0865 3.88002 16.3521 2.74554 13.5 2.74219ZM22.1031 9.49219H17.8654C17.4042 7.57939 16.5631 5.77886 15.3921 4.19766C16.8458 4.4964 18.2097 5.13067 19.3748 6.04991C20.54 6.96914 21.4742 8.1479 22.1031 9.49219ZM22.9922 13.5C22.9929 14.4289 22.8568 15.3529 22.5882 16.2422H18.1259C18.4268 14.4264 18.4268 12.5736 18.1259 10.7578H22.5882C22.8568 11.6471 22.9929 12.5711 22.9922 13.5ZM13.5 22.9922C13.4737 22.9923 13.4477 22.9869 13.4237 22.9761C13.3997 22.9654 13.3782 22.9497 13.3608 22.93C12.0023 21.4671 11.0046 19.5887 10.4414 17.5078H16.5586C15.9954 19.5887 14.9977 21.4671 13.6392 22.93C13.6218 22.9497 13.6004 22.9654 13.5763 22.9761C13.5523 22.9869 13.5263 22.9923 13.5 22.9922ZM10.1577 16.2422C9.83287 14.4285 9.83287 12.5715 10.1577 10.7578H16.8423C17.1671 12.5715 17.1671 14.4285 16.8423 16.2422H10.1577ZM4.00782 13.5C4.00711 12.5711 4.14322 11.6471 4.41176 10.7578H8.87415C8.57318 12.5736 8.57318 14.4264 8.87415 16.2422H4.41176C4.14322 15.3529 4.00711 14.4289 4.00782 13.5ZM13.5 4.00781C13.5263 4.00767 13.5523 4.01314 13.5763 4.02388C13.6004 4.03461 13.6218 4.05035 13.6392 4.07004C14.9977 5.53289 15.9954 7.41129 16.5586 9.49219H10.4414C11.0046 7.41129 12.0023 5.53289 13.3608 4.07004C13.3782 4.05035 13.3997 4.03461 13.4237 4.02388C13.4477 4.01314 13.4737 4.00767 13.5 4.00781ZM11.6079 4.19766C10.4369 5.77886 9.59581 7.57939 9.13465 9.49219H4.89692C5.52578 8.1479 6.46004 6.96914 7.62519 6.04991C8.79035 5.13067 10.1542 4.4964 11.6079 4.19766ZM4.89692 17.5078H9.13465C9.59581 19.4206 10.4369 21.2211 11.6079 22.8023C10.1542 22.5036 8.79035 21.8693 7.62519 20.9501C6.46004 20.0309 5.52578 18.8521 4.89692 17.5078ZM15.3921 22.8023C16.5631 21.2211 17.4042 19.4206 17.8654 17.5078H22.1031C21.4742 18.8521 20.54 20.0309 19.3748 20.9501C18.2097 21.8693 16.8458 22.5036 15.3921 22.8023Z" fill="url(#paint0_linear_304_625)"/>
  <defs>
    <linearGradient id="paint0_linear_304_625" x1="11.3802" y1="-0.822533" x2="21.5058" y2="0.847326" gradientUnits="userSpaceOnUse">
      <stop stopColor="#6A59A7"/>
      <stop offset="1" stopColor="#EDABC6"/>
    </linearGradient>
  </defs>
</svg>
                <select id="lang" className="font-mulish cursor-pointer rgb-text outline-none text-base md:text-lg">
                    <option value="rus">РУС</option>
                    <option value="eng">ENG</option>
                </select>
            </div>
        </header>
        <main className="w-full container pt-24 md:pt-12 min-h-[70vh] gap-20 flex flex-col items-center justify-evenly">
              <div  className="flex flex-col gap-3">
                <p className="text-[#ACACAC] text-xl font-mulish font-normal text-center leading-6">Добро пожаловать в </p>
                <h1 className="text-[42px] rgb-text font-pro-monument text-center font-normal leading-[47px]">NIKAH.SPACE</h1>
                <p className="text-sm leading-4 text-center text-[#6A59A7] font-pro-monument font-normal">САЙТ ЗНАКОМСТВ ДЛЯ МУСУЛЬМАН</p>
              </div>
              <div className="w-full gap-3 flex flex-col text-white">
                <button onClick={()=> window.open('/registerstateLogin', "_current")} className="w-full rounded-md flex cursor-pointer items-center justify-center gap-4 py-2 bg-[#634F9E]">
                <MdPhoneIphone className="text-[28px]" /><p className="font-poppins font-semibold text-sm md:text-lg">Войти по номеру телефона</p>
                </button>
                <button className="hover:bg-[#634F9E] hover:text-white duration-300 w-full rounded-md flex  cursor-pointer items-center justify-center gap-4 py-2 shadow-md text-[#634F9E]">
                <FaTelegram className="text-[28px]" /><p className="font-poppins font-semibold text-sm md:text-lg">Войти через Telegram</p>
                </button>
                <button onClick={()=> window.open("/loginto-wemail", "_current")} className="hover:bg-[#634F9E] hover:text-white duration-300 w-full rounded-md flex  cursor-pointer items-center justify-center gap-4 py-2 shadow-md text-[#634F9E]">
                <MdOutlineEmail className="text-[28px]" /><p className="font-poppins font-semibold text-sm md:text-lg">Войти через email</p>
                </button>
              </div>
        </main>
              <div className="mx-auto container mt-[100px] flex justify-center gap-2 "> <span className="text-[#ACACAC] text-[12px] md:tex-sm font-mulish font-normal leading-4">Нет аккаунта?</span><Link to="/register" className="text-[12px] font-medium font-mulish leading-4 text-[#634F9E]"> Зарегистрироваться</Link></div>

              <p className="text-xs md:text-sm mt-5 font-mulish font-light text-center">Для регистрации вам должно быть не менее 18 лет. Регистрируясь, вы соглашаетесь с Лицензионным соглашением NIKAH.SPACE, Политикой приватности и Правилами оплаты.</p>
                
 
    </div>
  );
};

export default Login;