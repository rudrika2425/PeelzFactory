const Footer = () => (
  <footer className="bg-peelz-dark text-white">
    <div className="mx-auto grid max-w-[1200px] gap-10 px-6 py-12 md:grid-cols-3 md:px-8 md:py-16">
      <div>
         <p className="max-w-sm leading-[1.7] text-white/80">Responsible products and partnerships for cleaner homes, healthier farms, and stronger communities.</p>
      </div>
      <div>
        <h2 className="font-bold text-white">Explore</h2>
        <div className="mt-4 grid gap-3">
          <a href="/products" className="text-white/80 transition duration-200 hover:text-peelz-sage">Products</a>
          <a href="/founders" className="text-white/80 transition duration-200 hover:text-peelz-sage">Our team</a>
          <a href="/our-initiatives" className="text-white/80 transition duration-200 hover:text-peelz-sage">Our Initiatives</a>
        </div>
      </div>
      <div>
        <h2 className="font-bold text-white">Contact</h2>
        <div className="mt-4 space-y-3 text-white/80">
          <a href="tel:+919971506594" className="block transition duration-200 hover:text-peelz-sage">+91 99715 06594</a>
          <p>Badi Garhi , Gawan, Sambhal, Uttar Pradesh</p>
          <p>Mon – Fri : 10 am – 7 pm</p>
        </div>
      </div>
    </div>
    <div className="border-t border-white/20 px-6 py-5 text-center text-sm text-white/80">© 2024 Peelz Factory. All rights reserved.</div>
  </footer>
);

export default Footer;
