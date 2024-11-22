const Personals = () => {
    const profiles = [
      {
        name: "Катя",
        age: 20,
        location: "Казахстан, Астана",
        id: 8836,
        avatar: "/female-avatar.png", // Avatar rasmi
      },
      {
        name: "Ахмад",
        age: 25,
        location: "Казахстан, Алматы",
        id: 8742,
        avatar: "/male-avatar.png", // Avatar rasmi
      },
      {
        name: "Ахмад",
        age: 25,
        location: "Казахстан, Алматы",
        id: 8742,
        avatar: "/male-avatar.png", // Avatar rasmi
      },
      {
        name: "Ахмад",
        age: 25,
        location: "Казахстан, Алматы",
        id: 8742,
        avatar: "/male-avatar.png", // Avatar rasmi
      },
      {
        name: "Ахмад",
        age: 25,
        location: "Казахстан, Алматы",
        id: 8742,
        avatar: "/male-avatar.png", // Avatar rasmi
      },
      {
        name: "Ахмад",
        age: 25,
        location: "Казахстан, Алматы",
        id: 8742,
        avatar: "/male-avatar.png", // Avatar rasmi
      },
      {
        name: "Ахмад",
        age: 25,
        location: "Казахстан, Алматы",
        id: 8742,
        avatar: "/male-avatar.png", // Avatar rasmi
      },
      // Ko'proq foydalanuvchi qo'shishingiz mumkin
    ];
  
    return (
      <div className="bg-gray-50 min-h-screen p-6">
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <div className="flex items-center">
            <img
              src="/logo.png"
              alt="Nikah.Space Logo"
              className="h-8 mr-2"
            />
            <span className="text-purple-600 font-bold text-lg">Nikah.Space</span>
          </div>
          <div className="flex space-x-4">
            <button>
              <i className="fas fa-sliders-h text-purple-600 text-xl"></i>
            </button>
            <button>
              <i className="fas fa-question-circle text-purple-600 text-xl"></i>
            </button>
          </div>
        </div>
  
        {/* Title */}
        <h1 className="text-xl font-bold text-purple-600 mb-4">Анкеты</h1>
  
        {/* Profiles Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {profiles.map((profile, index) => (
            <div
              key={index}
              className="bg-gradient-to-b from-purple-500 to-pink-500 text-white p-4 rounded-xl shadow-lg"
            >
              <img
                src={profile.avatar}
                alt={profile.name}
                className="w-20 h-20 mx-auto mb-4 rounded-full border-4 border-white"
              />
              <h2 className="text-lg font-bold text-center">{profile.name}, {profile.age} лет</h2>
              <p className="text-center text-sm">{profile.location}</p>
              <p className="text-center text-xs mt-2">№{profile.id}</p>
              <button className="mt-4 w-full bg-white text-purple-600 font-bold py-2 rounded-lg hover:bg-gray-100 transition">
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
      </div>
    );
  };
  
  export default Personals;
  