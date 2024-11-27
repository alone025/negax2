import { useState } from "react";
import { GoChevronLeft, GoHeart } from "react-icons/go";
import Footer from "../components/Footer";

const LikesH = () => {
  const [profiles, setProfiles] = useState(
    Array(10)
      .fill(null)
      .map((_, index) => ({ id: index, name: "Катя", age: 20 + index }))
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
      profile.age.toString().includes(normalizedSearchTerm)
  );

  return (
    <div className="min-h-screen pb-[50px] container pt-2">
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
        {filteredProfiles.map((profile, index) => (
          <div
            key={index}
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
            <button
              onClick={() => handleChange(profile.id)}
              className="w-10 h-10 rounded-full text-white font-extrabold bg-rgb flex items-center justify-center shadow"
            >
              <GoHeart />
            </button>
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default LikesH;
