import { SearchContextType } from "../../../Context/SearchContext";

const DesktopFilter = ({ search, setSearch }: SearchContextType) => {
  if (!search) {
    return <h1> Something went wrong. </h1>;
  }

  return (
    <div className=" container mx-auto px-3 gap-2 hidden md:flex">
      {/* Type */}
      <select
        value={search.type}
        onChange={(e) => setSearch({ ...search, type: e.target.value })}
        className="select select-bordered w-full max-w-xs"
      >
        <option value="to_let">To Let</option>
        <option value="to_buy">To Buy</option>
      </select>

      {/* Min price */}
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
      {/*  Max price  */}
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
        onChange={(e) => setSearch({ ...search, location: e.target.value })}
        className="select select-bordered w-full "
      >
        <option disabled value="">
          Location
        </option>
        <option value={"London"}>London</option>
        <option value={"Toronto"}>Toronto</option>
      </select>
      <button className="btn btn-filled btn-primary font-roboto min-w-36">
        Search
      </button>
    </div>
  );
};

export default DesktopFilter;
