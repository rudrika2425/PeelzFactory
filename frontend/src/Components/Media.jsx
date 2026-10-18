import { useState } from "react";
import media from "./data/media.json";
import Lightbox from "./Shared/Lightbox";
import { getMediaImages, handleImageError } from "./utils/imagePaths";

const Media = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <main className="min-h-screen bg-peelz-offwhite px-5 py-24 text-peelz-dark md:px-8">
      <p className="mt-5 mb-4 text-center text-sm font-semibold uppercase tracking-[0.2em] text-peelz-forest">
          Making Headlines Every Day
        </p>
      <h1 className="mb-12 text-center text-4xl font-bold md:text-5xl">Our Spotlight</h1>
      <div className="mx-auto grid max-w-[1200px] grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4">
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
              <h2 className="mt-2 text-lg font-bold leading-snug text-peelz-dark">{item.title}</h2>
              <p className="mt-2 text-sm leading-[1.6] text-peelz-dark/75">{item.description}</p>
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
