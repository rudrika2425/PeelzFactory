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
    <div className="mx-auto flex aspect-square w-full max-w-xl items-center justify-center"> 
      <Swiper
        modules={[Pagination, Autoplay]} 
        spaceBetween={0}
        slidesPerView={1}
        pagination={{ clickable: true }}
        autoplay={{ delay: 2000, disableOnInteraction: false }}
        loop={true}
        className="h-full w-full"
      >
        {images.map((image, index) => (
          <SwiperSlide key={index} className="flex items-center justify-center">
            <img
              src={image}
              alt={`Slide ${index + 1}`}
              className="aspect-square h-full w-full object-contain"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default CollaborationSlider;
