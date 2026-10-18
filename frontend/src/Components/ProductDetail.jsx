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

const DetailList = ({ title, items }) => {
  if (!items?.length) return null;

  return (
    <section className="border-b border-peelz-aqua/40 pb-7">
      <h2 className="text-xl font-bold">{title}</h2>
      <ul className="mt-4 grid gap-3 text-peelz-dark/75">
        {items.map((item) => (
          <li key={item} className="flex gap-3 leading-[1.6]">
            <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-peelz-forest" />
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

  return (
    <main className="min-h-screen bg-peelz-offwhite px-6 py-28 text-peelz-dark md:px-8">
      <div className="mx-auto max-w-[1200px]">
        <Link to="/products" className="text-lg font-semibold text-peelz-forest transition hover:text-peelz-dark">Back to products</Link>

        <div className="mt-6 grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
          <div className="w-full">
            <div className="mx-auto max-w-[430px] rounded-2xl border border-peelz-aqua/40 bg-white p-4 shadow-sm">
              <img
                src={images[activeImage]}
                onError={setFallback}
                onClick={(event) => setSelectedImage(event.currentTarget.currentSrc || images[activeImage])}
                alt={item.name}
                className="aspect-square w-full cursor-pointer rounded-xl object-contain"
              />
            </div>
            <div className="mx-auto mt-4 flex max-w-[430px] flex-wrap gap-2">
              {images.map((image, index) => (
                <button
                  type="button"
                  key={image}
                  onClick={() => setActiveImage(index)}
                  aria-label={`Show ${item.name} image ${index + 1}`}
                  className={`w-[4.5rem] rounded-xl border bg-white p-1 transition duration-200 hover:-translate-y-0.5 ${
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
          </div>

          <div className="w-full p-0 md:min-h-[560px] md:pt-2">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-peelz-forest">{item.category}</p>
            <h1 className="mt-3 text-3xl font-bold md:text-5xl">{item.name}</h1>
            <p className="mt-8 text-xl text-peelz-dark/65">Pack size: {item.size}</p>

            <p className="mt-10 leading-[1.7] text-peelz-dark/75">
              {item.detail || "A thoughtfully developed Peelz Factory solution for responsible everyday use."}
            </p>
            <div className="mt-8 flex items-baseline gap-3">
              <span className="text-4xl font-bold">Rs. {item.bestPrice}</span>
              {item.mrp > item.bestPrice && <span className="text-xl text-peelz-dark/50 line-through">Rs. {item.mrp}</span>}
            </div>
            
            {quantity === 0 ? (
              <button type="button" onClick={() => addToCart(item)} className="mt-7 rounded-lg bg-peelz-dark px-6 py-3 font-semibold text-white transition hover:bg-peelz-forest">Add to cart</button>
            ) : (
              <div className="mt-7 inline-flex items-center gap-5 rounded-lg bg-peelz-sage px-3 py-2">
                <button type="button" onClick={() => updateQuantity(item.id, -1)} className="h-9 w-9 rounded-md bg-white text-lg font-bold">−</button>
                <span className="font-bold">{quantity}</span>
                <button type="button" onClick={() => updateQuantity(item.id, 1)} className="h-9 w-9 rounded-md bg-white text-lg font-bold">+</button>
              </div>
            )}

          </div>
        </div>
        <div className="mt-10 grid gap-7 md:grid-cols-2">
          <DetailList title="Ingredients" items={item.ingredients} />
          <DetailList title="Why choose it" items={item.whyChoose} />
          <DetailList title="How to use" items={item.howToUse} />
          {(item.storage || item.precaution?.length) && (
            <section className="rounded-xl bg-peelz-sage p-6">
              {item.storage && (
                <div>
                  <h2 className="text-xl font-bold">Storage</h2>
                  <p className="mt-4 leading-[1.6] text-peelz-dark/75">{item.storage}</p>
                </div>
              )}
              {item.precaution?.length > 0 && (
                <div className={item.storage ? "mt-6 border-t border-peelz-dark/15 pt-6" : ""}>
                  <h2 className="text-xl font-bold">Precautions</h2>
                  <ul className="mt-4 grid gap-3 text-peelz-dark/75">
                    {item.precaution.map((itemPrecaution) => (
                      <li key={itemPrecaution} className="flex gap-3 leading-[1.6]">
                        <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-peelz-forest" />
                        {itemPrecaution}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </section>
          )}
        </div>
        <Lightbox image={selectedImage} alt={item.name} onClose={() => setSelectedImage(null)} />
      </div>
    </main>
  );
};

export default ProductDetail;
