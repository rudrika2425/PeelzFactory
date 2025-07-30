import React, { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

// Floating Elements Component - Refined
const FloatingElements = () => {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {/* Organic Shapes */}
      <div className="absolute top-20 left-10 w-4 h-4 bg-green-200 rounded-full opacity-30 animate-pulse" style={{animationDelay: '0s', animationDuration: '4s'}}></div>
      <div className="absolute top-40 right-20 w-3 h-3 bg-emerald-300 rounded-full opacity-25" style={{animationDelay: '1s', animationDuration: '5s', animation: 'float 5s ease-in-out infinite'}}></div>
      <div className="absolute top-60 left-1/4 w-5 h-5 bg-lime-200 rounded-full opacity-20" style={{animationDelay: '2s', animationDuration: '3.5s', animation: 'float 3.5s ease-in-out infinite'}}></div>
      <div className="absolute bottom-1/3 right-1/3 w-2 h-2 bg-teal-300 rounded-full opacity-35" style={{animationDelay: '2.5s', animationDuration: '4.5s', animation: 'float 4.5s ease-in-out infinite'}}></div>
      <div className="absolute top-1/3 left-1/3 w-3 h-3 bg-green-300 rounded-full opacity-30" style={{animationDelay: '3.5s', animationDuration: '6s', animation: 'float 6s ease-in-out infinite'}}></div>
      
      {/* Geometric Elements */}
      <div className="absolute top-32 right-1/3 w-8 h-8 border border-green-300 rounded-full opacity-20 animate-spin" style={{animationDelay: '0.5s', animationDuration: '20s'}}></div>
      <div className="absolute bottom-40 left-16 w-6 h-6 border border-emerald-400 opacity-15 animate-pulse" style={{animationDelay: '1.5s', animationDuration: '4s'}}></div>
      <div className="absolute top-1/2 right-10 w-10 h-10 border-2 border-lime-300 rounded-full opacity-10 animate-spin" style={{animationDelay: '3s', animationDuration: '15s'}}></div>
      
      {/* Organic Pattern Overlays */}
      <div className="absolute bottom-20 right-1/4 opacity-5">
        <div className="w-24 h-24 border-2 border-green-400 rounded-full animate-spin" style={{animationDuration: '25s'}}></div>
      </div>
      <div className="absolute top-1/3 left-8 opacity-8">
        <div className="w-16 h-16 border border-emerald-300 rounded-full animate-pulse" style={{animationDuration: '8s'}}></div>
      </div>
    </div>
  );
};

// Home Component
const Home = () => {
  return (
    <div className="min-h-screen relative bg-gradient-to-br from-green-50 via-emerald-25 via-lime-50 to-teal-50 overflow-x-hidden">
      {/* Floating Elements Background */}
      <FloatingElements />
      
      {/* Hero Section */}
      <div className="relative pt-24 pb-16 z-10 mt-10">
        <div className="container mx-auto px-6 text-center">
          <div className="max-w-7xl mx-auto">
            <div className="relative">
              {/* Background decoration */}
              <div className="absolute inset-0 bg-gradient-to-r from-green-100/60 via-emerald-100/60 to-lime-100/60 rounded-3xl blur-xl"></div>
              
              <div className="relative text-xl leading-relaxed text-gray-800 bg-white/90 backdrop-blur-md rounded-3xl p-12 shadow-2xl border border-green-200/50">
                <div className="mb-8">
                  <h1 className="text-5xl font-bold bg-gradient-to-r from-green-700 via-emerald-600 to-teal-600 bg-clip-text text-transparent mb-4 leading-tight">
                    Peelz Factory Pvt. Ltd.
                  </h1>
                  <div className="w-24 h-1 bg-gradient-to-r from-green-500 to-emerald-500 mx-auto rounded-full"></div>
                </div>
                
                <p className="text-lg text-gray-700 leading-relaxed max-w-5xl mx-auto">
                  Transforming organic waste into eco-friendly agricultural and household solutions through innovative technology. Based in Gawan, Sambhal, Uttar Pradesh, we address India's critical waste management and environmental challenges using advanced anaerobic decomposition processes.
                </p>
                
                <p className="text-lg text-gray-700 leading-relaxed max-w-5xl mx-auto mt-6">
                  Our comprehensive product range includes bio-fertilizers, natural cleaners, and animal hygiene solutions—all safe for humans, pets, and the environment. By fostering a circular economy, we convert waste into valuable resources while reducing methane emissions, enhancing soil health, and promoting biodiversity.
                </p>
                
                <div className="mt-10">
                  <div className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-green-600 to-emerald-600 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                    <span className="mr-3">Building a Cleaner, Greener Future</span>
                    <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <ImageSlider />
      <Aim />
      <Purpose />
      <Vision />
    </div>
  );
};

