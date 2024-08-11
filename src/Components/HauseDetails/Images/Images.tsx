import DetailsSlider from "../../../Components/HauseDetails/DetailsSlider/DetailsSlider";
import img1 from "../../../assets/Images/Hauses/house_img1.png";
import img2 from "../../../assets/Images/Hauses/house_img2.png";

const Images = () => {
  return (
    <div className="container mx-auto px-3 my-6 grid grid-cols-1 md:grid-cols-3 ">
      <div className="md:col-span-2 md:row-span-2 flex items-center">
        <DetailsSlider />
      </div>
      <div className="hidden md:block mb-3">
        <img src={img1} alt="" className="w-[97%]" />
      </div>
      <div className="hidden md:block">
        <img src={img2} alt="" className="w-[96%]" />
      </div>
    </div>
  );
};

export default Images;
