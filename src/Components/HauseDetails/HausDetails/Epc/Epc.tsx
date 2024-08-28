import EpcDemo1 from "../../../../assets/Images/Hauses/epc-demo-01.jpeg";
import EpcDemo2 from "../../../../assets/Images/Hauses/epc-demo-02.jpeg";

import { PropertyType } from "../../../../types/PropertyType";
const Epc = ({ property }: { property: PropertyType | undefined }) => {
  return (
    <div className="border border-gray-200 p-6 md:p-10 my-12 flex flex-col md:flex-row gap-6">
      <div className="max-w-[660px]">
        <img
          src={`${import.meta.env.VITE_API_URL}/api/images/${
            property?.MEDIA_IMAGE_60
          }`}
          alt={property?.MEDIA_IMAGE_TEXT_60}
          onError={(e: React.SyntheticEvent<HTMLImageElement, Event>) => {
            const target = e.currentTarget;
            target.onerror = null;
            target.src = EpcDemo1;
          }}
          className=""
        />
      </div>
      <div className="max-w-[660px]">
        <img
          src={`${import.meta.env.VITE_API_URL}/api/images/${
            property?.MEDIA_IMAGE_61
          }`}
          alt={property?.MEDIA_IMAGE_TEXT_61}
          onError={(e: React.SyntheticEvent<HTMLImageElement, Event>) => {
            const target = e.currentTarget;
            target.onerror = null;
            target.src = EpcDemo2;
          }}
          className=""
        />
      </div>
    </div>
  );
};

export default Epc;
