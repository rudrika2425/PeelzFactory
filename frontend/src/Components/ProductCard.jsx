/* eslint-disable react/prop-types */
import { useContext } from "react";
import { Link } from "react-router-dom";
import { ShopContext } from "./Context/ShopContextValue";
import { getProductFallbackImage, handleImageError } from "./utils/imagePaths";

const ProductCard = ({ id, name, category, mrp, bestPrice, size, images, ...item }) => {
  const { addToCart, updateQuantity, getCartQuantity } = useContext(ShopContext);
  const quantity = getCartQuantity(id);
  const discount = mrp > bestPrice ? Math.round(((mrp - bestPrice) / mrp) * 100) : 0;

  return (
    <article className="flex h-full flex-col overflow-hidden rounded-2xl border border-peelz-aqua/50 bg-white shadow-sm transition-shadow duration-300 hover:border-peelz-forest hover:shadow-lg">
      <Link to={`/products/${id}`} className="relative block overflow-hidden bg-gradient-to-br from-peelz-offwhite to-peelz-aqua/20 p-2 sm:p-4" aria-label={`View details for ${name}`}>
        <span className="absolute left-3 top-3 z-10 inline-flex items-center gap-1 rounded-full bg-peelz-sage px-2 py-1 text-[0.6rem] font-bold uppercase tracking-wide text-peelz-dark sm:left-5 sm:top-5 sm:px-3 sm:text-xs">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-3 w-3 sm:h-4 sm:w-4" aria-hidden="true">
            <path d="M20 4C10 4 4 9 4 18c5.5 1 12-1.5 14.5-6.5C20 8.5 20 4 20 4Z" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M4 20c2.5-5 6-8 11-10" strokeLinecap="round" />
          </svg>
          Natural
        </span>
        <img
          className="aspect-square w-full rounded-xl object-contain"
          src={images[0]}
          onError={(event) => {
            event.currentTarget.src = getProductFallbackImage(category);
            event.currentTarget.onerror = handleImageError;
          }}
          alt={name}
        />
      </Link>
      <div className="flex flex-1 flex-col p-3 sm:p-5">
        <p className="min-h-4 text-[0.6rem] font-bold uppercase leading-4 tracking-[0.16em] text-peelz-forest sm:min-h-5 sm:text-xs">{category}</p>
        <h2 className="mt-1 min-h-[2.5rem] break-words text-sm font-bold leading-snug text-peelz-dark sm:mt-2 sm:min-h-[3.5rem] sm:text-xl">{name}</h2>
        {size ? (
          <p className="mt-2 inline-flex min-h-7 w-fit max-w-full items-center rounded-md bg-peelz-offwhite px-2 py-1 text-[0.65rem] font-medium leading-4 text-peelz-dark/65 sm:min-h-8 sm:text-sm">Pack size: {size}</p>
        ) : <span className="mt-2 min-h-7 sm:min-h-8" aria-hidden="true" />}
        <div className="mt-3 flex min-h-10 items-center justify-between gap-2 border-t border-peelz-aqua/30 pt-3 sm:min-h-12">
          <div className="flex min-w-0 flex-wrap items-baseline gap-x-1 gap-y-0.5 sm:gap-x-2">
            <span className="text-base font-bold text-peelz-dark sm:text-lg">Rs. {bestPrice}</span>
            {mrp > bestPrice && <span className="text-[0.65rem] text-peelz-dark/50 line-through sm:text-sm">Rs. {mrp}</span>}
          </div>
          {discount > 0 && <span className="shrink-0 rounded-full bg-peelz-sage px-2 py-1 text-[0.6rem] font-bold text-peelz-dark sm:px-2.5 sm:text-xs">{discount}% off</span>}
        </div>
        <div className="mt-auto flex flex-col gap-2 pt-4 sm:pt-5">
          <Link to={`/products/${id}`} className="flex-1 rounded-lg border border-peelz-dark px-2 py-2 text-center text-[0.65rem] font-semibold text-peelz-dark transition hover:bg-peelz-sage sm:px-3 sm:text-sm">View details</Link>
          {quantity === 0 ? (
            <button type="button" onClick={() => addToCart({ id, name, category, mrp, bestPrice, size, ...item })} className="flex-1 rounded-lg bg-peelz-dark px-2 py-2 text-[0.65rem] font-semibold text-white transition hover:bg-peelz-forest sm:px-3 sm:text-sm">Add to cart</button>
          ) : (
            <div className="flex flex-1 items-center justify-between rounded-lg bg-peelz-sage px-2 py-1">
              <button type="button" onClick={() => updateQuantity(id, -1)} className="h-8 w-8 rounded-md bg-white text-lg font-bold transition hover:bg-peelz-offwhite" aria-label={`Decrease ${name} quantity`}>−</button>
              <span className="text-sm font-bold text-peelz-dark">{quantity}</span>
              <button type="button" onClick={() => updateQuantity(id, 1)} className="h-8 w-8 rounded-md bg-white text-lg font-bold transition hover:bg-peelz-offwhite" aria-label={`Increase ${name} quantity`}>+</button>
            </div>
          )}
        </div>
      </div>
    </article>
  );
};

export default ProductCard;
