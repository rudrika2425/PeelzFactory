import { useState } from "react";
import media from "./data/media.json";
import Lightbox from "./Shared/Lightbox";
import { getMediaImages, handleImageError } from "./utils/imagePaths";

const Media = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [expandedItems, setExpandedItems] = useState({});

  const toggleDescription = (id) => {
    setExpandedItems((currentItems) => ({
      ...currentItems,
      [id]: !currentItems[id],
    }));
  };

  return (
    <main className="min-h-screen overflow-x-hidden bg-peelz-offwhite px-4 py-24 text-peelz-dark sm:px-5 md:px-8">
      <p className="mt-5 mb-4 text-center text-sm font-semibold uppercase tracking-[0.2em] text-peelz-forest">
          Making Headlines Every Day
        </p>
      <h1 className="mb-12 text-center text-3xl font-bold sm:text-4xl md:text-5xl">Our Spotlight</h1>
      <div className="mx-auto grid max-w-[1200px] grid-cols-2 gap-3 sm:gap-5 lg:grid-cols-4">
        {media.map((item) => {
          const images = getMediaImages(item.id);
          return (
            <article key={item.id} className="rounded-xl border border-peelz-aqua/40 bg-peelz-white p-3 shadow-sm">
              <div className="flex aspect-[4/3] items-center justify-center overflow-hidden rounded-lg bg-peelz-offwhite">
                <img
                  src={images[0]}
                  onError={handleImageError}
                  onClick={(event) => { event.stopPropagation(); setSelectedImage(images[0]); }}
                  alt={item.title}
                  className="h-full w-full cursor-pointer object-contain"
                />
              </div>
              <p className="mt-3 text-xs text-peelz-dark/60">{item.source}{item.date ? ` | ${item.date}` : ""}</p>
              <h2 className="mt-2 break-words text-sm font-bold leading-snug text-peelz-dark sm:text-lg">{item.title}</h2>
              <p className={`${expandedItems[item.id] ? "block" : "hidden"} mt-2 text-xs leading-[1.6] text-peelz-dark/75 sm:block sm:text-sm`}>
                {item.description}
              </p>
              <button
                type="button"
                onClick={() => toggleDescription(item.id)}
                aria-expanded={Boolean(expandedItems[item.id])}
                className="mt-2 text-xs font-semibold text-peelz-forest underline sm:hidden"
              >
                {expandedItems[item.id] ? "Show less" : "Read more"}
              </button>
              {item.link && <a className="mt-3 inline-block text-sm text-peelz-forest underline" href={item.link} target="_blank" rel="noreferrer">Read more</a>}
            </article>
          );
        })}
      </div>
      <Lightbox image={selectedImage} alt="Media preview" onClose={() => setSelectedImage(null)} />
    </main>
  );
};

export default Media;
