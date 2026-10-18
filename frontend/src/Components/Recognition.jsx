import { useState } from "react";
import Lightbox from "./Shared/Lightbox";
import { handleImageError } from "./utils/imagePaths";

const recognitionFiles = import.meta.glob("../../public/images/recognition/*", {
  eager: true,
  query: "?url",
  import: "default",
});

const getRecognitionTitle = (filePath) => {
  const fileName = filePath.split("/").pop() || "";
  return fileName
    .replace(/\.[^.]+$/, "")
    .replace(/\s+/g, " ")
    .replace(/[.]+$/, "")
    .trim();
};

const recognitionImages = Object.entries(recognitionFiles)
  .map(([filePath]) => {
    const fileName = filePath.split("/").pop() || "";
    return {
      src: encodeURI(`/images/recognition/${fileName}`),
      title: getRecognitionTitle(filePath),
    };
  })
  .sort((first, second) => first.title.localeCompare(second.title));

const Recognition = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <main className="min-h-screen bg-peelz-offwhite px-6 py-28 text-peelz-dark md:px-8">
      <div className="mx-auto max-w-[1200px]">
        <p className="text-center text-sm font-semibold uppercase tracking-[0.2em] text-peelz-forest">
          Recognition and milestones
        </p>
        <h1 className="mt-3 text-center text-4xl font-bold md:text-5xl">Our Recognition</h1>
        <p className="mx-auto mt-5 max-w-2xl text-center leading-[1.7] text-peelz-dark/75">
          A collection of certificates, honours, and milestones that reflect our work with farmers,
          communities, institutions, and national leaders.
        </p>

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {recognitionImages.map((item) => (
            <article key={item.src} className="rounded-xl border border-peelz-aqua/40 bg-peelz-white p-4 shadow-sm">
              <button
                type="button"
                className="block w-full cursor-zoom-in rounded-lg focus:outline-none focus:ring-2 focus:ring-peelz-forest"
                onClick={() => setSelectedImage(item.src)}
                aria-label={`View ${item.title}`}
              >
                <img
                  src={item.src}
                  onError={handleImageError}
                  alt={item.title}
                  className="aspect-square w-full rounded-lg object-contain"
                  loading="lazy"
                />
              </button>
              <h2 className="mt-4 text-lg font-bold leading-snug">{item.title}</h2>
            </article>
          ))}
        </div>
      </div>
      <Lightbox image={selectedImage} alt="Recognition preview" onClose={() => setSelectedImage(null)} />
    </main>
  );
};

export default Recognition;
