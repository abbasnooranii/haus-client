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
import { PropertyType } from "../../../types/PropertyType";

const CardSlider = ({ property }: { property: PropertyType }) => {
  const allImgName: string[][] = [
    ["MEDIA_IMAGE_01", "MEDIA_IMAGE_02"],
    ["MEDIA_IMAGE_03", "MEDIA_IMAGE_04"],
    ["MEDIA_IMAGE_05", "MEDIA_IMAGE_06"],
    ["MEDIA_IMAGE_07", "MEDIA_IMAGE_08"],
    ["MEDIA_IMAGE_09", "MEDIA_IMAGE_10"],
    ["MEDIA_IMAGE_11", "MEDIA_IMAGE_12"],
    ["MEDIA_IMAGE_13", "MEDIA_IMAGE_14"],
    ["MEDIA_IMAGE_15", "MEDIA_IMAGE_16"],
  ];
  return (
    <>
      <Swiper
        navigation={true}
        spaceBetween={30}
        modules={[Navigation]}
        className="mySwiper card-slider"
      >
        {/* <SwiperSlide>
          <div className="flex gap-1 ">
            <img src={img1} alt="" className="w-1/2" />
            <img src={img2} alt="" className="w-1/2" />
          </div>
        </SwiperSlide> */}
        {allImgName.map((name, i) => {
          if (
            !property ||
            (property as Record<string, string>)[name[0]].length < 1 ||
            (property as Record<string, string>)[name[1]].length < 1
          ) {
            return;
          }

          return (
            <SwiperSlide key={i}>
              <div className="flex gap-1">
                <img
                  src={`${import.meta.env.VITE_HAUS_IMAGES_URL}${
                    (property as Record<string, string>)[name[0]]
                  }`}
                  alt={
                    (property as Record<string, string>)[
                      `${name[0].slice(0, 11)}_TEXT_${name[0].slice(-2)}`
                    ]
                  }
                  onError={(
                    e: React.SyntheticEvent<HTMLImageElement, Event>
                  ) => {
                    const target = e.currentTarget;
                    target.onerror = null;
                    target.src = img1;
                  }}
                  className="w-1/2"
                />
                <img
                  src={`${import.meta.env.VITE_HAUS_IMAGES_URL}${
                    (property as Record<string, string>)[name[1]]
                  }`}
                  alt={
                    (property as Record<string, string>)[
                      `${name[1].slice(0, 11)}_TEXT_${name[1].slice(-2)}`
                    ]
                  }
                  onError={(
                    e: React.SyntheticEvent<HTMLImageElement, Event>
                  ) => {
                    const target = e.currentTarget;
                    target.onerror = null;
                    target.src = img2;
                  }}
                  className="w-1/2"
                />
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
};

export default CardSlider;
