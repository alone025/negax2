
import { useState } from "react";
import Footer from "../components/Footer";
import Headerlike from "../components/Headerlike";
import Likes from "../pages/Likes";

function LIkelayout() {
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


  return (
    <div className="container pb-[60px] flex flex-col gap-8 pt-8 px-2 text-white relative">
      <Headerlike searchTerm={searchTerm} handleSearchChange={handleSearchChange}/>
      <div className="mt-[130px]">
        <Likes data={filteredProfiles} hnd={handleChange} />
      </div>
      <Footer/>
    </div>
  );
}

export default LIkelayout;
