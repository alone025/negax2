import { useState } from "react";
import { GoChevronLeft, GoHeart } from "react-icons/go";
import Footer from "../components/Footer";
import { IoClose } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import logo from "../img/logo2.png";
import question from "../img/question.svg";
import seting from "../img/filter.svg";
import SettingForm from "../components/SettingForm";
import FilterForm from "../components/FilterForm";
import { initialData } from "../data/usersData";

const LikesH = () => {
  const navigate = useNavigate();
  const [profiles, setProfiles] = useState(initialData)
  // const [profiles, setProfiles] = useState(
  //   Array(10)
  //     .fill(null)
  //     .map((_, index) => ({ id: index, name: "Катя", age: 20 + index }))
  // );

  const [searchTerm, setSearchTerm] = useState("");
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedProfileId, setSelectedProfileId] = useState(null);

  // Filer form 

  const [filterActive, setFilterActive] = useState(false);
const [genderFilter, setGender] = useState("");
const [cityFilter, setCity] = useState("");
const [countryFilter, setCountry] = useState("");
const [nationalFilter, setNational] = useState("");

const [idFilter, setSearchIDC] = useState("");
const [ageRangeFilter, setAgeRange] = useState([0, 100]);


  // Filter end


  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const normalizedSearchTerm = searchTerm.trim();

  // const filteredProfiles = profiles.filter(
  //   (profile) =>
  //     profile.name.toLowerCase().includes(normalizedSearchTerm.toLowerCase()) ||
  //     profile.age.toString().includes(normalizedSearchTerm)
  // );

  const handleDeleteClick = (id) => {
    setSelectedProfileId(id);
    setModalVisible(true);
  };

  const handleCancel = () => {
    setModalVisible(false);
    setSelectedProfileId(null);
  };

  const handleConfirm = () => {
    setProfiles(profiles.filter((profile) => profile.id !== selectedProfileId));
    setModalVisible(false);
    setSelectedProfileId(null);
  };

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


  // Filter function 
  const filteredProfiles = profiles.filter((profile) => {
    const matchesSearch =
    profile.name.toLowerCase().includes(normalizedSearchTerm.toLowerCase()) ||
    profile.age.toString().includes(normalizedSearchTerm);

    const matchesFilters =
      (!genderFilter || profile.gender === (genderFilter == 'boy' ? "male" : "female")) &&
      (!cityFilter || profile.city === cityFilter) &&
      (!countryFilter || profile.country === countryFilter) &&
      (!nationalFilter || profile.national === nationalFilter) &&
      (!idFilter || profile.idC.includes(idFilter)) &&
      profile.age >= ageRangeFilter[0] &&
      profile.age <= ageRangeFilter[1];

    return (!filterActive || matchesFilters) && matchesSearch;
  });
  // Filter function end

  return (
    <div className="min-h-screen pb-[50px] container pt-2">
      
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
       <FilterForm
  setFilterActive={setFilterActive}
  setSearchName={setSearchTerm}
  setSearchIDC={setSearchIDC}
  setNational={setNational}
  setGender={setGender}
  setAgeRange={setAgeRange}
  setCity={setCity}
  setCountry={setCountry}
  hnd={handleSeting}
/>
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

      <header className="flex items-center justify-between px-4 py-2 ">
        <button
          className="text-[#ACACAC] cursor-pointer"
          onClick={() => window.open("/", "_current")}
        >
          <GoChevronLeft />
        </button>
        <h1 className="text-[#ACACAC] font-mulish text-lg font-medium">
          Вы лайкнули
        </h1>
        <div className="w-6 h-6"></div>
      </header>

      <div className="p-4">
        <div className="flex items-center border border-solid border-[#ACACAC] px-3 py-2 rounded-lg shadow-sm">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="w-5 h-5 text-gray-400"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 21l-4.35-4.35m1.1-5.65a7.5 7.5 0 11-15 0 7.5 7.5 0 0115 0z"
            />
          </svg>
          <input
            type="text"
            value={searchTerm}
            onChange={handleSearchChange}
            placeholder="Поиск знакомств"
            className="ml-2 flex-grow font-mulish rounded bg-transparent focus:outline-none text-gray-600"
          />
        </div>
      </div>

      {/* Profile List */}
      <div className="px-4">
        {filteredProfiles.map((profile) => (
          <div
            key={profile.id}
            className="flex items-center justify-between py-3 border-b border-gray-200"
          >
            <div className="flex items-center">
              <div className="w-12 h-12 rounded-full bg-gray-300"></div>
              <div
                onClick={() => window.open("/personals/akk", "_current")}
                className="ml-4 cursor-pointer font-mulish font-normal text-gray-600"
              >
                {profile.name}, {profile.age}
              </div>
            </div>
            <div className="bt-btn flex flex-row gap-2">
              <button
                className="w-10 h-10 rounded-full text-white font-extrabold bg-rgb flex items-center justify-center shadow"
              >
                <GoHeart />
              </button>
              <button
                onClick={() => handleDeleteClick(profile.id)}
                className="w-10 h-10 rounded-full text-white font-extrabold bg-rgb flex items-center justify-center shadow"
              >
                <IoClose />
              </button>
            </div>
          </div>
        ))}
      </div>

      {filteredProfiles.length === 0 && (<p className="text-base lg:text-lg font-mulish font-normal text-center">Для этого фильтра нет данных</p>)}

      
      {modalVisible && (
        <div className="fixed inset-0 z-40 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <p className="text-gray-700 font-mulish font-medium mb-4">
              Вы уверены, что хотите удалить?
            </p>
            <div className="flex justify-center gap-4">
              <button
                onClick={handleCancel}
                className="px-4 py-2 bg-gray-300 rounded-lg hover:bg-gray-400"
              >
                Отмена
              </button>
              <button
                onClick={handleConfirm}
                className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600"
              >
                Подтвердить
              </button>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
};

export default LikesH;
