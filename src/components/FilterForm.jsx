import { useState } from "react";
import seting from "../img/filter.svg";
import RangeSlider from "./RangeSlider";

const FilterForm = ({ hnd }) => {
 
  const [gen, setgen] = useState("");



  return (
    <div className="relative text-black">
      <div>
        <div className="p-4 h-screen overflow-auto no-scrollbar">
          <button onClick={hnd} className="text-purple-600 text-lg font-bold">
            <img src={seting} alt="" />
          </button>

          <div className="mt-4 space-y-4">
            <RangeSlider />
            <div>
              <label className="block text-sm text-[#5E5E5E] font-mulish font-medium">Пол</label>
              <div className="flex items-center gap-3 mt-2">
                <button
                  onClick={() => setgen("boy")}
                  className={`flex-1 p-2 border rounded border-solid font-mulish font-medium flex flex-row items-center gap-2 ${
                    gen === "boy"
                      ? "border-[#634F9E]  text-[#634F9E]"
                      : "border-[#ACACAC]  text-[#ACACAC]"
                  }`}
                >
                  {gen === "boy" ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="15"
                      height="15"
                      viewBox="0 0 15 15"
                      fill="none"
                    >
                      <path
                        d="M14.9294 0.527388C14.8399 0.319538 14.6686 0.154367 14.4531 0.06805C14.347 0.0244631 14.2331 0.00134398 14.1179 0H10.5893C10.3554 0 10.131 0.0896192 9.96559 0.249143C9.80015 0.408666 9.70722 0.625026 9.70722 0.850626C9.70722 1.07623 9.80015 1.29259 9.96559 1.45211C10.131 1.61163 10.3554 1.70125 10.5893 1.70125H11.9919L9.87482 3.74275C8.62477 2.84062 7.06672 2.42862 5.51431 2.58969C3.9619 2.75077 2.5304 3.47296 1.50799 4.61088C0.48558 5.7488 -0.0518304 7.21796 0.00394454 8.7226C0.0597195 10.2273 0.704538 11.6557 1.80859 12.7203C2.91265 13.7849 4.39396 14.4067 5.95434 14.4605C7.51471 14.5143 9.03828 13.996 10.2183 13.0102C11.3984 12.0243 12.1474 10.6439 12.3144 9.14692C12.4814 7.64995 12.0542 6.14754 11.1186 4.94214L13.2357 2.90063V4.25313C13.2357 4.47873 13.3287 4.69509 13.4941 4.85461C13.6595 5.01414 13.8839 5.10376 14.1179 5.10376C14.3518 5.10376 14.5762 5.01414 14.7416 4.85461C14.9071 4.69509 15 4.47873 15 4.25313V0.850626C14.9986 0.739468 14.9746 0.629652 14.9294 0.527388ZM9.26615 11.4834C8.65288 12.0868 7.86717 12.5003 7.00921 12.6713C6.15125 12.8424 5.25991 12.7631 4.44883 12.4437C3.63775 12.1243 2.94369 11.5793 2.45513 10.878C1.96657 10.1767 1.70566 9.35107 1.70566 8.50626C1.70566 7.66145 1.96657 6.83577 2.45513 6.13451C2.94369 5.43325 3.63775 4.88818 4.44883 4.56879C5.25991 4.2494 6.15125 4.17017 7.00921 4.34119C7.86717 4.51222 8.65288 4.92575 9.26615 5.52907C10.0743 6.3241 10.527 7.39299 10.527 8.50626C10.527 9.61953 10.0743 10.6884 9.26615 11.4834Z"
                        fill="#634F9E"
                      />
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="15"
                      height="15"
                      viewBox="0 0 15 15"
                      fill="none"
                    >
                      <path
                        d="M14.9294 0.527388C14.8399 0.319538 14.6686 0.154367 14.4531 0.06805C14.347 0.0244631 14.2331 0.00134398 14.1179 0H10.5893C10.3554 0 10.131 0.0896192 9.96559 0.249143C9.80015 0.408666 9.70722 0.625026 9.70722 0.850626C9.70722 1.07623 9.80015 1.29259 9.96559 1.45211C10.131 1.61163 10.3554 1.70125 10.5893 1.70125H11.9919L9.87482 3.74275C8.62477 2.84062 7.06672 2.42862 5.51431 2.58969C3.9619 2.75077 2.5304 3.47296 1.50799 4.61088C0.48558 5.7488 -0.0518304 7.21796 0.00394454 8.7226C0.0597195 10.2273 0.704538 11.6557 1.80859 12.7203C2.91265 13.7849 4.39396 14.4067 5.95434 14.4605C7.51471 14.5143 9.03828 13.996 10.2183 13.0102C11.3984 12.0243 12.1474 10.6439 12.3144 9.14692C12.4814 7.64995 12.0542 6.14754 11.1186 4.94214L13.2357 2.90063V4.25313C13.2357 4.47873 13.3287 4.69509 13.4941 4.85461C13.6595 5.01414 13.8839 5.10376 14.1179 5.10376C14.3518 5.10376 14.5762 5.01414 14.7416 4.85461C14.9071 4.69509 15 4.47873 15 4.25313V0.850626C14.9986 0.739468 14.9746 0.629652 14.9294 0.527388ZM9.26615 11.4834C8.65288 12.0868 7.86717 12.5003 7.00921 12.6713C6.15125 12.8424 5.25991 12.7631 4.44883 12.4437C3.63775 12.1243 2.94369 11.5793 2.45513 10.878C1.96657 10.1767 1.70566 9.35107 1.70566 8.50626C1.70566 7.66145 1.96657 6.83577 2.45513 6.13451C2.94369 5.43325 3.63775 4.88818 4.44883 4.56879C5.25991 4.2494 6.15125 4.17017 7.00921 4.34119C7.86717 4.51222 8.65288 4.92575 9.26615 5.52907C10.0743 6.3241 10.527 7.39299 10.527 8.50626C10.527 9.61953 10.0743 10.6884 9.26615 11.4834Z"
                        fill="#ACACAC"
                      />
                    </svg>
                  )}
                  Мужской
                </button>
                <button
                  onClick={() => setgen("girl")}
                  className={`flex-1 p-2 border rounded border-solid font-mulish font-medium flex flex-row items-center gap-2 ${
                    gen === "girl"
                      ? "border-[#634F9E]  text-[#634F9E]"
                      : "border-[#ACACAC]  text-[#ACACAC]"
                  }`}
                >
                  {gen === "girl" ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="11"
                      height="15"
                      viewBox="0 0 11 15"
                      fill="none"
                    >
                      <path
                        d="M10.7812 5.254C10.7825 4.24783 10.4865 3.26252 9.92869 2.41548C9.37087 1.56844 8.57467 0.895368 7.63495 0.476458C6.69524 0.0575484 5.65163 -0.0895389 4.62847 0.0527203C3.6053 0.19498 2.64571 0.620587 1.86402 1.27884C1.08234 1.93709 0.511508 2.80023 0.219548 3.76542C-0.0724123 4.73062 -0.0731963 5.75717 0.21729 6.72279C0.507776 7.68841 1.07728 8.55237 1.85796 9.21175C2.63864 9.87113 3.59758 10.2981 4.62053 10.4419V12.0012H3.85044C3.6462 12.0012 3.45033 12.0802 3.30591 12.2208C3.16149 12.3614 3.08035 12.5521 3.08035 12.7509C3.08035 12.9498 3.16149 13.1404 3.30591 13.281C3.45033 13.4216 3.6462 13.5006 3.85044 13.5006H4.62053V14.2503C4.62053 14.4491 4.70167 14.6398 4.84609 14.7804C4.99051 14.921 5.18638 15 5.39062 15C5.59486 15 5.79074 14.921 5.93516 14.7804C6.07958 14.6398 6.16071 14.4491 6.16071 14.2503V13.5006H6.9308C7.13504 13.5006 7.33092 13.4216 7.47534 13.281C7.61975 13.1404 7.70089 12.9498 7.70089 12.7509C7.70089 12.5521 7.61975 12.3614 7.47534 12.2208C7.33092 12.0802 7.13504 12.0012 6.9308 12.0012H6.16071V10.4419C7.4426 10.2617 8.61502 9.63834 9.46348 8.6857C10.3119 7.73305 10.7797 6.51487 10.7812 5.254ZM5.39062 9.00246C4.62908 9.00246 3.88463 8.78262 3.25143 8.37073C2.61823 7.95884 2.1247 7.37341 1.83327 6.68847C1.54184 6.00353 1.46559 5.24984 1.61416 4.52271C1.76273 3.79558 2.12945 3.12767 2.66794 2.60344C3.20644 2.0792 3.89252 1.7222 4.63944 1.57756C5.38635 1.43293 6.16055 1.50716 6.86412 1.79087C7.5677 2.07458 8.16906 2.55503 8.59215 3.17147C9.01524 3.7879 9.24107 4.51262 9.24107 5.254C9.24107 5.74625 9.14147 6.23369 8.94797 6.68847C8.75447 7.14326 8.47085 7.55648 8.1133 7.90456C7.75575 8.25264 7.33128 8.52875 6.86412 8.71713C6.39697 8.9055 5.89627 9.00246 5.39062 9.00246Z"
                        fill="#634F9E"
                      />
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="11"
                      height="15"
                      viewBox="0 0 11 15"
                      fill="none"
                    >
                      <path
                        d="M10.7812 5.254C10.7825 4.24783 10.4865 3.26252 9.92869 2.41548C9.37087 1.56844 8.57467 0.895368 7.63495 0.476458C6.69524 0.0575484 5.65163 -0.0895389 4.62847 0.0527203C3.6053 0.19498 2.64571 0.620587 1.86402 1.27884C1.08234 1.93709 0.511508 2.80023 0.219548 3.76542C-0.0724123 4.73062 -0.0731963 5.75717 0.21729 6.72279C0.507776 7.68841 1.07728 8.55237 1.85796 9.21175C2.63864 9.87113 3.59758 10.2981 4.62053 10.4419V12.0012H3.85044C3.6462 12.0012 3.45033 12.0802 3.30591 12.2208C3.16149 12.3614 3.08035 12.5521 3.08035 12.7509C3.08035 12.9498 3.16149 13.1404 3.30591 13.281C3.45033 13.4216 3.6462 13.5006 3.85044 13.5006H4.62053V14.2503C4.62053 14.4491 4.70167 14.6398 4.84609 14.7804C4.99051 14.921 5.18638 15 5.39062 15C5.59486 15 5.79074 14.921 5.93516 14.7804C6.07958 14.6398 6.16071 14.4491 6.16071 14.2503V13.5006H6.9308C7.13504 13.5006 7.33092 13.4216 7.47534 13.281C7.61975 13.1404 7.70089 12.9498 7.70089 12.7509C7.70089 12.5521 7.61975 12.3614 7.47534 12.2208C7.33092 12.0802 7.13504 12.0012 6.9308 12.0012H6.16071V10.4419C7.4426 10.2617 8.61502 9.63834 9.46348 8.6857C10.3119 7.73305 10.7797 6.51487 10.7812 5.254ZM5.39062 9.00246C4.62908 9.00246 3.88463 8.78262 3.25143 8.37073C2.61823 7.95884 2.1247 7.37341 1.83327 6.68847C1.54184 6.00353 1.46559 5.24984 1.61416 4.52271C1.76273 3.79558 2.12945 3.12767 2.66794 2.60344C3.20644 2.0792 3.89252 1.7222 4.63944 1.57756C5.38635 1.43293 6.16055 1.50716 6.86412 1.79087C7.5677 2.07458 8.16906 2.55503 8.59215 3.17147C9.01524 3.7879 9.24107 4.51262 9.24107 5.254C9.24107 5.74625 9.14147 6.23369 8.94797 6.68847C8.75447 7.14326 8.47085 7.55648 8.1133 7.90456C7.75575 8.25264 7.33128 8.52875 6.86412 8.71713C6.39697 8.9055 5.89627 9.00246 5.39062 9.00246Z"
                        fill="#ACACAC"
                      />
                    </svg>
                  )}{" "}
                  Женский
                </button>
              </div>
            </div>
            <div>
              <label className="block text-sm text-[#5E5E5E] font-mulish font-medium">Страна</label>
              <input
                type="text"
                placeholder="Казахстан"
                className="w-full mt-2 p-2 border border-solid border-[#ACACAC] font-mulish font-normal placeholder:text-[#5E5E5E] rounded outline-none focus:border-[#634F9E]"
              />
            </div>
            <div>
              <label className="block text-sm text-[#5E5E5E] font-mulish font-medium">Город</label>
              <input
                type="text"
                placeholder="Астана"
                className="w-full mt-2 p-2 border border-solid border-[#ACACAC] font-mulish font-normal placeholder:text-[#5E5E5E] rounded outline-none focus:border-[#634F9E]"
              />
            </div>
            <div>
              <label className="block text-sm text-[#5E5E5E] font-mulish font-medium">
                Национальность
              </label>
              <select className="w-full mt-2 p-2 border border-solid border-[#ACACAC] font-mulish font-normal placeholder:text-[#5E5E5E] rounded outline-none focus:border-[#634F9E]">
                <option>Укажите национальность</option>
                <option>Казах</option>
                <option>Узбек</option>
              </select>
            </div>
            <div>
              <label className="block text-sm text-[#5E5E5E] font-mulish font-medium">
                Семейное положение
              </label>
              <select className="w-full mt-2 p-2 border border-solid border-[#ACACAC] font-mulish font-normal placeholder:text-[#5E5E5E] rounded outline-none focus:border-[#634F9E]">
                <option>Заполните поле</option>
                <option>Разведен(а)</option>
                <option>Не замужем/Не женат</option>
              </select>
            </div>
            <div>
              <label className="block text-sm text-[#5E5E5E] font-mulish font-medium">Поиск по слову</label>
              <input
                type="text"
                placeholder="Заполни поле"
                className="w-full mt-2 p-2 border border-solid border-[#ACACAC] font-mulish font-normal placeholder:text-[#5E5E5E] rounded outline-none focus:border-[#634F9E]"
              />
            </div>

            <div>
              <label className="block text-sm text-[#5E5E5E] font-mulish font-medium">Поиск по номеру анкеты</label>
              <input
                type="text"
                placeholder="Заполни поле"
                className="w-full mt-2 p-2 border border-solid border-[#ACACAC] font-mulish font-normal placeholder:text-[#5E5E5E] rounded outline-none focus:border-[#634F9E]"
              />
            </div>
            <div className="flex flex-row items-center justify-between gap-1">
              <label className="block text-sm text-[#5E5E5E] font-mulish font-medium">
                Только покрытые
              </label>
              <label className="switch relative inline-block w-[50px] h-[24px]">
  <input id="slider-checkInput" type="checkbox" className="opacity-0 w-0 h-0"/>
  <span id="slider-check" className="slider round absolute cursor-pointer top-0 left-0 right-0 bottom-0 bg-[#ccc] transition-all"></span>
</label>

            </div>

            <div className="flex flex-row items-center justify-between gap-1">
              <label className="block text-sm text-[#5E5E5E] font-mulish font-medium">
              Только с наличием фото
              </label>
              <label className="switch relative inline-block w-[50px] h-[24px]">
  <input id="slider-checkInput" type="checkbox" className="opacity-0 w-0 h-0"/>
  <span id="slider-check" className="slider round absolute cursor-pointer top-0 left-0 right-0 bottom-0 bg-[#ccc] transition-all"></span>
</label>

            </div>
            <div>
              <button className="w-full mt-4 p-2 py-3 bg-[#634F9E] font-poppins font-bold text-white rounded">
                Продолжить
              </button>
              <button className="font-poppins font-bold rounded p-2 py-3 w-full shadow mt-2 text-[#ACACAC] text-[14px]">Сбросить фильтры</button>
            </div>
          </div>
        </div>
      </div>



    </div>
  );
};

export default FilterForm;
