
import blogIMG from '../img/otziv1.png'

const CommentPage = () => {
  return (
    <div className="container mx-auto p-4">
      
      <nav className="text-sm font-mulish text-gray-600 mb-4">
        <a href="/" className="hover:text-blue-500 cursor-pointer">Главная</a> &gt;{" "}
        <a href="/comments" className="hover:text-blue-500 cursor-pointer">Отзывы</a> &gt;{" "}
        <span className="text-gray-800 cursor-pointer">otziv1</span>
      </nav>

     
      <div className="w-full h-64 md:h-96 mb-4">
        <img
          src={blogIMG}
          alt={''}
          className="w-full h-full object-cover rounded"
        />
      </div>

      <h1 className="text-2xl font-mulish md:text-3xl font-bold text-gray-800 mb-4">
      Отзыв!      </h1>

     
      <p className="text-gray-700 font-mulish leading-6">26.04.2024</p>
    </div>
  );
};

export default CommentPage;
