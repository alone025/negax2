
import blogIMG from '../img/blog1.png'

const BlogDetail = () => {
  return (
    <div className="container mx-auto p-4">
      
      <nav className="text-sm font-mulish text-gray-600 mb-4">
        <a href="/" className="hover:text-blue-500 cursor-pointer">Главная</a> &gt;{" "}
        <a href="/blog" className="hover:text-blue-500 cursor-pointer">Блог</a> &gt;{" "}
        <span className="text-gray-800 cursor-pointer">blog1</span>
      </nav>

     
      <div className="w-full h-64 md:h-96 mb-4">
        <img
          src={blogIMG}
          alt={''}
          className="w-full h-full object-cover rounded"
        />
      </div>

      <h1 className="text-2xl font-mulish md:text-3xl font-bold text-gray-800 mb-4">
      26.02.24
      </h1>

     
      <p className="text-gray-700 font-mulish leading-6">Пророк (ﷺ) сказал:

«У двух любящих сердец, наилучший итог - это брак. قلب
</p>
    </div>
  );
};

export default BlogDetail;
