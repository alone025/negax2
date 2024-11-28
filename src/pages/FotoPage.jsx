import { useNavigate } from "react-router-dom";
import { useState } from "react";
import logo from "../img/logo2.png";

const FotoPage = () => {
  const navigate = useNavigate();
  const [uploadedImages, setUploadedImages] = useState([]);
  const [error, setError] = useState("");


  const logined = () => {
    const dataL = JSON.parse(localStorage.getItem("logined"));
    if (!dataL) {
      if (uploadedImages.length === 0) setError("Загрузите хотя бы одно изображение!")
        else {
          localStorage.setItem("logined", "true");
      navigate("/")
    };
    }else{
      if (uploadedImages.length === 0) setError("Загрузите хотя бы одно изображение!")
      else navigate('/')
    }
  };

  const handleContactForm = (e) => {
    e.preventDefault();
    navigate("/kontakform")
  };

  const handleFileChange = (event) => {
    const files = Array.from(event.target.files); // Convert FileList to Array
    if (files.length + uploadedImages.length > 5) {
      alert("You can only upload up to 5 images.");
      return;
    }
    const newImages = files.map((file) => URL.createObjectURL(file)); // Create preview URLs
    setUploadedImages((prevImages) => [...prevImages, ...newImages]);
  };

  const removeImage = (index) => {
    setUploadedImages((prevImages) =>
      prevImages.filter((_, i) => i !== index)
    );
  };

  return (
    <div className="flex flex-col pb-[50px] items-center justify-center pt-[70px] min-h-screen relative">
      <header className="absolute container top-5 flex justify-between items-center w-full">
        <div className="flex items-center gap-3">
          <img className="w-[40px]" src={logo} alt="" />
          <h1
            onClick={() => window.open("/login", "_current")}
            className="font-normal cursor-pointer rgb-text font-pro-monument text-[13px] md:text-2xl leading-4"
          >
            NIKAH.SPACE
          </h1>
        </div>
      </header>

      <div className="flex flex-col items-center justify-center w-full h-1/2 rounded-md">
        <div className="text-white flex flex-col items-center mb-20 w-full">
          {
            uploadedImages.length !== 0 && (
              <div className="grid grid-cols-3 gap-4 w-full sm:h-[400px] md:h-[500px] lg:h-[700px] xl:h-[900px] bg-gray-400 p-4 rounded-md">
              {uploadedImages.map((image, index) => (
                <div key={index} className="relative">
                  <img
                    src={image}
                    alt={`Uploaded ${index + 1}`}
                    className="w-full h-auto max-h-[350px] object-cover rounded-md"
                  />
                  <button
                    onClick={() => removeImage(index)}
                    className="absolute top-1 right-1 bg-red-600 text-white rounded-full w-6 h-6"
                  >
                    ✕
                  </button>
                </div>
              ))}
              {uploadedImages.length  !== 0 && uploadedImages.length < 5  && (
                <label className="cursor-pointer flex items-center justify-center bg-gray-300 rounded-md h-28">
                  <input
                    type="file"
                    accept="image/*"
                    multiple
                    onChange={handleFileChange}
                    className="hidden"
                  />
                  <span className="text-gray-600 font-mulish font-medium text-center">+ Добавить фото</span>
                </label>
              )}
  
  
            </div>
            )
          }
          {uploadedImages.length == 0 && (
              <label className="cursor-pointer bg-[#ACACAC] w-full h-[370px] flex items-center justify-center rounded-md">
                <input
                  type="file"
                  accept="image/*"
                  multiple
                  onChange={handleFileChange}
                  className="hidden"
                />
                <span className="text-gray-600"><svg xmlns="http://www.w3.org/2000/svg" width="84" height="72" viewBox="0 0 84 72" fill="none">
  <path d="M72.0025 30.2362C70.9975 30.2362 70.0336 30.6344 69.3229 31.3432C68.6122 32.052 68.2129 33.0134 68.2129 34.0157V60.4724C68.2129 61.4748 67.8137 62.4362 67.103 63.145C66.3923 63.8538 65.4284 64.252 64.4233 64.252H11.3688C10.3638 64.252 9.39985 63.8538 8.68916 63.145C7.97847 62.4362 7.57921 61.4748 7.57921 60.4724V30.2362C7.57921 29.2338 7.97847 28.2725 8.68916 27.5637C9.39985 26.8549 10.3638 26.4567 11.3688 26.4567H18.948C19.7744 26.4997 20.5922 26.2718 21.2765 25.8077C21.9608 25.3436 22.474 24.6689 22.7376 23.8866L24.784 17.6882C25.0383 16.9375 25.5226 16.2855 26.1686 15.8243C26.8147 15.3631 27.5897 15.1161 28.3842 15.1181H49.2649C50.27 15.1181 51.2339 14.7199 51.9445 14.0111C52.6552 13.3023 53.0545 12.341 53.0545 11.3386C53.0545 10.3362 52.6552 9.37485 51.9445 8.66605C51.2339 7.95726 50.27 7.55906 49.2649 7.55906H28.1947C25.8131 7.5635 23.493 8.31376 21.562 9.70396C19.6309 11.0942 18.1864 13.0541 17.4322 15.3071L16.2195 19.0866H11.3688C8.35362 19.0866 5.46192 20.2812 3.32985 22.4076C1.19778 24.534 0 27.418 0 30.4252V60.6614C0 63.6686 1.19778 66.5526 3.32985 68.679C5.46192 70.8054 8.35362 72 11.3688 72H64.4233C67.4385 72 70.3302 70.8054 72.4623 68.679C74.5944 66.5526 75.7921 63.6686 75.7921 60.6614V34.2047C75.8178 33.6927 75.7388 33.1809 75.5599 32.7003C75.381 32.2197 75.106 31.7804 74.7515 31.4092C74.397 31.0379 73.9705 30.7425 73.4979 30.5409C73.0253 30.3392 72.5165 30.2356 72.0025 30.2362ZM37.8961 26.4567C34.898 26.4567 31.9673 27.3434 29.4745 29.0046C26.9817 30.6658 25.0388 33.0269 23.8915 35.7894C22.7442 38.5518 22.444 41.5916 23.0289 44.5242C23.6138 47.4568 25.0575 50.1506 27.1774 52.2649C29.2974 54.3792 31.9984 55.8191 34.9388 56.4024C37.8792 56.9858 40.9271 56.6864 43.6969 55.5421C46.4668 54.3979 48.8342 52.4601 50.4998 49.974C52.1655 47.4878 53.0545 44.5649 53.0545 41.5748C53.0545 37.5652 51.4574 33.7199 48.6147 30.8847C45.7719 28.0495 41.9163 26.4567 37.8961 26.4567ZM37.8961 49.1339C36.397 49.1339 34.9317 48.6905 33.6853 47.8599C32.4389 47.0293 31.4674 45.8488 30.8938 44.4675C30.3201 43.0863 30.17 41.5664 30.4625 40.1001C30.7549 38.6338 31.4768 37.2869 32.5368 36.2297C33.5967 35.1726 34.9472 34.4527 36.4174 34.161C37.8877 33.8693 39.4116 34.019 40.7965 34.5911C42.1814 35.1633 43.3651 36.1321 44.198 37.3752C45.0308 38.6183 45.4753 40.0798 45.4753 41.5748C45.4753 43.5796 44.6768 45.5023 43.2554 46.9199C41.834 48.3375 39.9062 49.1339 37.8961 49.1339ZM79.5817 7.55906H75.7921V3.77953C75.7921 2.77713 75.3929 1.8158 74.6822 1.107C73.9715 0.398199 73.0076 0 72.0025 0C70.9975 0 70.0336 0.398199 69.3229 1.107C68.6122 1.8158 68.2129 2.77713 68.2129 3.77953V7.55906H64.4233C63.4182 7.55906 62.4543 7.95726 61.7437 8.66605C61.033 9.37485 60.6337 10.3362 60.6337 11.3386C60.6337 12.341 61.033 13.3023 61.7437 14.0111C62.4543 14.7199 63.4182 15.1181 64.4233 15.1181H68.2129V18.8976C68.2129 19.9 68.6122 20.8614 69.3229 21.5702C70.0336 22.279 70.9975 22.6772 72.0025 22.6772C73.0076 22.6772 73.9715 22.279 74.6822 21.5702C75.3929 20.8614 75.7921 19.9 75.7921 18.8976V15.1181H79.5817C80.5868 15.1181 81.5507 14.7199 82.2614 14.0111C82.9721 13.3023 83.3713 12.341 83.3713 11.3386C83.3713 10.3362 82.9721 9.37485 82.2614 8.66605C81.5507 7.95726 80.5868 7.55906 79.5817 7.55906Z" fill="white"/>
</svg></span>
              </label>
            )}
        </div>
        <h1 className="rgb-text text-3xl font-mulish font-normal mb-14">
          Добавьте до 5 фото
        </h1>
      </div>

      <div className="flex container flex-col items-center w-full space-y-4">
        <button
          onClick={handleContactForm}
          className="w-full text-base font-normal font-mulish py-3 text-purple-700 border-2 border-purple-700 rounded-full text-center"
        >
          Назад
        </button>
        <button
        disabled={uploadedImages.length === 0 ? true : false}
          onClick={logined}
          className="w-full py-3 disabled:opacity-40 text-base btn-rgb text-white font-mulish rounded-full"
        >
          Сохранить
        </button>

        {error !== "" && <p className="text-center font-mulish text-red-600 text-base mt-1">{error}</p>}

      </div>
    </div>
  );
};

export default FotoPage;
