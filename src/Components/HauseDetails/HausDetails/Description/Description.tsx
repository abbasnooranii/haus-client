import { FaCheck } from "react-icons/fa";

const Description = () => {
  return (
    <div>
      <div className="border border-gray-200 p-6 md:p-10 my-6">
        {/* --------Key Features--------- */}
        <div className="mb-4">
          <h4 className="text-lg font-helvetica mb-2"> Key Features</h4>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            <span className="flex items-center gap-2">
              <FaCheck size={20} className="text-blue-500" /> Fully Furnished
            </span>
            <span className="flex items-center gap-2">
              <FaCheck size={20} className="text-blue-500" /> Available on
              01.04.2024
            </span>
            <span className="flex items-center gap-2">
              <FaCheck size={20} className="text-blue-500" /> Fully Furnished
            </span>
            <span className="flex items-center gap-2">
              <FaCheck size={20} className="text-blue-500" /> Available on
              01.04.2024
            </span>
            <span className="flex items-center gap-2">
              <FaCheck size={20} className="text-blue-500" /> Fully Furnished
            </span>
            <span className="flex items-center gap-2">
              <FaCheck size={20} className="text-blue-500" /> Available on
              01.04.2024
            </span>
          </div>
        </div>
        {/* -------Description-------- */}
        <div className="my-4 mt-8">
          <h4 className="text-lg font-helvetica mb-2"> Description</h4>
          <p>
            This spacious 4 bedroom home is ideal for a family or professional
            couple looking for a home with plenty of room! The property is ready
            to move into and is available on a furnished basis. To the ground
            floor is a large kitchen fitted with a matching range of wall and
            base units. The kitchen comes furnished with a cooker, washing
            machine and fridge freezer and has ample space for a dining table.
            Rear facing window and door leading to the rear garden/yard. Also
            situated on the ground floor is the lounge which boast natural light
            from the large front facing window. To the first floor is the house
            bathroom fitted with a three piece suite including a bath with
            shower over, WC and wash hand basin. There are also two large double
            bedrooms to this floor. To the second floor is two further large
            double bedrooms. Call NOW to arrange a viewing.
          </p>
        </div>
      </div>
      {/* ---------Material Information--------- */}
      <div className="my-6 border border-gray-200 p-6 md:p-10">
        <h4 className="text-lg font-helvetica mb-2"> Material Information</h4>
        <p>
          This spacious 4 bedroom home is ideal for a family or professional
          couple looking for a home with plenty of room! The property is ready
          to move into and is available on a furnished basis. To the ground
          floor is a large kitchen fitted with a matching range of wall and base
          units. The kitchen comes furnished with a cooker, washing machine and
          fridge freezer and has ample space for a dining table. Rear facing
          window and door leading to the rear garden/yard. Also situated on the
          ground floor is the lounge which boast natural light from the large
          front facing window. To the first floor is the house bathroom fitted
          with a three piece suite including a bath with shower over, WC and
          wash hand basin. There are also two large double bedrooms to this
          floor. To the second floor is two further large double bedrooms. Call
          NOW to arrange a viewing.
        </p>
      </div>
    </div>
  );
};

export default Description;
