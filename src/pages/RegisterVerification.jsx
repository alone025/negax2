import { useState } from "react";
import logo from "../img/logo2.png"
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
    newOtp[index] = value.slice(0, 1);
    setOtp(newOtp);

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
              <h1 onClick={()=> window.open("/", "_current")} className="font-normal cursor-pointer rgb-text font-pro-monument text-[13px] md:text-2xl leading-4 ">NIKAH.SPACE</h1>
          </div>
    </header>
     <div className="bg-white rounded-lg p-6 w-full">
     <button onClick={()=> window.open("/registerstate", "_current")} className="text-gray-600 mb-5 flex items-center">
            <span className="mr-2 text-[#ACACAC]"><HiChevronLeft/></span>
          </button>
        <p className="text-center font-mulish text-sm md:text-base text-[#5E5E5E] mb-4">
          Пожалуйста, введите 4-значный код отправлено на +62812 0101 0101
        </p>
        <div className="flex mt-10 md:mt-16 justify-center gap-3 mb-4">
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
        <p className="text-center font-mulish font-normal mt-8 text-sm text-[#5E5E5E] mb-4">
          Никому не сообщай код
          <br />
          Истекает через <span className="font-semibold">04:59</span>
        </p>
        <button
          onClick={handleResend}
          className="block text-center mt-8 w-full text-[#634F9E] font-mulish text-sm font-medium mb-4 hover:underline"
        >
          ПОВТОРНО ОТПРАВИТЬ КОД
        </button>
        <button onClick={handleSurveyForm} className="mt-12 w-full bg-[#634F9E] font-poppins font-semibold text-white py-4 rounded-md text-sm hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500">
        Принимаю
        </button>
       
      </div>
    </div>
  );
};

export default RegisterVerification;
