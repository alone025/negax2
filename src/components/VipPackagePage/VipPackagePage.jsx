import React from "react";

const VipPackagePage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="flex items-center justify-center py-4 bg-white shadow">
        <h1 className="text-lg font-semibold text-gray-800">Платные пакеты</h1>
      </header>

      {/* Card */}
      <div className="p-4">
        <div className="bg-white rounded-xl shadow-md p-6">
          <div className="bg-pink-100 text-center rounded-t-xl py-3">
            <h2 className="text-pink-600 font-bold text-lg">ВИП ПАКЕТ</h2>
          </div>
          <div className="p-4 text-center">
            <p className="text-gray-600 text-sm mb-4">30 дней</p>
            <a
              href="neke-anketa.kz/#price"
              className="text-blue-600 underline text-sm"
            >
              neke-anketa.kz/#price
            </a>
          </div>
          <button className="bg-purple-600 text-white w-full py-3 rounded-b-xl text-sm font-medium mt-4">
            Оплатить 15000т
          </button>
        </div>
      </div>

      {/* Bottom Navigation */}
      <footer className="fixed bottom-0 left-0 right-0 bg-white shadow-md py-2">
        <div className="flex justify-around">
          <button className="text-purple-600">
            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M12 2L2 7v10a2 2 0 002 2h16a2 2 0 002-2V7l-10-5z"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
          <button className="text-gray-400">
            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M21 21l-4.35-4.35M10.5 15.5a5 5 0 100-10 5 5 0 000 10z"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
          <button className="text-gray-400">
            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M5 12h14M12 5l7 7-7 7"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
      </footer>
    </div>
  );
};

export default VipPackagePage;
