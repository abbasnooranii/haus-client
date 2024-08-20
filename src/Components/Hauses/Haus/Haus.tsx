import { FaHeart, FaShare } from "react-icons/fa";
import CardSlider from "./CardSlider";
import LocationRooms from "./Location&Rooms";
import { RiContactsBook3Fill } from "react-icons/ri";
import { Link } from "react-router-dom";
import { PropertyType } from "../../../types/PropertyType";

const Haus = ({ property }: { property: PropertyType }) => {
  return (
    <Link to={`/hauses/${property._id}`} className="block">
      <div className="border border-gray-400 rounded p-4 flex flex-col md:flex-row md:gap-8">
        <div className="md:hidden mb-6">
          <LocationRooms property={property} />
        </div>
        {/*---------- Left Section--------- */}
        <div className="max-w-[540px]">
          <p className="flex md:justify-end text-xs md:text-sm px-2">
            <strong>Property ID:</strong> {property.AGENT_REF}
          </p>
          {/* -----Slider----- */}
          <div className="max-h-[200px] my-3">
            <CardSlider property={property} />
          </div>
          {/* -----Price------ */}
          <div className="flex justify-between px-2">
            <h1 className=" text-xl md:text-2xl">
              £{property.PRICE} <span className="text-sm">PCM</span>
            </h1>
            <h1 className=" text-xl md:text-2xl">
              £{property.LET_BOND} <span className="text-sm">Deposite</span>
            </h1>
          </div>
        </div>
        {/* --------Right Section---------- */}
        <div className="px-2 md:px-0 md:pt-8 flex flex-col justify-between">
          <div>
            <div className="hidden md:block">
              <LocationRooms property={property} />
            </div>
            <p className="my-3 mb-6 font-medium">{property.SUMMARY}</p>
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
    </Link>
  );
};

export default Haus;
