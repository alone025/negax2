import Gallery from "../components/Galery";
import prevIcon from "../img/prev.svg"
import dots from "../img/3dot.svg"

import vector from "../img/vector.svg";
import xxx from "../img/xIcon.svg";
import group1 from "../img/share.svg";

const ProfilePage = () => {

  const user = {
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
      gallery: [
        "/image1.png",
        "/image2.png",
        "/image3.png",
        "/image4.png",
      ],
    };
  
    return (
      <div className="flex flex-col min-h-screen relative">
    {/* <header className="absolute container top-5 flex justify-between items-center w-full">
          <div className="flex items-center gap-3">
              <img className="w-[40px]  " src={logo} alt="" />
              <h1 onClick={()=> window.open("/", "_current")} className="font-normal rgb-text cursor-pointer font-pro-monument text-[13px] md:text-2xl leading-4 ">NIKAH.SPACE</h1>
          </div>
          <div className="cursor-pointer" >
            <img src={setting} alt="" />
          </div>
    </header> */}

    <header>
        <div className="bg-div flex flex-col items-center relative min-h-[355px] w-full bg-[#ACACAC]">
            <div className="tope pt-10 flex flex-row items-start justify-between container">
                <img onClick={()=> window.open("/personals", "_current")} src={prevIcon} alt="" />
                <img src={dots} alt="" />
            </div>

            <section className="container absolute -bottom-3 flex justify-between items-center">
        <div className="w-[65px] bg-white cursor-pointer h-[65px] rounded-full shadow border flex items-center justify-center">
          <img src={group1} alt="" />
        </div>
        <div className=" relative bg-white cursor-pointer w-[65px] h-[65px] rounded-full shadow border flex items-center justify-center">
          <img src={xxx} alt="" />
        </div>
        <div className="w-[65px] bg-white cursor-pointer h-[65px] rounded-full shadow border flex items-center justify-center">
          <img src={vector} alt="" />
        </div>
      </section>
        </div>
    </header>
  
        
        <div className="container">
        <div className="mt-12">
          <h1 className="text-2xl font-mulish font-medium text-[#131313]">
            {user.name}, {user.age}
          </h1>
          <h2 className=" mt-6 text-lg font-mulish font-medium text-[#000000]">О себе</h2>
          <ul className="text-[#000000] opacity-40 space-y-2 text-base font-mulish font-medium mt-2">
            <li>Ватсап: {user.contacts.whatsapp}</li>
            <li>Инстаграм: {user.contacts.instagram}</li>
            <li>Телеграм: {user.contacts.telegram}</li>
            <li>Фейсбук: {user.contacts.facebook}</li>
          </ul>
  
          <div className="mt-4 flex flex-row gap-2 text-white text-sm font-mulish font-medium">
            <div className="dv1 rounded-sm bg-[#6A59A7] px-2">Рост: {user.height} см</div>
            <div className="dv2 rounded-sm bg-[#6A59A7] px-2">Вес: {user.weight} кг</div>
          </div>
        </div>

        <hr className="w-full my-3" />
  
      
        <div className=" space-y-4">
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
          <h2 className="text-[#5E5E5E] font-mulish text-sm md:text-base font-medium mb-2">Галерея</h2>
          {/* <div className="grid grid-cols-3 gap-2">
            {user.gallery.map((image, index) => (
              <div
                key={index}
                className="w-full h-20 bg-gray-300 rounded-lg"
                style={{ backgroundImage: `url(${image})`, backgroundSize: "cover" }}
              />
            ))}
          </div> */}
          <Gallery/>
        </div>
  
       
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
  
  export default ProfilePage;
  