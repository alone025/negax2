import { TbWorld } from "react-icons/tb";
import VipPackagePage from "../components/VipPackagePage/VipPackagePage";
import VipPage from "../components/VipPage";
import logo from "../img/logo.png"

function Shopping() {
  return (
    <div className="container relative mt-3">
      <header className="absolute container top-0 flex justify-between items-center w-full">
            <div className="flex items-center gap-3">
                <img className="w-[40px]  " src={logo} alt="" />
                <h1 className="font-normal colorr text-[12px] leading-4 ">NIKAH.SPACE</h1>
            </div>
        </header>
      <VipPage />
      <VipPackagePage />
    </div>
  );
}

export default Shopping;
