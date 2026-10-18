import { useState } from "react";
import gallery from "./data/gallery.json";
import Lightbox from "./Shared/Lightbox";
import { getGalleryImages, handleImageError } from "./utils/imagePaths";

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <main className="m-5 bg-gray-100 p-2">
      <h1 className="mb-8 mt-20 text-center text-5xl font-bold text-peelz-dark">Our Initiatives</h1>
      {gallery.map((division) => {
        const images = getGalleryImages(division.id);
        return (
          <section key={division.id} className="mb-12 rounded-xl bg-white p-5 shadow-md">
            <h2 className="text-3xl font-bold text-peelz-dark">{division.division}</h2>
            <h3 className="mt-2 text-xl text-gray-700">{division.subHeading}</h3>
            <p className="mt-3 text-gray-600">{division.description}</p>
            <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-5">
              {images.map((image, index) => (
                <img
                  key={image}
                  src={image}
                  onError={handleImageError}
                  onClick={(event) => { event.stopPropagation(); setSelectedImage(image); }}
                  alt={`${division.division} image ${index + 1}`}
                  className="aspect-square w-full cursor-pointer rounded-xl object-cover"
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
