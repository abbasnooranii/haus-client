import { useMutation, useQuery } from "@tanstack/react-query";
import useSearchContext from "../../../Hooks/useSearchContext";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { SearchCredentialsType } from "../../../Context/SearchContext";
import { FaRegHeart } from "react-icons/fa6";
import { FaHeart } from "react-icons/fa";

const SaveSearch = () => {
  const searchContext = useSearchContext();
  const axiosSecure = useAxiosSecure();

  const { mutate: SaveSearchFn, isPending } = useMutation({
    mutationFn: (data: SearchCredentialsType) => {
      return axiosSecure.post("/save-search", data);
    },
  });

  const { data: savedSearches } = useQuery({
    queryKey: ["saved-search"],
    queryFn: async () => {
      const res = await axiosSecure.get("/save-search");

      return res.data;
    },
  });

  if (!searchContext) {
    return <h1> Something went wrong. </h1>;
  }
  const { search, setSearch } = searchContext;

  const handleSaveSearch = () => {
    SaveSearchFn(search, {
      onSuccess: (data) => {
        if (data.data.success) {
          setSearch({
            ...search,
            saved: { status: true, save_search_id: data.data.id },
          });
        }
      },
      onError: (err) => {
        console.log(err);
      },
    });
  };

  return (
    <div className="container mx-auto px-3 text-right my-6">
      {search.saved.status ? (
        <button className="btn" onClick={handleSaveSearch}>
          Saved
          <FaHeart size={20} />
        </button>
      ) : (
        <button className="btn" onClick={handleSaveSearch}>
          Save Search
          <FaRegHeart size={20} className="text-primary" />
        </button>
      )}
    </div>
  );
};

export default SaveSearch;
