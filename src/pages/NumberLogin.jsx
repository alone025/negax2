import { useState } from "react";
import { parsePhoneNumberFromString, isValidNumber } from "libphonenumber-js";
import logo from "../img/logo2.png";
import { HiChevronLeft } from "react-icons/hi";
import Select from 'react-select';
import { useNavigate } from "react-router-dom";

const RegisterStateLogin = () => {
  const [countryCode, setCountryCode] = useState("+62");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [maxLength, setMaxLength] = useState(15);
  const [errors, setErrors] = useState("");
  const navigate = useNavigate();

  const handleCountryCodeChange = (e) => {
    const newCountryCode = e;
    setCountryCode(newCountryCode);

    const maxLengths = { "+62": 14, "+1": 14, "+91": 13, "+998": 13, "+996" : 13, "+7":12, "+992":13 };
    setMaxLength(maxLengths[newCountryCode] || 11);


    setPhoneNumber(newCountryCode);
  };

  const validatePhoneNumber = () => {
    const countryMapping = {
      "+62": "ID",
      "+1": "US",
      "+91": "IN",
      "+998": "UZ",
      "+996": "KG",
      "+7": "KZ",
      "+992": "TJ",
    };
  
    const regionCode = countryMapping[countryCode];
  
    
      const parsedNumber = parsePhoneNumberFromString(phoneNumber, regionCode);
    
      if(isValidNumber(parsedNumber.number)){
        return true
      }else {
        return false
      }
   
  };
  

  const registerVerification = (e) => {
    e.preventDefault();

    if (!countryCode) {
      setErrors("Выберите код страны!");
    } else if (!phoneNumber) {
      setErrors("Заполните номер телефона!");
    } else if (!validatePhoneNumber()) {
      setErrors("Номер телефона неверный или не соответствует выбранному коду страны!");
    } else {
      navigate(`/registerverificationLogin?number=${phoneNumber}`);
    }
  };

  
  const handlePhoneNumberChange = (e) => {
    const input = e.target.value;

    if (!input.startsWith(countryCode)) {
      setPhoneNumber(countryCode);
    } else {
      setPhoneNumber(input.slice(0, maxLength));
    }
  };


  const options = [
    { value: '+62', label: <div><span className="fi fi-id" alt="IDN" style={{ width: '20px', marginRight: '10px' }} />IDN (+62)</div> },
    { value: '+1', label: <div><span className="fi fi-us" alt="USA" style={{ width: '20px', marginRight: '10px' }} />USA (+1)</div> },
    { value: '+7', label: <div><span className="fi fi-kz" alt="IND" style={{ width: '20px', marginRight: '10px' }} />KAZ (+7)</div> },
    { value: '+998', label: <div><span className="fi fi-uz" alt="UZB" style={{ width: '20px', marginRight: '10px' }} />UZB (+998)</div> },
    { value: '+996', label: <div><span className="fi fi-kg" alt="KGZ" style={{ width: '20px', marginRight: '10px' }} />KGZ (+996)</div> },
    { value: '+992', label: <div><span className="fi fi-tj" alt="TJK" style={{ width: '20px', marginRight: '10px' }} />TJK (+992)</div> },
  ];
  

  return (
    <div className="flex flex-col items-center pt-16 px-4 min-h-screen relative">
      <header className="absolute container top-5 flex justify-between items-center w-full">
        <div className="flex items-center gap-3">
          <img className="w-[40px]" src={logo} alt="" />
          <h1
            onClick={() => window.open("/", "_current")}
            className="font-normal cursor-pointer rgb-text font-pro-monument text-[13px] leading-4 md:text-2xl"
          >
            NIKAH.SPACE
          </h1>
        </div>
      </header>
      <div className="bg-white rounded-lg p-6 w-full">
        <div className="mb-4">
          <button onClick={() => window.open("/login", "_current")} className="text-gray-600 flex items-center">
            <span className="mr-2 text-[#ACACAC]">
              <HiChevronLeft />
            </span>
          </button>
        </div>
        <div className="mb-6">
          <label className="block font-mulish text-sm font-normal text-[#5E5E5E] mb-2">
            Страна
          </label>
          <div className="relative">
          <Select
      options={options}
      value={options.find(option => option.value === countryCode)}
      onChange={(selectedOption) => handleCountryCodeChange(selectedOption.value)}
      className="w-full font-mulish text-[#5E5E5E] rounded-md focus:ring-2 focus:ring-purple-500 focus:outline-none"
    />
          </div>
        </div>
        <div className="mb-6">
          <label className="block font-mulish text-sm font-normal text-[#5E5E5E] mb-2">
            Номер телефона
          </label>
          <div className="relative">
            <input
              type="text"
              className="w-full border border-solid border-[#ACACAC] rounded-md p-2.5 focus:ring-2 focus:ring-purple-500 focus:outline-none"
              placeholder={`${countryCode} 812 0101 0101`}
              value={phoneNumber}
              onChange={handlePhoneNumberChange}
              maxLength={countryCode === "+62" ? 11 : countryCode === "+1" ? 12 : countryCode === "+91" ? 13 : countryCode === "+998"? 13: countryCode === "+996" ? 13 : countryCode === "+7" ? 12 : countryCode === "+992" ? 13 : 12}
            />
            <span className="absolute right-3 top-2/4 transform -translate-y-2/4 text-gray-500">
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="20" viewBox="0 0 14 20" fill="none">
                <path
                  d="M7.57232 14.29L7.425 14.17C7.37025 14.1322 7.3108 14.1019 7.24821 14.08L7.07143 14C6.91215 13.9661 6.74709 13.973 6.59109 14.0201C6.43508 14.0673 6.29302 14.1531 6.17768 14.27C6.09093 14.3672 6.02117 14.4788 5.97143 14.6C5.8971 14.7822 5.87737 14.9827 5.91472 15.1763C5.95206 15.3699 6.04482 15.5479 6.18131 15.688C6.3178 15.828 6.49193 15.9238 6.68177 15.9633C6.87162 16.0028 7.0687 15.9843 7.24821 15.91C7.36558 15.852 7.47462 15.778 7.57232 15.69C7.7086 15.5494 7.80092 15.3708 7.83763 15.1768C7.87433 14.9828 7.85378 14.7821 7.77857 14.6C7.7296 14.4844 7.65963 14.3792 7.57232 14.29ZM10.8036 0H2.94643C2.16499 0 1.41555 0.316071 0.862989 0.87868C0.310427 1.44129 0 2.20435 0 3V17C0 17.7956 0.310427 18.5587 0.862989 19.1213C1.41555 19.6839 2.16499 20 2.94643 20H10.8036C11.585 20 12.3344 19.6839 12.887 19.1213C13.4396 18.5587 13.75 17.7956 13.75 17V3C13.75 2.20435 13.4396 1.44129 12.887 0.87868C12.3344 0.316071 11.585 0 10.8036 0ZM11.7857 17C11.7857 17.2652 11.6822 17.5196 11.4981 17.7071C11.3139 17.8946 11.0641 18 10.8036 18H2.94643C2.68595 18 2.43614 17.8946 2.25195 17.7071C2.06776 17.5196 1.96429 17.2652 1.96429 17V3C1.96429 2.73478 2.06776 2.48043 2.25195 2.29289C2.43614 2.10536 2.68595 2 2.94643 2H10.8036C11.0641 2 11.3139 2.10536 11.4981 2.29289C11.6822 2.48043 11.7857 2.73478 11.7857 3V17Z"
                  fill="#ACACAC"
                />
              </svg>
            </span>
          </div>
        </div>
        <button
          onClick={registerVerification}
          className="mt-12 w-full bg-[#634F9E] font-poppins font-semibold text-white py-4 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-[#634F9E]"
        >
          Продолжить
        </button>
        {errors !== "" && <p className="text-center font-mulish text-red-600 text-base mt-1">{errors}</p>}
       
      </div>
    </div>
  );
};

export default RegisterStateLogin;
