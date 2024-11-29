import { useState } from "react";
import logo from "../img/logo2.png";
import setting from "../img/setting.svg";
import SettingForm from "../components/SettingForm";

const Question = () => {
  const [isMenuOpen2, setIsMenuOpen2] = useState(false);
  const [openIndex, setOpenIndex] = useState(null);
  const [likeState, setLikeState] = useState({}); // To track like/unlike for each FAQ

  const faqs = [
    {
      question: "Как можно посмотреть кандидатов?",
      answer:
        "После заполнения анкеты вам будут представлены карточки кандидатов. Для Вас ответ оказался полезным?",
      stats: "91% считают ответ полезным",
    },
    {
      question: "Как начать общение если нравится человек?",
      answer: "Вы можете отправить сообщение кандидату через чат.",
    },
    {
      question: "Что делать, если кандидат не нравится?",
      answer: "Вы можете пропустить анкету кандидата.",
    },
    {
      question: "Что делать, если у некоторых ненастоящие фото?",
      answer: "Вы можете пожаловаться на неподходящие фотографии.",
    },
  ];

  const toggleOpen = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const handleLike = (index) => {
    setLikeState((prev) => ({
      ...prev,
      [index]: prev[index] === "like" ? null : "like",
    }));
  };

  const handleUnlike = (index) => {
    setLikeState((prev) => ({
      ...prev,
      [index]: prev[index] === "unlike" ? null : "unlike",
    }));
  };

  const handleSetting2 = () => {
    setIsMenuOpen2((prev) => !prev);
  };

  return (
    <div className="flex flex-col items-center pt-16 px-4 min-h-screen relative">
      <header className="absolute container top-5 flex justify-between items-center w-full">
        <div className="flex items-center gap-3">
          <img className="w-[40px]" src={logo} alt="" />
          <h1
            onClick={() => window.open("/", "_current")}
            className="font-normal cursor-pointer rgb-text font-pro-monument text-[13px] md:text-2xl leading-4"
          >
            NIKAH.SPACE
          </h1>
        </div>
        <div onClick={handleSetting2} className="cursor-pointer">
          <img src={setting} alt="" />
        </div>
      </header>

      <div
        className={`fixed cursor-pointer rounded-l-[30px] top-0 h-full w-[270px] bg-white shadow-lg transform ${
          isMenuOpen2 ? "right-0" : "-translate-x-full left-0"
        } transition-transform duration-300 ease-in-out z-50`}
      >
        <SettingForm />
      </div>

      {isMenuOpen2 && (
        <div
          onClick={handleSetting2}
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
        />
      )}

      <main className="flex flex-col max-w-[400px] w-full gap-5 mt-1">
        <h1 className="text-2xl rgb-text font-monsetrat text-center leading-7">
          Вопрос-ответ
        </h1>
        <div className="flex flex-col font-mulish font-normal mt-4">
          <p className="text-[#6a59a7] text-sm leading-5">
            <span className="bg-[#6A59A7] text-white">Мир:</span> 11 мужских
            анкет и 756 женских анкет{" "}
          </p>
          <p className="text-[#6a59a7] text-sm leading-5">
            <span className="bg-[#6A59A7] text-white">Казахстан:</span> 3
            мужских анкет и 490 женских анкет
          </p>
        </div>
      </main>

      <div className="space-y-4 mt-5">
        {faqs.map((faq, index) => (
          <div key={index} className="rounded-lg overflow-hidden">
            <button
              onClick={() => toggleOpen(index)}
              className="w-full bg-[#634F9E] text-white px-4 py-3 text-left flex justify-between items-center"
            >
              <span>{faq.question}</span>
              <i
                className={`fas ${
                  openIndex === index ? "fa-chevron-up" : "fa-chevron-down"
                }`}
              ></i>
            </button>
            <div
              className={`bg-white max-w-[400px] ${
                openIndex === index ? "h-auto px-4 py-3" : "h-0 !p-0"
              } transition-all text-gray-700`}
            >
              <p className="font-mulish font-normal text-[#000000] text-sm lg:text-base">
                {faq.answer}
              </p>
              {faq.stats && (
                <>
                  <p className="text-sm font-mulish text-[#000000] mt-2">
                    Для Вас ответ оказался полезным?
                  </p>
                  <p className="text-xs font-mulish text-[#000000] opacity-40 mt-1">
                    {faq.stats}
                  </p>
                </>
              )}
              <div className="flex mt-2 space-x-4">
                <button
                  className={`flex items-center ${
                    likeState[index] === "like" ? "bg-[#DBDBDB] rounded-md" : ""
                  }`}
                  onClick={() => handleLike(index)}
                >
                          <svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none">
  <path d="M20.02 11.6595C20.02 10.7394 19.2752 10.2575 18.2675 10.2575H15.332C15.5511 9.46889 15.6387 8.72408 15.6387 8.06689C15.6387 5.52576 14.9377 5.00002 14.3244 5.00002C13.93 5.00002 13.6234 5.04383 13.2291 5.26289C13.0976 5.35052 13.0538 5.43814 13.01 5.56958L12.5719 7.93545C12.0899 9.1622 10.907 10.2575 9.94312 11.0023V17.2675C10.2936 17.2675 10.6441 17.4428 11.0822 17.6618C11.5642 17.8809 12.0461 18.1438 12.5719 18.1438H16.734C17.6103 18.1438 18.2675 17.4428 18.2675 16.8294C18.2675 16.6979 18.2675 16.6103 18.2237 16.5227C18.7494 16.3036 19.1437 15.8655 19.1437 15.2959C19.1437 15.0331 19.0999 14.814 19.0123 14.5949C19.3628 14.3759 19.6695 13.9816 19.6695 13.5434C19.6695 13.2806 19.538 13.0177 19.4066 12.7986C19.7571 12.5358 20.02 12.0976 20.02 11.6595ZM19.0999 11.6595C19.0999 12.2291 18.5304 12.2729 18.4427 12.5358C18.3551 12.8424 18.7932 12.9301 18.7932 13.4558C18.7932 13.9816 18.136 13.9816 18.0484 14.2883C17.9608 14.6388 18.2675 14.7264 18.2675 15.2521V15.3398C18.1799 15.7779 17.5227 15.8217 17.3912 15.9969C17.2598 16.216 17.3912 16.3036 17.3912 16.7856C17.3912 17.0484 17.0845 17.2237 16.734 17.2237H12.5719C12.2214 17.2237 11.8709 17.0484 11.4327 16.8294C11.0822 16.6541 10.7317 16.4789 10.3812 16.3913V11.7909C11.4766 10.9585 12.8786 9.73176 13.4043 8.19833V8.1107L13.7986 5.92008C13.9739 5.87626 14.1053 5.87626 14.3244 5.87626C14.412 5.87626 14.7625 6.40201 14.7625 8.06689C14.7625 8.72408 14.631 9.42508 14.412 10.2575H14.3244C14.0615 10.2575 13.8862 10.4328 13.8862 10.6956C13.8862 10.9585 14.0615 11.1338 14.3244 11.1338H18.2675C18.7056 11.1338 19.0999 11.3528 19.0999 11.6595Z" fill="black"/>
  <path d="M9.505 18.1437H6.87625C6.39431 18.1437 6 17.7494 6 17.2675V11.1337C6 10.6518 6.39431 10.2575 6.87625 10.2575H9.505C9.98693 10.2575 10.3812 10.6518 10.3812 11.1337V17.2675C10.3812 17.7494 9.98693 18.1437 9.505 18.1437ZM6.87625 11.1337V17.2675H9.505V11.1337H6.87625Z" fill="black"/>
  <rect x="0.5" y="0.5" width="24" height="23" rx="4.5" stroke="#DBDBDB"/>
</svg>
                  </button>
                 
                <button
                  className={`flex items-center ${
                    likeState[index] === "unlike" ? "bg-[#DBDBDB] rounded-md" : ""
                  }`}
                  onClick={() => handleUnlike(index)}
                >
                                    <svg  xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none">
  <path d="M6.00004 12.4843C6.00004 13.4043 6.74485 13.8863 7.75254 13.8863H10.688C10.4689 14.6749 10.3813 15.4197 10.3813 16.0769C10.3813 18.618 11.0823 19.1438 11.6957 19.1438C12.09 19.1438 12.3967 19.1 12.791 18.8809C12.9224 18.7933 12.9662 18.7057 13.01 18.5742L13.4482 16.2083C13.9301 14.9816 15.113 13.8863 16.0769 13.1415V6.87629C15.7264 6.87629 15.3759 6.70104 14.9378 6.48198C14.4558 6.26292 13.9739 6.00004 13.4482 6.00004H9.28597C8.40972 6.00004 7.75254 6.70104 7.75254 7.31442C7.75254 7.44585 7.75253 7.53348 7.79635 7.6211C7.2706 7.84017 6.87629 8.27829 6.87629 8.84785C6.87629 9.11073 6.9201 9.32979 7.00772 9.54885C6.65722 9.76791 6.35054 10.1622 6.35054 10.6004C6.35054 10.8632 6.48197 11.1261 6.61341 11.3452C6.26291 11.608 6.00004 12.0462 6.00004 12.4843ZM6.9201 12.4843C6.9201 11.9147 7.48966 11.8709 7.57728 11.608C7.66491 11.3014 7.22679 11.2137 7.22679 10.688C7.22679 10.1622 7.88397 10.1622 7.9716 9.85554C8.05922 9.50504 7.75254 9.41741 7.75254 8.89167V8.80404C7.84016 8.36592 8.49735 8.3221 8.62879 8.14685C8.76022 7.92779 8.62879 7.84017 8.62879 7.35823C8.62879 7.09535 8.93547 6.9201 9.28597 6.9201H13.4482C13.7987 6.9201 14.1492 7.09535 14.5873 7.31442C14.9378 7.48967 15.2883 7.66492 15.6388 7.75254L15.6388 12.3529C14.5435 13.1853 13.1415 14.412 12.6157 15.9455V16.0331L12.2214 18.2237C12.0462 18.2675 11.9147 18.2675 11.6957 18.2675C11.608 18.2675 11.2575 17.7418 11.2575 16.0769C11.2575 15.4197 11.389 14.7187 11.608 13.8863H11.6957C11.9585 13.8863 12.1338 13.711 12.1338 13.4482C12.1338 13.1853 11.9585 13.01 11.6957 13.01H7.75254C7.31441 13.01 6.9201 12.791 6.9201 12.4843Z" fill="black"/>
  <path d="M16.515 6.00008H19.1438C19.6257 6.00008 20.02 6.39439 20.02 6.87633V13.0101C20.02 13.492 19.6257 13.8863 19.1438 13.8863H16.515C16.0331 13.8863 15.6388 13.492 15.6388 13.0101V6.87633C15.6388 6.39439 16.0331 6.00008 16.515 6.00008ZM19.1438 13.0101V6.87633H16.515V13.0101H19.1438Z" fill="black"/>
  <rect x="24.5" y="23.5" width="24" height="23" rx="4.5" transform="rotate(-180 24.5 23.5)" stroke="#DBDBDB"/>
</svg>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Question;
