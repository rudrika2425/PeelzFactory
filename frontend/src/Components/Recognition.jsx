import { useState } from "react";
import Lightbox from "./Shared/Lightbox";
import { handleImageError } from "./utils/imagePaths";
import recognitions from "./data/recognitions.json";

const recognitionFiles = import.meta.glob("../../public/images/recognition/*", {
  eager: true,
  query: "?url",
  import: "default",
});

const recognitionFilesById = Object.keys(recognitionFiles).reduce((filesById, filePath) => {
  const fileName = filePath.split("/").pop() || "";
  const fileId = Number.parseInt(fileName.replace(/\.[^.]+$/, ""), 10);

  if (Number.isInteger(fileId)) {
    filesById[fileId] = fileName;
  }

  return filesById;
}, {});

const recognitionImages = recognitions
  .map((recognition) => {
    const fileName = recognitionFilesById[recognition.id];

    if (!fileName) {
      return null;
    }

    return {
      src: encodeURI(`/images/recognition/${fileName}`),
      title: recognition.title,
    };
  })
  .filter(Boolean);

const Recognition = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <main className="min-h-screen overflow-x-hidden bg-peelz-offwhite px-4 py-28 text-peelz-dark sm:px-6 md:px-8">
      <div className="mx-auto max-w-[1200px]">
        <p className="text-center text-sm font-semibold uppercase tracking-[0.2em] text-peelz-forest">
          Recognition and milestones
        </p>
        <h1 className="mt-3 text-center text-3xl font-bold sm:text-4xl md:text-5xl">Our Recognition</h1>
       

        <div className="mt-12 grid grid-cols-2 gap-3 sm:gap-6 lg:grid-cols-3">
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
              <h2 className="mt-4 break-words text-sm font-bold leading-snug sm:text-lg">{item.title}</h2>
            </article>
          ))}
        </div>
      </div>
      <Lightbox image={selectedImage} alt="Recognition preview" onClose={() => setSelectedImage(null)} />
    </main>
  );
};

export default Recognition;
