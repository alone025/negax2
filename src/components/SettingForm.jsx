const SettingForm = () => {
  const links = [
    {
      p: "Редактировать профиль",
        link:''
    },
    {
      p: "Сменить номер телефона 77051669055",
        link:''
    },
    {
      p: "Язык (Русский)",
        link:''
    },

    {
      p: "Поделиться с друзьями",
        link:''
    },
    {
      p: "Сообщить об ошибке",
        link:''
    },
    {
      p: "Блог",
      link:'/blog'
    },
    {
      p: "Маркет",
        link:'/market'
    },
    {
      p: "Отзывы",
        link:'/comments'
    },

  ];

  return (
    <div className="relative text-black">
      <div>
        <div className="p-4 h-screen overflow-auto no-scrollbar">
          <h3 className="font-mulish font-medium text-lg lg:text-xl text-[#000000] text-center mt-10">
            Настройки
          </h3>

          <div className="links mt-10">
           {
            links.map((c, mc)=> (
                <>
                 <div onClick={()=> window.open(c.link,'_current')} key={mc} className="link cursor-pointer flex flex-row justify-between items-center">
              <p className="font-mulish font-black text-[#5E5E5E] text-sm xl:text-base">
                {c.p}
              </p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="9"
                height="15"
                viewBox="0 0 9 15"
                fill="none"
              >
                <path
                  d="M8.4057 6.48848L2.41655 0.423141C2.28524 0.289062 2.12901 0.18264 1.95688 0.110015C1.78475 0.0373905 1.60013 0 1.41365 0C1.22718 0 1.04256 0.0373905 0.870426 0.110015C0.698296 0.18264 0.542068 0.289062 0.410755 0.423141C0.147669 0.691163 0 1.05373 0 1.43165C0 1.80956 0.147669 2.17213 0.410755 2.44015L5.41113 7.50414L0.410755 12.5681C0.147669 12.8361 0 13.1987 0 13.5766C0 13.9545 0.147669 14.3171 0.410755 14.5851C0.542742 14.7177 0.699274 14.8226 0.871373 14.8938C1.04347 14.965 1.22776 15.0011 1.41365 15C1.59955 15.0011 1.78384 14.965 1.95594 14.8938C2.12804 14.8226 2.28457 14.7177 2.41655 14.5851L8.4057 8.51979C8.5381 8.38681 8.64318 8.22859 8.7149 8.05427C8.78661 7.87995 8.82353 7.69298 8.82353 7.50414C8.82353 7.31529 8.78661 7.12832 8.7149 6.954C8.64318 6.77968 8.5381 6.62146 8.4057 6.48848Z"
                  fill="#634F9E"
                />
              </svg>
            </div>
            <hr className="w-full my-3" />
            </>
            ))
           }
          </div>
        </div>
      </div>
    </div>
  );
};

export default SettingForm;
