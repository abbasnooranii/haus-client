import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Navigation, Pagination } from "swiper/modules";
import Review from "./Review";

const Reviews = () => {
  return (
    <div className="bg-lightPrimary py-9 md:py-16 my-12">
      <div className="container mx-auto">
        <h2 className="text-xl md:text-2xl font-helvetica text-center">
          GOOGLE REVIEWS
        </h2>

        <div className="mt-6 flex gap-2 md:gap-20 items-center justify-center *:gap-3">
          <Swiper
            slidesPerView={1}
            spaceBetween={30}
            centeredSlides={true}
            pagination={{
              clickable: true,
            }}
            navigation={true}
            modules={[Pagination, Navigation]}
            className="mySwiper review max-w-[620px]"
          >
            <SwiperSlide>
              <Review />
            </SwiperSlide>
            <SwiperSlide>
              <Review />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Reviews;
