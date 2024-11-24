
import { FaSearch } from 'react-icons/fa'
import { HiChevronLeft } from 'react-icons/hi'

function Headerlike() {
  return (
    <div className="flex flex-col gap-8 pt-8 pb-4 px-2 fixed bg-white top-0 left-0 right-0 z-10">
        <div className="flex relative justify-center items-center text-[#ACACAC]">
          <p className="font-medium text-base font-mulish leading-5 ">Вас лайкнули</p>
          <div onClick={()=> window.open("/", "_current")} className="absolute left-0 text-2xl cursor-pointer"><HiChevronLeft/></div>
        </div>
        <div className="px-2 w-full relative">
        <FaSearch  className="absolute text-[#acacac] text-xl cursor-pointer left-5 top-3"/>
          <input
            type="text"
            placeholder="Поиск"
            className="w-full rounded border-[#ACACAC] font-mulish border pl-10 py-2 bg-transparent outline-none text-black placeholder:text-[#ACACAC]"
          />
        </div>
      </div>
  )
}

export default Headerlike