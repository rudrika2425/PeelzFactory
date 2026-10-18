/* eslint-disable react/prop-types */
import { useContext } from "react";
import { Link } from "react-router-dom";
import { ShopContext } from "./Context/ShopContextValue";
import { getProductFallbackImage, handleImageError } from "./utils/imagePaths";

const ProductCard = ({ id, name, category, mrp, bestPrice, size, images, ...item }) => {
  const { addToCart, updateQuantity, getCartQuantity } = useContext(ShopContext);
  const quantity = getCartQuantity(id);

  return (
    <article className="flex h-full flex-col overflow-hidden rounded-xl border border-peelz-aqua/50 bg-white shadow-sm transition duration-200 hover:-translate-y-0.5 hover:border-peelz-forest hover:shadow-md">
      <Link to={`/products/${id}`} className="block bg-peelz-offwhite p-2 sm:p-4" aria-label={`View details for ${name}`}>
        <img
          className="aspect-square w-full rounded-lg object-contain"
          src={images[0]}
          onError={(event) => {
            event.currentTarget.src = getProductFallbackImage(category);
            event.currentTarget.onerror = handleImageError;
          }}
          alt={name}
        />
      </Link>
      <div className="flex flex-1 flex-col p-2 sm:p-5">
        <p className="text-[0.6rem] font-semibold uppercase tracking-wider text-peelz-forest sm:text-xs">{category}</p>
        <h2 className="mt-1 break-words text-sm font-bold text-peelz-dark sm:mt-2 sm:text-xl">{name}</h2>
        {size && <p className="mt-1 text-[0.65rem] text-peelz-dark/65 sm:mt-2 sm:text-sm">Quantity: {size}</p>}
        <div className="mt-2 flex flex-wrap items-baseline gap-1 sm:mt-3 sm:gap-2">
          <span className="text-sm font-bold text-peelz-dark sm:text-lg">Rs. {bestPrice}</span>
          {mrp > bestPrice && <span className="text-[0.65rem] text-peelz-dark/50 line-through sm:text-sm">Rs. {mrp}</span>}
        </div>
        <div className="mt-auto flex flex-col gap-1 pt-3 sm:gap-2 sm:pt-5">
          <Link to={`/products/${id}`} className="flex-1 rounded-lg border border-peelz-dark px-2 py-1.5 text-center text-[0.65rem] font-semibold text-peelz-dark transition hover:bg-peelz-sage sm:px-3 sm:py-2 sm:text-sm">View details</Link>
          {quantity === 0 ? (
            <button type="button" onClick={() => addToCart({ id, name, category, mrp, bestPrice, size, ...item })} className="flex-1 rounded-lg bg-peelz-dark px-2 py-1.5 text-[0.65rem] font-semibold text-white transition hover:bg-peelz-forest sm:px-3 sm:py-2 sm:text-sm">Add to cart</button>
          ) : (
            <div className="flex flex-1 items-center justify-between rounded-lg bg-peelz-sage px-2 py-1">
              <button type="button" onClick={() => updateQuantity(id, -1)} className="h-8 w-8 rounded-md bg-white text-lg font-bold" aria-label={`Decrease ${name} quantity`}>−</button>
              <span className="font-bold text-peelz-dark">{quantity}</span>
              <button type="button" onClick={() => updateQuantity(id, 1)} className="h-8 w-8 rounded-md bg-white text-lg font-bold" aria-label={`Increase ${name} quantity`}>+</button>
            </div>
          )}
        </div>
      </div>
    </article>
  );
};

export default ProductCard;
