import React from "react";

const Footer = () => {
  return (
    <footer className="relative bg-gradient-to-br from-green-700 via-emerald-700 to-teal-700 text-white overflow-hidden">
      {/* Floating Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Organic Shapes */}
        <div className="absolute top-8 left-12 w-6 h-6 bg-white/10 rounded-full opacity-20 animate-pulse" style={{animationDelay: '0s'}}></div>
        <div className="absolute top-20 right-16 w-4 h-4 bg-emerald-300/15 rounded-full opacity-25 animate-pulse" style={{animationDelay: '2s'}}></div>
        <div className="absolute bottom-32 left-20 w-5 h-5 bg-green-300/20 rounded-full opacity-30 animate-pulse" style={{animationDelay: '1s'}}></div>
        <div className="absolute bottom-16 right-24 w-3 h-3 bg-teal-300/25 rounded-full opacity-20 animate-pulse" style={{animationDelay: '3s'}}></div>
        <div className="absolute top-1/2 left-8 w-2 h-2 bg-lime-300/15 rounded-full opacity-25 animate-pulse" style={{animationDelay: '4s'}}></div>
        <div className="absolute top-1/3 right-8 w-4 h-4 bg-emerald-400/20 rounded-full opacity-30 animate-pulse" style={{animationDelay: '1.5s'}}></div>
        
        {/* Subtle Background Patterns */}
        <div className="absolute top-16 right-1/3 w-32 h-32 bg-white/5 rounded-full blur-2xl animate-pulse"></div>
        <div className="absolute bottom-24 left-1/4 w-24 h-24 bg-emerald-300/10 rounded-full blur-xl animate-pulse" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-1/2 right-12 w-16 h-16 bg-teal-300/15 rounded-full blur-lg animate-pulse" style={{animationDelay: '3s'}}></div>
        
        {/* Geometric Decorations */}
        <div className="absolute top-24 left-1/3 w-8 h-8 border border-white/10 rounded-full animate-spin opacity-20" style={{animationDuration: '20s'}}></div>
        <div className="absolute bottom-20 right-1/3 w-12 h-12 border border-emerald-400/15 opacity-15 animate-pulse" style={{animationDuration: '6s'}}></div>
      </div>

      {/* Main Footer Content */}
      <div className="relative z-10 py-16 px-6">
        <div className="container mx-auto">
          {/* Top Decorative Line */}
          <div className="w-full h-1 bg-gradient-to-r from-transparent via-emerald-400 to-transparent mb-12 rounded-full"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            
            {/* Company Section */}
            <div className="space-y-6">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-4 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full shadow-lg">
                  <div className="w-6 h-6 bg-white/30 rounded-full flex items-center justify-center">
                    <div className="w-3 h-3 bg-white rounded-full"></div>
                  </div>
                </div>
                <div>
                  <h2 className="font-bold text-2xl bg-gradient-to-r from-green-200 to-emerald-200 bg-clip-text text-transparent">
                    COMPANY
                  </h2>
                  <div className="w-16 h-0.5 bg-gradient-to-r from-green-400 to-emerald-400 rounded-full mt-1"></div>
                </div>
              </div>
              
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-green-500/20 hover:bg-white/15 transition-all duration-300">
                <p className="text-green-100 leading-relaxed mb-4">
                  At <span className="font-semibold text-emerald-200">Peelz Factory</span>, by incorporating our solutions, you contribute to a healthier planet and sustainable living. Explore how we can enhance your routine while making a positive impact on the environment.
                </p>
                <div className="flex items-center gap-3 text-emerald-300 mt-4">
                  <div className="w-8 h-8 bg-emerald-500/20 rounded-full flex items-center justify-center">
                    <div className="w-4 h-4 bg-emerald-400/50 rounded-full"></div>
                  </div>
                  <span className="text-sm font-medium">Join us in advancing responsible waste management</span>
                </div>
              </div>
            </div>
             
            {/* Contact Section */}
            <div className="space-y-6">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-4 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full shadow-lg">
                  <div className="w-6 h-6 bg-white/30 rounded-full flex items-center justify-center">
                    <div className="w-3 h-3 bg-white rounded-sm"></div>
                  </div>
                </div>
                <div>
                  <h2 className="font-bold text-2xl bg-gradient-to-r from-blue-200 to-cyan-200 bg-clip-text text-transparent">
                    CONTACT
                  </h2>
                  <div className="w-16 h-0.5 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full mt-1"></div>
                </div>
              </div>
              
              <div className="space-y-4">
                {/* Phone */}
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-blue-500/20 hover:bg-white/15 transition-all duration-300 group">
                  <h3 className="text-lg font-semibold flex items-center gap-3 text-blue-200 group-hover:text-blue-100">
                    <div className="p-2 bg-blue-500/20 rounded-lg flex items-center justify-center">
                      <div className="w-4 h-4 border-2 border-blue-400 rounded-full"></div>
                    </div>
                    Call Us
                  </h3>
                  <p className="ml-12 text-white font-medium">9971506594</p>
                </div>
                
                {/* Location */}
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-red-500/20 hover:bg-white/15 transition-all duration-300 group">
                  <h3 className="text-lg font-semibold flex items-center gap-3 text-red-200 group-hover:text-red-100">
                    <div className="p-2 bg-red-500/20 rounded-lg flex items-center justify-center">
                      <div className="w-4 h-4 bg-red-400/60 rounded-full"></div>
                    </div>
                    Location
                  </h3>
                  <p className="ml-12 text-white">Badi Garhi Gawan, Sambhal, Uttar Pradesh</p>
                </div>
                
                {/* Business Hours */}
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-amber-500/20 hover:bg-white/15 transition-all duration-300 group">
                  <h3 className="text-lg font-semibold flex items-center gap-3 text-amber-200 group-hover:text-amber-100">
                    <div className="p-2 bg-amber-500/20 rounded-lg flex items-center justify-center">
                      <div className="w-4 h-4 border-2 border-amber-400 rounded-full relative">
                        <div className="absolute top-0 left-1/2 w-0.5 h-2 bg-amber-400 transform -translate-x-1/2"></div>
                      </div>
                    </div>
                    Business Hours
                  </h3>
                  <div className="ml-12 text-white space-y-1">
                    <p>Mon – Fri: 10 am – 5 pm</p>
                    <p>Sat, Sun: Closed</p>
                  </div>
                </div>
              </div>
            </div>
             
            {/* Services Section */}
            <div className="space-y-6">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full shadow-lg">
                  <div className="w-6 h-6 bg-white/30 rounded-lg flex items-center justify-center">
                    <div className="w-3 h-3 bg-white/80 rounded-sm"></div>
                  </div>
                </div>
                <div>
                  <h2 className="font-bold text-2xl bg-gradient-to-r from-purple-200 to-pink-200 bg-clip-text text-transparent">
                    SERVICES
                  </h2>
                  <div className="w-16 h-0.5 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full mt-1"></div>
                </div>
              </div>
              
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-purple-500/20 hover:bg-white/15 transition-all duration-300">
                <p className="text-green-100 leading-relaxed mb-6">
                  Our technology enriches soil, promotes plant health, and supports sustainable agriculture, demonstrating that eco-friendly practices can be seamlessly integrated into everyday life.
                </p>
                
                {/* Service Icons */}
                <div className="grid grid-cols-3 gap-3">
                  <div className="text-center p-4 bg-white/10 rounded-lg hover:bg-white/20 transition-colors group">
                    <div className="w-8 h-8 bg-emerald-500/30 rounded-full mx-auto mb-2 flex items-center justify-center group-hover:bg-emerald-500/50 transition-colors">
                      <div className="w-4 h-4 bg-emerald-400 rounded-full"></div>
                    </div>
                    <div className="text-xs text-emerald-200 font-medium">Bio-Fertilizers</div>
                  </div>
                  <div className="text-center p-4 bg-white/10 rounded-lg hover:bg-white/20 transition-colors group">
                    <div className="w-8 h-8 bg-blue-500/30 rounded-lg mx-auto mb-2 flex items-center justify-center group-hover:bg-blue-500/50 transition-colors">
                      <div className="w-4 h-4 bg-blue-400 rounded-sm"></div>
                    </div>
                    <div className="text-xs text-blue-200 font-medium">Natural Cleaners</div>
                  </div>
                  <div className="text-center p-4 bg-white/10 rounded-lg hover:bg-white/20 transition-colors group">
                    <div className="w-8 h-8 bg-amber-500/30 rounded-full mx-auto mb-2 flex items-center justify-center group-hover:bg-amber-500/50 transition-colors">
                      <div className="w-4 h-4 bg-amber-400 rounded-full"></div>
                    </div>
                    <div className="text-xs text-amber-200 font-medium">Animal Care</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Bottom Section */}
          <div className="mt-16 pt-8 border-t border-white/20">
            <div className="flex flex-col md:flex-row justify-between items-center gap-6">
              
              {/* Company Logo/Name */}
              <div className="flex items-center gap-4">
                <div className="p-4 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full shadow-lg">
                  <div className="w-8 h-8 bg-white/30 rounded-full flex items-center justify-center">
                    <div className="w-4 h-4 bg-white/80 rounded-full"></div>
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold bg-gradient-to-r from-green-200 to-emerald-200 bg-clip-text text-transparent">
                    Peelz Factory Pvt. Ltd.
                  </h3>
                  <p className="text-sm text-green-300 font-medium">Transforming Waste into Wonder</p>
                  <div className="w-24 h-0.5 bg-gradient-to-r from-green-400 to-emerald-400 rounded-full mt-1"></div>
                </div>
              </div>
              
              {/* Social Links */}
              <div className="flex items-center gap-4">
                <div className="flex gap-3">
                  <div className="p-3 bg-white/10 hover:bg-white/20 rounded-full transition-all duration-300 cursor-pointer group border border-white/20 hover:border-white/40">
                    <div className="w-6 h-6 bg-blue-400/60 rounded-sm group-hover:bg-blue-400/80 transition-colors flex items-center justify-center">
                      <div className="w-3 h-3 bg-white/80 rounded-sm"></div>
                    </div>
                  </div>
                  <div className="p-3 bg-white/10 hover:bg-white/20 rounded-full transition-all duration-300 cursor-pointer group border border-white/20 hover:border-white/40">
                    <div className="w-6 h-6 bg-green-400/60 rounded-full group-hover:bg-green-400/80 transition-colors flex items-center justify-center">
                      <div className="w-3 h-3 bg-white/80 rounded-full"></div>
                    </div>
                  </div>
                  <div className="p-3 bg-white/10 hover:bg-white/20 rounded-full transition-all duration-300 cursor-pointer group border border-white/20 hover:border-white/40">
                    <div className="w-6 h-6 bg-purple-400/60 rounded-lg group-hover:bg-purple-400/80 transition-colors flex items-center justify-center">
                      <div className="w-3 h-3 bg-white/80 rounded-sm"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Copyright */}
            <div className="mt-8 pt-6 border-t border-white/10 text-center">
              <div className="bg-white/5 backdrop-blur-sm rounded-full px-8 py-4 inline-block border border-white/10 hover:bg-white/10 transition-all duration-300">
                <p className="text-green-200 text-sm flex items-center justify-center gap-3">
                  <span>© 2024 All Rights Reserved By</span>
                  <span className="font-semibold text-emerald-300">Peelz Factory</span>
                  <div className="w-4 h-4 bg-emerald-400/50 rounded-full flex items-center justify-center">
                    <div className="w-2 h-2 bg-emerald-300 rounded-full"></div>
                  </div>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Custom animations */}
      <style jsx>{`
        @keyframes gentleFloat {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        
        .animate-float {
          animation: gentleFloat 6s ease-in-out infinite;
        }
      `}</style>
    </footer>
  );
};

export default Footer;