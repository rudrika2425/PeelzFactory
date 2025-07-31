import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
const logo = "/images/logo-peelz.png";

const Nav = () => {
  const [menu, setMenu] = useState("home");
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: "home", label: "Home", path: "/" },
    { id: "founders", label: "Founders", path: "/founders" },
    { id: "products", label: "Products", path: "/products" },
    { id: "collaborations", label: "Collaborations", path: "/collaborations" },
    { id: "media", label: "Spotlight", path: "/media" },
    { id: "recognition", label: "Recognition", path: "/recognition" },
    { id: "gallery", label: "Gallery", path: "/gallery" }
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out ${
      isScrolled 
        ? 'bg-white/98 backdrop-blur-xl shadow-lg border-b border-gray-100' 
        : 'bg-white/95 backdrop-blur-sm'
    }`}>
      <div className="container mx-auto px-6 py-4">
        <div className="flex justify-around items-center">
          <div className="flex items-center">
            <Link to="/" className="group">
              <img
                src={logo}
                alt="Company Logo"
                className="h-16 w-56 transition-transform duration-300 group-hover:scale-105"
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <div key={item.id} className="relative group">
                <Link
                  to={item.path}
                  onClick={() => setMenu(item.id)}
                  className={`relative px-3 py-2 font-medium text-base transition-all duration-300 ${
                    menu === item.id
                      ? 'text-green-600 font-semibold'
                      : 'text-gray-700 hover:text-green-600'
                  }`}
                >
                  <span className="relative z-10">{item.label}</span>
                  {menu === item.id && (
                    <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-green-600 rounded-full"></div>
                  )}
                  <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-green-600 rounded-full scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                </Link>
              </div>
            ))}
            <div className="ml-6 px-6 py-3 bg-green-600 hover:bg-green-700 text-white rounded-full font-medium transition-colors duration-300 shadow-lg hover:shadow-xl">
              +91 9971506594
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden relative w-10 h-10 flex flex-col justify-center items-center text-gray-700 hover:text-green-600 transition-colors duration-300"
          >
            <div className={`w-6 h-0.5 bg-current rounded-full transition-all duration-300 ${isMobileMenuOpen ? 'rotate-45 translate-y-1' : ''}`}></div>
            <div className={`w-6 h-0.5 bg-current rounded-full mt-1 transition-all duration-300 ${isMobileMenuOpen ? 'opacity-0' : ''}`}></div>
            <div className={`w-6 h-0.5 bg-current rounded-full mt-1 transition-all duration-300 ${isMobileMenuOpen ? '-rotate-45 -translate-y-1' : ''}`}></div>
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={`lg:hidden overflow-hidden transition-all duration-500 ease-in-out ${
          isMobileMenuOpen ? 'max-h-96 opacity-100 mt-6' : 'max-h-0 opacity-0'
        }`}>
          <div className="bg-white rounded-xl p-6 shadow-xl border border-gray-100">
            {navItems.map((item, index) => (
              <Link
                key={item.id}
                to={item.path}
                onClick={() => {
                  setMenu(item.id);
                  setIsMobileMenuOpen(false);
                }}
                className={`block px-4 py-3 rounded-lg font-medium text-base transition-all duration-300 ${
                  menu === item.id
                    ? 'text-green-600 bg-green-50 font-semibold'
                    : 'text-gray-700 hover:text-green-600 hover:bg-gray-50'
                }`}
                style={{ animationDelay: `${index * 50}ms` }}
              >
                {item.label}
              </Link>
            ))}
            <div className="mt-4 px-4 py-3 bg-green-600 hover:bg-green-700 text-white rounded-lg font-medium text-center transition-colors duration-300">
              +91 9971506594
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Nav;