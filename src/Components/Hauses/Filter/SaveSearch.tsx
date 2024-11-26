import { useMutation } from "@tanstack/react-query";
import useSearchContext from "../../../Hooks/useSearchContext";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { SearchCredentialsType } from "../../../Context/SearchContext";
import { FaRegHeart } from "react-icons/fa6";
import { FaHeart } from "react-icons/fa";
import useAuth from "../../../Hooks/useAuth";
import { useNavigate } from "react-router-dom";

const SaveSearch = () => {
  const searchContext = useSearchContext();
  const axiosSecure = useAxiosSecure();
  const Auth = useAuth();
  const navigate = useNavigate();

  const { mutate: SaveSearchFn } = useMutation({
    mutationFn: (data: SearchCredentialsType) => {
      return axiosSecure.post("/save-search", data);
    },
  });

  const { mutate: UnsaveSearchFn } = useMutation({
    mutationFn: (id: string) => {
      return axiosSecure.delete(`/save-search/${id}`);
    },
  });

  if (!searchContext) {
    return <h1> Something went wrong. </h1>;
  }
  const { search, setSearch } = searchContext;

  const handleSaveSearch = () => {
    if (!Auth?.user) {
      return navigate("/signin");
    }

    SaveSearchFn(search, {
      onSuccess: (data) => {
        if (data.data.success) {
          setSearch({
            ...search,
            saved: { status: true, save_search_id: data.data.id },
          });
        }
        // console.log(data.data);
      },
      onError: (err) => {
        console.log(err);
      },
    });
  };

  const handleUnsaveSearch = () => {
    UnsaveSearchFn(search.saved.save_search_id!, {
      onSuccess: (data) => {
        if (data.data.success) {
          setSearch({
            ...search,
            saved: { status: false, save_search_id: null },
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
        <button className="btn" onClick={handleUnsaveSearch}>
          Saved
          <FaHeart size={20} className="text-primary" />
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
