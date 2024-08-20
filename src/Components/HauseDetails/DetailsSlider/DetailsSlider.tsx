import img3 from "../../../assets/Images/Hauses/big_image.png";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "./DetailsSlider.css";

// import required modules
import { Navigation } from "swiper/modules";
import { PropertyType } from "../../../types/PropertyType";

const DetailsSlider = ({
  property,
}: {
  property: PropertyType | undefined;
}) => {
  const allImgName: string[] = [
    "MEDIA_IMAGE_01",
    "MEDIA_IMAGE_02",
    "MEDIA_IMAGE_03",
    "MEDIA_IMAGE_04",
    "MEDIA_IMAGE_05",
    "MEDIA_IMAGE_06",
    "MEDIA_IMAGE_07",
    "MEDIA_IMAGE_08",
    "MEDIA_IMAGE_09",
    "MEDIA_IMAGE_10",
    "MEDIA_IMAGE_11",
    "MEDIA_IMAGE_12",
    "MEDIA_IMAGE_13",
    "MEDIA_IMAGE_14",
    "MEDIA_IMAGE_15",
    "MEDIA_IMAGE_16",
  ];

  return (
    <>
      <Swiper
        navigation={true}
        spaceBetween={30}
        modules={[Navigation]}
        className="mySwiper card-slider"
      >
        {/* {property && property?.MEDIA_IMAGE_01.length > 0 && (
          <SwiperSlide>
            <div className="">
              <img
                src={`${import.meta.env.VITE_API_URL}/api/images/${
                  property?.MEDIA_IMAGE_01
                }`}
                alt={property?.MEDIA_IMAGE_TEXT_01}
                className="w-full h-full object-cover"
                onError={(e: React.SyntheticEvent<HTMLImageElement, Event>) => {
                  const target = e.currentTarget;
                  target.onerror = null;
                  target.src = img3;
                }}
              />
            </div>
          </SwiperSlide>
        )} */}
        {allImgName.map((name, i) => {
          if (
            !property ||
            (property as Record<string, string>)[name].length < 1
          ) {
            return;
          }
          return (
            <SwiperSlide key={i}>
              <div className="">
                <img
                  src={`${import.meta.env.VITE_API_URL}/api/images/${
                    (property as Record<string, string>)[name]
                  }`}
                  alt={
                    (property as Record<string, string>)[
                      `${name.slice(0, 11)}_TEXT_${name.slice(-2)}`
                    ]
                  }
                  className="w-full h-full object-cover"
                  onError={(
                    e: React.SyntheticEvent<HTMLImageElement, Event>
                  ) => {
                    const target = e.currentTarget;
                    target.onerror = null;
                    target.src = img3;
                  }}
                />
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
};

// const Slide = ({ imgSrc, imgAlt }: { imgSrc: string; imgAlt: string }) => {
//   return (
//     <SwiperSlide>
//       <div className="">
//         <img
//           src={imgSrc}
//           alt={imgAlt}
//           className="w-full h-full object-cover"
//           onError={(e: React.SyntheticEvent<HTMLImageElement, Event>) => {
//             const target = e.currentTarget;
//             target.onerror = null;
//             target.src = img3;
//             // `${
//             //   import.meta.env.VITE_API_URL
//             // }/api/images/big_image.png `;
//           }}
//         />
//       </div>
//     </SwiperSlide>
//   );
// };

export default DetailsSlider;
