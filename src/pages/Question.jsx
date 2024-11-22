import React, { useState } from "react";
import logo from "../img/logo.png"
import setting from "../img/setting.png"

const Question = () => {
  const [openIndex, setOpenIndex] = useState(null);

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

  return (
    <div className="flex flex-col items-center pt-16 px-4 min-h-screen   relative">
    <header className="absolute container top-5 flex justify-between items-center w-full">
          <div className="flex items-center gap-3">
              <img className="w-[40px]  " src={logo} alt="" />
              <h1 className="font-normal colorr text-[12px] leading-4 ">NIKAH.SPACE</h1>
          </div>
          <div className="cursor-pointer" >
            <img src={setting} alt="" />
          </div>
    </header>
    <main className="flex flex-col items-center gap-5">
        <h1 className="text-2xl leading-7">Вопрос-ответ</h1>
        <div className="flex flex-col mt-4">
            <p className="text-[#6a59a7] text-sm leading-5"><span className="bg-[#6A59A7] text-white">Мир:</span> 11 мужских анкет и 756 женских анкет </p>
            <p className="text-[#6a59a7] text-sm leading-5"><span className="bg-[#6A59A7] text-white">Казахстан:</span> 3 мужских анкет и 490 женских анкет</p>

        </div>
    </main>

      {/* FAQ Section */}
      <div className="space-y-4 mt-5">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="border border-purple-200 rounded-lg overflow-hidden"
          >
            <button
              onClick={() => toggleOpen(index)}
              className="w-full bg-purple-100 text-purple-600 px-4 py-3 text-left flex justify-between items-center"
            >
              <span>{faq.question}</span>
              <i
                className={`fas ${
                  openIndex === index ? "fa-chevron-up" : "fa-chevron-down"
                }`}
              ></i>
            </button>
            {openIndex === index && (
              <div className="bg-white px-4 py-3 text-gray-700">
                <p>{faq.answer}</p>
                {faq.stats && (
                  <p className="text-sm text-gray-500 mt-2">{faq.stats}</p>
                )}
                <div className="flex mt-2 space-x-4">
                  <button className="flex items-center text-green-600">
                    <i className="fas fa-thumbs-up mr-1"></i> Полезно
                  </button>
                  <button className="flex items-center text-red-600">
                    <i className="fas fa-thumbs-down mr-1"></i> Не полезно
                  </button>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Question;
