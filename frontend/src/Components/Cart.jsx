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
    <main className="min-h-screen overflow-x-hidden bg-peelz-offwhite px-4 py-28 text-peelz-dark sm:px-6 md:px-8">
      <div className="mx-auto max-w-[1000px]">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-peelz-forest">Your selection</p>
        <h1 className="mt-3 text-3xl font-bold sm:text-4xl md:text-5xl">Shopping cart</h1>
        {cartItems.length === 0 ? (
          <div className="mt-10 rounded-xl border border-peelz-aqua/50 bg-white p-10 text-center shadow-sm">
            <p className="text-lg text-peelz-dark/75">Your cart is empty.</p>
            <Link to="/products" className="mt-6 inline-flex rounded-lg bg-peelz-dark px-6 py-3 font-semibold text-white hover:bg-peelz-forest">Browse products</Link>
          </div>
        ) : (
          <>
            <div className="mt-10 space-y-4">
              {cartItems.map((item) => (
                <article key={item.id} className="flex items-center gap-2 rounded-xl border border-peelz-aqua/40 bg-white p-2 shadow-sm sm:gap-4 sm:p-4">
                  <img src={getProductImages(item.id, 1)[0]} onError={(event) => { event.currentTarget.src = getProductFallbackImage(item.category); event.currentTarget.onerror = handleImageError; }} alt={item.name} className="aspect-square h-16 w-16 shrink-0 rounded-lg object-contain sm:h-24 sm:w-24" />
                  <div className="min-w-0 flex-1">
                    <Link to={`/products/${item.id}`} className="break-words text-sm font-bold hover:text-peelz-forest sm:text-lg">{item.name}</Link>
                    <p className="mt-1 text-xs text-peelz-dark/65 sm:text-sm">{item.category}</p>
                  </div>
                  <div className="flex shrink-0 items-center gap-1 sm:gap-3">
                    <button type="button" onClick={() => updateQuantity(item.id, -1)} className="h-7 w-7 rounded-lg border border-peelz-aqua text-base sm:h-9 sm:w-9 sm:text-lg">−</button>
                    <span className="min-w-4 text-center text-sm font-semibold sm:min-w-6">{item.quantity}</span>
                    <button type="button" onClick={() => updateQuantity(item.id, 1)} className="h-7 w-7 rounded-lg border border-peelz-aqua text-base sm:h-9 sm:w-9 sm:text-lg">+</button>
                  </div>
                  <button type="button" onClick={() => removeFromCart(item.id)} className="shrink-0 text-xs font-semibold text-peelz-dark underline hover:text-peelz-forest sm:text-base">Remove</button>
                </article>
              ))}
            </div>
            <div className="mt-8 flex flex-col gap-4 rounded-xl bg-peelz-sage p-4 sm:p-6">
              <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                <p className="font-semibold">Total items: {cartCount}</p>
                <button type="button" onClick={checkout} className="w-full rounded-lg bg-peelz-dark px-6 py-3 text-center font-semibold text-white transition duration-200 hover:bg-peelz-forest sm:w-auto">Checkout on WhatsApp</button>
              </div>
              <p className="text-sm leading-relaxed text-peelz-dark/75">
                Your cart of products will be shared with the producer on WhatsApp.
              </p>
            </div>
          </>
        )}
      </div>
    </main>
  );
};

export default Cart;
