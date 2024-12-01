import { useState } from "react";
import logo from "../img/logo2.png";
import { useNavigate } from "react-router-dom";

const PersonalForm = () => {
  const [year, setYear] = useState("");
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [character, setCharacter] = useState("");
  const [family, setFamily] = useState("");
  const [child, setChild] = useState("");
  const [mazxab, setMazxab] = useState("");
  const [talkChild, setTalkChild] = useState("");
  const [migration, setMigration] = useState("");
  const [vid, setVid] = useState("");
  const [error, setError] = useState("");


  const handleChange = (name, value) => {
    switch (name) {
      case "year":
        setYear(value);
        break;
      case "height":
        setHeight(value);
        break;
      case "weight":
        setWeight(value);
        break;
      case "character":
        setCharacter(value);
        break;
      case "family":
        setFamily(value);
        break;
      case "child":
        setChild(value);
        break;
      case "mazxab":
        setMazxab(value);
        break;
      case "talkChild":
        setTalkChild(value);
        break;
      case "migration":
        setMigration(value);
        break;
      case "vid":
        setVid(value);
        break;
      default:
        break
    }
  };



  const navigate = useNavigate();

  function handlePersonalFormPrev(e) {
    e.preventDefault();
    navigate("/surveyform");
  }

  const calculateAge = (dob) => {
    const birthDate = new Date(dob);
    
    
    const today = new Date();
    const age = today.getFullYear() - birthDate.getFullYear();
    const monthDiff = today.getMonth() - birthDate.getMonth();

  
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
      return age - 1;
    }
    return age;
  };


  function handlePersonalForm(e) {
    e.preventDefault();
    setError("")

    const newAge = calculateAge(year)
    
    

    if (!year) setError("Требуется возраст!");
    else if (newAge < 18 || newAge >= 50) setError('Вам нет 18 лет!');
    else if (!height) setError("Требуется рост!");
    else if (!weight) setError("Требуется вес!");
    else if (!character) setError("Требуется персонаж!");
    else if (!family) setError("Требуется семья!");
    else if (!child) setError("Требуется ребенок!");
    else if (!mazxab) setError("Требуется Мазхаб!");
    else if (!talkChild) setError("Требуется отношение к детям!");
    else if (!migration) setError("Требуется миграция!");
    else if (!vid) setError("Требуется вид деятельности!");
  else navigate("/religiyaform");
  }

  return (
    <div className="flex flex-col items-center pt-16 px-4 min-h-screen relative">
      <header className="absolute container top-5 flex justify-between items-center w-full">
        <div className="flex items-center gap-3">
          <img className="w-[40px]  " src={logo} alt="" />
          <h1
            onClick={() => window.open("/", "_current")}
            className="font-normal cursor-pointer rgb-text font-pro-monument text-[13px] md:text-2xl leading-4 "
          >
            NIKAH.SPACE
          </h1>
        </div>
      </header>
      <div className="bg-white rounded-lg pt-3 sm:p-6 w-full">
        <div className="flex flex-col justify-between gap-3 items-center mb-6">
          <div className="flex items-center justify-between w-full ">
            <span className="text-sm font-normal font-mulish text-[#BBC8E8]">
              Анкета
            </span>
            <span className="text-sm font-normal font-mulish text-[#634F9E]">
              Анкета
            </span>
            <span className="text-sm font-normal font-mulish text-[#BBC8E8]">
              Анкета
            </span>
            <span className="text-sm font-normal font-mulish text-[#BBC8E8]">
              Анкета
            </span>
          </div>
          <div className="flex items-center relative justify-between w-full gap-2">
            <div className="relative font-mulish z-10 text-lg w-7 h-7 bg-[#EDABC6] rounded-full text-white flex items-center justify-center">
              1
            </div>
            <div className="absolute w-full z-[0] h-1 bg-[#BBC8E8] "></div>
            <div className="w-7 h-7 font-mulish text-lg relative z-10 bg-rgb rounded-full text-[#fff] flex items-center justify-center">
              2
            </div>
            <div className="w-7 h-7 font-mulish text-lg relative z-10 rounded-full bg-[#EDABC6] text-[#fff] flex items-center justify-center">
              3
            </div>
            <div className="w-7 h-7 font-mulish text-lg relative z-10 rounded-full bg-[#EDABC6] text-[#fff] flex items-center justify-center">
              4
            </div>
          </div>
        </div>

        <h2 className="text-center font-mulish text-xl font-semibold mb-6">
          Личность
        </h2>

        {/* О вас Section */}
        <div className="mb-6 border border-[#634F9E] p-5 rounded-2xl">
          <h3 className="block font-mulish font-normal text-base text-[#242430] mb-2">
            О вас
          </h3>
          <div className="space-y-3">
            <input min={'2006-01-01'} maxLength={5} type="date" onChange={(e)=> handleChange('year', e.target.value)} value={year} className="w-full font-mulish px-3 py-2 outline-none border rounded-lg focus:ring-2 focus:ring-purple-500"/>
              {/* <option value="">Возраст</option>
              <option value="18-25">18-25</option>
              <option value="26-35">26-35</option>
            </input> */}

            <select onChange={(e)=> handleChange('height', e.target.value)} value={height} className="w-full font-mulish px-3 py-2 outline-none border rounded-lg focus:ring-2 focus:ring-purple-500">
              <option value="">Рост</option>
              <option value="90-100">90-100</option>
              <option value="101-110">101-110</option>
              <option value="111-120">111-120</option>
              <option value="121-130">121-130</option>

              <option value="131-140">131-140</option>

              <option value="141-150">141-150</option>

              <option value="151-160">151-160</option>
              <option value="161-170">161-170</option>
              <option value="171-180">171-180</option>
              <option value="181-190">181-190</option>
              <option value="191-200">191-200</option>

            </select>
            <select onChange={(e)=> handleChange('weight', e.target.value)} value={weight} className="w-full font-mulish px-3 py-2 outline-none border rounded-lg focus:ring-2 focus:ring-purple-500">
              <option value="">Вес</option>
              <option value="60-70">60-70</option>
              <option value="70-80">70-80</option>
              <option value="80-90">80-90</option>
              <option value="90-100">90-100</option>
            </select>
            <select onChange={(e)=> handleChange('character', e.target.value)} value={character} className="w-full font-mulish px-3 py-2 outline-none border rounded-lg focus:ring-2 focus:ring-purple-500">
              <option value="">Ваш характер</option>
              <option value="calm">Спокойный</option>
              <option value="active">Активный</option>
            </select>
          </div>
        </div>

        {/* Расскажите о себе Section */}
        <div className="mb-6 border border-[#634F9E] p-5 rounded-2xl">
          <h3 className="block font-mulish font-normal text-base text-[#242430] mb-2">
            Расскажите о себе
          </h3>
          <div className="space-y-3">
            <select onChange={(e)=> handleChange('family', e.target.value)} value={family} className="w-full font-mulish px-3 py-2 outline-none border rounded-lg focus:ring-2 focus:ring-purple-500">
              <option value="">Семейное положение</option>
              <option value="single">Не женат/Не замужем</option>
              <option value="married">Женат/Замужем</option>
            </select>
            <select onChange={(e)=> handleChange('child', e.target.value)} value={child} className="w-full font-mulish px-3 py-2 outline-none border rounded-lg focus:ring-2 focus:ring-purple-500">
              <option value="">Количество детей</option>
              <option value="0">Нет</option>
              <option value="1-2">1-2</option>
            </select>
            <select onChange={(e)=> handleChange('mazxab', e.target.value)} value={mazxab} className="w-full font-mulish px-3 py-2 outline-none border rounded-lg focus:ring-2 focus:ring-purple-500">
              <option value="">Ваш Мазхаб</option>
              <option value="hanafi">Ханафи</option>
              <option value="shafi">Шафи</option>
            </select>
            <select onChange={(e)=> handleChange('talkChild', e.target.value)} value={talkChild} className="w-full font-mulish px-3 py-2 outline-none border rounded-lg focus:ring-2 focus:ring-purple-500">
              <option value="">Отношение к детям</option>
              <option value="positive">Положительное</option>
              <option value="neutral">Нейтральное</option>
            </select>
            <select onChange={(e)=> handleChange('migration', e.target.value)} value={migration} className="w-full font-mulish px-3 py-2 outline-none border rounded-lg focus:ring-2 focus:ring-purple-500">
              <option value="">Готовы ли вы к переезду</option>
              <option value="yes">Да</option>
              <option value="no">Нет</option>
            </select>
            <input
            onChange={(e)=> handleChange('vid', e.target.value)} value={vid}
              type="text"
              placeholder="Образование, вид деятельности"
              className="w-full font-mulish px-3 py-2 outline-none  border rounded-lg focus:ring-2 focus:ring-purple-500"
            />
          </div>
        </div>

        {/* Buttons */}
        <div className="flex justify-between flex-col gap-3">
          <button
            onClick={handlePersonalFormPrev}
            className="w-full text-base font-normal font-mulish py-3 text-purple-700 border-2 border-purple-700 rounded-full text-center"
          >
            Назад
          </button>
          <button
            onClick={handlePersonalForm}
            className="w-full py-3 text-base btn-rgb text-white font-mulish rounded-full"
          >
            Далее
          </button>
        {error !== "" && <p className="text-center font-mulish text-red-600 text-base mt-1">{error}</p>}
        </div>
      </div>
    </div>
  );
};

export default PersonalForm;
