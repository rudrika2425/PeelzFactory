import React from "react";

const Founders = () => {
  const teamMembers = [
    {
      id: 1,
      role: "Co-Founder",
      name: "Taru Singh",
      description: `Taru Singh, a dedicated advocate for chemical-free farming, has made significant strides in promoting organic agriculture and environmental sustainability. With an MSc in Zoology (Fisheries) and specialized training in Organic Farming from Holkar University, she combines her academic expertise with a passion for eco-friendly agricultural practices. Since 2018, Taru has been actively involved in sustainable farming, excelling in vermicomposting, crafting organic tonics, and producing natural jaggery. In 2024, she founded Peelz Factory Pvt. Ltd., offering innovative bio-enzyme solutions for agriculture, waste management, and environmental conservation. She also co-founded the Buland Farmers Development Trust and established the Rajpura Sambhal Producer Company Ltd. to empower farmers and uplift rural communities. As the Secretary of BEA and WICCI's Uttar Pradesh State President, Taru is shaping policies to drive positive change in agriculture and sustainability. Her work is an inspiring example of how sustainable practices can transform communities and the environment.`,
      image: "./images/Taru Singh.png",
    },
    {
      id: 2,
      role: "Co-Founder",
      name: "Ashutosh Pratap Singh",
      description: `Ashutosh Pratap Singh is the Managing Director of APS Farms, Chairman of the Buland Farmer's Development Trust, and CEO of Rajpura Sambhal Producer Co. Ltd. (FPO). A passionate organic farmer, he specializes in vermicomposting, organic tonics, and natural pesticides. After a successful career in sales and marketing across eight states, he transitioned to farming in 2018, focusing on sustainable and chemical-free agriculture. He has successfully cultivated organic sugarcane, wheat, rice, vegetables, and flowers. Recognized for his achievements, Ashutosh has received awards for his organic wheat production and contributions to eco-friendly farming. He is dedicated to empowering farmers through training sessions and community development initiatives, such as promoting sustainable farming practices, chemical-free living, and supporting local farming communities. His active participation in agricultural conventions and efforts to promote innovative farming techniques make him a notable figure in organic farming and sustainable agriculture.`,
      image: "./images/Ashutosh Pratap Singh.png",
    },
    {
      id: 3,
      role: "Advisor",
      name: "Surendra Pal Singh",
      description: `Surendra Pal Singh, BVSc from Mathura and retired Joint Director from the Uttarakhand government, managed government gaushalas during his career. He now serves as an advisor at Peelz Factory, offering expertise in sustainable practices and bioenzyme solutions. His extensive background in veterinary science supports the company's mission of transforming kitchen waste into eco-friendly products.`,
      image: "./images/Surendra Pal Singh.png",
    },
    {
      id: 4,
      role: "Advisor",
      name: "Chhavi Singh",
      description: `M.Sc. Gold medalist from Horticulture, Rajasthan Agriculture University, Bikaner, works with the NGO on sustainable agricultural practices and innovative projects.`,
      image: "./images/Chhavi Singh.png",
    },
    {
      id: 5,
      role: "Tech-Support",
      name: "Rudrika Raghav",
      description: `Tech-savvy intern pursuing B.Tech in Computer Science from GLA University , managing design, website development, and social media strategies.`,
      image: "./images/Rudrika Raghav.png",
    },
    {
      id: 6,
      role: "Advisor",
      name: "Tulika Singh",
      description: `Retd. Wing Commander with 14 years of experience in the Indian Air Force and 2 years in Airtel. A B.Tech graduate in Electrical and Electronics Engineering, bringing leadership and management expertise.`,
      image: "./images/Tulika Singh.png",
    },
  ];

  return (
    <div className="bg-white min-h-screen py-20">
      <div className="container mx-auto px-6 lg:px-16 xl:px-24">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-4">
            Our Team
          </h1>
          <div className="w-24 h-1 bg-green-600 mx-auto rounded-full"></div>
          <p className="text-gray-600 text-lg mt-6 max-w-2xl mx-auto">
            Meet the passionate individuals driving Peelz Factory's mission to transform 
            organic waste into sustainable solutions for a greener future.
          </p>
        </div>

        {/* Team Members */}
        <div className="space-y-16">
          {teamMembers.map((member, index) => (
            <div
              key={member.id}
              className={`flex flex-col lg:flex-row items-center gap-8 lg:gap-12 ${
                index % 2 === 1 ? 'lg:flex-row-reverse' : ''
              }`}
            >
              {/* Image Container */}
              <div className="flex-shrink-0 group">
                <div className="relative overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-72 h-72 lg:w-80 lg:h-80 object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
              </div>

              {/* Content Container */}
              <div className="flex-1 text-center lg:text-left">
                <div className="mb-4">
                  <span className="inline-block px-4 py-2 bg-green-100 text-green-700 text-sm font-semibold rounded-full mb-3">
                    {member.role}
                  </span>
                  <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-2">
                    {member.name}
                  </h2>
                  <div className="w-16 h-0.5 bg-green-600 mx-auto lg:mx-0 rounded-full"></div>
                </div>
                <p className="text-gray-700 text-lg leading-relaxed">
                  {member.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA Section */}
        <div className="text-center mt-20 p-8 bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Join Our Mission
          </h3>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Together, we're building a cleaner, greener future through innovative 
            sustainable solutions and community empowerment.
          </p>
  
          
        </div>
      </div>
    </div>
  );
};

export default Founders;