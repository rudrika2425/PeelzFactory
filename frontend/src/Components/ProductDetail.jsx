/* eslint-disable react/prop-types */
import { useContext, useState } from "react";
import { Link, useParams } from "react-router-dom";
import product from "./data/product.json";
import Lightbox from "./Shared/Lightbox";
import { ShopContext } from "./Context/ShopContextValue";
import {
  getProductFallbackImage,
  getProductImageCount,
  getProductImages,
  handleImageError,
} from "./utils/imagePaths";

const LeafIcon = ({ className = "h-5 w-5" }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={className} aria-hidden="true">
    <path d="M20 4C10 4 4 9 4 18c5.5 1 12-1.5 14.5-6.5C20 8.5 20 4 20 4Z" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M4 20c2.5-5 6-8 11-10" strokeLinecap="round" />
  </svg>
);

const ShieldIcon = ({ className = "h-5 w-5" }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={className} aria-hidden="true">
    <path d="M12 3 20 6v5c0 5-3.4 8.8-8 10-4.6-1.2-8-5-8-10V6l8-3Z" strokeLinejoin="round" />
    <path d="m8.5 12 2.2 2.2 4.8-5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const RecycleIcon = ({ className = "h-5 w-5" }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={className} aria-hidden="true">
    <path d="m8 3-3 5h4l2-3M16 3l3 5h-4l-2-3M5 16h5l-2 3M19 16h-5l2 3" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M9 8h6M7 16l2-4M17 16l-2-4" strokeLinecap="round" />
  </svg>
);

const DetailList = ({ title, items, icon: Icon = LeafIcon }) => {
  if (!items?.length) return null;

  return (
    <section className="rounded-2xl border border-peelz-aqua/50 bg-white p-5 shadow-sm sm:p-6">
      <div className="flex items-center gap-3">
        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-peelz-sage text-peelz-dark">
          <Icon />
        </span>
        <h2 className="text-xl font-bold">{title}</h2>
      </div>
      <ul className="mt-5 grid gap-3 text-sm leading-[1.6] text-peelz-dark/75 sm:text-base">
        {items.map((item) => (
          <li key={item} className="flex gap-3 leading-[1.6]">
            <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-peelz-forest" aria-hidden="true" />
            {item}
          </li>
        ))}
      </ul>
    </section>
  );
};

