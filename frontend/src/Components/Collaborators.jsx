import React from "react";

const Collaborators = () => {
  // Data array for the collaborators
  const collaborators = [
    {
      id: 1,
      name: "APS Farms",
      description: `APS Farms is dedicated to sustainable agriculture, specializing in organic farming practices. They focus on cultivating organic sugarcane, wheat, rice, vegetables, and flowers, utilizing methods like vermicomposting and organic tonics. Their commitment to chemical-free living is evident through their active involvement in community development and training sessions for sustainable agriculture.`,
      image: "./images/APS Farms.jpg",
    },
    {
      id: 6,
      name: "Rajpura Sambhal Farmer Producer Company",
      description: `Rajpura Sambhal Farmer Producer Company is a farmer-led organization focused on improving the livelihoods of local farmers. By promoting sustainable farming practices, it helps farmers enhance their productivity and access better market opportunities. The company provides support through collective bargaining, resource sharing, and value-added services, empowering farmers to thrive in the agricultural sector.`,
      image: "/images/FPO.png"
    },
    {
      id: 2,
      name: "WICCI (Women’s Indian Chamber of Commerce and Industry)",
      description: `WICCI is a national business chamber dedicated to empowering women entrepreneurs and professionals across various sectors in India. They aim to create a conducive environment for women to excel in business and leadership roles, offering platforms for networking, advocacy, and skill development. WICCI has launched various councils, including the Public Relations and Digital Marketing National Council, to support women in these fields.`,
      image: "./images/WICCI.jpg",
    },
    {
      id: 3,
      name: "BEA (Bio Enzyme Academy) Academy",
      description: `BEA Academy is an educational institution focused on providing quality education and training in various fields. They offer programs designed to equip students with the necessary skills and knowledge to excel in their chosen careers. The academy emphasizes practical learning and industry-relevant curricula to ensure students are well-prepared for the professional world.`,
      image: "./images/BEA.png",
    },
    {
      id: 4,
      name: "Buland Farmers Development Trust",
      description: `Buland Farmers Development Trust is an NGO committed to promoting sustainable agricultural practices and supporting farmers in their development journey. They focus on organic farming, community development, and providing training and resources to farmers to enhance their productivity and livelihoods. The trust aims to create a positive impact on the agricultural community through education and support.`,
      image: "./images/Buland.jpg",
    },
    {
        id: 5,
        name: "CFEI (Certified Fire and Explosion Investigator)",
        description: `The Certified Fire and Explosion Investigator (CFEI) is a professional certification offered by the National Association of Fire Investigators (NAFI). This certification recognizes qualified fire and explosion investigators and establishes a standard for evaluating their qualifications. It is based solely on the scientific principles of NFPA 921 and serves as a benchmark for investigators seeking to establish their professional credentials. :contentReference[oaicite:0]{index=0}`,
        image: "./images/CFEI.jpg",
      },
      {
        id: 6,
        name: "Agriculture Department of Uttar Pradesh",
        description: `The Agriculture Department of Uttar Pradesh is responsible for agricultural development, farmer support, and the implementation of agriculture-related schemes. The department provides farmers with advanced farming techniques, organic farming practices, irrigation systems, and financial assistance. It also offers weather-based advisory, information on agricultural fertilizers, and crop insurance schemes. In collaboration with the state government, the department works to enhance farmers' crop production capacity and secure better prices in the market. Additionally, the Agriculture Department focuses on promoting sustainable farming practices, organic agriculture, and water conservation.`,
        image: "./images/krishi-vibhag.png",
      },
      
  ];

  return (
    <body ClassName="overflow-x-hidden">
    <div className="bg-gray-100 py-12 justify-center m-14 rounded-lg">
      <div className="ml-28 mr-28">
        
        {collaborators.map((collaborator) => (
          <div
            key={collaborator.id}
            className="container mx-auto flex flex-col md:flex-row items-center md:space-x-10 px-4 mb-10"
          >
            <div className="md:flex-1.5 flex-shrink-0 mb-6 md:mb-0 m-5 p-5">
              <img
                src={collaborator.image}
                alt={collaborator.name}
                className="w-64 h-64 object-cover rounded-lg shadow-lg"
              />
            </div>

            <div className="md:flex-1">
              <h2 className="text-3xl font-bold text-gray-700 mb-6">
                {collaborator.name}
              </h2>
              <p className="text-gray-600 text-lg">{collaborator.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
    </body>
  );
};

export default Collaborators;
