
import { useState } from "react";
import Footer from "../components/Footer";
import Headerlike from "../components/Headerlike";
import Likes from "../pages/Likes";
import FilterForm from "../components/FilterForm";
import SettingForm from "../components/SettingForm";
import logo from "../img/logo2.png";
import question from "../img/question.svg";
import seting from "../img/filter.svg";
import { useNavigate } from "react-router-dom";

function LIkelayout() {

  const navigate = useNavigate();


  const [profiles, setProfiles] = useState(
    Array(10)
      .fill(null)
      .map((_, index) => ({ id: index, name: "Катя", age: 20 + index, city: 'Астана', country: 'Казахстан', idC: 8836 + index + 1 * index }))
  );

  const [searchTerm, setSearchTerm] = useState("");

  const handleChange = (id) => {
    const filteredProfiles = profiles.filter((profile) => profile.id !== id);
    setProfiles(filteredProfiles);
  };

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const normalizedSearchTerm = searchTerm.trim();

  const filteredProfiles = profiles.filter(
    (profile) =>
      profile.name.toLowerCase().includes(normalizedSearchTerm.toLowerCase()) ||
      profile.age.toString().includes(normalizedSearchTerm) ||
      profile.idC.toString().includes(normalizedSearchTerm)
  );

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
    <div className="container pb-[60px] flex flex-col gap-8 pt-8 px-2 text-white relative">
        <header className="absolute top-0 container flex justify-between items-center w-full h-16 bg-white z-40">
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
        <FilterForm  randomizeUser={{}} setFilterActive={{}} setSearchName={{}} setSearchIDC={{}} setNational={{}} setGender={{}} setAgeRange={{}} setCity={{}} setCountry={{}} hnd={handleSeting} />
      </div>


      <div
        className={`fixed cursor-pointer rounded-l-[30px] top-0 h-full w-[270px] bg-white shadow-lg transform ${
          isMenuOpen2 ? "right-0" : "translate-x-full right-0"
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

      <Headerlike searchTerm={searchTerm} handleSearchChange={handleSearchChange}/>
      <div className="mt-[150px]">
        <Likes data={filteredProfiles} hnd={handleChange} />
      </div>
      <Footer/>
    </div>
  );
}

export default LIkelayout;
