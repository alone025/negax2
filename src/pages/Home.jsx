import React, { useState } from "react";
import logo from "../img/logo.png"
import seting from "../img/seting.png"
import question from "../img/question.png"
import shopcheck from "../img/shopcheck.png"
import setting from "../img/setting.png"
import love from "../img/Love.png"
import Footer from "../components/Footer";
import location from "../img/Location.png"
import vector from "../img/Vector.png"
import xxx from "../img/xxx.png"
import group1 from "../img/Group1.png"
import { CiMenuKebab } from "react-icons/ci";
import { useNavigate } from "react-router-dom";
import FilterForm from "../components/FilterForm";

const Home = () => {
const navigate = useNavigate()

function handleQuestion(){
  navigate("/question")
}

function handleLikes(){
  navigate("/likes")
}

function handleShopping(){
  navigate("/shopping")
}
const [isMenuOpen, setIsMenuOpen] = useState(false);

const handleSeting = () => {
  setIsMenuOpen((prev) => !prev);
};


  return (
    <div className="flex flex-col items-center pt-16 px-4 min-h-screen   relative">
          <header className="absolute container top-5 flex justify-between items-center w-full">
        <div onClick={handleSeting} className="cursor-pointer">
          <img src={seting} alt="Settings" />
        </div>
        <div className="flex items-center gap-3">
          <img className="w-[40px]" src={logo} alt="Logo" />
          <h1 className="font-normal text-purple-600 text-[12px] leading-4">
            NIKAH.SPACE
          </h1>
        </div>
        <div className="cursor-pointer" onClick={() => alert("Question clicked!")}>
          <img src={question} alt="Question" />
        </div>
      </header>

      {/* Side Menu */}
      <div
        className={`fixed top-0 left-0 h-full w-[250px] bg-white shadow-lg transform ${
          isMenuOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out z-50`}
      >
        <FilterForm/>
      </div>

      {/* Overlay */}
      {isMenuOpen && (
        <div
          onClick={handleSeting}
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
        />
      )}
    {/* main */}
    <main className="container p-5 flex justify-between items-center">
        <div onClick={handleShopping} className="cursor-pointer w-[65px] h-[65px] rounded-full shadow border flex items-center justify-center">
            <img src={shopcheck} alt="" />
        </div>
        <div onClick={handleLikes} className="cursor-pointer relative w-[65px] h-[65px] rounded-full shadow border flex items-center justify-center">
            <img src={love} alt="" />
            <span className="absolute -top-1 w-7 h-7 border shadow rounded-full flex items-center justify-center -right-3">
                14
            </span>
        </div>
        <div className="w-[65px] h-[65px] rounded-full shadow border flex items-center justify-center">
            <img src={setting} alt="" />
        </div>
    </main>
    <section className="border shadow h-[400px] w-full container p-5 rounded-xl">
        <div className="h-[75%] w-full relative bg-[#D9D9D9] rounded-t-xl">
        <CiMenuKebab  className="absolute top-7 right-7"/>
        <div className="absolute bottom-7 left-7 gap-2 flex flex-col w-full">
            <p>Алексей, 38</p>
            <div className="flex gap-2 w-full">
            <img src={location} alt="" className="w-5" />
            <span>Шымкент, Казахстан</span>
            </div>
        </div>
        </div>
        <div  className="flex flex-col mt-3 gap-1">
          <p className="text-sm">Семейное положение:</p>
          <p className=" text-[10px] text-white bg-[#6A59A7] w-20 flex items-center justify-center">Разведен(а)</p>
          <p className="text-sm">Семейное положение:</p>
          <p className=" text-[10px] text-white bg-[#6A59A7] w-4 flex items-center justify-center">7</p>
        </div>
    </section>
    <section  className="container p-5 flex justify-between items-center">
    <div className="w-[65px] h-[65px] rounded-full shadow border flex items-center justify-center">
            <img src={group1} alt="" />
        </div>
        <div className=" relative w-[65px] h-[65px] rounded-full shadow border flex items-center justify-center">
            <img src={xxx} alt="" />
        </div>
        <div className="w-[65px] h-[65px] rounded-full shadow border flex items-center justify-center">
            <img src={vector} alt="" />
        </div>
    </section>
    <Footer/>
    </div>
    );
};

export default Home;
