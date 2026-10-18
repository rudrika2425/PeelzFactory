import { useContext } from "react";
import { Link } from "react-router-dom";
import { ShopContext } from "./Context/ShopContextValue";
import { getProductFallbackImage, getProductImages, handleImageError } from "./utils/imagePaths";

const Cart = () => {
  const { cartItems, cartCount, updateQuantity, removeFromCart, clearCart } = useContext(ShopContext);

  const checkout = () => {
    const message = ["Peelz Factory order request", "", ...cartItems.map((item) => `${item.name} - Quantity: ${item.quantity} - Price: Rs. ${item.bestPrice}`), "", `Total items: ${cartCount}`].join("\n");
    clearCart();
    window.location.href = `https://wa.me/919971506594?text=${encodeURIComponent(message)}`;
  };

  return (
    <main className="min-h-screen bg-peelz-offwhite px-6 py-28 text-peelz-dark md:px-8">
      <div className="mx-auto max-w-[1000px]">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-peelz-forest">Your selection</p>
        <h1 className="mt-3 text-4xl font-bold md:text-5xl">Shopping cart</h1>
        {cartItems.length === 0 ? (
          <div className="mt-10 rounded-xl border border-peelz-aqua/50 bg-white p-10 text-center shadow-sm">
            <p className="text-lg text-peelz-dark/75">Your cart is empty.</p>
            <Link to="/products" className="mt-6 inline-flex rounded-lg bg-peelz-dark px-6 py-3 font-semibold text-white hover:bg-peelz-forest">Browse products</Link>
          </div>
        ) : (
          <>
            <div className="mt-10 space-y-4">
              {cartItems.map((item) => (
                <article key={item.id} className="flex flex-col gap-4 rounded-xl border border-peelz-aqua/40 bg-white p-4 shadow-sm sm:flex-row sm:items-center">
                  <img src={getProductImages(item.id, 1)[0]} onError={(event) => { event.currentTarget.src = getProductFallbackImage(item.category); event.currentTarget.onerror = handleImageError; }} alt={item.name} className="aspect-square h-24 w-24 rounded-lg object-contain" />
                  <div className="flex-1">
                    <Link to={`/products/${item.id}`} className="text-lg font-bold hover:text-peelz-forest">{item.name}</Link>
                    <p className="mt-1 text-sm text-peelz-dark/65">{item.category}</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <button type="button" onClick={() => updateQuantity(item.id, -1)} className="h-9 w-9 rounded-lg border border-peelz-aqua text-lg">−</button>
                    <span className="min-w-6 text-center font-semibold">{item.quantity}</span>
                    <button type="button" onClick={() => updateQuantity(item.id, 1)} className="h-9 w-9 rounded-lg border border-peelz-aqua text-lg">+</button>
                  </div>
                  <button type="button" onClick={() => removeFromCart(item.id)} className="font-semibold text-peelz-dark underline hover:text-peelz-forest">Remove</button>
                </article>
              ))}
            </div>
            <div className="mt-8 flex flex-col items-start justify-between gap-5 rounded-xl bg-peelz-sage p-6 sm:flex-row sm:items-center">
              <p className="font-semibold">Total items: {cartCount}</p>
              <button type="button" onClick={checkout} className="rounded-lg bg-peelz-dark px-6 py-3 font-semibold text-white transition duration-200 hover:bg-peelz-forest">Checkout on WhatsApp</button>
            </div>
          </>
        )}
      </div>
    </main>
  );
};

export default Cart;
