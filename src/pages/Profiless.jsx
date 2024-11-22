import logo from "../img/logo.png"
import setting from "../img/setting.png"

const Profiless = () => {

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
      <div className="flex flex-col items-center pt-16 px-4 min-h-screen   relative">
    <header className="absolute container top-5 flex justify-between items-center w-full">
          <div className="flex items-center gap-3">
              <img className="w-[40px]  " src={logo} alt="" />
              <h1 className="font-normal colorr text-[12px] leading-4 ">NIKAH.SPACE</h1>
          </div>
          <div className="cursor-pointer" >
            <img src={setting} alt="" />
          </div>
    </header>
  
        {/* User Information */}
        <div className="bg-white p-4 rounded-lg shadow-md">
          <h1 className="text-xl font-bold text-purple-600">
            {user.name}, {user.age}
          </h1>
          <h2 className="text-gray-500 mt-2">О себе</h2>
          <ul className="text-gray-600 space-y-1 mt-2">
            <li>Ватсап: {user.contacts.whatsapp}</li>
            <li>Инстаграм: {user.contacts.instagram}</li>
            <li>Телеграм: {user.contacts.telegram}</li>
            <li>Фейсбук: {user.contacts.facebook}</li>
          </ul>
  
          <div className="mt-4 text-purple-600 font-semibold">
            Рост: {user.height} см | Вес: {user.weight} кг
          </div>
        </div>
  
        {/* Additional Details */}
        <div className="mt-6 space-y-4">
          <ProfileSection title="Религиозность" items={user.religiosity} />
          <ProfileSection title="Образование, вид деятельности" items={user.education} />
          <ProfileSection title="Семейное положение" items={[user.maritalStatus]} />
          <ProfileSection title="Готовы ли вы к переезду:" items={[user.readyToMove]} />
          <ProfileSection title="Количество детей" items={[String(user.childrenCount)]} />
          <ProfileSection title="Ваш характер:" items={[user.character]} />
        </div>
  
        {/* Gallery */}
        <div className="mt-6">
          <h2 className="font-bold text-gray-600 mb-2">Галерея</h2>
          <div className="grid grid-cols-3 gap-2">
            {user.gallery.map((image, index) => (
              <div
                key={index}
                className="w-full h-20 bg-gray-300 rounded-lg"
                style={{ backgroundImage: `url(${image})`, backgroundSize: "cover" }}
              />
            ))}
          </div>
        </div>
  
        {/* Actions */}
        <div className="mt-6 space-y-2">
          <button className="w-full bg-white text-purple-600 border border-purple-600 py-2 rounded-lg font-semibold hover:bg-gray-100">
            Редактировать профиль
          </button>
          <button className="w-full bg-purple-600 text-white py-2 rounded-lg font-semibold hover:bg-purple-700">
            Выйти из учетной записи
          </button>
          <button className="w-full bg-red-600 text-white py-2 rounded-lg font-semibold hover:bg-red-700">
            Удалить учетную запись
          </button>
        </div>
      </div>
    );
  };
  
  const ProfileSection = ({ title, items }) => (
    <div>
      <h3 className="text-gray-500 font-semibold">{title}</h3>
      <div className="flex flex-wrap gap-2 mt-2">
        {items.map((item, index) => (
          <span
            key={index}
            className="bg-purple-100 text-purple-600 px-2 py-1 rounded-lg text-sm"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
  
  export default Profiless;
  