const ProductDetail = () => {
  const { id } = useParams();
  const item = product.find((entry) => String(entry.id) === id);
  const [selectedImage, setSelectedImage] = useState(null);
  const [activeImage, setActiveImage] = useState(0);
  const { addToCart, updateQuantity, getCartQuantity } = useContext(ShopContext);

  if (!item) {
    return (
      <main className="p-24 text-center">
        <p>Product not found.</p>
        <Link className="text-peelz-forest underline" to="/products">Return to products</Link>
      </main>
    );
  }

  const images = getProductImages(item.id, getProductImageCount(item.id));
  const quantity = getCartQuantity(item.id);
  const setFallback = (event) => {
    event.currentTarget.src = getProductFallbackImage(item.category);
    event.currentTarget.onerror = handleImageError;
  };
  const discount = item.mrp > item.bestPrice
    ? Math.round(((item.mrp - item.bestPrice) / item.mrp) * 100)
    : 0;

  return (
    <main className="min-h-screen overflow-x-hidden bg-gradient-to-b from-peelz-aqua/20 via-peelz-offwhite to-peelz-offwhite px-4 pb-16 pt-28 text-peelz-dark sm:px-6 md:px-8 md:pb-24">
      <div className="mx-auto max-w-[1200px]">
        <Link to="/products" className="inline-flex items-center gap-2 rounded-full border border-peelz-aqua/70 bg-white/80 px-4 py-2 text-sm font-semibold text-peelz-dark shadow-sm transition hover:border-peelz-forest hover:bg-white">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-4 w-4" aria-hidden="true"><path d="M19 12H5m7 7-7-7 7-7" strokeLinecap="round" strokeLinejoin="round" /></svg>
          Back to products
        </Link>

        <div className="mt-5 grid gap-6 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-10">
          <div className="min-w-0 rounded-3xl border border-peelz-aqua/60 bg-white/80 p-3 shadow-sm sm:p-5">
            <div className="relative overflow-hidden rounded-2xl bg-peelz-offwhite p-3 sm:p-5">
              {discount > 0 && (
                <span className="absolute left-4 top-4 z-10 rounded-full bg-peelz-dark px-3 py-1 text-xs font-bold text-white">
                  Save {discount}%
                </span>
              )}
              <img
                src={images[activeImage]}
                onError={setFallback}
                onClick={(event) => setSelectedImage(event.currentTarget.currentSrc || images[activeImage])}
                alt={item.name}
                className="aspect-square w-full cursor-zoom-in object-contain transition duration-300 hover:scale-[1.03]"
              />
            </div>
            <div className="mt-4 flex max-w-full gap-2 overflow-x-auto pb-1 sm:gap-3" aria-label={`${item.name} image gallery`}>
              {images.map((image, index) => (
                <button
                  type="button"
                  key={image}
                  onClick={() => setActiveImage(index)}
                  aria-label={`Show ${item.name} image ${index + 1}`}
                  className={`w-16 shrink-0 rounded-xl border bg-white p-1 transition duration-200 hover:-translate-y-0.5 sm:w-[4.5rem] ${
                    activeImage === index ? "border-peelz-dark shadow-md" : "border-peelz-aqua/50"
                  }`}
                >
                  <img
                    src={image}
                    onError={setFallback}
                    alt={`${item.name} view ${index + 1}`}
                    className="aspect-square w-full rounded-lg object-contain"
                  />
                </button>
              ))}
            </div>
            <p className="mt-3 text-center text-xs text-peelz-dark/55">Tap the image to view it larger</p>
          </div>

          <div className="min-w-0 rounded-3xl border border-peelz-aqua/60 bg-white p-5 shadow-sm sm:p-8 lg:p-10">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-peelz-forest sm:text-sm">{item.category}</p>
            <h1 className="mt-3 break-words text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl">{item.name}</h1>
            <div className="mt-5 flex flex-wrap items-center gap-3">
              <span className="inline-flex items-center gap-2 rounded-full bg-peelz-sage/70 px-3 py-1.5 text-sm font-semibold">
                <LeafIcon className="h-4 w-4" /> Natural choice
              </span>
              <span className="inline-flex items-center gap-2 rounded-full bg-peelz-aqua/35 px-3 py-1.5 text-sm font-semibold">
                <span className="h-2 w-2 rounded-full bg-peelz-forest" /> {item.size}
              </span>
            </div>

            <p className="mt-7 text-base leading-[1.75] text-peelz-dark/75 sm:text-lg">
              {item.detail || "A thoughtfully developed Peelz Factory solution for responsible everyday use."}
            </p>
            <div className="mt-7 flex flex-wrap items-end gap-x-3 gap-y-1 border-y border-peelz-aqua/40 py-5">
              <span className="text-3xl font-bold sm:text-4xl">Rs. {item.bestPrice}</span>
              {item.mrp > item.bestPrice && <span className="text-lg text-peelz-dark/50 line-through">Rs. {item.mrp}</span>}
              {discount > 0 && <span className="text-sm font-semibold text-peelz-forest">{discount}% off</span>}
            </div>
            
            {quantity === 0 ? (
              <button type="button" onClick={() => addToCart(item)} className="mt-6 flex w-full items-center justify-center gap-2 rounded-xl bg-peelz-dark px-6 py-3.5 font-semibold text-white transition hover:bg-peelz-forest sm:w-auto">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-5 w-5" aria-hidden="true"><path d="M3 4h2l2.2 11.2a2 2 0 0 0 2 1.6h7.9a2 2 0 0 0 1.9-1.4L21 8H6" strokeLinecap="round" strokeLinejoin="round" /><circle cx="10" cy="20" r="1" /><circle cx="18" cy="20" r="1" /></svg>
                Add to cart
              </button>
            ) : (
              <div className="mt-6 flex w-full items-center justify-between rounded-xl bg-peelz-sage px-3 py-2 sm:w-fit sm:gap-7">
                <button type="button" onClick={() => updateQuantity(item.id, -1)} className="h-10 w-10 rounded-lg bg-white text-lg font-bold transition hover:bg-peelz-offwhite" aria-label={`Decrease ${item.name} quantity`}>−</button>
                <span className="font-bold">{quantity} in cart</span>
                <button type="button" onClick={() => updateQuantity(item.id, 1)} className="h-10 w-10 rounded-lg bg-white text-lg font-bold transition hover:bg-peelz-offwhite" aria-label={`Increase ${item.name} quantity`}>+</button>
              </div>
            )}

            <div className="mt-7 grid grid-cols-1 gap-3 border-t border-peelz-aqua/40 pt-6 text-sm sm:grid-cols-3">
              <div className="flex items-center gap-2 text-peelz-dark/75"><LeafIcon className="h-5 w-5 shrink-0 text-peelz-forest" /><span>Plant friendly</span></div>
              <div className="flex items-center gap-2 text-peelz-dark/75"><ShieldIcon className="h-5 w-5 shrink-0 text-peelz-forest" /><span>Safe ingredients</span></div>
              <div className="flex items-center gap-2 text-peelz-dark/75"><RecycleIcon className="h-5 w-5 shrink-0 text-peelz-forest" /><span>Eco conscious</span></div>
            </div>
          </div>
        </div>
        <div className="mt-8 grid gap-5 sm:mt-12 md:grid-cols-2 md:gap-6">
          <DetailList title="Ingredients" items={item.ingredients} icon={LeafIcon} />
          <DetailList title="Why choose it" items={item.whyChoose} icon={ShieldIcon} />
          <DetailList title="How to use" items={item.howToUse} icon={RecycleIcon} />
          {item.storage && (
            <section className="rounded-2xl border border-peelz-forest/50 bg-peelz-sage p-5 shadow-sm sm:p-6">
              <div className="flex items-center gap-3"><span className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/70"><ShieldIcon /></span><h2 className="text-xl font-bold">Storage</h2></div>
              <p className="mt-4 leading-[1.6] text-peelz-dark/75">{item.storage}</p>
            </section>
          )}
          {item.precaution && (
            <section className="rounded-2xl border border-peelz-aqua/60 bg-white p-5 shadow-sm sm:p-6">
              <div className="flex items-center gap-3"><span className="flex h-10 w-10 items-center justify-center rounded-xl bg-peelz-sage"><ShieldIcon /></span><h2 className="text-xl font-bold">Precautions</h2></div>
              <p className="mt-4 leading-[1.6] text-peelz-dark/75">{item.precaution}</p>
            </section>
          )}
        </div>
        <Lightbox image={selectedImage} alt={item.name} onClose={() => setSelectedImage(null)} />
      </div>
    </main>
  );
};

export default ProductDetail;
