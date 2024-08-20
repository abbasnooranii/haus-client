import DetailsSlider from "../../../Components/HauseDetails/DetailsSlider/DetailsSlider";
import img1 from "../../../assets/Images/Hauses/house_img1.png";
import img2 from "../../../assets/Images/Hauses/house_img2.png";
import { PropertyType } from "../../../types/PropertyType";

const Images = ({ property }: { property: PropertyType | undefined }) => {
  return (
    <div className="container mx-auto px-3 my-3 md:my-6 grid grid-cols-1 md:grid-cols-3 ">
      <div className="md:col-span-2 md:row-span-2 flex items-center">
        <DetailsSlider property={property} />
      </div>
      <div className="hidden md:block mb-3">
        <img
          src={`${import.meta.env.VITE_API_URL}/api/images/${
            property?.MEDIA_IMAGE_02
          }`}
          alt={property?.MEDIA_IMAGE_TEXT_02}
          onError={(e: React.SyntheticEvent<HTMLImageElement, Event>) => {
            const target = e.currentTarget;
            target.onerror = null;
            target.src = img1;
          }}
          className="w-[97%]"
        />
      </div>
      <div className="hidden md:block">
        <img
          src={`${import.meta.env.VITE_API_URL}/api/images/${
            property?.MEDIA_IMAGE_03
          }`}
          alt={property?.MEDIA_IMAGE_TEXT_03}
          onError={(e: React.SyntheticEvent<HTMLImageElement, Event>) => {
            const target = e.currentTarget;
            target.onerror = null;
            target.src = img2;
          }}
          className="w-[96%]"
        />
      </div>
    </div>
  );
};

export default Images;
