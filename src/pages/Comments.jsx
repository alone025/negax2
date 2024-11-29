import logo from "../img/logo2.png";
import setting from "../img/setting.svg";
import time from "../img/time.svg";
import img1 from "../img/otziv1.png";
import Footer from "../components/Footer";
import { useState } from "react";
import SettingForm from "../components/SettingForm";

const Comments = () => {
    const [isMenuOpen2, setIsMenuOpen2] = useState(false);
    const [searchQuery, setSearchQuery] = useState(""); // State for the search query

    const cardData = [
        { img: img1, text: "Отзыв 1" },
        { img: img1, text: "Отзыв 2" },
        { img: img1, text: "Отзыв 3" },
    ];

    const handleSetting2 = () => {
        setIsMenuOpen2((prev) => !prev);
    };

    // Filter cardData based on searchQuery
    const filteredCards = cardData.filter((card) =>
        card.text.toLowerCase().includes(searchQuery.toLowerCase().trim())
    );

    return (
        <div className="container pt-[68px]">
            <header className="absolute container top-5 flex justify-between items-center w-full">
                <div className="flex items-center gap-3">
                    <img className="w-[40px]" src={logo} alt="" />
                    <h1
                        onClick={() => window.open("/", "_current")}
                        className="font-normal cursor-pointer rgb-text font-pro-monument text-[13px] md:text-2xl leading-4"
                    >
                        NIKAH.SPACE
                    </h1>
                </div>
                <div onClick={handleSetting2} className="cursor-pointer">
                    <img src={setting} alt="" />
                </div>
            </header>

            <div
                className={`fixed cursor-pointer rounded-l-[30px] top-0 h-full w-[270px] bg-white shadow-lg transform ${
                    isMenuOpen2 ? "right-0" : "-translate-x-full left-0"
                } transition-transform duration-300 ease-in-out z-50`}
            >
                <SettingForm />
            </div>

            {isMenuOpen2 && (
                <div
                    onClick={handleSetting2}
                    className="fixed inset-0 bg-black bg-opacity-50 z-40"
                />
            )}

            <h1 className="text-2xl md:text-[34px] rgb-text font-monsetrat text-center leading-7">
                Отзывы
            </h1>

            {/* Search Input */}
            <input
                type="text"
                className="mt-5 font-mulish placeholder:text-[#6C757D] text-[#000] font-normal text-base px-3 py-2 rounded border border-solid border-[#CED4DA] w-full outline-none"
                placeholder="Поиск"
                value={searchQuery} // Bind to searchQuery state
                onChange={(e) => setSearchQuery(e.target.value)} // Update searchQuery on input
            />

            <div className="cardes grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 mt-6">
                {filteredCards.map((c, ck) => (
                    <CardOtziv key={ck} img={c.img} text={c.text} />
                ))}
            </div>
           {
            filteredCards.length !== 0 && ( <div className="pagination w-full flex justify-center mb-5">
                <div className="div cursor-pointer flex bg-[#FFF] text-sm font-mulish font-normal text-[#FF9BAD] flex-row">
                    <p className="border-y-2 w-8 h-8 flex items-center justify-center border-l-2 border-r-2 rounded-l border-[#DEE2E6]">
                        1
                    </p>
                    <p className="border-y-2 w-8 h-8 flex items-center justify-center border-r-2 border-[#DEE2E6]">
                        2
                    </p>
                    <p className="border-y-2 w-8 h-8 flex items-center justify-center border-r-2 border-[#DEE2E6]">
                        3
                    </p>
                    <p className="border-y-2 w-8 h-8 flex items-center justify-center border-r-2 border-[#DEE2E6]">
                        4
                    </p>
                    <p className="border-y-2 w-8 h-8 flex items-center justify-center border-r-2 border-[#DEE2E6]">
                        ›
                    </p>
                    <p className="border-y-2 w-8 h-8 flex items-center justify-center border-r-2 border-[#DEE2E6] rounded-r">
                        »
                    </p>
                </div>
            </div>)
           }

            <Footer />
        </div>
    );
};

const CardOtziv = ({ img, text }) => {
    return (
        <div className="carde mb-6 lg:mb-8">
            <div className="img">
                <img src={img} alt="" />
            </div>
            <div className="txt border-b border-l border-r border-solid border-[#00000020] rounded-b px-5 pt-3 pb-2">
                <p className="text-lg font-monsetrat">{text}</p>
                <div className="btm-cont flex flex-row justify-between">
                    <p
                        onClick={() => window.open("/comments/as", "_current")}
                        className="rgb-text cursor-pointer hover:underline text-xs font-normal font-mulish"
                    >
                        читать далее
                    </p>
                    <div className="tm flex flex-row gap-1">
                        <p className="rgb-text text-sm font-normal font-mulish">
                            26.02.24
                        </p>
                        <img src={time} alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Comments;
