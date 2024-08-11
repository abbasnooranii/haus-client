import img3 from "../../../assets/Images/Hauses/big_image.png";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "./DetailsSlider.css";

// import required modules
import { Navigation } from "swiper/modules";

const DetailsSlider = () => {
  return (
    <>
      <Swiper
        navigation={true}
        spaceBetween={30}
        modules={[Navigation]}
        className="mySwiper card-slider"
      >
        <SwiperSlide>
          <div className="">
            <img src={img3} alt="" className="w-full" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="">
            <img src={img3} alt="" className="w-full" />
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default DetailsSlider;
