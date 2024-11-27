import { useState } from "react";
import seting from "../img/filter.svg";
import question from "../img/question.svg";
import logo from "../img/logo2.png";
import { useNavigate } from "react-router-dom";
import FilterForm from "../components/FilterForm";
import Footer from "../components/Footer";

const Personals = () => {

  const navigate = useNavigate();

  const profiles = [
    {
      name: "Катя",
      age: 20,
      location: "Казахстан, Астана",
      id: 8836,
      avatar: "../img/female-avatar.png",
    },
    {
      name: "Ахмад",
      age: 25,
      location: "Казахстан, Алматы",
      id: 8742,
      avatar: "../img/male-avatar.png",
    },
    {
      name: "Ахмад",
      age: 25,
      location: "Казахстан, Алматы",
      id: 8742,
      avatar: "../img/male-avatar.png",
    },
    {
      name: "Ахмад",
      age: 25,
      location: "Казахстан, Алматы",
      id: 8742,
      avatar: "../img/male-avatar.png",
    },
    {
      name: "Ахмад",
      age: 25,
      location: "Казахстан, Алматы",
      id: 8742,
      avatar: "../img/male-avatar.png",
    },
    {
      name: "Ахмад",
      age: 25,
      location: "Казахстан, Алматы",
      id: 8742,
      avatar: "../img/male-avatar.png",
    },
    {
      name: "Ахмад",
      age: 25,
      location: "Казахстан, Алматы",
      id: 8742,
      avatar: "../img/male-avatar.png", 
    },
    
  ];

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleSeting = () => {
    setIsMenuOpen((prev) => !prev);
  };

  function handleQuestion() {
    navigate("/question");
  }



  return (
    <div className="bg-gray-50 min-h-screen p-6 flex flex-col items-center">
      {/* Header */}
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

      {/* Overlay */}
      {isMenuOpen && (
        <div
          onClick={handleSeting}
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
        />
      )}

      {/* Title */}
      <h1 className="text-xl lg:text-2xl font-mulish font-bold text-center rgb-text mb-4 mt-12">Анкеты</h1>

      {/* Profiles Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
        {profiles.map((profile, index) => (
          <div
            key={index}
            className="bg-rgb flex flex-col justify-between text-white p-4 rounded-xl shadow-lg"
          >
           
           <div>
           <h2 className="text-sm sm:text-base font-mulish font-semibold text-start">
              {profile.name}, {profile.age} лет
            </h2>
            <p className="text-start font-mulish font-semibold text-sm sm:text-base">{profile.location}</p>
            <p className="text-start font-mulish font-bold text-sm sm:text-base">№{profile.id}</p>
           </div>
            <img
              src={profile.avatar}
              alt={profile.name}
              className="mx-auto h-[100px] sm:h-[130px] md:h-[200px] lg:h-[200px] xl:h-auto my-3"
            />
            <button onClick={()=> window.open("/personals/test", "_current")} className="mt-4 outline-none w-full text-[8px] sm:text-xs md:text-sm lg:text-base bg-[#8E76D7] text-white font-mulish font-bold py-2 rounded transition">
              Подробнее
            </button>
          </div>
        ))}
      </div>

      {/* Bottom Navigation */}
      <div className="fixed bottom-0 left-0 w-full bg-white shadow-md flex justify-around py-2">
        <button className="text-purple-600">
          <i className="fas fa-home text-xl"></i>
        </button>
        <button className="text-purple-600">
          <i className="fas fa-users text-xl"></i>
        </button>
        <button className="text-purple-600">
          <i className="fas fa-thumbs-up text-xl"></i>
        </button>
        <button className="text-purple-600">
          <i className="fas fa-user text-xl"></i>
        </button>
      </div>
      <Footer />
    </div>
  );
};

export default Personals;
