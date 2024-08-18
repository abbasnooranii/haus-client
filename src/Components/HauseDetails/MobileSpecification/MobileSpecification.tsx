import { FaHeart, FaShare, FaShower } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { MdBed } from "react-icons/md";
import { RiContactsBook3Fill } from "react-icons/ri";

const MobileSpecification = () => {
  return (
    <div className="md:hidden my-6 container mx-auto px-5">
      {/* ------Location and rooms-------- */}
      <div className="max-w-[400px] md:px-0">
        <p className="font-helvetica flex items-center gap-3 md:gap-4 text-sm md:text-base mb-2">
          <FaLocationDot size={20} /> Bentley Grove, Meanwood, Leeds
        </p>

        <div className="flex flex-col md:flex-row md:justify-between md:mt-3 gap-2 text-sm md:text-base">
          <p className="font-helvetica flex items-center gap-3 md:gap-4">
            <MdBed size={20} />
            <span>
              <span className="border-b-2 border-primary p-0 text-lg">4</span>{" "}
              Bedrooms
            </span>
          </p>
          <p className="font-helvetica flex items-center gap-3 md:gap-4">
            <FaShower size={20} />
            <span>
              <span className="border-b-2 border-primary p-0 text-lg">2</span>{" "}
              Bathrooms
            </span>
          </p>
        </div>
      </div>
      <p className="flex md:justify-end text-xs md:text-sm  my-3">
        <strong>Property ID:</strong> 1748r
      </p>

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
  );
};

export default MobileSpecification;
