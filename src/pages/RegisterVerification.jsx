import React, { useState } from "react";
import logo from "../img/logo.png"
import { HiChevronLeft } from "react-icons/hi";
import { useNavigate } from "react-router-dom";

const RegisterVerification = () => {
  const [otp, setOtp] = useState(["", "", "", ""]);
  const navigate = useNavigate();

  function handleSurveyForm(e){
    e.preventDefault()
    navigate("/surveyform")
  }


  const handleChange = (value, index) => {
    const newOtp = [...otp];
    newOtp[index] = value.slice(0, 1); // Faqat bitta raqam kiritiladi
    setOtp(newOtp);

    // Avtomatik keyingi maydonga o'tish
    if (value && index < 3) {
      document.getElementById(`otp-input-${index + 1}`).focus();
    }
  };

  const handleResend = () => {
    alert("Kod qayta yuborildi!");
  };

  return (
    <div className="flex flex-col items-center pt-16 px-4 min-h-screen   relative">
    <header className="absolute container top-5 flex justify-between items-center w-full">
          <div className="flex items-center gap-3">
              <img className="w-[40px]  " src={logo} alt="" />
              <h1 className="font-normal colorr text-[12px] leading-4 ">NIKAH.SPACE</h1>
          </div>
    </header>
     <div className="bg-white rounded-lg p-6 w-full">
        <h1 className="text-lg font-semibold  text-purple-600 mb-4">
        <HiChevronLeft/>
        </h1>
        <p className="text-center text-gray-700 mb-4">
          Пожалуйста, введите 4-значный код отправлено на +62812 0101 0101
        </p>
        <div className="flex mt-16 justify-center gap-3 mb-4">
          {otp.map((digit, index) => (
            <input
              key={index}
              id={`otp-input-${index}`}
              type="text"
              maxLength="1"
              className="w-12 h-12 text-center border border-gray-300 rounded-md text-lg font-medium focus:outline-none focus:ring-2 focus:ring-purple-500"
              value={digit}
              onChange={(e) => handleChange(e.target.value, index)}
            />
          ))}
        </div>
        <p className="text-center mt-8 text-sm text-gray-500 mb-4">
          Никому не сообщай код
          <br />
          Истекает через <span className="font-semibold">04:59</span>
        </p>
        <button
          onClick={handleResend}
          className="block text-center mt-8 w-full text-purple-600 text-sm font-medium mb-4 hover:underline"
        >
          ПОВТОРНО ОТПРАВИТЬ КОД
        </button>
        <button onClick={handleSurveyForm} className="w-full mt-9 bg-purple-600 text-white py-2.5 rounded-md text-sm font-medium hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500">
          Принимаю
        </button>
        <div className="mt-4 absolute bottom-16 text-sm text-center text-gray-500">
          <a href="#" className="block hover:underline">
            Условия использования
          </a>
          <a href="#" className="block hover:underline">
            Политика конфиденциальности
          </a>
        </div>
      </div>
    </div>
  );
};

export default RegisterVerification;
