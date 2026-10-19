import { Link } from "react-router-dom";

const navItems = [
  { label: "Home", path: "/" },
  { label: "Founders", path: "/founders" },
  { label: "Products", path: "/products" },
  { label: "Our Initiatives", path: "/our-initiatives" },
  { label: "Recognition", path: "/recognition" },
  { label: "Spotlight", path: "/media" },
];

const socialLinks = [
  {
    label: "Instagram",
    href: "https://www.instagram.com/peelz_factory2024?psln=MWV1c21hYXp3cnV0eA==",
    icon: <><rect x="3" y="3" width="18" height="18" rx="5" /><circle cx="12" cy="12" r="4" /><circle cx="17.5" cy="6.5" r=".75" fill="currentColor" stroke="none" /></>,
  },
  {
    label: "Facebook",
    href: "https://www.facebook.com/share/1G83tyLDxm/",
    icon: <path fill="currentColor" stroke="none" d="M13.5 21v-8h2.7l.4-3h-3.1V8.1c0-.9.3-1.5 1.6-1.5h1.7V4a22 22 0 0 0-2.4-.1c-2.4 0-4 1.5-4 4.1V10H8v3h2.4v8h3.1Z" />,
  },
  {
    label: "WhatsApp",
    href: "https://wa.me/919971506594",
    icon: <path fill="currentColor" stroke="none" d="M12 3a8.9 8.9 0 0 0-7.7 13.4L3 21l4.8-1.3A9 9 0 1 0 12 3Zm0 16a7 7 0 0 1-3.6-1l-.3-.2-2.8.8.8-2.7-.2-.3A7 7 0 1 1 12 19Zm3.8-5.2c-.2-.1-1.2-.6-1.4-.7-.2-.1-.3-.1-.5.1l-.6.8c-.1.1-.2.2-.4.1a5.6 5.6 0 0 1-2.8-2.5c-.2-.3 0-.4.1-.5l.4-.5c.1-.2.1-.3 0-.5l-.6-1.4c-.2-.4-.3-.3-.5-.3h-.4c-.2 0-.5.1-.7.3-.2.2-.9.9-.9 2.1s.9 2.4 1 2.6c.1.2 1.8 2.8 4.4 3.9.6.3 1.1.4 1.5.5.6.2 1.2.1 1.6.1.5-.1 1.2-.5 1.3-1 .2-.5.2-1 .1-1.1-.1-.1-.3-.2-.5-.3Z" />,
  },
];

const Footer = () => (
  <footer className="bg-peelz-dark text-white">
    <div className="mx-auto grid max-w-[1200px] gap-10 px-5 py-12 sm:px-6 md:grid-cols-2 md:px-8 md:py-16 lg:grid-cols-[1.25fr_1fr_1.15fr] lg:gap-12">
      <div>
        <img src="/images/logo.png" alt="Peelz Factory" className="h-16 w-52 object-contain object-left brightness-0 invert" />
        <p className="mt-4 max-w-sm leading-[1.7] text-white/80">Responsible products and partnerships for cleaner homes, healthier farms, and stronger communities.</p>
        <div className="mt-6 flex flex-wrap gap-3">
          {socialLinks.map((social) => (
            <a key={social.label} href={social.href} target="_blank" rel="noreferrer" aria-label={`Peelz Factory on ${social.label}`} className="flex h-10 w-10 items-center justify-center rounded-full border border-peelz-forest text-white transition duration-200 hover:bg-peelz-sage hover:text-peelz-dark">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-5 w-5" aria-hidden="true">{social.icon}</svg>
            </a>
          ))}
        </div>
      </div>

      <div>
        <h2 className="font-bold text-white">Explore</h2>
        <nav className="mt-4 grid grid-cols-2 gap-x-5 gap-y-3 sm:grid-cols-3 md:grid-cols-2 lg:grid-cols-1" aria-label="Footer navigation">
          {navItems.map((item) => (
            <Link key={item.path} to={item.path} className="text-sm text-white/80 transition duration-200 hover:text-peelz-sage">{item.label}</Link>
          ))}
          
        </nav>
      </div>

      <div>
        <h2 className="font-bold text-white">Contact</h2>
        <div className="mt-4 space-y-3 text-sm text-white/80">
          <a href="tel:+919971506594" className="block transition duration-200 hover:text-peelz-sage">+91 99715 06594</a>
          <a href="tel:+919599429229" className="block transition duration-200 hover:text-peelz-sage">+91 95994 29229</a>
          <p className="break-words">Badi Garhi, Gawan, Sambhal, Uttar Pradesh</p>
          <p>Mon – Fri : 10 am – 7 pm</p>
        </div>
      </div>
    </div>
    <div className="border-t border-white/20 px-5 py-5 text-center text-xs text-white/80 sm:px-6 sm:text-sm">© 2024 Peelz Factory. All rights reserved.</div>
  </footer>
);

export default Footer;
