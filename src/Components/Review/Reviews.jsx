import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import {  ReviewData} from "../../Data/Data";

export const Review = () => {
  return (
    <div className="w-[90%] mx-auto mt-20 mb-20">
      <div className="w-[50%] mx-auto mb-20">
      <h2 className="font-bold text-4xl text-center">কেন আমরাই শিক্ষার্থী ও অভিভাবকগণের প্রথম পছন্দ?</h2>
      </div>
    <Swiper
      modules={[Navigation, A11y]}
      spaceBetween={50}
      slidesPerView={3}
      navigation
      onSlideChange={() => console.log("slide change")}
      onSwiper={(swiper) => console.log(swiper)}
      cubeEffect={{
        shadow: true,
        slideShadows: true,
      }}
    >
      {ReviewData.map((slide) => (
        <SwiperSlide key={slide.image}>
         <div className="border-2 border-black-300 h-72 p-4 rounded-lg">
          <h2 className="mb-4 pt-4">
            {slide.title}
          </h2>
          <p className="">
            {slide.price}
          </p>
          <p className="mb-4">{slide.name}</p>
         </div>
        </SwiperSlide>
      ))}
    </Swiper>
    </div>
  );
};
