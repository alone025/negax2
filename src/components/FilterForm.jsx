import React, { useState } from "react";
import seting from "../img/seting.png"

const FilterForm = () => {
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  const toggleFilter = () => {
    setIsFilterOpen((prev) => !prev);
  };

  return (
    <div className="relative text-black">
      {/* Trigger Button */}
      <button
        onClick={toggleFilter}
        className="absolute top-5 left-5 z-50 p-2  text-white rounded-full"
      >
        <img src={seting} alt="" />
      </button>

      {/* Filter Menu */}
      <div
        className={`fixed top-0 left-0 h-full w-[300px] bg-white shadow-lg transform ${
          isFilterOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out z-40`}
      >
        <div className="p-4">
          {/* Close Button */}
          <button
            onClick={toggleFilter}
            className="text-purple-600 text-lg font-bold"
          >
            ✕
          </button>

          {/* Filter Form */}
          <div className="mt-4 space-y-4">
            <div>
              <label className="block text-sm text-gray-700">Возраст</label>
              <input
                type="range"
                min="18"
                max="65"
                className="w-full mt-2"
              />
            </div>
            <div>
              <label className="block text-sm text-gray-700">Пол</label>
              <div className="flex items-center gap-3 mt-2">
                <button className="flex-1 p-2 border rounded text-gray-700 hover:bg-purple-200">
                  Мужской
                </button>
                <button className="flex-1 p-2 border rounded text-gray-700 hover:bg-purple-200">
                  Женский
                </button>
              </div>
            </div>
            <div>
              <label className="block text-sm text-gray-700">Страна</label>
              <input
                type="text"
                placeholder="Казахстан"
                className="w-full mt-2 p-2 border rounded"
              />
            </div>
            <div>
              <label className="block text-sm text-gray-700">Город</label>
              <input
                type="text"
                placeholder="Астана"
                className="w-full mt-2 p-2 border rounded"
              />
            </div>
            <div>
              <label className="block text-sm text-gray-700">Национальность</label>
              <select className="w-full mt-2 p-2 border rounded">
                <option>Укажите национальность</option>
                <option>Казах</option>
                <option>Узбек</option>
              </select>
            </div>
            <div>
              <label className="block text-sm text-gray-700">
                Семейное положение
              </label>
              <select className="w-full mt-2 p-2 border rounded">
                <option>Заполните поле</option>
                <option>Разведен(а)</option>
                <option>Не замужем/Не женат</option>
              </select>
            </div>
            <div>
              <label className="block text-sm text-gray-700">Только покрытые</label>
              <input type="checkbox" className="mt-2" />
            </div>
            <div>
              <button className="w-full mt-4 p-2 bg-purple-600 text-white rounded">
                Продолжить
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Overlay */}
      {isFilterOpen && (
        <div
          onClick={toggleFilter}
          className="fixed inset-0 bg-black bg-opacity-50 z-30"
        />
      )}
    </div>
  );
};

export default FilterForm;