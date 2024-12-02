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

import ml from "../img/female-avatar.png"
import fm from "../img/male-avatar.png"



const initialData = [
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

  },
];


const Home = () => {
  const navigate = useNavigate();

  const [data, setData] = useState(initialData); 
  const [currentUser, setCurrentUser] = useState(null);
  const [filterActive, setFilterActive] = useState(false)
  const [dote, setDote] = useState(false)

  const [beforeUser, setBeforeUser] = useState(null);
  const [beforeUser2, setBeforeUser2] = useState(null);

  // Filter useStates

  const [gender, setGender] = useState("");
  const [ageRange, setAgeRange] = useState([18, 50]);
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");
  const [national, setNational] = useState("");
  const [searchName , setSearchName] = useState('')
  const [searchIDC , setSearchIDC] = useState('')


  const [inputT, setInputT] = useState('');



  // End of it

  const toggleDropdown = () => {
    setDote(!dote);
  };

  const [doteModal, setDoteModal] = useState(false);
  



  const toogleModal = () => {
    setDoteModal(!doteModal);
    setDote(false);
  };

  

  useEffect(()=>{
    const dataL = JSON.parse(localStorage.getItem('logined'))
    if(!dataL){
      navigate('/login')
    }
  },[])

  useEffect(() => {
    randomizeUser();
  }, [ageRange]);


  const randomizeUser = () => {
    setBeforeUser2(beforeUser)
  if(!filterActive){  
    if (data.length > 0) {
    const randomIndex = Math.floor(Math.random() * data.length);
    setCurrentUser(data[randomIndex]);
    setBeforeUser(randomIndex)
  } else {
    setCurrentUser(null);
  }}else{
    const newD = applyFilters()
      console.log(newD)
    if (newD.length > 0 && data.length > 0) {
      
      const randomIndex = Math.floor(Math.random() * newD.length);
    setCurrentUser(newD[randomIndex]);
    setBeforeUser(randomIndex)
    }
  }
  };

  const unlikeUser = () => {
    if (currentUser) {
      setData((prevData) => prevData.filter((user) => user.id !== currentUser.id));
      
      randomizeUser()
    }
  };

  
  const prevUser = () => {
    if (currentUser) {
      
        setCurrentUser(data[beforeUser2])
      
    }
  };



  // Filter
  const applyFilters = () => {
    return initialData.filter((person) => {
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
    <div className="flex flex-col items-center min-h-screen relative">
    
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
        <FilterForm  randomizeUser={randomizeUser} setFilterActive={setFilterActive} setSearchName={setSearchName} setSearchIDC={setSearchIDC} setNational={setNational} setGender={setGender} setAgeRange={setAgeRange} setCity={setCity} setCountry={setCountry} hnd={handleSeting} />
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


{dote && (
        <div
          onClick={toggleDropdown}
          className="fixed inset-0 z-40"
        />
      )}

      
{doteModal && <div onClick={toogleModal} className="fixed bg-black bg-opacity-50 inset-0 z-40" />}

{
 doteModal &&  <dialog id="modal" className="fixed max-w-[300px] w-full z-50 p-2 flex flex-col rounded top-1/2">
 <p className="text-base lg:text-lg font-mulish font-normal">Причина вашей жалобы.</p>
 <input onChange={(e)=>setInputT(e.target.value)} value={inputT} type="text" placeholder="Причина...." className="my-2 border border-[#634F9E] rounded outline-none p-2 font-mulish " />
<div className="btngroup flex flex-row gap-2">
<button  id="closeModal" className="border border-[#634F9E] font-mulish p-1 text-[#634F9E] text-xs lg:text-base rounded" onClick={toogleModal}>Отмена</button>
<button disabled={inputT.length < 5 ? true : false} id="closeModal" className="bg-[#634F9E] disabled:opacity-40 border border-[#634F9E] font-mulish p-1 text-white text-xs lg:text-base rounded" onClick={toogleModal}>Отправка</button>
</div>  
</dialog>
}


      {/* main */}
      <main className="container pt-20 p-5 flex justify-between items-center">
        <div
          onClick={handleShopping}
          className="cursor-pointer w-[50px] md:w-[60px] h-[50px] md:h-[60px] rounded-full shadow border flex items-center justify-center"
        >
          <img src={shopcheck} alt="" />
        </div>
        <div
          onClick={handleLikes}
          className="cursor-pointer relative w-[50px] md:w-[60px] h-[50px] md:h-[60px] rounded-full shadow border flex items-center justify-center"
        >
          <img src={love} alt="" />
          <span className="absolute bg-rgb -top-1 w-7 h-7 p-[1px] shadow rounded-full -right-3">
           <div className="bg-div w-full h-full text-[#000000] font-normal font-monsetrat rounded-full flex items-center justify-center bg-[#f8f8f8]">
           14
           </div>
          </span>
        </div>
        <div onClick={handleSetting2} className="w-[50px] md:w-[60px] h-[50px] md:h-[60px] cursor-pointer rounded-full shadow border flex items-center justify-center">
          <img src={setting} alt="" />
        </div>
      </main>

<div className="sc flex pb-10 flex-col flex-grow w-full">
  {/* User card */}

  <section className="border shadow h-cls lg:h-[320px] w-full container p-0 rounded-xl">
        <div onClick={()=> window.open('/personals/ds', "_current")} className="h-[56%] cursor-pointer lg:h-[67%] flex justify-center w-full relative bg-rgb rounded-t-xl">

          <img src={currentUser?.gender === "male" ? ml : currentUser?.gender === "female" ? fm : ml} alt="" className="h-full" />
          {/*  */}
          <img onClick={toggleDropdown} src={dot} alt="" className="absolute cursor-pointer h-[25px] md:h-auto top-7 right-7" />
          {/*  */}
          {dote && (
        <div className="absolute z-50 cursor-pointer right-0 top-16 w-fit bg-white rounded-md shadow-lg">
          <button onClick={toogleModal} className="w-full font-mulish z-50 px-4 py-2 text-left text-gray-700 hover:bg-blue-500 hover:text-white rounded-t-md">
          Жалоба
          </button>
          
        </div>
      )}
          
          {/*  */}
          <div className="absolute w-fit bottom-3 lg:bottom-7 left-7 gap-2 flex flex-col">
            <p className="font-mulish font-medium w-fit text-[#fff] text-xl">{currentUser?.name || 'Алексей'}, {currentUser?.age || '38'}</p>
            <div className="flex gap-2 w-fit">
              <img src={location} alt="" className="w-5" />
              <span className="font-mulish w-fit text-sm text-[#ffffff] font-normal">{currentUser?.city || 'Шымкент'}, {currentUser?.country || 'Казахстан'}</span>
            </div>
          </div>
        </div>
        <div className="flex px-5 flex-col mt-3 gap-1 ">
          <p className="text-sm font-mulish font-medium text-[#000000]">Семейное положение:</p>
          <p className=" text-[10px] font-mulish font-medium text-white bg-[#6A59A7] w-20 flex items-center justify-center">
            
            {currentUser?.maritalStatus || 'Разведен(а)'}
          </p>
          <p className="text-sm font-mulish font-medium text-[#000000]">Количество детей:</p>
          <p className=" text-[10px] font-mulish font-medium text-white bg-[#6A59A7] w-4 flex items-center justify-center">
            {currentUser?.children || '7'}
          </p>
        </div>
      </section>

      {/* User card end */}

      {/* User card under buttons */}
      <section className="container p-5 flex justify-between items-center">
        <div onClick={prevUser} className="w-[50px] md:w-[60px] cursor-pointer h-[50px] md:h-[60px] rounded-full shadow border flex items-center justify-center">
          <img src={group1} alt="" />
        </div>
        <div onClick={unlikeUser} className="relative cursor-pointer w-[50px] md:w-[60px] h-[50px] md:h-[60px] rounded-full shadow border flex items-center justify-center">
          <img src={xxx} alt="" />
        </div>
        <div onClick={randomizeUser} className="w-[50px] md:w-[60px] cursor-pointer h-[50px] md:h-[60px] rounded-full shadow border flex items-center justify-center">
          <img src={vector} alt="" />
        </div>
      </section>

      {/* User card under buttons end*/}
</div>

      <Footer />
    </div>
  );
};

export default Home;
