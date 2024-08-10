import { useState } from "react";

const Hero = () => {
  const [reson, setReson] = useState<{ type: string; bedRooms: number }>({
    type: "To Let",
    bedRooms: 3,
  });

  const tempRoom = [...Array(9).keys()];

  const handleRoomCountChange = (room: number) => {
    setReson({ ...reson, bedRooms: room });
  };

  return (
    <div className="home-banner min-h-[464px] md:min-h-[540px]">
      <div className="container mx-auto px-3 py-6">
        <div className="bg-white p-7 rounded max-w-[400px]">
          <h2 className="text-2xl font-bold text-center text-helvetica">
            PROPERTY FINDER
          </h2>
          {/* Options */}
          <div className="flex gap-2 mt-6 font-helvetica">
            <button
              onClick={() => setReson({ ...reson, type: "To Let" })}
              className={`${
                reson.type === "To Let" ? "bg-textBlack text-white" : "bg-white"
              } flex-1 text-lg  border-2 border-textBlack p-4 rounded`}
            >
              To Let
            </button>
            <button
              onClick={() => setReson({ ...reson, type: "To Buy" })}
              className={`${
                reson.type === "To Buy" ? "bg-textBlack text-white" : "bg-white"
              } flex-1 text-lg  border-2 border-textBlack p-4 rounded`}
            >
              To buy
            </button>
          </div>
          {/* Form */}
          <div className="font-helvetica mt-6 space-y-2">
            <h6 className="font-medium">
              BEDROOMS{" "}
              <span className="font-normal font-roboto">
                can select multiple
              </span>
            </h6>
            {/* Bedroom Options */}
            <div className="flex justify-between *:border *:border-textBlack *:px-[10px] *:py-1 *:rounded">
              {tempRoom.map((room, i) => (
                <button
                  onClick={() => handleRoomCountChange(room + 1)}
                  key={i}
                  className={
                    reson.bedRooms === room + 1
                      ? "bg-textBlack text-white"
                      : "bg-cGray"
                  }
                >
                  {room + 1}
                </button>
              ))}
            </div>

            {/* Min price & Max price */}
            <div className="flex justify-between gap-2">
              <select
                defaultValue=""
                className="select select-bordered w-full max-w-xs"
              >
                <option disabled value="">
                  Min Price
                </option>
                <option>$15</option>
                <option>$20</option>
              </select>
              <select
                defaultValue=""
                className="select select-bordered w-full max-w-xs"
              >
                <option disabled value="">
                  Max Price
                </option>
                <option>$15</option>
                <option>$20</option>
              </select>
            </div>

            {/* Property Type */}
            <select defaultValue="" className="select select-bordered w-full ">
              <option disabled value="">
                Property Type
              </option>
              <option>$15</option>
              <option>$20</option>
            </select>
            {/* Location */}
            <select defaultValue="" className="select select-bordered w-full ">
              <option disabled value="">
                Location
              </option>
              <option>$15</option>
              <option>$20</option>
            </select>
            <button className="btn btn-filled btn-primary font-roboto w-full">
              {" "}
              Search
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
