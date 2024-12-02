import { useEffect, useState } from "react";
import logo from "../img/logo2.png"
import { HiChevronLeft } from "react-icons/hi";
import { useLocation, useNavigate } from "react-router-dom";

const RegisterVerificationLogin = () => {


  const location = useLocation();

 
  const searchParams = new URLSearchParams(location.search);
  const phoneNumber = searchParams.get('number'); 


  const [otp, setOtp] = useState(["", "", "", ""]);
  const navigate = useNavigate();
  
  const [indexOtp , setIndex] = useState(0);

  const initialTime = 5*60;
  const [timeLeft, setTimeLeft] = useState(initialTime);


  function handleSurveyForm(e){
    e.preventDefault()
    
    if(otp[0] !== '' && otp[1] !=='' && otp[2] !=='' && otp[3] !== ''){
      const dataL = JSON.parse(localStorage.getItem("logined"));
      if (!dataL) {
        
          
            localStorage.setItem("logined", "true");
        navigate("/")
      
      }else{
        
         navigate('/')
      }
    }
  }


  const handleChange = (value, index) => {
    const newOtp = [...otp];
    newOtp[index] = value.slice(0, 1);
    setOtp(newOtp);

    if (value && index < 3) {
   setTimeout(() => {
    document.getElementById(`otp-input-${index + 1}`).focus();
      }, 180); 
    }
  };

  const handleResend = () => {
    setTimeLeft(300)
  };
 
 

  
  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
  };

  useEffect(() => {
  
    if (timeLeft === 0) return;

   
    const timerId = setInterval(() => {
      setTimeLeft((prevTime) => {
        if (prevTime === 0) {
          clearInterval(timerId); 
          return 0;
        }
        return prevTime - 1;
      });
    }, 1000); 

  
    return () => clearInterval(timerId);
  }, [timeLeft]);




  const handleFocus = (index) => {
    setIndex(index+1);

  };

  const handleBlur = () => {
    
      setIndex(null);
  
  };



  return (
    <div className="flex flex-col items-center pt-16 px-4 min-h-screen   relative">
    <header className="absolute container top-5 flex justify-between items-center w-full">
          <div className="flex items-center gap-3">
              <img className="w-[40px]  " src={logo} alt="" />
              <h1 onClick={()=> window.open("/", "_current")} className="font-normal cursor-pointer rgb-text font-pro-monument text-[13px] md:text-2xl leading-4 ">NIKAH.SPACE</h1>
          </div>
    </header>
     <div className="bg-white rounded-lg pt-3 sm:p-6 w-full">
     <button onClick={()=> window.open("/registerstate", "_current")} className="text-gray-600 mb-5 flex items-center">
            <span className="mr-2 text-[#ACACAC]"><HiChevronLeft/></span>
          </button>
        <p className="text-center font-mulish text-sm md:text-base text-[#5E5E5E] mb-4">
          Пожалуйста, введите 4-значный код отправлено на +{+phoneNumber}
        </p>
        <div className="flex mt-10 md:mt-16 justify-center gap-3 mb-4">
          {otp.map((digit, index) => (
            <input
              key={index}
              id={`otp-input-${index}`}
              type="text"
              maxLength="1"
              className="w-12 h-12 text-center border border-gray-300 rounded-md text-lg font-medium focus:outline-none focus:ring-2 focus:ring-purple-500"
              onFocus={() => handleFocus(index)} 
          onBlur={() => handleBlur()}
              value={indexOtp === index + 1 ? digit : `●`}
              onChange={(e) => handleChange(e.target.value.replace(/[^0-9]/g, ""), index)}
            />
          ))}
        </div>
        <p className="text-center font-mulish font-normal mt-8 text-sm text-[#5E5E5E] mb-4">
          Никому не сообщай код
          <br />
          {formatTime(timeLeft) !== "00:00" && <>Истекает через <span className="font-semibold">{formatTime(timeLeft)}</span></>}
        </p>
        <button
          onClick={handleResend}
          disabled={formatTime(timeLeft) === '00:00' ? false : true}
          className="block text-center disabled:cursor-not-allowed mt-8 w-full disabled:opacity-45 text-[#634F9E] font-mulish text-sm font-medium mb-4 hover:underline"
        >
          ПОВТОРНО ОТПРАВИТЬ КОД
        </button>
        <p className="font-mulish font-normal text-xs text-center opacity-50" >Можете запросить еще один код только после истечения времени</p>
        <button disabled={otp[0] !== '' && otp[1] !=='' && otp[2] !=='' && otp[3] !== '' ? false : true} onClick={handleSurveyForm} className="mt-12 w-full bg-[#634F9E] disabled:opacity-45 font-poppins font-semibold text-white py-4 rounded-md text-sm  focus:outline-none focus:ring-2 focus:ring-[#634F9E]">
        Принимаю
        </button>
       
      </div>
    </div>
  );
};

export default RegisterVerificationLogin;
