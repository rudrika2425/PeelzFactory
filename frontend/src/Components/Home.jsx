import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const ArrowIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-5 w-5" aria-hidden="true">
    <path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const LeafIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-6 w-6" aria-hidden="true">
    <path d="M20 4C10 4 4 9 4 18c5.5 1 12-1.5 14.5-6.5C20 8.5 20 4 20 4Z" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M4 20c2.5-5 6-8 11-10" strokeLinecap="round" />
  </svg>
);

const RecycleIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-6 w-6" aria-hidden="true">
    <path d="m8 3-3 5h4l2-3M16 3l3 5h-4l-2-3M5 16h5l-2 3M19 16h-5l2 3" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M9 8h6M7 16l2-4M17 16l-2-4" strokeLinecap="round" />
  </svg>
);

const CommunityIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-6 w-6" aria-hidden="true">
    <circle cx="9" cy="8" r="3" />
    <circle cx="17" cy="9" r="2.5" />
    <path d="M3 20c.4-3.5 2.5-5 6-5s5.6 1.5 6 5M14 15c3.5-.8 6 .7 7 4" strokeLinecap="round" />
  </svg>
);

const features = [
  {
    title: "Circular waste solutions",
    description: "We turn organic waste into practical products that return value to farms, homes, and communities.",
    icon: RecycleIcon,
  },
  {
    title: "Safer everyday choices",
    description: "Non-toxic alternatives designed to support healthy soil, clean homes, and responsible animal care.",
    icon: LeafIcon,
  },
  {
    title: "People-led progress",
    description: "We work alongside farmers and local communities to make sustainable practices accessible and useful.",
    icon: CommunityIcon,
  },
];

const productCategories = [
  {
    title: "Home care",
    text: "Natural, effective solutions for cleaner homes that are safer for families, pets, and the environment.",
    image: "/images/HomeCare.png",
    className: "bg-peelz-aqua/30 border-peelz-aqua",
  },
  {
    title: "Agriculture",
    text: "Bio-enzyme and organic products that help farmers improve soil health and grow with confidence.",
    image: "/images/Agriculture.png",
    className: "bg-peelz-sage border-peelz-forest",
  },
  {
    title: "Animal care",
    text: "Gentle, plant-based care products designed to support healthier animals and cleaner living spaces.",
    image: "/images/Animalcare.png",
    className: "bg-peelz-forest/50 border-peelz-forest",
  },
];

const recognitionImages = ["/images/v.1.png", "/images/v.2.png", "/images/v.3.png", "/images/v.4.png", "/images/v.5.png"];

