import { useContext } from "react";
import { SearchContext } from "../Context/SearchContext";

const useSearchContext = () => {
  const searchContext = useContext(SearchContext);
  return searchContext;
};

export default useSearchContext;
