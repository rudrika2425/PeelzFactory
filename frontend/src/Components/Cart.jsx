import { useContext } from "react";
import { Link } from "react-router-dom";
import { ShopContext } from "./Context/ShopContextValue";
import { getProductFallbackImage, getProductImages, handleImageError } from "./utils/imagePaths";

const Cart = () => {
  const { cartItems, cartCount, updateQuantity, removeFromCart, clearCart } = useContext(ShopContext);
 const getLineTotal = (item) => item.bestPrice * item.quantity;
 const cartTotal = cartItems.reduce((total, item) => total + getLineTotal(item), 0);
 const deliveryMessage = cartTotal > 1500 ? "Delivery fees: Free" : "Delivery fees: Based on distance";

  const checkout = () => {
 const orderLines = cartItems.map((item, index) => (
 (index + 1) + ". " + item.name + "\n Quantity: " + item.quantity + "\n Price per piece: Rs. " + item.bestPrice + "\n Item total: Rs. " + getLineTotal(item)
 ));
 const message = [
 "Peelz Factory order request",
 "",
 ...orderLines,
 "",
 "Total items: " + cartCount,
 "Total bill: Rs. " + cartTotal,
 deliveryMessage,
 ].join("\n");
    clearCart();
    window.location.href = `https://wa.me/919971506594?text=${encodeURIComponent(message)}`;
  };

  return (
    <main className="min-h-screen overflow-x-hidden bg-peelz-offwhite px-4 py-28 text-peelz-dark sm:px-6 md:px-8">
      <div className="mx-auto max-w-[1000px]">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-peelz-forest">Your selection</p>
 <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
 <h1 className="mt-3 text-3xl font-bold sm:text-4xl md:text-5xl">Shopping cart</h1>
 <div className="flex min-w-0 flex-col items-start gap-2 sm:items-end">
 <Link to="/products" className="inline-flex items-center justify-center rounded-lg border border-peelz-dark px-4 py-2 text-sm font-semibold text-peelz-dark transition hover:bg-peelz-aqua">Add more products</Link>
 <p className="max-w-full break-words text-sm font-semibold text-peelz-dark motion-safe:animate-pulse sm:text-right">Free delivery on orders over Rs. 1500.</p>
 </div>
 </div>
        {cartItems.length === 0 ? (
          <div className="mt-10 rounded-xl border border-peelz-aqua/50 bg-white p-10 text-center shadow-sm">
            <p className="text-lg text-peelz-dark/75">Your cart is empty.</p>
            <Link to="/products" className="mt-6 inline-flex rounded-lg bg-peelz-dark px-6 py-3 font-semibold text-white hover:bg-peelz-forest">Browse products</Link>
          </div>
        ) : (
          <>
            <div className="mt-10 space-y-4">
              {cartItems.map((item) => (
 <article key={item.id} className="grid grid-cols-[4rem_minmax(0,1fr)] items-start gap-3 rounded-xl border border-peelz-aqua/40 bg-white p-2 shadow-sm lg:flex lg:items-center lg:gap-5 lg:p-4">
                  <img src={getProductImages(item.id, 1)[0]} onError={(event) => { event.currentTarget.src = getProductFallbackImage(item.category); event.currentTarget.onerror = handleImageError; }} alt={item.name} className="row-span-2 aspect-square h-16 w-16 shrink-0 rounded-lg object-contain lg:row-span-1 lg:h-24 lg:w-24" />
                  <div className="relative col-start-2 min-w-0 lg:contents">
                    <Link to={`/products/${item.id}`} className="break-words text-sm font-bold hover:text-peelz-forest sm:text-lg">{item.name}</Link>
                    <p className="mt-1 text-xs text-peelz-dark/65 sm:text-sm">{item.category}</p>
 <p className="mt-2 text-sm font-semibold text-peelz-dark sm:text-base">Price per piece: Rs. {item.bestPrice}</p>
 <div className="absolute right-0 top-1/2 flex -translate-y-1/2 items-center gap-3 lg:hidden">
 <p className="text-base font-bold tabular-nums text-peelz-dark">Rs. {getLineTotal(item)}</p>
 <button type="button" onClick={() => removeFromCart(item.id)} className="flex h-7 w-7 items-center justify-center rounded-full text-xl font-semibold text-peelz-dark" aria-label={`Remove ${item.name} from cart`}>×</button>
 </div>
                  </div>
 <div className="col-start-2 row-start-2 flex w-full shrink-0 items-center justify-start gap-3 lg:col-auto lg:row-auto lg:ml-auto lg:w-auto lg:justify-end lg:gap-6">
 <div className="flex shrink-0 items-center gap-2 sm:gap-5">
                    <button type="button" onClick={() => updateQuantity(item.id, -1)} className="h-7 w-7 rounded-lg border border-peelz-aqua text-base lg:h-9 lg:w-9 sm:text-lg">−</button>
                    <span className="min-w-4 text-center text-sm font-semibold sm:min-w-6">{item.quantity}</span>
                    <button type="button" onClick={() => updateQuantity(item.id, 1)} className="h-7 w-7 rounded-lg border border-peelz-aqua text-base lg:h-9 lg:w-9 sm:text-lg">+</button>
                  </div>
 <p className="hidden w-24 shrink-0 text-right text-base font-bold tabular-nums text-peelz-dark lg:block lg:w-28 lg:text-lg">Rs. {getLineTotal(item)}</p>
 <button type="button" onClick={() => removeFromCart(item.id)} className="mx-2 hidden h-7 w-7 shrink-0 lg:flex items-center justify-center rounded-full text-xl font-semibold text-peelz-dark transition hover:bg-peelz-aqua hover:text-peelz-forest lg:h-9 lg:w-9" aria-label={`Remove ${item.name} from cart`}>×</button>
 </div>
                </article>
              ))}
            </div>
            <div className="mt-8 flex flex-col gap-4 rounded-xl bg-peelz-sage p-4 sm:p-6">
              <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
 <div>
 <p className="font-semibold">Total items: {cartCount}</p>
 <p className="mt-2 text-xl font-bold sm:text-xl">Total bill: Rs. {cartTotal}</p>
 <p className="mt-1 text-sm font-semibold">{deliveryMessage}</p>
 </div>
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
