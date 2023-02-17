import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { SlideData } from "../../Data/Data";
import './Slider.css';

export const Slider = () => {
  return (
    <div className="w-[90%] mx-auto rounded-lg">
    <Swiper
      modules={[Navigation, A11y]}
      spaceBetween={50}
      slidesPerView={4}
      navigation
      onSlideChange={() => console.log("slide change")}
      onSwiper={(swiper) => console.log(swiper)}
      cubeEffect={{
        shadow: true,
        slideShadows: true,
      }}
    >
      {SlideData.map((slide) => (
        <SwiperSlide key={slide.image}>
          <img className="rounded-lg" src={slide.image} alt="" />
        </SwiperSlide>
      ))}
    </Swiper>
    </div>
  );
};
