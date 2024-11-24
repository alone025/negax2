import  { useState, useRef } from "react";
import checkSvg from "../img/check.svg"

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const sliderRef = useRef(null);

  const slides = [
    { id: 1, content: [
        {
            p: 'Откроются все номера - 1 месяц'
        },
        {
            p: 'Откроются все фото - 1 месяц'
        },
        {
            p: 'Можете отправлять свою анкету девушкам на сайте - 1 месяц'
        },
        {
            p: 'Ваша анкета будет на сайте - 1 месяц'
        }
    ] },
    { id: 2, content: [
        {
            p:'neke-anketa.kz/#price'
        }
    ] },
  ];

  const handleNext = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const handleTouchStart = (e) => {
    sliderRef.current.startX = e.touches[0].clientX;
  };

  const handleTouchEnd = (e) => {
    const endX = e.changedTouches[0].clientX;
    if (sliderRef.current.startX - endX > 50) {
      handleNext();
    } else if (endX - sliderRef.current.startX > 50) {
      handlePrev();
    }
  };

  return (
    <div className="relative w-full max-w-lg mx-auto overflow-hidden">
      <div
        ref={sliderRef}
        className="flex transition-transform duration-300"
        style={{
          transform: `translateX(-${currentSlide * 80}%)`,
        }}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        {slides.map((slide) => (
          <div
            key={slide.id}
            className="flex-none w-[80%] shrink-0 relative"
            style={{
              // marginRight: slide.id !== 2 ? '10%' : '0%',
              // marginLeft: currentSlide + 1 === 2 ? slide.id === 1 && '10%' : 0
              marginRight:'10%'
            }}
          >
            <div className="rounded-xl w-full shadow-md">
          <div className="bg-[#EDABC6] text-center rounded-t-xl py-3">
            <h2 className="text-white font-mulish font-bold text-lg">САЙТ ВИП</h2>
          </div>
          <div className="p-3 min-h-[225px] sm:p-4 text-center">
            <p className="text-[#000000] font-mulish font-light text-sm lg:text-base mb-4">30 дней</p>
            <div className="flex flex-col w-auto gap-6 items-start">
                {
                    slide.content.map((c, ckey)=> (
                        <p key={ckey} className="text-[13px] flex font-mulish text-start items-center gap-2 sm:gap-4 leading-4 font-black text-[#565555] ">
                        <span className="text-3xl"><img src={checkSvg} alt="" /></span>
                        {c.p}
                    </p>
                    ))
                }
               
            </div>
          </div>
          <button className="bg-[#6A59A7] text-white w-full py-3 rounded-b-xl font-mulish text-sm font-bold mt-4">
          Оплатить 15000₸
          </button>
        </div>
          </div>
        ))}
      </div>
      {/* Navigation Buttons */}
      {/* <button
        onClick={handlePrev}
        className="absolute top-1/2 left-2 -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full"
      >
        &lt;
      </button>
      <button
        onClick={handleNext}
        className="absolute top-1/2 right-2 -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full"
      >
        &gt;
      </button> */}
    </div>
  );
};

export default Slider;
