import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { UniveresityCourseData } from "../../Data/Data";

export const UniveresityCourse = () => {
  return (
    <div className=" mt-[100px] w-[90%] mx-auto mb-14">
      <div className="mb-8">
        <h2 className="text-4xl font-bold text-center mb-4">স্বপ্নের ভার্সিটির সম্পূর্ণ প্রস্তুতি</h2>
        <h3 className="text-xl font-bold text-center">ইঞ্জিনিয়ারিং-মেডিকেল কিংবা ভার্সিটি-গুচ্ছ - লক্ষ্য যাই হোক, অর্জনের পথ এখানেই।</h3>
      </div>
      <div>

      
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
      { UniveresityCourseData.map((slide) => (
        <SwiperSlide key={slide.img}>
          <div className="card card-compact w-[286px] md:w-[220px] h-[290px] md:h-[240px] bg-base-100 ">
            <figure>
              <img src={slide.img} className="bg-cover" alt="" />
            </figure>
            <div className="card-body">
              <h2 className="font-bold text-lg md:text-sm">{slide.title}</h2>
              <p className="text-green-500 text-lg">বিস্তারিত </p>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
    </div>
    </div>
  );
};
