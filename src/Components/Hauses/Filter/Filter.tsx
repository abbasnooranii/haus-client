import { Dispatch, SetStateAction } from "react";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import useSearchContext from "../../../Hooks/useSearchContext";
import DesktopFilter from "./DesktopFilter";
import MobileFilter from "./MobileFilter";
import SaveSearch from "./SaveSearch";

const Filter = ({
  refetchProperties,
  refetchPageCount,
  setSelectedPage,
}: {
  refetchProperties?: () => void;
  refetchPageCount?: () => void;
  setSelectedPage?: Dispatch<SetStateAction<number>>;
}) => {
  const searchContext = useSearchContext();
  const axiosSecure = useAxiosSecure();

  if (!searchContext) {
    return <h1> Something went wrong. </h1>;
  }
  const { search, setSearch } = searchContext;

  const handleSearch = async () => {
    // Checking if the save is already saved or not
    const res = await axiosSecure.post("/save-search/check", search);
    if (res.data.success) {
      setSearch({
        ...search,
        saved: { status: true, save_search_id: res.data.id },
      });
    } else {
      setSearch({ ...search, saved: { status: false, save_search_id: null } });
    }
    if (setSelectedPage) {
      setSelectedPage(1);
    }

    // Getting the page count and search properties
    if (refetchPageCount && refetchProperties) {
      refetchProperties();
      refetchPageCount();
    }
  };

  return (
    <div className="mt-12">
      <DesktopFilter handleSearch={handleSearch} />
      <MobileFilter handleSearch={handleSearch} />
      <SaveSearch />
    </div>
  );
};

export default Filter;
