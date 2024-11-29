import logo from "../img/logo2.png"
import time from "../img/time.svg"
import img1 from "../img/blog1.png"
import Footer from "../components/Footer"
import { useState } from "react"


const Blog = () => {


    const cardData = [
        {
            img: img1
        },
        {
            img: img1
        },
        {
            img: img1
        },
    ]

    const [dote, setDote] = useState(false)

    const toggleDropdown = () => {
      setDote(!dote);
    };

  return (
   <div className="container pt-[68px]">
     <header className="absolute container top-5 flex justify-between items-center w-full">
          <div className="flex items-center gap-3">
              <img className="w-[40px]  " src={logo} alt="" />
              <h1 onClick={()=> window.open("/", "_current")} className="font-normal cursor-pointer rgb-text font-pro-monument text-[13px] md:text-2xl leading-4">NIKAH.SPACE</h1>
          </div>
          <div className="cursor-pointer" >
            <p onClick={toggleDropdown} className="rgb-text text-base font-mulish font-bold">Категории</p>
            {dote && (
        <div className="absolute z-50 cursor-pointer right-0 top-7 w-fit bg-white rounded-md shadow-lg">
          <button onClick={toggleDropdown} className="w-full font-mulish z-50 px-4 py-2 text-left text-gray-700 hover:bg-blue-500 hover:text-white rounded-t-md">
          Категории
          </button>
          
        </div>
      )}
          </div>
    </header>

    
    {dote && (
        <div
          onClick={toggleDropdown}
          className="fixed inset-0 z-40"
        />
      )}
  
            <input type="text" className="mt-5 font-mulish placeholder:text-[#6C757D] text-[#000] font-normal text-base px-3 py-2 rounded border border-solid border-[#CED4DA] w-full outline-none" placeholder="Поиск" />

            <div className="cardes grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 mt-6">
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
            </div>


            <Footer/>
   </div>
  )
}


const CardOtziv = ({img}) => {
    return(
        <div className="carde mb-6 lg:mb-8">
            <div className="img">
                <img src={img} alt="" />
            </div>
            <div className="txt border-b border-l border-r border-solid border-[#00000020] rounded-b px-5 pt-3 pb-2">
            <p className="text-lg font-monsetrat">Пророк (ﷺ) сказал:</p>
            <p className="text-sm font-monsetrat font-normal">«У двух любящих сердец, наилучший итог - это
            брак. قلب</p>
            <div className="btm-cont mt-4 flex flex-row justify-between">
            <p onClick={()=> window.open("/blog/asd", "_current")} className="rgb-text cursor-pointer text-xs font-normal font-mulish">читать далее</p>
            <div className="tm flex flex-row gap-1">
                <p className="rgb-text text-sm font-normal font-mulish">26.02.24</p>
                <img src={time} alt="" />
            </div>
            </div>
            </div>
        </div>
    )
}

export default Blog