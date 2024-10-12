import { useMutation, useQuery } from "@tanstack/react-query";
import { Helmet } from "react-helmet";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import { SearchCredentialsType } from "../../Context/SearchContext";
import Loader from "../../Components/Shared/Loader/Loader";
import { CiSearch } from "react-icons/ci";
import { FaHeart } from "react-icons/fa";

const SavedSearches = () => {
  const axiosSecure = useAxiosSecure();

  const {
    data: savedSearches,
    isLoading,
    refetch,
  } = useQuery<SearchCredentialsType[]>({
    queryKey: ["saved-search"],
    queryFn: async () => {
      const res = await axiosSecure.get("/save-search");

      return res.data;
    },
  });

  const { mutate: UnsaveSearchFn } = useMutation({
    mutationFn: (id: string) => {
      return axiosSecure.delete(`/save-search/${id}`);
    },
  });

  const getPropertyType = (str: string) => {
    switch (str) {
      case "0":
        return "House";

      case "28":
        return "Apartment";

      case "8":
        return "Flat";

      case "9":
        return "Studio";

      case "48":
        return "Room Only";

      default:
        return "ANY TYPE";
    }
  };

  const handleUnsaveSearch = (id: string) => {
    UnsaveSearchFn(id, {
      onSuccess: (data) => {
        if (data.data.success) {
          refetch();
        }
      },
      onError: (err) => {
        console.log(err);
      },
    });
  };

  return (
    <main>
      <Helmet>
        <title>Saved Searches</title>
      </Helmet>
      <div className="container mx-auto my-6">
        <h1 className="text-3xl font-semibold mb-12">Saved Searches</h1>

        {isLoading ? (
          <div className="w-full min-h-screen flex justify-center">
            <Loader />
          </div>
        ) : savedSearches && savedSearches.length > 0 ? (
          <div className="overflow-x-auto">
            <table className="table table-zebra">
              {/* head */}
              <thead>
                <tr>
                  <th></th>
                  <th>Type</th>
                  <th> Bed Rooms</th>
                  <th>Min Price</th>
                  <th>Max Price</th>
                  <th>Property Type</th>
                  <th>Location</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {savedSearches &&
                  savedSearches.map((search, i) => (
                    <tr>
                      <th>{i + 1}</th>
                      <td>{search.type === "to_let" ? "To Let" : "To Buy"}</td>
                      <td>{search.bedRooms.join(", ")}</td>
                      <td>{search.min_price}</td>
                      <td>{search.max_price}</td>
                      <td>{getPropertyType(search.property_type)}</td>
                      <td>{search.location}</td>
                      <td>
                        <button className="btn btn-circle btn-outline border-primary text-primary hover:bg-primary hover:text-white hover:border-primary mr-3 border">
                          <CiSearch size={25} className="font-semibold" />
                        </button>
                        <button
                          className="btn btn-circle btn-outline border-primary hover:bg-primary/20 hover:border-primary/20"
                          onClick={() => handleUnsaveSearch(search._id!)}
                        >
                          <FaHeart size={23} className="text-primary" />
                        </button>
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
        ) : (
          <div className="w-full flex justify-center">
            <h4 className="text-xl">You have no saved search.</h4>
          </div>
        )}
      </div>
    </main>
  );
};

export default SavedSearches;
