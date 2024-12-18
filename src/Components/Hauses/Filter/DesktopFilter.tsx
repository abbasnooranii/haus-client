import { Link, useLocation } from "react-router-dom";
import useSearchContext from "../../../Hooks/useSearchContext";
import MultiSelect from "../../Shared/Select/Select";
const DesktopFilter = ({ handleSearch }: { handleSearch?: () => void }) => {
  const searchContext = useSearchContext();
  const location = useLocation();
  if (!searchContext) {
    return <h1> Something went wrong. </h1>;
  }
  const { search, setSearch } = searchContext;

  return (
    <div className=" container mx-auto px-3 gap-2 hidden md:flex *:flex-1">
      {/* Type */}
      <select
        value={search.type}
        onChange={(e) => setSearch({ ...search, type: e.target.value })}
        className="select select-bordered w-full max-w-xs"
      >
        <option value="to_let">To Let</option>
        <option value="to_buy">To Buy</option>
      </select>

      <div>
        <MultiSelect search={search} setSearch={setSearch} />
      </div>

      {/* Min price */}
      <select
        value={search.min_price}
        className="select select-bordered w-full max-w-xs"
        onChange={(e) =>
          setSearch({ ...search, min_price: Number(e.target.value) })
        }
      >
        <option value="0">NO MIN</option>
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
      {/*  Max price  */}
      <select
        value={search.max_price}
        className="select select-bordered w-full max-w-xs"
        onChange={(e) =>
          setSearch({ ...search, max_price: Number(e.target.value) })
        }
      >
        <option value="0">NO MAX</option>
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
        onChange={(e) => setSearch({ ...search, location: e.target.value })}
        placeholder="Location"
      />

      {location.pathname === "/hauses" ? (
        <button
          onClick={handleSearch}
          className="btn btn-filled btn-primary font-roboto"
        >
          Search
        </button>
      ) : (
        <Link
          to={"/hauses"}
          onClick={handleSearch}
          className="btn btn-filled btn-primary font-roboto"
        >
          Search
        </Link>
      )}
    </div>
  );
};

export default DesktopFilter;
