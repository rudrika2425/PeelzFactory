import React, { useState } from "react";

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null); // State to store clicked image

  const bgColors = [
    "bg-red-400", "bg-green-400", "bg-blue-400", "bg-yellow-400",
    "bg-purple-400", "bg-pink-400", "bg-teal-400", "bg-indigo-400",
  ];

  // Generate image paths dynamically
  const images = Array.from({ length: 47 }, (_, i) =>
     `/images/g-${i + 1}.jpg`
  );

  // Map images to cards with background color
  const cards = images.map((image, index) => ({
    image,
    bgColor: bgColors[index % bgColors.length],
  }));

  return (
    <div className="bg-gray-100 m-10 p-2">
      <h3 className="text-6xl font-bold text-center mt-20 mb-8">Photo Gallery</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-6 gap-4 p-4">
        {cards.map((card, index) => (
          <div
            key={index}
            className={`p-1 rounded-lg shadow-md ${card.bgColor} overflow-hidden w-full cursor-pointer`}
            onClick={() => setSelectedImage(card.image)}
          >
            <img
              src={card.image}
              alt={`Media ${index + 1}`}
              className="w-full h-36 object-cover rounded-lg"
            />
          </div>
        ))}
      </div>

      {/* Modal for Full Image Preview */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
          onClick={() => setSelectedImage(null)}
        >
          <img
            src={selectedImage}
            alt="Preview"
            className="max-w-full max-h-screen object-contain bg-white p-4"
          />
        </div>
      )}
    </div>
  );
};

export default Gallery;
