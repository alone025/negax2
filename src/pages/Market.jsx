import logo from "../img/logo2.png";
import tasbex from "../img/tasbex.png";
import Footer from "../components/Footer";

const Market = () => {
  return (
    <div className="container flex flex-col items-center pt-[68px]">
      <header className="absolute container top-5 flex justify-between items-center w-full">
        <div className="flex items-center gap-3">
          <img className="w-[40px]  " src={logo} alt="" />
          <h1
            onClick={() => window.open("/", "_current")}
            className="font-normal cursor-pointer rgb-text font-pro-monument text-[13px] md:text-2xl leading-4"
          >
            NIKAH.SPACE
          </h1>
        </div>
        <div className="cursor-pointer">
          <p className="rgb-text text-base font-mulish font-bold">Категории</p>
        </div>
      </header>

      <h1 className="text-2xl md:text-[34px] rgb-text font-monsetrat text-center leading-7">
        Маркет
      </h1>

      <hr className="my-5 w-full" />

      <div className="cardse-litt min-w-[380px] flex flex-row gap-2">
        <div className="c1 bg-rgb rounded p-[1px]">
          <p className="font-mulish bg-white text-[#555555] font-normal text-sm p-2 rounded">
            Мусульманские товары
          </p>
        </div>
        <div className="c2 bg-rgb rounded p-[1px]">
          <p className="font-mulish bg-white text-[#555555] font-normal text-sm p-2 rounded">
            Таспих
          </p>
        </div>
      </div>

      <div className="img mt-6">
        <img src={tasbex} alt="" />
      </div>
      <div className="texts min-w-[380px] mt-4">
        <div className="t1">
          <h3 className="text-2xl font-mulish font-normal text-[#212529] mb-1">
            Таспих 001
          </h3>
          <p className="text-base font-mulish font-normal text-[#212529] mb-4">
            Электронный таспих с usb зарядкой
          </p>
        </div>
        <hr className="my-4 w-full" />
        <div className="t2">
          <p className="text-sm font-mulish font-normal text-[#212529]">
            7000тг
          </p>
        </div>
        <hr className="my-4 w-full" />
      </div>
      <div className="btns-g min-w-[380px] flex flex-row gap-4 pb-2">
        <button className="border border-solid border-[#6A59A7] py-2 rounded px-6 text-[#6A59A7] font-mulish font-normal text-base">
          Подробнее
        </button>
        <button className="bg-[#6A59A7] py-2 rounded px-8 text-white font-mulish font-normal text-base">
          Купить
        </button>
      </div>
      {/* <div className="cardes grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 mt-6">
                {
                    cardData.map((c, ck)=>(
                        <CardOtziv key={ck} img={c.img} />
                    ))
                }
            </div>
            <div className="pagination w-full flex justify-center mb-5">
                <div className="div flex bg-[#FFF] text-sm font-mulish font-normal text-[#FF9BAD] flex-row">
                    <p className="border-y-2 w-8 h-8 flex items-center justify-center border-l-2 border-r-2 rounded-l border-[#DEE2E6]">1</p>
                    <p className="border-y-2 w-8 h-8 flex items-center justify-center border-r-2 border-[#DEE2E6]">2</p>
                    <p className="border-y-2 w-8 h-8 flex items-center justify-center border-r-2 border-[#DEE2E6]">3</p>
                    <p className="border-y-2 w-8 h-8 flex items-center justify-center border-r-2 border-[#DEE2E6]">4</p>
                    <p className="border-y-2 w-8 h-8 flex items-center justify-center border-r-2 border-[#DEE2E6]">›</p>
                    <p className="border-y-2 w-8 h-8 flex items-center justify-center border-r-2 border-[#DEE2E6] rounded-r">»</p>
                </div>
            </div> */}

      <Footer />
    </div>
  );
};

// const CardOtziv = ({img}) => {
//     return(
//         <div className="carde mb-6 lg:mb-8">
//             <div className="img">
//                 <img src={img} alt="" />
//             </div>
//             <div className="txt border-b border-l border-r border-solid border-[#00000020] rounded-b px-5 pt-3 pb-2">
//             <p className="text-lg font-monsetrat">Пророк (ﷺ) сказал:</p>
//             <p className="text-sm font-monsetrat font-normal">«У двух любящих сердец, наилучший итог - это
//             брак. قلب</p>
//             <div className="btm-cont mt-4 flex flex-row justify-between">
//             <p className="rgb-text text-xs font-normal font-mulish">читать далее</p>
//             <div className="tm flex flex-row gap-1">
//                 <p className="rgb-text text-sm font-normal font-mulish">26.02.24</p>
//                 <img src={time} alt="" />
//             </div>
//             </div>
//             </div>
//         </div>
//     )
// }

export default Market;
