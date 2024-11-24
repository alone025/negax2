import { useState } from "react";
import logo from "../img/logo2.png";
import { useNavigate } from "react-router-dom";
const SurveyForm = () => {
  const [gender, setGender] = useState("");
  const navigate = useNavigate();

  function handlePersonalFormPrev(e) {
    e.preventDefault();
    navigate("/registerstate");
  }

  function handlePersonalForm(e) {
    e.preventDefault();
    navigate("/personalform");
  }

  const handleGenderSelect = (selectedGender) => {
    setGender(selectedGender);
  };

  

  return (
    <div className="flex flex-col items-center pt-16 px-4 min-h-screen   relative">
      <header className="absolute container top-5 flex justify-between items-center w-full">
        <div className="flex items-center gap-3">
          <img className="w-[40px]  " src={logo} alt="" />
          <h1 onClick={()=> window.open("/", "_current")} className="font-normal cursor-pointer rgb-text font-pro-monument text-[13px] md:text-2xl leading-4 ">
            NIKAH.SPACE
          </h1>
        </div>
      </header>
      <div className="bg-white pt-3 sm:p-6 w-full">
        <div className="flex flex-col justify-between gap-3 items-center mb-6">
          <div className="flex items-center justify-between w-full ">
            <span className="text-sm font-normal font-mulish text-[#634F9E]">
              Анкета
            </span>
            <span className="text-sm font-normal font-mulish text-[#BBC8E8]">
              Анкета
            </span>
            <span className="text-sm font-normal font-mulish text-[#BBC8E8]">
              Анкета
            </span>
            <span className="text-sm font-normal font-mulish text-[#BBC8E8]">
              Анкета
            </span>
          </div>
          <div className="flex items-center relative justify-between w-full gap-2">
            <div className="relative font-mulish z-10 text-lg w-7 h-7 bg-rgb rounded-full text-white flex items-center justify-center">
              1
            </div>
            <div className="absolute w-full z-[0] h-1 bg-[#BBC8E8] "></div>
            <div className="w-7 h-7 font-mulish text-lg relative z-10 rounded-full bg-[#EDABC6] text-[#fff] flex items-center justify-center">
              2
            </div>
            <div className="w-7 h-7 font-mulish text-lg relative z-10 rounded-full bg-[#EDABC6] text-[#fff] flex items-center justify-center">
              3
            </div>
            <div className="w-7 h-7 font-mulish text-lg relative z-10 rounded-full bg-[#EDABC6] text-[#fff] flex items-center justify-center">
              4
            </div>
          </div>
        </div>

        <h2 className="text-center text-xl font-mulish font-semibold mb-6">Анкета</h2>

        {/* Gender selection */}
        <div className="flex justify-around mb-6">
          <button
            onClick={() => handleGenderSelect("male")}
            className={`py-4 font-mulish font-medium flex flex-row items-center gap-2 p-5 border rounded-lg ${
              gender === "male"
                ? "border-2 border-[#634F9E] text-[#634F9E]"
                : "text-[#ACACAC] border-2 border-[#ACACAC]"
            }`}
          >
            {gender === "male" ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="19"
                viewBox="0 0 20 19"
                fill="none"
              >
                <path
                  d="M19.4451 0.829248C19.3298 0.56163 19.1093 0.348964 18.8318 0.237826C18.6952 0.181705 18.5486 0.151938 18.4002 0.150208H13.857C13.5558 0.150208 13.2669 0.265597 13.0539 0.470992C12.8409 0.676387 12.7212 0.954962 12.7212 1.24543C12.7212 1.53591 12.8409 1.81448 13.0539 2.01988C13.2669 2.22527 13.5558 2.34066 13.857 2.34066H15.6629L12.937 4.9692C11.3275 3.80766 9.32143 3.27719 7.32262 3.48458C5.32381 3.69197 3.48068 4.62183 2.16427 6.08696C0.847866 7.55209 0.155922 9.44371 0.227735 11.381C0.299548 13.3183 1.12979 15.1575 2.55132 16.5283C3.97285 17.899 5.88012 18.6996 7.88919 18.7689C9.89825 18.8381 11.8599 18.1709 13.3793 16.9015C14.8987 15.6321 15.863 13.8548 16.0781 11.9274C16.2932 9.99993 15.7431 8.0655 14.5385 6.51347L17.2644 3.88493V5.62634C17.2644 5.91681 17.384 6.19539 17.597 6.40078C17.81 6.60618 18.0989 6.72157 18.4002 6.72157C18.7014 6.72157 18.9903 6.60618 19.2033 6.40078C19.4163 6.19539 19.536 5.91681 19.536 5.62634V1.24543C19.5342 1.10231 19.5033 0.960918 19.4451 0.829248ZM12.1533 14.9358C11.3637 15.7126 10.3521 16.245 9.24739 16.4652C8.14272 16.6854 6.99507 16.5834 5.95076 16.1722C4.90646 15.7609 4.01281 15.0591 3.38377 14.1562C2.75473 13.2533 2.41879 12.1902 2.41879 11.1025C2.41879 10.0147 2.75473 8.95163 3.38377 8.04872C4.01281 7.14581 4.90646 6.444 5.95076 6.03277C6.99507 5.62154 8.14272 5.51952 9.24739 5.73973C10.3521 5.95993 11.3637 6.49238 12.1533 7.26918C13.1939 8.29283 13.7767 9.66908 13.7767 11.1025C13.7767 12.5359 13.1939 13.9121 12.1533 14.9358Z"
                  fill="#634F9E"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="19"
                viewBox="0 0 20 19"
                fill="none"
              >
                <path
                  d="M19.4451 0.829248C19.3298 0.56163 19.1093 0.348964 18.8318 0.237826C18.6952 0.181705 18.5486 0.151938 18.4002 0.150208H13.857C13.5558 0.150208 13.2669 0.265597 13.0539 0.470992C12.8409 0.676387 12.7212 0.954962 12.7212 1.24543C12.7212 1.53591 12.8409 1.81448 13.0539 2.01988C13.2669 2.22527 13.5558 2.34066 13.857 2.34066H15.6629L12.937 4.9692C11.3275 3.80766 9.32143 3.27719 7.32262 3.48458C5.32381 3.69197 3.48068 4.62183 2.16427 6.08696C0.847866 7.55209 0.155922 9.44371 0.227735 11.381C0.299548 13.3183 1.12979 15.1575 2.55132 16.5283C3.97285 17.899 5.88012 18.6996 7.88919 18.7689C9.89825 18.8381 11.8599 18.1709 13.3793 16.9015C14.8987 15.6321 15.863 13.8548 16.0781 11.9274C16.2932 9.99993 15.7431 8.0655 14.5385 6.51347L17.2644 3.88493V5.62634C17.2644 5.91681 17.384 6.19539 17.597 6.40078C17.81 6.60618 18.0989 6.72157 18.4002 6.72157C18.7014 6.72157 18.9903 6.60618 19.2033 6.40078C19.4163 6.19539 19.536 5.91681 19.536 5.62634V1.24543C19.5342 1.10231 19.5033 0.960918 19.4451 0.829248ZM12.1533 14.9358C11.3637 15.7126 10.3521 16.245 9.24739 16.4652C8.14272 16.6854 6.99507 16.5834 5.95076 16.1722C4.90646 15.7609 4.01281 15.0591 3.38377 14.1562C2.75473 13.2533 2.41879 12.1902 2.41879 11.1025C2.41879 10.0147 2.75473 8.95163 3.38377 8.04872C4.01281 7.14581 4.90646 6.444 5.95076 6.03277C6.99507 5.62154 8.14272 5.51952 9.24739 5.73973C10.3521 5.95993 11.3637 6.49238 12.1533 7.26918C13.1939 8.29283 13.7767 9.66908 13.7767 11.1025C13.7767 12.5359 13.1939 13.9121 12.1533 14.9358Z"
                  fill="#ACACAC"
                />
              </svg>
            )}
            Мужской
          </button>
          <button
            onClick={() => handleGenderSelect("female")}
            className={`py-2 font-mulish font-medium flex flex-row items-center gap-2 p-5 border rounded-lg ${
              gender === "female"
                ? "border-2 border-[#634F9E] text-[#634F9E]"
                : "text-[#ACACAC] border-2 border-[#ACACAC]"
            }`}
          >
            {gender === "female" ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="15"
                height="20"
                viewBox="0 0 15 20"
                fill="none"
              >
                <path
                  d="M14.2891 6.91503C14.2906 5.61953 13.9096 4.3509 13.1914 3.26028C12.4731 2.16967 11.448 1.30306 10.2381 0.763688C9.02813 0.224319 7.68443 0.0349367 6.36705 0.218103C5.04967 0.401269 3.81415 0.949262 2.80768 1.79679C1.80122 2.64433 1.06625 3.75566 0.690334 4.9984C0.314419 6.24115 0.31341 7.56289 0.687426 8.80618C1.06144 10.0495 1.79472 11.1619 2.79988 12.0108C3.80505 12.8598 5.03974 13.4096 6.35684 13.5947V15.6025H5.36531C5.10233 15.6025 4.85014 15.7041 4.66419 15.8852C4.47824 16.0662 4.37377 16.3117 4.37377 16.5677C4.37377 16.8237 4.47824 17.0692 4.66419 17.2503C4.85014 17.4313 5.10233 17.533 5.36531 17.533H6.35684V18.4983C6.35684 18.7543 6.4613 18.9998 6.64725 19.1808C6.8332 19.3618 7.0854 19.4635 7.34837 19.4635C7.61134 19.4635 7.86354 19.3618 8.04949 19.1808C8.23544 18.9998 8.3399 18.7543 8.3399 18.4983V17.533H9.33143C9.5944 17.533 9.8466 17.4313 10.0325 17.2503C10.2185 17.0692 10.323 16.8237 10.323 16.5677C10.323 16.3117 10.2185 16.0662 10.0325 15.8852C9.8466 15.7041 9.5944 15.6025 9.33143 15.6025H8.3399V13.5947C9.9904 13.3628 11.5 12.5601 12.5924 11.3335C13.6848 10.1069 14.2871 8.53846 14.2891 6.91503ZM7.34837 11.7414C6.36784 11.7414 5.40932 11.4583 4.59404 10.928C3.77876 10.3977 3.14332 9.64389 2.76809 8.76199C2.39286 7.88009 2.29468 6.90967 2.48597 5.97345C2.67726 5.03724 3.14943 4.17726 3.84278 3.50229C4.53612 2.82731 5.41949 2.36765 6.38118 2.18142C7.34287 1.99519 8.33969 2.09077 9.24558 2.45607C10.1515 2.82136 10.9258 3.43997 11.4705 4.23365C12.0153 5.02734 12.306 5.96047 12.306 6.91503C12.306 7.54883 12.1778 8.17643 11.9286 8.76199C11.6795 9.34755 11.3143 9.8796 10.854 10.3278C10.3936 10.7759 9.84707 11.1314 9.24558 11.374C8.64409 11.6165 7.99942 11.7414 7.34837 11.7414Z"
                  fill="#634F9E"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="15"
                height="20"
                viewBox="0 0 15 20"
                fill="none"
              >
                <path
                  d="M14.2891 6.91503C14.2906 5.61953 13.9096 4.3509 13.1914 3.26028C12.4731 2.16967 11.448 1.30306 10.2381 0.763688C9.02813 0.224319 7.68443 0.0349367 6.36705 0.218103C5.04967 0.401269 3.81415 0.949262 2.80768 1.79679C1.80122 2.64433 1.06625 3.75566 0.690334 4.9984C0.314419 6.24115 0.31341 7.56289 0.687426 8.80618C1.06144 10.0495 1.79472 11.1619 2.79988 12.0108C3.80505 12.8598 5.03974 13.4096 6.35684 13.5947V15.6025H5.36531C5.10233 15.6025 4.85014 15.7041 4.66419 15.8852C4.47824 16.0662 4.37377 16.3117 4.37377 16.5677C4.37377 16.8237 4.47824 17.0692 4.66419 17.2503C4.85014 17.4313 5.10233 17.533 5.36531 17.533H6.35684V18.4983C6.35684 18.7543 6.4613 18.9998 6.64725 19.1808C6.8332 19.3618 7.0854 19.4635 7.34837 19.4635C7.61134 19.4635 7.86354 19.3618 8.04949 19.1808C8.23544 18.9998 8.3399 18.7543 8.3399 18.4983V17.533H9.33143C9.5944 17.533 9.8466 17.4313 10.0325 17.2503C10.2185 17.0692 10.323 16.8237 10.323 16.5677C10.323 16.3117 10.2185 16.0662 10.0325 15.8852C9.8466 15.7041 9.5944 15.6025 9.33143 15.6025H8.3399V13.5947C9.9904 13.3628 11.5 12.5601 12.5924 11.3335C13.6848 10.1069 14.2871 8.53846 14.2891 6.91503ZM7.34837 11.7414C6.36784 11.7414 5.40932 11.4583 4.59404 10.928C3.77876 10.3977 3.14332 9.64389 2.76809 8.76199C2.39286 7.88009 2.29468 6.90967 2.48597 5.97345C2.67726 5.03724 3.14943 4.17726 3.84278 3.50229C4.53612 2.82731 5.41949 2.36765 6.38118 2.18142C7.34287 1.99519 8.33969 2.09077 9.24558 2.45607C10.1515 2.82136 10.9258 3.43997 11.4705 4.23365C12.0153 5.02734 12.306 5.96047 12.306 6.91503C12.306 7.54883 12.1778 8.17643 11.9286 8.76199C11.6795 9.34755 11.3143 9.8796 10.854 10.3278C10.3936 10.7759 9.84707 11.1314 9.24558 11.374C8.64409 11.6165 7.99942 11.7414 7.34837 11.7414Z"
                  fill="#ACACAC"
                />
              </svg>
            )}
            Женский
          </button>
        </div>

        {/* Name inputs */}
        <div className="mb-6 border border-[#634F9E] p-5 rounded-2xl ">
          <label className="block font-mulish font-normal text-base text-[#242430] mb-2">
            Как к вам можно обращаться?
          </label>
          <input
            type="text"
            placeholder="Имя"
            className="w-full mb-3 font-mulish outline-none px-3 py-2 border rounded-lg focus:ring-2 focus:ring-purple-500"
          />
          <input
            type="text"
            placeholder="Фамилия"
            className="w-full px-3 font-mulish py-2 outline-none border rounded-lg focus:ring-2 focus:ring-purple-500"
          />
        </div>

        {/* Location inputs */}
        <div className="mb-6 border border-[#634F9E] p-5 rounded-2xl">
          <label className="block font-mulish font-normal text-base text-[#242430] mb-2">
            Откуда вы?
          </label>
          <select className="w-full font-mulish outline-none mb-3 px-3 py-2 border rounded-lg focus:ring-2 focus:ring-purple-500">
            <option value="">Страна</option>
            <option value="Uzbekistan">Узбекистан</option>
            <option value="Kazakhstan">Казахстан</option>
          </select>
          <select className="w-full font-mulish outline-none mb-3 px-3 py-2 border rounded-lg focus:ring-2 focus:ring-purple-500">
            <option value="">Город</option>
            <option value="Tashkent">Ташкент</option>
            <option value="Almaty">Алматы</option>
          </select>
          <select className="w-full font-mulish outline-none px-3 py-2 border rounded-lg focus:ring-2 focus:ring-purple-500">
            <option value="">Национальность</option>
            <option value="Uzbek">Узбек</option>
            <option value="Kazakh">Казах</option>
          </select>
        </div>

        {/* Navigation buttons */}
        <div className="flex justify-between gap-3 flex-col">
          <button onClick={handlePersonalFormPrev} className="w-full text-base font-normal font-mulish py-3 text-purple-700 border-2 border-purple-700 rounded-full text-center">
            Назад
          </button>
          <button
            onClick={handlePersonalForm}
            className="w-full py-3 text-base btn-rgb text-white font-mulish rounded-full"
          >
            Далее
          </button>
        </div>
      </div>
    </div>
  );
};

export default SurveyForm;
