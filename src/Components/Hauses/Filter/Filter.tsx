import useSearchContext from "../../../Hooks/useSearchContext";
import DesktopFilter from "./DesktopFilter";
import MobileFilter from "./MobileFilter";

const Filter = () => {
  const searchContext = useSearchContext();
  if (!searchContext) {
    return <h1> Something went wrong. </h1>;
  }
  const { search, setSearch } = searchContext;

  return (
    <div className="mt-12">
      <DesktopFilter search={search} setSearch={setSearch} />
      <MobileFilter search={search} setSearch={setSearch} />
    </div>
  );
};

export default Filter;