// Image Slider Component
const ImageSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const images = [
    "/images/banner-1.png",
    "/images/banner-2.png",
    "/images/banner-9.png",
    "/images/banner-4.png",
    "/images/banner-10.png",
    "/images/banner-7.png",
    "/images/banner-8.png",
    "/images/banner-3.png",
    "/images/banner-5.png",
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [images.length]);

  return (
    <div className="relative h-[70vh] mb-16 mt-8">
      <div className="relative h-full rounded-3xl overflow-hidden mx-96 my-10 shadow-2xl">
        <Swiper
          modules={[Pagination, Autoplay]} 
          spaceBetween={0}
          slidesPerView={1}
          pagination={{ 
            clickable: true,
            bulletClass: 'swiper-pagination-bullet !bg-green-600',
            bulletActiveClass: 'swiper-pagination-bullet-active !bg-emerald-700'
          }}
          autoplay={{ delay: 3500, disableOnInteraction: false }}
          loop={true}
          className="h-full rounded-3xl"
        >
          {images.map((image, index) => (
            <SwiperSlide key={index} className="flex items-center justify-center bg-gradient-to-br from-green-50 to-emerald-50">
              <img
                src={image}
                alt={`Sustainable Innovation ${index + 1}`}
                className="w-full h-full object-contain drop-shadow-xl"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

// Aim Component
const Aim = () => {
  const aims = [
    {
      title: "Sustainable Waste Management",
      description: "Provide sustainable waste management and environmental protection solutions by creating multi-purpose, eco-friendly products from organic waste using advanced anaerobic decomposition technology.",
      icon: <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center text-white font-bold text-xl">S</div>
    },
    {
      title: "Pollution-Free Living",
      description: "Promote the adoption of non-toxic alternatives in farming, cleaning, and waste management to minimize pollution caused by agricultural chemicals, livestock waste, and household cleaners.",
      icon: <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-full flex items-center justify-center text-white font-bold text-xl">P</div>
    },
    {
      title: "Community Empowerment",
      description: "Empower rural and urban communities with cost-effective solutions while generating awareness about waste recycling and its environmental benefits through education and collaboration.",
      icon: <div className="w-12 h-12 bg-gradient-to-br from-teal-500 to-green-600 rounded-full flex items-center justify-center text-white font-bold text-xl">C</div>
    }
  ];

  return (
    <section className="container mx-auto px-6 mb-20 relative z-10">
      <div className="relative bg-gradient-to-br from-white/95 via-green-50/90 to-emerald-50/95 backdrop-blur-md rounded-3xl p-12 shadow-2xl border border-green-200/50">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="lg:w-1/2">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-green-300/20 to-emerald-400/20 rounded-3xl blur-2xl"></div>
              <img
                src="/images/aim.png"
                alt="Our Mission for Sustainability"
                className="relative z-10 w-full h-80 object-cover rounded-3xl shadow-2xl border-4 border-white/70"
              />
              <div className="absolute -bottom-4 -right-4 bg-gradient-to-r from-green-600 to-emerald-600 text-white p-4 rounded-full shadow-xl">
                <div className="w-6 h-6 bg-white/20 rounded-full"></div>
              </div>
            </div>
          </div>
          
          <div className=" space-y-8">
            <div className="text-center">
              <h2 className="text-6xl font-bold bg-gradient-to-r from-green-700 via-emerald-600 to-teal-600 bg-clip-text text-transparent mb-4">
                Our Aim
              </h2>
               </div>
            
            {aims.map((aim, index) => (
              <div key={index} className="group bg-gradient-to-r from-green-50/90 via-emerald-50/90 to-lime-50/90 rounded-2xl p-8 border border-green-300/30 hover:shadow-xl transition-all duration-500 hover:scale-105 hover:border-green-400/50 backdrop-blur-sm">
                <div className="flex items-start gap-6">
                  <div className="group-hover:scale-110 transition-transform duration-300">
                    {aim.icon}
                  </div>
                  <div>
                    <h3 className="text-2xl font-semibold text-green-800 mb-3 group-hover:text-green-900 transition-colors">
                      {aim.title}
                    </h3>
                    <p className="text-gray-700 leading-relaxed">
                      {aim.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

// Purpose Component
const Purpose = () => {
  const purposes = [
    {
      title: "Combatting Pollution",
      description: "Minimize soil, water, and air pollution caused by chemicals and improper waste disposal. We focus on eco-friendly alternatives and reducing harmful chemical usage through innovative biotechnology solutions.",
      gradient: "from-slate-600 via-gray-700 to-slate-800",
      bgGradient: "from-slate-50 to-gray-100",
      image: "/images/p-1.png",
      icon: "P"
    },
    {
      title: "Promoting Health & Biodiversity",
      description: "Provide farmers, households, and industries with safe alternatives that protect human health and enhance biodiversity. Our natural, non-toxic products support ecosystem balance and community wellness.",
      gradient: "from-rose-600 via-pink-700 to-red-800",
      bgGradient: "from-rose-50 to-pink-100",
      image: "/images/p-2.png",
      icon: "H"
    },
    {
      title: "Fostering Economic Growth",
      description: "Drive innovation and economic growth through scalable, sustainable waste management business models. We create employment opportunities while developing new markets for eco-friendly products.",
      gradient: "from-amber-600 via-yellow-700 to-orange-800",
      bgGradient: "from-amber-50 to-yellow-100",
      image: "/images/p-3.png",
      icon: "E"
    },
    {
      title: "Raising Awareness",
      description: "Inspire environmental action through impactful education and collaborative partnerships. We conduct awareness campaigns, workshops, and community programs to promote sustainable practices.",
      gradient: "from-green-600 via-emerald-700 to-teal-800",
      bgGradient: "from-green-50 to-emerald-100",
      image: "/images/p-4.png",
      icon: "A"
    },
    {
      title: "Integrating Sustainability",
      description: "Champion cleaner, greener living by encouraging sustainable practices in daily life. We help individuals and businesses integrate environmental responsibility into their everyday operations.",
      gradient: "from-blue-600 via-cyan-700 to-teal-800",
      bgGradient: "from-blue-50 to-cyan-100",
      image: "/images/p-5.png",
      icon: "S"
    },
  ];

  return (
    <section className="container mx-auto px-6 mb-20 relative z-10">
      {/* Section Header */}
      <div className="text-center mb-16 relative">
        <h2 className="text-6xl font-bold bg-gradient-to-r from-green-700 via-emerald-600 to-teal-600 bg-clip-text text-transparent mb-4">
          Our Purpose
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-green-500 to-emerald-500 mx-auto rounded-full mb-6"></div>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
          Transforming waste into sustainable solutions, securing nature's future through innovation and responsible environmental stewardship
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {purposes.map((purpose, index) => (
          <div
            key={index}
            className="group bg-white/95 backdrop-blur-sm rounded-3xl overflow-hidden shadow-xl border border-green-200/50 hover:shadow-2xl hover:scale-105 transition-all duration-500 hover:border-green-300/70"
          >
            <div className={`h-52 bg-gradient-to-br ${purpose.gradient} relative overflow-hidden`}>
              <div className="absolute inset-0 bg-black/10"></div>
              <div className="absolute top-4 right-4 w-12 h-12 bg-white/20 rounded-full flex items-center justify-center text-white font-bold text-lg backdrop-blur-sm">
                {purpose.icon}
              </div>
              
              <img
                src={purpose.image}
                alt={purpose.title}
                className="absolute inset-0 w-full h-full object-contain p-8 filter drop-shadow-2xl group-hover:scale-110 transition-transform duration-500"
              />
            </div>
            
            <div className={`p-8 bg-gradient-to-br ${purpose.bgGradient} relative`}>
              <h3 className="text-xl font-bold text-green-800 mb-4 group-hover:text-green-900 transition-colors">
                {purpose.title}
              </h3>
              <p className="text-gray-700 leading-relaxed">
                {purpose.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

// Vision Component
const Vision = () => {
  return (
    <section className="container mx-auto px-6 mb-20 relative z-10">
      <div className="relative bg-gradient-to-br from-green-600 via-emerald-600 to-teal-600 rounded-3xl p-16 text-white text-center shadow-2xl overflow-hidden">
        {/* Decorative background elements */}
        <div className="absolute top-8 left-8 w-20 h-20 bg-white/10 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-12 right-12 w-16 h-16 bg-white/15 rounded-full blur-lg animate-pulse" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-1/2 left-16 w-12 h-12 bg-white/10 rounded-full blur-md animate-pulse" style={{animationDelay: '1s'}}></div>
        <div className="absolute top-16 right-1/4 w-8 h-8 bg-white/20 rounded-full blur-sm animate-pulse" style={{animationDelay: '3s'}}></div>
        
        {/* Content */}
        <div className="relative z-10">
          <div className="mb-8">
            <div className="w-16 h-16 bg-white/20 rounded-full mx-auto mb-6 flex items-center justify-center backdrop-blur-sm">
              <div className="w-8 h-8 bg-white/30 rounded-full"></div>
            </div>
            <h2 className="text-6xl font-bold mb-6 drop-shadow-lg">
              Our Vision
            </h2>
            <div className="w-24 h-1 bg-white/40 mx-auto rounded-full"></div>
          </div>
          
          <p className="text-2xl leading-relaxed max-w-5xl mx-auto font-light drop-shadow-sm mb-10">
            To be the leading force in transforming waste into wealth, creating a sustainable future where every piece of organic waste becomes a stepping stone towards environmental restoration and community prosperity.
          </p>
          
          <div className="flex flex-wrap justify-center gap-6">
            <div className="bg-white/20 backdrop-blur-sm px-8 py-4 rounded-full border border-white/30 hover:bg-white/30 transition-all duration-300">
              <span className="text-lg font-semibold">Restore Nature</span>
            </div>
            <div className="bg-white/20 backdrop-blur-sm px-8 py-4 rounded-full border border-white/30 hover:bg-white/30 transition-all duration-300">
              <span className="text-lg font-semibold">Secure Future</span>
            </div>
            <div className="bg-white/20 backdrop-blur-sm px-8 py-4 rounded-full border border-white/30 hover:bg-white/30 transition-all duration-300">
              <span className="text-lg font-semibold">Transform Waste</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Custom CSS for animations
const customStyles = `
  @keyframes float {
    0%, 100% { transform: translateY(0px); }
    50% { transform: translateY(-10px); }
  }
  
  .swiper-pagination-bullet {
    width: 12px !important;
    height: 12px !important;
    opacity: 0.7 !important;
  }
  
  .swiper-pagination-bullet-active {
    opacity: 1 !important;
    transform: scale(1.2);
  }
`;

// Export individual components for use
export { Home, ImageSlider, Aim, Purpose, Vision };
export default Home;