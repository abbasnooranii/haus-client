import DesktopFilter from "../../Components/Hauses/Filter/DesktopFilter";
import Banner from "../../Components/Shared/Tanants-similler/Banner/Banner";
import useSearchContext from "../../Hooks/useSearchContext";
const Tenants = () => {
  const searchContext = useSearchContext();
  if (!searchContext) {
    return <h1> Something went wrong. </h1>;
  }
  const { search, setSearch } = searchContext;
  return (
    <div>
      <DesktopFilter search={search} setSearch={setSearch} />
      <Banner />
    </div>
  );
};

export default Tenants;
