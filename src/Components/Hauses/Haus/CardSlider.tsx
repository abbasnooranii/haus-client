import img1 from "../../../assets/Images/Hauses/house_img1.png";
import img2 from "../../../assets/Images/Hauses/house_img2.png";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "./CardSlider.css";

// import required modules
import { Navigation } from "swiper/modules";

const CardSlider = () => {
  return (
    <>
      <Swiper
        navigation={true}
        spaceBetween={30}
        modules={[Navigation]}
        className="mySwiper card-slider"
      >
        <SwiperSlide>
          <div className="flex gap-1 ">
            <img src={img1} alt="" className="w-1/2" />
            <img src={img2} alt="" className="w-1/2" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex gap-1">
            <img src={img1} alt="" className="w-1/2" />
            <img src={img2} alt="" className="w-1/2" />
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default CardSlider;
