
const images = [
  { id: 1, src: "https://via.placeholder.com/600x400", alt: "Image 1" },
  { id: 2, src: "https://via.placeholder.com/400x300", alt: "Image 2" },
  { id: 3, src: "https://via.placeholder.com/300x400", alt: "Image 3" },
  { id: 4, src: "https://via.placeholder.com/500x350", alt: "Image 4" },
  { id: 5, src: "https://via.placeholder.com/400x400", alt: "Image 5" },
];

const Gallery = () => {
  return (
    <div className="p-4 max-w-4xl mx-auto grid gap-4">
      {images.length === 3 && (
        <div className="grid gap-4">
          <div className="w-full">
            <img
              src={images[0].src}
              alt={images[0].alt}
              className="w-full h-auto rounded-lg shadow-md"
            />
          </div>
          <div className="grid grid-cols-2 gap-4">
            {images.slice(1).map((image) => (
              <img
                key={image.id}
                src={image.src}
                alt={image.alt}
                className="w-full h-auto rounded-lg shadow-md"
              />
            ))}
          </div>
        </div>
      )}
      {images.length === 5 && (
        <div className="grid gap-4">
          <div className="grid grid-cols-2 gap-4">
            {images.slice(0, 2).map((image) => (
              <img
                key={image.id}
                src={image.src}
                alt={image.alt}
                className="w-full h-auto rounded-lg shadow-md"
              />
            ))}
          </div>
          <div className="grid grid-cols-3 gap-4">
            {images.slice(2).map((image) => (
              <img
                key={image.id}
                src={image.src}
                alt={image.alt}
                className="w-full h-auto rounded-lg shadow-md"
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;