const Home = () => {
  const [recognitionIndex, setRecognitionIndex] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setRecognitionIndex((currentIndex) => (currentIndex + 1) % recognitionImages.length);
    }, 2000);
    return () => window.clearInterval(timer);
  }, []);

  return (
  <main className="bg-peelz-offwhite text-peelz-dark">
    <div className="overflow-hidden border-b border-peelz-aqua/60 bg-peelz-dark pt-24 text-white lg:pt-[84px]">
      <div className="mx-auto flex max-w-[1200px] flex-col items-center justify-center gap-2 px-4 py-3 text-center text-sm font-semibold sm:flex-row sm:gap-4 sm:px-6 md:text-base">
        <span className="max-w-[20rem] leading-6 sm:max-w-none">Add your products to the cart and click Checkout on WhatsApp.</span>
        <Link to="/products" className="inline-flex shrink-0 items-center gap-1.5 rounded-lg bg-peelz-sage px-4 py-1.5 text-peelz-dark transition hover:bg-peelz-forest motion-safe:animate-pulse">
          
          Order here
        </Link>
      </div>
    </div>
    <div className="mt-4 overflow-hidden border-b border-peelz-forest/60 bg-peelz-sage text-peelz-dark">
      <div className="flex w-max whitespace-nowrap animate-marquee-reverse">
        <span className="shrink-0 px-8 py-2.5 text-sm font-semibold md:text-base">
          For bulk and white-label orders, contact us on 99715 06594.
        </span>
        <span aria-hidden="true" className="shrink-0 px-8 py-2.5 text-sm font-semibold md:text-base">
          For bulk and white-label orders, contact us on 99715 06594.
        </span>
        <span aria-hidden="true" className="shrink-0 px-8 py-2.5 text-sm font-semibold md:text-base">
          For bulk and white-label orders, contact us on 99715 06594.
        </span>
        <span aria-hidden="true" className="shrink-0 px-8 py-2.5 text-sm font-semibold md:text-base">
          For bulk and white-label orders, contact us on 99715 06594.
        </span>
        <span aria-hidden="true" className="shrink-0 px-8 py-2.5 text-sm font-semibold md:text-base">
          For bulk and white-label orders, contact us on 99715 06594.
        </span>
      </div>
    </div>
    <section className="bg-gradient-to-br from-peelz-offwhite to-peelz-aqua/30">
      <div className="mx-auto grid max-w-[1200px] items-start gap-8 px-4 pb-10 pt-0 sm:px-6 md:gap-12 md:px-8 md:pb-24 md:pt-2 lg:grid-cols-2 lg:gap-16 lg:pt-4">
        <div className="self-start">
           <h1 className="max-w-2xl text-3xl font-bold leading-tight sm:text-4xl md:text-6xl mt-5">
            Turning organic waste into a better future.
          </h1>
          <p className="mt-5 max-w-xl text-base leading-[1.7] text-peelz-dark/75 sm:text-lg">
            We develop responsible agricultural, household, and animal-care solutions from organic waste, helping communities live and grow with less chemical impact.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link to="/products" className="inline-flex items-center justify-center gap-2 rounded-lg bg-peelz-dark px-6 py-3 font-semibold text-white transition duration-200 ease-in-out hover:bg-peelz-forest">
              Explore products <ArrowIcon />
            </Link>
            <Link to="/founders" className="inline-flex items-center justify-center rounded-lg border border-peelz-dark px-6 py-3 font-semibold text-peelz-dark transition duration-200 ease-in-out hover:bg-peelz-sage">
              Meet our team
            </Link>
          </div>
        </div>
        <div className="w-full max-w-[460px] justify-self-end overflow-hidden rounded-xl shadow-lg lg:max-w-[460px]">
          <img src="/images/farm.png" alt="Farmers working in a green agricultural field" className="aspect-square w-full object-cover" />
        </div>
      </div>
    </section>

    

    <section className="bg-peelz-offwhite">
      <div className="mx-auto max-w-[1200px] px-6 py-12 md:px-8 md:py-20">
        <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-peelz-forest">Our product range</p>
            <h2 className="mt-3 text-3xl font-bold md:text-4xl">Natural solutions for every part of life.</h2>
          </div>
          <Link to="/products" className="inline-flex items-center gap-2 font-semibold text-peelz-dark transition duration-200 hover:text-peelz-forest">Explore all products <ArrowIcon /></Link>
        </div>
        <div className="mx-auto mt-10 grid max-w-4xl grid-cols-3 gap-2 sm:gap-5">
          {productCategories.map((category) => {
            return (
            <article key={category.title} className={`overflow-hidden rounded-xl border shadow-sm transition duration-200 hover:-translate-y-0.5 hover:shadow-md ${category.className}`}>
              <div className="flex aspect-square items-center justify-center bg-white/40 p-4">
                <img src={category.image} alt={`${category.title} products`} loading="lazy" className="aspect-square w-full rounded-lg object-contain" />
              </div>
              <div className="p-2 sm:p-5">
                <h3 className="break-words text-sm font-bold sm:text-lg">{category.title}</h3>
                <p className="mt-2 break-words text-[0.65rem] leading-[1.45] text-peelz-dark/75 sm:text-sm sm:leading-[1.65]">{category.text}</p>
              </div>
            </article>
            );
          })}
        </div>
      </div>
    </section>

    <section className="bg-white">
      <div className="mx-auto grid max-w-[1200px] items-center gap-10 px-6 py-12 md:px-8 md:py-20 lg:grid-cols-2">
        <div className="overflow-hidden rounded-xl shadow-lg">
          <div className="relative overflow-hidden rounded-xl shadow-lg">
            <img src={recognitionImages[recognitionIndex]} alt="At Home event at the President&apos;s House in New Delhi" className="aspect-square w-full object-cover transition-opacity duration-200" />
          </div>
        </div>
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-peelz-forest">President&apos;s House</p>
          <h2 className="mt-3 text-3xl font-bold md:text-4xl">At Home reception at Rashtrapati Bhavan on Republic Day</h2>
          <p className="mt-4 leading-[1.7] text-peelz-dark/75">At Home, an event hosted at the President&apos;s House in New Delhi on 26 January 2026, our work was part of a meaningful national gathering. The occasion also connected us with the PMO India, the District Magistrate of Sambhal, and the Commissioner of Moradabad. These engagements reflect the growing recognition of practical, community-led sustainability.</p>
          <p className="mt-5 leading-[1.7] text-peelz-dark/75">The occasion also connected us with the PMO India, the District Magistrate of Sambhal, and the Commissioner of Moradabad. These engagements reflect the growing recognition of practical, community-led sustainability.</p>
          <a href={`https://wa.me/919971506594?text=${encodeURIComponent("Hi, I am interested in working with you")}`} className="mt-7 inline-flex items-center gap-2 rounded-lg bg-peelz-forest px-6 py-3 font-semibold text-peelz-dark transition duration-200 ease-in-out hover:bg-peelz-aqua">Work with us <ArrowIcon /></a>
        </div>
      </div>
    </section>

    <section className="bg-white">
      <div className="mx-auto max-w-[1200px] px-6 py-12 md:px-8 md:py-20">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-peelz-forest">What guides us</p>
          <h2 className="mt-3 text-3xl font-bold md:text-4xl">Purpose built for practical change.</h2>
          <p className="mt-4 leading-[1.7] text-peelz-dark/75">Our work connects responsible production with the everyday needs of farmers, families, and the wider environment.</p>
        </div>
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {features.map(({ title, description, icon: Icon }) => (
            <article key={title} className="rounded-xl border border-peelz-aqua/40 bg-white p-7 transition duration-200 ease-in-out hover:-translate-y-0.5 hover:border-peelz-forest hover:shadow-md">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-peelz-sage text-peelz-dark"><Icon /></div>
              <h3 className="mt-6 text-xl font-bold">{title}</h3>
              <p className="mt-3 leading-[1.7] text-peelz-dark/75">{description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>

    <section className="bg-peelz-sage">
      <div className="mx-auto max-w-[1200px] px-6 py-12 text-center md:px-8 md:py-20">
        <h2 className="text-3xl font-bold md:text-4xl">Make a more responsible choice.</h2>
        <p className="mx-auto mt-4 max-w-2xl leading-[1.7] text-peelz-dark/75">Explore products and partnerships that move everyday sustainability from intention to action.</p>
        <Link to="/products" className="mt-7 inline-flex items-center gap-2 rounded-lg bg-peelz-dark px-6 py-3 font-semibold text-white transition duration-200 ease-in-out hover:bg-peelz-forest">Browse the catalogue <ArrowIcon /></Link>
      </div>
    </section>
  </main>
  );
};

export default Home;
