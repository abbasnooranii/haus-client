import { FaCheck } from "react-icons/fa";
import { PropertyType } from "../../../../types/PropertyType";

const Description = ({ property }: { property: PropertyType | undefined }) => {
  return (
    <div>
      <div className="border border-gray-200 p-6 md:p-10 my-6">
        {/* --------Key Features--------- */}
        <div className="mb-4">
          <h4 className="text-lg font-helvetica mb-2"> Key Features</h4>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {property && property?.FEATURE1.length > 0 && (
              <span className="flex items-center gap-2">
                <FaCheck size={20} className="text-blue-500" />{" "}
                {property?.FEATURE1}
              </span>
            )}
            {property && property?.FEATURE2.length > 0 && (
              <span className="flex items-center gap-2">
                <FaCheck size={20} className="text-blue-500" />{" "}
                {property?.FEATURE2}
              </span>
            )}
            {property && property?.FEATURE3.length > 0 && (
              <span className="flex items-center gap-2">
                <FaCheck size={20} className="text-blue-500" />{" "}
                {property?.FEATURE3}
              </span>
            )}
            {property && property?.FEATURE4.length > 0 && (
              <span className="flex items-center gap-2">
                <FaCheck size={20} className="text-blue-500" />{" "}
                {property?.FEATURE4}
              </span>
            )}
            {property && property?.FEATURE5.length > 0 && (
              <span className="flex items-center gap-2">
                <FaCheck size={20} className="text-blue-500" />{" "}
                {property?.FEATURE5}
              </span>
            )}
            {property && property?.FEATURE6.length > 0 && (
              <span className="flex items-center gap-2">
                <FaCheck size={20} className="text-blue-500" />{" "}
                {property?.FEATURE6}
              </span>
            )}
            {property && property?.FEATURE7.length > 0 && (
              <span className="flex items-center gap-2">
                <FaCheck size={20} className="text-blue-500" />{" "}
                {property?.FEATURE7}
              </span>
            )}
            {property && property?.FEATURE8.length > 0 && (
              <span className="flex items-center gap-2">
                <FaCheck size={20} className="text-blue-500" />{" "}
                {property?.FEATURE8}
              </span>
            )}
            {property && property?.FEATURE9.length > 0 && (
              <span className="flex items-center gap-2">
                <FaCheck size={20} className="text-blue-500" />{" "}
                {property?.FEATURE9}
              </span>
            )}
            {property && property?.FEATURE10.length > 0 && (
              <span className="flex items-center gap-2">
                <FaCheck size={20} className="text-blue-500" />{" "}
                {property?.FEATURE10}
              </span>
            )}
          </div>
        </div>
        {/* -------Description-------- */}
        <div className="my-4 mt-8">
          <h4 className="text-lg font-helvetica mb-2"> Description</h4>
          <p>{property?.DESCRIPTION}</p>
        </div>
      </div>
      {/* ---------Material Information--------- */}
      <div className="my-6 border border-gray-200 p-6 md:p-10">
        <h4 className="text-lg font-helvetica mb-2"> Material Information</h4>
        <p>{property?.SUMMARY}</p>
      </div>
    </div>
  );
};

export default Description;
