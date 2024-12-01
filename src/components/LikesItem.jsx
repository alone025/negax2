import { HiOutlineX } from "react-icons/hi";
import ml from "../img/female-avatar.png"
import fm from "../img/male-avatar.png"


function LikesItem({ dataC, hnd }) {
  return (
    <div className="w-full relative min-h-[230px] bg-rgb text-white rounded-xl">
      <div
        onClick={() => window.open("/personals/ds", "_current")}
        className="absolute cursor-pointer top-4 left-4 flex flex-col font-semibold text-[12px] leading-4"
      >
        <p className="font-mulish font-semibold">
          {dataC.age % 2 === 0 ? "Сергей" : dataC.name }, {dataC.age} лет
        </p>
        <p className="font-mulish font-semibold">
          {dataC.country}, {dataC.city}
        </p>
        <p className="font-mulish font-semibold">№{dataC.idC}</p>
      </div>

        <img onClick={() => window.open("/personals/ds", "_current")} src={dataC.age % 2 === 0 ? ml : fm} alt="ml" className="pt-16" />

      <div
        onClick={() => hnd(dataC.id)}
        className="absolute cursor-pointer bg-white text-gray-400 left-[10%] w-10 h-10 rounded-full flex justify-center items-center text-3xl bottom-6"
      >
        <HiOutlineX />
      </div>
      <div className="absolute cursor-pointer bg-[#6A59A7] right-[10%] w-10 h-10 rounded-full flex justify-center items-center text-3xl bottom-6">
        {/* <HiHeart className='bg-rgb' /> */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="22"
          height="19"
          viewBox="0 0 22 19"
          fill="none"
        >
          <path
            d="M19.3234 2.03266C18.2097 0.926495 16.7333 0.251356 15.161 0.129196C13.5887 0.00703643 12.0242 0.44591 10.75 1.36654C9.41316 0.381559 7.74926 -0.0650798 6.09333 0.116568C4.43741 0.298217 2.91247 1.09466 1.82559 2.34551C0.73871 3.59636 0.170632 5.20871 0.235751 6.85786C0.30087 8.50702 0.994349 10.0705 2.17654 11.2334L8.70117 17.7072C9.24753 18.2399 9.98339 18.5384 10.75 18.5384C11.5165 18.5384 12.2524 18.2399 12.7988 17.7072L19.3234 11.2334C20.5501 10.0107 21.2387 8.3569 21.2387 6.63303C21.2387 4.90917 20.5501 3.25533 19.3234 2.03266V2.03266ZM17.842 9.79709L11.3173 16.2605C11.2431 16.3348 11.1547 16.3937 11.0573 16.434C10.9599 16.4742 10.8555 16.4949 10.75 16.4949C10.6445 16.4949 10.54 16.4742 10.4426 16.434C10.3452 16.3937 10.2569 16.3348 10.1826 16.2605L3.65798 9.76587C2.834 8.9315 2.3726 7.81067 2.3726 6.64344C2.3726 5.47621 2.834 4.35538 3.65798 3.52102C4.49762 2.6998 5.63005 2.23933 6.80997 2.23933C7.9899 2.23933 9.12232 2.6998 9.96197 3.52102C10.0596 3.61857 10.1758 3.696 10.3039 3.74884C10.4319 3.80168 10.5692 3.82888 10.7079 3.82888C10.8466 3.82888 10.984 3.80168 11.112 3.74884C11.24 3.696 11.3562 3.61857 11.4539 3.52102C12.2936 2.6998 13.426 2.23933 14.6059 2.23933C15.7858 2.23933 16.9183 2.6998 17.7579 3.52102C18.5932 4.34445 19.0697 5.4592 19.0855 6.62646C19.1012 7.79372 18.6548 8.92066 17.842 9.76587V9.79709Z"
            fill="white"
          />
        </svg>
      </div>
    </div>
  );
}

export default LikesItem;
