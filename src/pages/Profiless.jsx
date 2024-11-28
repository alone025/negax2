import { useState } from "react";
import Gallery from "../components/Galery";
import SettingForm from "../components/SettingForm";
import EditProfile from "../components/EditProfile";
import logo from "../img/logo.png";
import setting from "../img/setting.png";

const Profiless = () => {
  const [isMenuOpen2, setIsMenuOpen2] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [user, setUser] = useState({
    name: "Алексей",
    age: 23,
    contacts: {
      whatsapp: "87051669055",
      instagram: "@name",
      telegram: "@name",
      facebook: "@name",
    },
    height: 173,
    weight: 75,
    religiosity: [
      "Совершаю все обязательные намазы",
      "Не умею читать Коран",
      "Ношу бороду",
    ],
    education: [
      "Общее среднее",
      "Казахский национальный университет им. Аль-Фараби",
    ],
    maritalStatus: "Разведен(а)",
    readyToMove: "Да",
    childrenCount: 7,
    character: "Спокойный",
    gallery: ["/image1.png", "/image2.png", "/image3.png", "/image4.png"],
  });

  const handleSetting2 = () => {
    setIsMenuOpen2((prev) => !prev);
  };

  const handleEditProfile = (updatedUser) => {
    setUser(updatedUser); 
    setIsEditing(false); 
  };

  if (isEditing) {
    return (
      <EditProfile
        user={user}
        onSave={handleEditProfile}
        onCancel={() => setIsEditing(false)}
      />
    );
  }

  return (
    <div className="flex flex-col pb-[50px] container pt-16 px-4 min-h-screen relative">
      <header className="absolute left-0 container top-5 flex justify-between items-center w-full">
        <div className="flex items-center gap-3">
          <img className="w-[40px]" src={logo} alt="Logo" />
          <h1
            onClick={() => window.open("/", "_current")}
            className="font-normal rgb-text cursor-pointer font-pro-monument text-[13px] md:text-2xl leading-4"
          >
            NIKAH.SPACE
          </h1>
        </div>
        <div onClick={handleSetting2} className="cursor-pointer">
          <img src={setting} alt="Settings" />
        </div>
      </header>

      <div
        className={`fixed cursor-pointer rounded-l-[30px] top-0 h-full w-[270px] bg-white shadow-lg transform ${
          isMenuOpen2 ? "right-0" : "-translate-x-full left-0"
        } transition-transform duration-300 ease-in-out z-50`}
      >
        <SettingForm />
      </div>

      {isMenuOpen2 && (
        <div
          onClick={handleSetting2}
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
        />
      )}

      <div className="mt-6">
        <h1 className="text-2xl font-mulish font-medium text-[#131313]">
          {user.name}, {user.age}
        </h1>
        <h2 className="mt-6 text-lg font-mulish font-medium text-[#000000]">
          О себе
        </h2>
        <ul className="text-[#000000] opacity-40 space-y-2 text-base font-mulish font-medium mt-2">
          <li>Ватсап: {user.contacts.whatsapp}</li>
          <li>Инстаграм: {user.contacts.instagram}</li>
          <li>Телеграм: {user.contacts.telegram}</li>
          <li>Фейсбук: {user.contacts.facebook}</li>
        </ul>

        <div className="mt-4 flex flex-row gap-2 text-white text-sm font-mulish font-medium">
          <div className="dv1 rounded-sm bg-[#6A59A7] px-2">
            Рост: {user.height} см
          </div>
          <div className="dv2 rounded-sm bg-[#6A59A7] px-2">
            Вес: {user.weight} кг
          </div>
        </div>
      </div>

      <hr className="w-full my-3" />

      <div className="space-y-4">
        <ProfileSection title="Религиозность" items={user.religiosity} />
        <hr className="w-full my-3" />
        <ProfileSection title="Образование, вид деятельности" items={user.education} />
        <hr className="w-full my-3" />
        <ProfileSection title="Семейное положение" items={[user.maritalStatus]} />
        <hr className="w-full my-3" />
        <ProfileSection title="Готовы ли вы к переезду:" items={[user.readyToMove]} />
        <hr className="w-full my-3" />
        <ProfileSection title="Количество детей" items={[String(user.childrenCount)]} />
        <hr className="w-full my-3" />
        <ProfileSection title="Ваш характер:" items={[user.character]} />
        <hr className="w-full my-3" />
      </div>

      <div className="mt-5">
        <h2 className="text-[#5E5E5E] font-mulish text-sm md:text-base font-medium mb-2">
          Галерея
        </h2>
        <Gallery />
      </div>

      <div className="mt-10 space-y-2">
      <button onClick={() => setIsEditing(true)} className="w-full bg-white text-[#6A59A7] shadow py-3 rounded-lg font-poppins font-semibold hover:bg-gray-100">
            Редактировать профиль
          </button>
          <button className="w-full bg-[#6A59A7] text-white py-3 font-poppins rounded-lg font-semibold ">
            Выйти из учетной записи
          </button>
          <button className="w-full bg-[#6A59A7] text-white py-3 rounded-lg font-poppins font-semibold">
            Удалить учетную запись
          </button>
      </div>
    </div>
  );
};

const ProfileSection = ({ title, items }) => (
  <div>
    <h3 className="text-[#000000] text-xl font-mulish font-medium">{title}</h3>
    <div className="flex flex-wrap gap-2 mt-2">
      {items.map((item, index) => (
        <span
          key={index}
          className="bg-[#6A59A7] text-white px-2 py-1 rounded-sm font-mulish font-medium text-sm"
        >
          {item}
        </span>
      ))}
    </div>
  </div>
);

export default Profiless;
