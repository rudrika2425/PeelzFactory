import React from "react";

const Purpose = () => {
  const purposes = [
    {
      title: "Combatting Pollution",
      description: "Minimize soil, water, and air pollution caused by chemicals and improper waste disposal. Adopting eco-friendly alternatives and reducing harmful chemical usage are key strategies in combating pollution. Sustainable practices such as organic farming and renewable energy solutions can help in significantly lowering environmental damage.",
      color: "bg-gray-500",
      image: "/images/p-1.png", 
    },
    {
      title: "Promoting Health and Biodiversity",
      description: "Provide farmers, households, and industries with safe alternatives that protect health and enhance biodiversity. By choosing natural and non-toxic products, we help improve human health while also protecting local wildlife. Sustainable agriculture practices and reduced pesticide use contribute to biodiversity conservation and the preservation of ecosystems.",
      color: "bg-red-500",
      image: "/images/p-2.png", // Add an image URL here
    },
    {
      title: "Fostering Economic Growth",
      description: "Drive innovation and economic growth through scalable and sustainable waste management business models. Eco-friendly businesses not only create jobs but also foster new markets for innovative products. Recycling, waste-to-energy technologies, and the circular economy can stimulate local economies while promoting environmental responsibility.",
      color: "bg-yellow-600",
      image: "/images/p-3.png", // Add an image URL here
    },
    {
      title: "Raising Awareness",
      description: "Inspire action for environmental sustainability through impactful education and collaborative partnerships. Public awareness campaigns, educational workshops, and collaborations with local communities and organizations are essential in bringing about lasting change. Awareness is the first step in taking collective responsibility for our environment and planet.",
      color: "bg-green-500",
      image: "/images/p-4.png", // Add an image URL here
    },
    {
      title: "Integrating Sustainability",
      description: "Champion cleaner, greener living by encouraging sustainable practices in everyday life. Incorporating sustainability into daily activities, such as reducing plastic usage, conserving water, and choosing green energy sources, can lead to a significant reduction in environmental impact. Promoting sustainable lifestyles creates a ripple effect, fostering more eco-conscious communities worldwide.",
      color: "bg-blue-500",
      image: "/images/p-5.png", // Add an image URL here
    },
  ];

  return (
    <div>
      <h3 className="text-5xl font-bold justify-center text-center mb-5">Our Purpose</h3>
      <div className="flex flex-wrap justify-center gap-14 m-2 p-9">
        {purposes.map((purpose, index) => (
          <div
            key={index}
            className="max-w-xs w-1/3 rounded overflow-hidden shadow-lg border border-gray-200"
          >
            <div className={`${purpose.color} h-32 relative`}>
              <img
                src={purpose.image}
                alt={purpose.title}
                className="absolute inset-0 w-full h-full object-contain opacity-80"
              />
            </div>
            <div className="p-4">
              <h3 className="text-lg font-semibold mb-2">{purpose.title}</h3>
              <p className="text-gray-600">{purpose.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Purpose;
