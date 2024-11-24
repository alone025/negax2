import { useEffect, useState } from "react";
import logo from "../img/logo2.png";
import seting from "../img/filter.svg";
import question from "../img/question.svg";
import shopcheck from "../img/shopcheck.svg";
import setting from "../img/setting.svg";
import love from "../img/love.svg";
import Footer from "../components/Footer";
import location from "../img/location.svg";
import vector from "../img/vector.svg";
import xxx from "../img/xIcon.svg";
import group1 from "../img/share.svg";
import dot from '../img/3dot.svg'
import { useNavigate } from "react-router-dom";
import FilterForm from "../components/FilterForm";
import SettingForm from "../components/SettingForm";

const Home = () => {
  const navigate = useNavigate();

  useEffect(()=>{
    const dataL = JSON.parse(localStorage.getItem('logined'))
    if(!dataL){
      navigate('/login')
    }
  },[])

  function handleLikes() {
    navigate("/likes");
  }

  function handleShopping() {
    navigate("/shopping");
  }
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMenuOpen2, setIsMenuOpen2] = useState(false);


  const handleSeting = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const handleSetting2 = () => {
    setIsMenuOpen2((prev) => !prev);
  };

  function handleQuestion() {
    navigate("/question");
  }

  return (
    <div className="flex flex-col items-center pt-16 px-4 min-h-screen   relative">
    
      <header className="absolute container top-5 flex justify-between items-center w-full">
        <div onClick={handleSeting} className="cursor-pointer">
          <img src={seting} alt="Settings" />
        </div>
        <div className="flex items-center gap-3">
          <img className="w-[40px]" src={logo} alt="Logo" />
          <h1 onClick={()=> window.open("/", "_current")} className="font-normal cursor-pointer rgb-text font-pro-monument text-[13px] md:text-2xl leading-4 ">
            NIKAH.SPACE
          </h1>
        </div>
        <div
          className="cursor-pointer"
          onClick={handleQuestion}
        >
          <img src={question} alt="Question" />
        </div>
      </header>

      {/* Side Menu */}
      <div
        className={`fixed top-0 left-0 h-full w-[270px] bg-white shadow-lg transform ${
          isMenuOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out z-50`}
      >
        <FilterForm hnd={handleSeting} />
      </div>

      <div
        className={`fixed cursor-pointer rounded-l-[30px] top-0 h-full w-[270px] bg-white shadow-lg transform ${
          isMenuOpen2 ? "right-0" : "-translate-x-full left-0"
        } transition-transform duration-300 ease-in-out z-50`}
      >
        <SettingForm />
      </div>

      {/* Overlay */}
      {isMenuOpen && (
        <div
          onClick={handleSeting}
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
        />
      )}

{isMenuOpen2 && (
        <div
          onClick={handleSetting2}
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
        />
      )}
      {/* main */}
      <main className="container p-5 flex justify-between items-center">
        <div
          onClick={handleShopping}
          className="cursor-pointer w-[65px] h-[65px] rounded-full shadow border flex items-center justify-center"
        >
          <img src={shopcheck} alt="" />
        </div>
        <div
          onClick={handleLikes}
          className="cursor-pointer relative w-[65px] h-[65px] rounded-full shadow border flex items-center justify-center"
        >
          <img src={love} alt="" />
          <span className="absolute bg-rgb -top-1 w-7 h-7 p-[1px] shadow rounded-full -right-3">
           <div className="bg-div w-full h-full text-[#000000] font-normal font-monsetrat rounded-full flex items-center justify-center bg-[#f8f8f8]">
           14
           </div>
          </span>
        </div>
        <div onClick={handleSetting2} className="w-[65px] h-[65px] rounded-full shadow border flex items-center justify-center">
          <img src={setting} alt="" />
        </div>
      </main>
      <section className="border shadow h-[450px] w-full container p-0 rounded-xl">
        <div className="h-[75%] w-full relative bg-[#D9D9D9] rounded-t-xl">
          <img src={dot} alt="" className="absolute top-7 right-7" />
          <div className="absolute bottom-7 left-7 gap-2 flex flex-col w-full">
            <p className="font-mulish font-medium text-[#5E5E5E] text-xl">Алексей, 38</p>
            <div className="flex gap-2 w-full">
              <img src={location} alt="" className="w-5" />
              <span className="font-mulish text-sm text-[#000000] font-normal">Шымкент, Казахстан</span>
            </div>
          </div>
        </div>
        <div className="flex px-5 flex-col mt-3 gap-1 ">
          <p className="text-sm font-mulish font-medium text-[#000000]">Семейное положение:</p>
          <p className=" text-[10px] font-mulish font-medium text-white bg-[#6A59A7] w-20 flex items-center justify-center">
            Разведен(а)
          </p>
          <p className="text-sm font-mulish font-medium text-[#000000]">Количество детей:</p>
          <p className=" text-[10px] font-mulish font-medium text-white bg-[#6A59A7] w-4 flex items-center justify-center">
            7
          </p>
        </div>
      </section>
      <section className="container p-5 flex justify-between items-center">
        <div className="w-[65px] cursor-pointer h-[65px] rounded-full shadow border flex items-center justify-center">
          <img src={group1} alt="" />
        </div>
        <div className=" relative cursor-pointer w-[65px] h-[65px] rounded-full shadow border flex items-center justify-center">
          <img src={xxx} alt="" />
        </div>
        <div className="w-[65px] cursor-pointer h-[65px] rounded-full shadow border flex items-center justify-center">
          <img src={vector} alt="" />
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Home;
