
import tasbex from "../img/tasbex.png"

const MarketDetail = () => {
  return (
    <div className="container mx-auto p-4">
      <h2 onClick={()=> window.open("/market", "_current")} className="text-3xl font-mulish cursor-pointer font-bold text-center text-gray-800 mb-6">
        Market
      </h2>

      <div className="w-full h-64 md:h-96 mb-4">
        <img
          src={tasbex}
          alt={''}
          className="w-full h-full object-cover rounded"
        />
      </div>

      <h1 className="text-2xl font-mulish md:text-3xl font-bold text-gray-800 mb-2">
      Таспих 001

      </h1>

      <p className="text-xl font-mulish text-green-600 font-semibold mb-4">
      7000тг
      </p>

     
      <p className="text-gray-700 font-mulish leading-6 mb-6">Электронный таспих с usb зарядкой</p>

      <button className="w-full font-mulish bg-blue-500 text-white py-3 rounded-lg font-semibold hover:bg-blue-600 transition">
        Купить
      </button>
    </div>
  );
};

export default MarketDetail;
