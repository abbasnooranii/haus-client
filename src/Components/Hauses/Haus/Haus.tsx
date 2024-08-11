import { FaHeart, FaShare } from "react-icons/fa";
import CardSlider from "./CardSlider";
import LocationRooms from "./Location&Rooms";
import { RiContactsBook3Fill } from "react-icons/ri";

const Haus = () => {
  return (
    <div className="border border-gray-400 rounded p-4 flex flex-col md:flex-row md:gap-8">
      <div className="md:hidden mb-6">
        <LocationRooms />
      </div>
      {/*---------- Left Section--------- */}
      <div className="max-w-[540px]">
        <p className="flex md:justify-end text-xs md:text-sm px-2">
          <strong>Property ID:</strong> 1748r
        </p>
        {/* -----Slider----- */}
        <div className="max-h-[200px] my-3">
          <CardSlider />
        </div>
        {/* -----Price------ */}
        <div className="flex justify-between px-2">
          <h1 className=" text-xl md:text-2xl">
            £900 <span className="text-sm">PCM</span>
          </h1>
          <h1 className=" text-xl md:text-2xl">
            £950 <span className="text-sm">PCM</span>
          </h1>
        </div>
      </div>
      {/* --------Right Section---------- */}
      <div className="px-2 md:px-0 md:pt-8 flex flex-col justify-between">
        <div>
          <div className="hidden md:block">
            <LocationRooms />
          </div>
          <p className="my-3 mb-6 font-medium">
            Ideal for a family or professional couple looking for a spacious
            property. Available 27/09/2021 on a furnished basis.
          </p>
        </div>
        {/* --------Actions-------- */}
        <div className="flex gap-4 text-sm">
          <button className="flex items-center gap-1 font-helvetica">
            <FaHeart className="text-primary" /> Save
          </button>
          <button className="flex items-center gap-1 font-helvetica">
            <FaShare className="text-blue-600" /> Share
          </button>
          <button className="flex items-center gap-1 font-helvetica">
            <RiContactsBook3Fill className="text-primary" /> Book Viewing
          </button>
        </div>
      </div>
    </div>
  );
};

export default Haus;
