import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useContext } from "react";
import { ShopContext } from "../Context/ShopContextValue";

const navItems = [
  { label: "Home", path: "/" },
  { label: "Founders", path: "/founders" },
  { label: "Products", path: "/products" },
  { label: "Our Initiatives", path: "/our-initiatives" },
  { label: "Recognition", path: "/recognition" },
  { label: "Spotlight", path: "/media" },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const { cartCount } = useContext(ShopContext);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 12);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`fixed inset-x-0 top-0 z-50 border-b border-peelz-aqua/50 bg-white transition-shadow duration-200 ${isScrolled ? "shadow-md" : ""}`}>
      <div className="mx-auto flex max-w-[1200px] items-center justify-between px-5 py-2 md:px-7">
        <Link to="/" onClick={() => setIsOpen(false)} aria-label="Peelz Factory home" className="shrink-0">
          <img src="/images/logo.png" alt="Peelz Factory" className="h-14 w-52 object-contain object-left drop-shadow-sm transition duration-200 hover:scale-[1.02] sm:h-16 sm:w-64" />
        </Link>
        <div className="hidden items-center gap-6 lg:flex">
          {navItems.map((item) => (
            <Link key={item.path} to={item.path} className={`relative py-2 text-sm font-semibold text-peelz-dark transition duration-200 after:absolute after:inset-x-0 after:bottom-0 after:h-0.5 after:origin-left after:bg-peelz-forest after:transition-transform after:duration-200 hover:after:scale-x-100 ${location.pathname === item.path ? "after:scale-x-100" : "after:scale-x-0"}`}>
              {item.label}
            </Link>
          ))}
          <a href="tel:+919971506594" className="rounded-lg bg-peelz-dark px-3 py-2 text-sm font-semibold text-white transition duration-200 hover:bg-peelz-forest">Call us</a>
          <div className="flex items-center gap-3">
            <Link to="/cart" aria-label={`Cart with ${cartCount} items`} className="relative flex h-9 w-9 items-center justify-center rounded-lg border border-peelz-aqua text-peelz-dark transition duration-200 hover:bg-peelz-sage">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-6 w-6" aria-hidden="true"><path d="M3 4h2l2.2 11.2a2 2 0 0 0 2 1.6h7.9a2 2 0 0 0 1.9-1.4L21 8H6" strokeLinecap="round" strokeLinejoin="round" /><circle cx="10" cy="20" r="1" /><circle cx="18" cy="20" r="1" /></svg>
              {cartCount > 0 && <span className="absolute -right-2 -top-2 flex h-5 min-w-5 items-center justify-center rounded-full bg-peelz-forest px-1 text-xs font-bold text-peelz-dark">{cartCount}</span>}
            </Link>
            <a href="https://www.instagram.com/peelz_factory2024?psln=MWV1c21hYXp3cnV0eA==" target="_blank" rel="noreferrer" aria-label="Peelz Factory on Instagram" className="flex h-9 w-9 items-center justify-center rounded-full border-2 border-peelz-forest text-peelz-dark transition-colors duration-200 hover:bg-peelz-sage hover:text-peelz-forest">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-5 w-5" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="5" /><circle cx="12" cy="12" r="4" /><circle cx="17.5" cy="6.5" r=".75" fill="currentColor" stroke="none" /></svg>
            </a>
            <a href="https://www.facebook.com/share/1G83tyLDxm/" target="_blank" rel="noreferrer" aria-label="Peelz Factory on Facebook" className="flex h-9 w-9 items-center justify-center rounded-full border-2 border-peelz-forest text-peelz-dark transition-colors duration-200 hover:bg-peelz-sage hover:text-peelz-forest">
              <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5" aria-hidden="true"><path d="M13.5 21v-8h2.7l.4-3h-3.1V8.1c0-.9.3-1.5 1.6-1.5h1.7V4a22 22 0 0 0-2.4-.1c-2.4 0-4 1.5-4 4.1V10H8v3h2.4v8h3.1Z" /></svg>
            </a>
            <a href="https://wa.me/919971506594" target="_blank" rel="noreferrer" aria-label="Contact Peelz Factory on WhatsApp" className="flex h-9 w-9 items-center justify-center rounded-full border-2 border-peelz-forest text-peelz-dark transition-colors duration-200 hover:bg-peelz-sage hover:text-peelz-forest">
              <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5" aria-hidden="true"><path d="M12 3a8.9 8.9 0 0 0-7.7 13.4L3 21l4.8-1.3A9 9 0 1 0 12 3Zm0 16a7 7 0 0 1-3.6-1l-.3-.2-2.8.8.8-2.7-.2-.3A7 7 0 1 1 12 19Zm3.8-5.2c-.2-.1-1.2-.6-1.4-.7-.2-.1-.3-.1-.5.1l-.6.8c-.1.1-.2.2-.4.1a5.6 5.6 0 0 1-2.8-2.5c-.2-.3 0-.4.1-.5l.4-.5c.1-.2.1-.3 0-.5l-.6-1.4c-.2-.4-.3-.3-.5-.3h-.4c-.2 0-.5.1-.7.3-.2.2-.9.9-.9 2.1s.9 2.4 1 2.6c.1.2 1.8 2.8 4.4 3.9.6.3 1.1.4 1.5.5.6.2 1.2.1 1.6.1.5-.1 1.2-.5 1.3-1 .2-.5.2-1 .1-1.1-.1-.1-.3-.2-.5-.3Z" /></svg>
            </a>
          </div>
        </div>
        <button type="button" aria-label={isOpen ? "Close menu" : "Open menu"} onClick={() => setIsOpen(!isOpen)} className="rounded-lg border border-peelz-aqua p-2 text-peelz-dark lg:hidden">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-6 w-6" aria-hidden="true"><path d={isOpen ? "M6 6l12 12M18 6 6 18" : "M4 7h16M4 12h16M4 17h16"} strokeLinecap="round" /></svg>
        </button>
      </div>
      {isOpen && (
        <div className="border-t border-peelz-aqua/50 bg-white px-6 pb-5 pt-3 lg:hidden">
          {navItems.map((item) => <Link key={item.path} to={item.path} onClick={() => setIsOpen(false)} className="block rounded-lg px-3 py-3 font-semibold text-peelz-dark hover:bg-peelz-sage">{item.label}</Link>)}
          <Link to="/cart" onClick={() => setIsOpen(false)} className="mt-2 flex items-center justify-center gap-2 rounded-lg border border-peelz-aqua px-3 py-3 font-semibold text-peelz-dark hover:bg-peelz-sage">Cart ({cartCount})</Link>
          <div className="mt-3 flex justify-center gap-3">
            <a href="https://www.instagram.com/peelz_factory2024?psln=MWV1c21hYXp3cnV0eA==" target="_blank" rel="noreferrer" aria-label="Peelz Factory on Instagram" className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-peelz-forest text-peelz-dark hover:bg-peelz-sage">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-5 w-5" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="5" /><circle cx="12" cy="12" r="4" /><circle cx="17.5" cy="6.5" r=".75" fill="currentColor" stroke="none" /></svg>
            </a>
            <a href="https://www.facebook.com/share/1G83tyLDxm/" target="_blank" rel="noreferrer" aria-label="Peelz Factory on Facebook" className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-peelz-forest text-peelz-dark hover:bg-peelz-sage">
              <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5" aria-hidden="true"><path d="M13.5 21v-8h2.7l.4-3h-3.1V8.1c0-.9.3-1.5 1.6-1.5h1.7V4a22 22 0 0 0-2.4-.1c-2.4 0-4 1.5-4 4.1V10H8v3h3.1Z" /></svg>
            </a>
            <a href="https://wa.me/919971506594" target="_blank" rel="noreferrer" aria-label="Contact Peelz Factory on WhatsApp" className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-peelz-forest text-peelz-dark hover:bg-peelz-sage">
              <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5" aria-hidden="true"><path d="M12 3a8.9 8.9 0 0 0-7.7 13.4L3 21l4.8-1.3A9 9 0 1 0 12 3Zm0 16a7 7 0 0 1-3.6-1l-.3-.2-2.8.8.8-2.7-.2-.3A7 7 0 1 1 12 19Zm3.8-5.2c-.2-.1-1.2-.6-1.4-.7-.2-.1-.3-.1-.5.1l-.6.8c-.1.1-.2.2-.4.1a5.6 5.6 0 0 1-2.8-2.5c-.2-.3 0-.4.1-.5l.4-.5c.1-.2.1-.3 0-.5l-.6-1.4c-.2-.4-.3-.3-.5-.3h-.4c-.2 0-.5.1-.7.3-.2.2-.9.9-.9 2.1s.9 2.4 1 2.6c.1.2 1.8 2.8 4.4 3.9.6.3 1.1.4 1.5.5.6.2 1.2.1 1.6.1.5-.1 1.2-.5 1.3-1 .2-.5.2-1 .1-1.1-.1-.1-.3-.2-.5-.3Z" /></svg>
            </a>
          </div>
          <a href="tel:+919971506594" className="mt-2 block rounded-lg bg-peelz-dark px-3 py-3 text-center font-semibold text-white">Call us</a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
