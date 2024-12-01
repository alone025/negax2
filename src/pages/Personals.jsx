import { useEffect, useState } from "react";
import seting from "../img/filter.svg";
import question from "../img/question.svg";
import logo from "../img/logo2.png";
import { useNavigate } from "react-router-dom";
import FilterForm from "../components/FilterForm";
import Footer from "../components/Footer";

import mlIMg from "../img/female-avatar.png"
import fmImg from "../img/male-avatar.png"


const Personals = () => {

  const navigate = useNavigate();

  const profiles = [
    {
      id: 1,
      name: "Алексей Иванов Kazax",
      age: 35,
      maritalStatus: "Женат",
      country: "Россия",
      city: "Москва",
      children: 2,
      idC:'8881',
      gender: 'male',
      national: 'Kazax',
      avatar: mlIMg,
    },
    {
      id: 2,
      name: "Мария Петрова Uzbek",
      age: 28,
      maritalStatus: "Не замужем",
      country: "Россия",
      city: "Санкт-Петербург",
      children: 0,
      idC:'8876',
      gender: 'female',
      national: 'Uzbek',
      avatar: fmImg,
  
    },
    {
      id: 3,
      name: "Ольга Смирнова Uzbek",
      age: 42,
      maritalStatus: "Разведен(а)",
      country: "Казахстан",
      city: "Алматы",
      children: 1,
      idC:'8875',
      national: 'Uzbek',
      gender: 'female',
      avatar: fmImg,
  
    },
    {
      id: 4,
      name: "Дмитрий Васильев Kazax",
      age: 30,
      maritalStatus: "Холост",
      country: "Беларусь",
      city: "Минск",
      children: 0,
      idC:'8871',
      national: 'Kazax',
      gender: 'male',
      avatar: mlIMg,
  
    },
    {
      id: 5,
      name: "Екатерина Соколова Uzbek",
      age: 25,
      maritalStatus: "Замужем",
      country: "Украина",
      city: "Киев",
      children: 1,
      idC:'8872',
      gender: 'female',
      national: 'Uzbek',
      avatar: fmImg,
      
  
    },
    {
      id: 6,
      name: "Иван Кузнецов Kazax",
      age: 40,
      maritalStatus: "Женат",
      country: "Россия",
      city: "Новосибирск",
      children: 3,
      idC:'8874',
      gender: 'male',
      national: 'Kazax',
      avatar: mlIMg,
  
  
    },
    {
      id: 7,
      name: "Анастасия Павлова Uzbek",
      age: 34,
      maritalStatus: "Вдовец/Вдова",
      country: "Казахстан",
      city: "Нур-Султан",
      children: 2,
      idC:'8873',
      gender: 'female',
      national: 'Uzbek',
  
      avatar: fmImg,
  
    },
    {
      id: 8,
      name: "Сергей Михайлов Kazax",
      age: 27,
      maritalStatus: "Холост",
      country: "Россия",
      city: "Екатеринбург",
      children: 0,
      idC:'8877',
      gender: 'male',
      avatar: mlIMg,
      national: 'Kazax',
  
    },
    {
      id: 9,
      name: "Наталья Зайцева Uzbek",
      age: 45,
      maritalStatus: "Разведен(а)",
      country: "Беларусь",
      city: "Гомель",
      children: 2,
      idC:'8885',
      gender: 'female',
      national: 'Uzbek',
      avatar: fmImg,
  
    },
    
  ];

  const [data, setData ] = useState(profiles)
  const [filterActive, setFilterActive] = useState(false)


    // Filter useStates

    const [gender, setGender] = useState("");
    const [ageRange, setAgeRange] = useState([18, 50]);
    const [city, setCity] = useState("");
    const [country, setCountry] = useState("");
    const [national, setNational] = useState("");
    const [searchName , setSearchName] = useState('')
    const [searchIDC , setSearchIDC] = useState('')
  
  
    // End of it


    useEffect(()=> {
      random()
    },[filterActive, gender, ageRange, city, country, national, searchName, searchIDC])



  // Filter
  const applyFilters = () => {
    return profiles.filter((person) => {
      if(searchName  && !person.name.toLowerCase().includes(searchName.trim().toLowerCase())){
        return false
      }
      if(searchIDC  && !person.idC.includes(searchIDC.trim())){
        return false
      }
      if (gender && ((gender === "boy" && person.gender !== "male") || (gender === "girl" && person.gender !== "female"))) {
        return false;
      }
      if(national && person.national.toLowerCase() !== national.toLowerCase()){
        return false
      }
      if (person.age < ageRange[0] || person.age > ageRange[1]) {
        return false;
      }
      if (city && person.city.toLowerCase() !== city.toLowerCase()) {
        return false;
      }
      if (country && person.country.toLowerCase() !== country.toLowerCase()) {
        return false;
      }
      return true;
    });
  };
  // Filter end

  const random = () => {
   
     if(filterActive){
      const newData = applyFilters()
      console.log(newData);
      if(newData.length > 0){
        setData(newData)
      
     }else{
      setData([])
    
     }
     }else{
      setData(profiles)
     }
      
    }

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleSeting = () => {
    setIsMenuOpen((prev) => !prev);
  };

  function handleQuestion() {
    navigate("/question");
  }



  return (
    <div className="bg-gray-50 min-h-screen pb-[70px] p-6 flex flex-col items-center">
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
        <FilterForm setFilterActive={setFilterActive} setSearchName={setSearchName} setSearchIDC={setSearchIDC} setNational={setNational} setGender={setGender} setAgeRange={setAgeRange} setCity={setCity} setCountry={setCountry} hnd={handleSeting} />
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
        {data.map((profile, index) => (
          <div
            key={index}
            className="bg-rgb flex flex-col justify-between text-white p-4 rounded-xl shadow-lg"
          >
           
           <div onClick={()=> window.open("/personals/test", "_current")} className="cursor-pointer">
           <h2 className="text-sm sm:text-base font-mulish font-semibold text-start">
              {profile.name}, {profile.age} лет
            </h2>
            <p className="text-start font-mulish font-semibold text-sm sm:text-base">{profile.location}</p>
            <p className="text-start font-mulish font-bold text-sm sm:text-base">№{profile.idC}</p>
           </div>
            <img
              src={profile.avatar}
              alt={profile.name}
              onClick={()=> window.open("/personals/test", "_current")}
              className="mx-auto h-[100px] cursor-pointer sm:h-[130px] md:h-[200px] lg:h-[200px] xl:h-auto my-3"
            />
            <button onClick={()=> window.open("/personals/test", "_current")} className="mt-4 outline-none w-full text-[8px] sm:text-xs md:text-sm lg:text-base bg-[#8E76D7] text-white font-mulish font-bold py-2 rounded transition">
              Подробнее
            </button>
          </div>
        ))}
      </div>

      {data.length === 0 && (
        <p className="text-base font-mulish font-normal lg:text-lg text-center">Для этого фильтра нет данных.</p>
      )}

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
