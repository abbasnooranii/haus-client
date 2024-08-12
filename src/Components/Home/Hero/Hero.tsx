import { Link } from "react-router-dom";
import useSearchContext from "../../../Hooks/useSearchContext";

const Hero = () => {
  const searchContext = useSearchContext();
  if (!searchContext) {
    return <h1> Something went wrong. </h1>;
  }
  const { search, setSearch } = searchContext;
  const tempRoom = [...Array(9).keys()];

  const handleRoomCountChange = (room: number) => {
    setSearch({ ...search, bedRooms: room });
  };

  return (
    <div className="home-banner bg-image min-h-[464px] md:min-h-[540px]">
      <div className="container mx-auto px-3 py-6">
        <div className="bg-white p-7 rounded max-w-[400px]">
          <h2 className="text-2xl font-bold text-center text-helvetica">
            PROPERTY FINDER
          </h2>
          {/*Type Options */}
          <div className="flex gap-2 mt-6 font-helvetica">
            <button
              onClick={() => setSearch({ ...search, type: "to_let" })}
              className={`${
                search.type === "to_let"
                  ? "bg-textBlack text-white"
                  : "bg-white"
              } flex-1 text-lg  border-2 border-textBlack p-4 rounded`}
            >
              To Let
            </button>
            <button
              onClick={() => setSearch({ ...search, type: "to_buy" })}
              className={`${
                search.type === "to_buy"
                  ? "bg-textBlack text-white"
                  : "bg-white"
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
                    search.bedRooms === room + 1
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
                value={search.min_price}
                className="select select-bordered w-full max-w-xs"
                onChange={(e) =>
                  setSearch({ ...search, min_price: Number(e.target.value) })
                }
              >
                <option disabled value={0}>
                  Min Price
                </option>
                <option value={15}>$15</option>
                <option value={20}>$20</option>
              </select>
              <select
                value={search.max_price}
                className="select select-bordered w-full max-w-xs"
                onChange={(e) =>
                  setSearch({ ...search, max_price: Number(e.target.value) })
                }
              >
                <option disabled value={0}>
                  Max Price
                </option>
                <option value={15}>$15</option>
                <option value={20}>$20</option>
              </select>
            </div>

            {/* Property Type */}
            <select
              value={search.property_type}
              onChange={(e) =>
                setSearch({ ...search, property_type: e.target.value })
              }
              className="select select-bordered w-full "
            >
              <option disabled value="">
                Property Type
              </option>
              <option value={"House"}>House</option>
              <option value={"Office"}>Office</option>
            </select>
            {/* Location */}
            <select
              value={search.location}
              onChange={(e) =>
                setSearch({ ...search, location: e.target.value })
              }
              className="select select-bordered w-full "
            >
              <option disabled value="">
                Location
              </option>
              <option value={"London"}>London</option>
              <option value={"Toronto"}>Toronto</option>
            </select>
            <Link
              to="/hauses"
              className="btn btn-filled btn-primary font-roboto w-full"
            >
              Search
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
