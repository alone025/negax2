import React from "react";
import Footer from "../components/Footer";
import Headerlike from "../components/Headerlike";

function LIkelayout({ children }) {
  return (
    <div className=" container flex flex-col gap-8 pt-8 px-2 text-white relative">
      <Headerlike/>
      <div className="mt-[130px]">{children}</div>
      <Footer/>
    </div>
  );
}

export default LIkelayout;
