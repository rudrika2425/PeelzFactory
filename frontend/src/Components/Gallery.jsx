import { useState } from "react";
import gallery from "./data/gallery.json";
import Lightbox from "./Shared/Lightbox";
import { getGalleryImages, handleImageError } from "./utils/imagePaths";

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <main className="m-2 overflow-x-hidden bg-gray-100 p-2 sm:m-5">
      <h1 className="mb-8 mt-20 text-center text-3xl font-bold text-peelz-dark sm:text-4xl md:text-5xl">Our Initiatives</h1>
      {gallery.map((division) => {
        const images = getGalleryImages(division.id);
        return (
          <section key={division.id} className="mb-8 rounded-xl bg-white p-4 shadow-md sm:mb-12 sm:p-5">
            <h2 className="break-words text-2xl font-bold text-peelz-dark sm:text-3xl">{division.division}</h2>
            <h3 className="mt-2 break-words text-lg text-gray-700 sm:text-xl">{division.subHeading}</h3>
            <p className="mt-3 text-gray-600">{division.description}</p>
            <div className="mt-6 grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-5">
              {images.map((image, index) => (
                <img
                  key={image}
                  src={image}
                  onError={handleImageError}
                  onClick={(event) => { event.stopPropagation(); setSelectedImage(image); }}
                  alt={`${division.division} image ${index + 1}`}
                  className="h-28 w-full cursor-pointer rounded-xl object-cover sm:h-36 lg:h-32 xl:h-40"
                />
              ))}
            </div>
          </section>
        );
      })}
      <Lightbox image={selectedImage} alt="Gallery preview" onClose={() => setSelectedImage(null)} />
    </main>
  );
};

export default Gallery;
