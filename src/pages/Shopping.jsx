import VipPage from "../components/VipPage";
import logo from "../img/logo2.png"
import Footer from "../components/Footer";

function Shopping() {
  return (
    <div className="container relative">
      <header className="absolute container top-2 flex justify-between items-center w-full">
            <div className="flex items-center gap-3">
                <img className="w-[40px]  " src={logo} alt="" />
                <h1 onClick={()=> window.open("/", "_current")} className="font-normal cursor-pointer rgb-text font-pro-monument text-[13px] md:text-2xl leading-4">NIKAH.SPACE</h1>
            </div>
      </header>
      
      <VipPage />
      <Footer/>
    </div>
  );
}

export default Shopping;
