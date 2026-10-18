import { useState } from "react";
import members from "./data/team.json";
import Lightbox from "./Shared/Lightbox";
import { getTeamImages, handleImageError } from "./utils/imagePaths";

const Founders = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <main className="min-h-screen overflow-x-hidden bg-peelz-offwhite px-4 py-28 text-peelz-dark sm:px-6 md:px-8 lg:py-36">
      <header className="mx-auto mb-16 max-w-[1200px]">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-peelz-forest">People behind the work</p>
        <h1 className="mt-3 text-4xl font-bold md:text-5xl">Our team</h1>
        <div className="mt-6 h-1 w-20 rounded-full bg-peelz-aqua" />
        <p className="mt-6 max-w-5xl text-lg leading-[1.7] text-peelz-dark/75">
          Meet the passionate individuals driving Peelz Factory&apos;s mission to transform organic waste into sustainable solutions.
        </p>
      </header>
      <div className="mx-auto max-w-[1200px] space-y-8">
        {members.map((member, index) => {
          const images = getTeamImages(member.id);
          return (
            <article
              key={member.id}
              className={`flex flex-col items-center gap-8 rounded-xl border border-peelz-aqua/40 bg-white p-6 shadow-sm transition duration-200 hover:-translate-y-0.5 hover:border-peelz-forest hover:shadow-md md:p-8 lg:flex-row lg:gap-12 ${index % 2 ? "lg:flex-row-reverse" : ""}`}
            >
              <img
                src={images[0]}
                onError={handleImageError}
                onClick={(event) => { event.stopPropagation(); setSelectedImage(images[0]); }}
                alt={member.name}
                className="aspect-square h-auto w-full max-w-xs cursor-pointer rounded-xl object-cover shadow-md transition-transform hover:scale-105"
              />
              <div className="flex-1 text-center lg:text-left">
                <span className="mb-3 inline-block rounded-full bg-peelz-sage px-4 py-2 text-sm font-semibold text-peelz-dark">{member.role}</span>
                <h2 className="mb-2 break-words text-3xl font-bold">{member.name}</h2>
                <div className="mx-auto mb-4 h-0.5 w-16 rounded-full bg-peelz-aqua lg:mx-0" />
                <p className="text-lg leading-[1.7] text-peelz-dark/75">{member.detail}</p>
              </div>
            </article>
          );
        })}
      </div>
      <Lightbox image={selectedImage} alt="Team member preview" onClose={() => setSelectedImage(null)} />
    </main>
  );
};

export default Founders;
