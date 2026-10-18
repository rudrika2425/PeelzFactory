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
      <Link to={`/products/${id}`} className="block bg-peelz-offwhite p-4" aria-label={`View details for ${name}`}>
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
      <div className="flex flex-1 flex-col p-5">
        <p className="text-xs font-semibold uppercase tracking-wider text-peelz-forest">{category}</p>
        <h2 className="mt-2 text-xl font-bold text-peelz-dark">{name}</h2>
        {size && <p className="mt-2 text-sm text-peelz-dark/65">Quantity: {size}</p>}
        <div className="mt-3 flex items-baseline gap-2">
          <span className="text-lg font-bold text-peelz-dark">Rs. {bestPrice}</span>
          {mrp > bestPrice && <span className="text-sm text-peelz-dark/50 line-through">Rs. {mrp}</span>}
        </div>
        <div className="mt-auto flex gap-2 pt-5">
          <Link to={`/products/${id}`} className="flex-1 rounded-lg border border-peelz-dark px-3 py-2 text-center text-sm font-semibold text-peelz-dark transition hover:bg-peelz-sage">View details</Link>
          {quantity === 0 ? (
            <button type="button" onClick={() => addToCart({ id, name, category, mrp, bestPrice, size, ...item })} className="flex-1 rounded-lg bg-peelz-dark px-3 py-2 text-sm font-semibold text-white transition hover:bg-peelz-forest">Add to cart</button>
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
