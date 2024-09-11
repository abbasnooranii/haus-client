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
    setSearch({ ...search, bedRooms: [...search.bedRooms, room] });
  };
  const handleRoomCountDelete = (room: number) => {
    setSearch({
      ...search,
      bedRooms: search.bedRooms.filter((rm) => rm !== room),
    });
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
                  onClick={() =>
                    search.bedRooms.includes(room + 1)
                      ? handleRoomCountDelete(room + 1)
                      : handleRoomCountChange(room + 1)
                  }
                  key={i}
                  className={
                    search.bedRooms.includes(room + 1)
                      ? "bg-textBlack text-white"
                      : "bg-cGray"
                    // .bedRooms === room + 1
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
                <option disabled value="0">
                  NO MIN
                </option>
                <option value="300">£300 PCM</option>
                <option value="400">£400 PCM</option>
                <option value="500">£500 PCM</option>
                <option value="600">£600 PCM</option>
                <option value="700">£700 PCM</option>
                <option value="800">£800 PCM</option>
                <option value="900">£900 PCM</option>
                <option value="1000">£1000 PCM</option>
                <option value="1200">£1200 PCM</option>
                <option value="1400">£1400 PCM</option>
                <option value="1600">£1600 PCM</option>
                <option value="1800">£1800 PCM</option>
                <option value="2000">£2000 PCM</option>
              </select>
              <select
                value={search.max_price}
                className="select select-bordered w-full max-w-xs"
                onChange={(e) =>
                  setSearch({ ...search, max_price: Number(e.target.value) })
                }
              >
                <option disabled value="0">
                  NO MAX
                </option>
                <option value="300">£300 PCM</option>
                <option value="400">£400 PCM</option>
                <option value="500">£500 PCM</option>
                <option value="600">£600 PCM</option>
                <option value="700">£700 PCM</option>
                <option value="800">£800 PCM</option>
                <option value="900">£900 PCM</option>
                <option value="1000">£1000 PCM</option>
                <option value="1200">£1200 PCM</option>
                <option value="1400">£1400 PCM</option>
                <option value="1600">£1600 PCM</option>
                <option value="1800">£1800 PCM</option>
                <option value="2000">£2000 PCM</option>
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
              <option value={""}>ANY TYPE</option>
              <option value={"0"}>House</option>
              <option value={"28"}>Apartment</option>
              <option value={"8"}>Flat</option>
              <option value={"9"}>Studio</option>
              <option value={"48"}>Room Only</option>
            </select>

            <input
              type="text"
              className="input input-bordered w-full"
              value={search.location}
              onChange={(e) =>
                setSearch({ ...search, location: e.target.value })
              }
              placeholder="Location"
            />
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
