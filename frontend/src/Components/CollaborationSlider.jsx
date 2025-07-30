import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules"; // Removed Navigation
import "swiper/css";
import "swiper/css/pagination";

const CollaborationSlider = () => {
  const images = [
   
    "/images/BEA.png",
    "/images/WICCI.jpg",
    "/images/APS Farms.jpg",
    "/images/Buland.jpg",
    "/images/CFEI.jpg",
    "/images/FPO.png",
    "/images/krishi-vibhag.png",
  ];

  return (
    <div className="w-screen h-[30vh] -mb-14 mt-7 flex justify-center items-center -ml-20"> 
      <Swiper
        modules={[Pagination, Autoplay]} 
        spaceBetween={0}
        slidesPerView={1}
        pagination={{ clickable: true }}
        autoplay={{ delay: 2000, disableOnInteraction: false }}
        loop={true}
        className="h-full"
      >
        {images.map((image, index) => (
          <SwiperSlide key={index} className="flex items-center justify-center">
            <img
              src={image}
              alt={`Slide ${index + 1}`}
              className="w-full h-full object-contain"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default CollaborationSlider;
