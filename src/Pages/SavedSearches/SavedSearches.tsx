import { useMutation, useQuery } from "@tanstack/react-query";
import { Helmet } from "react-helmet";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import { SearchCredentialsType } from "../../Context/SearchContext";
import Loader from "../../Components/Shared/Loader/Loader";
import { CiSearch } from "react-icons/ci";
import { FaHeart } from "react-icons/fa";
import useSearchContext from "../../Hooks/useSearchContext";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { useEffect, useState } from "react";

const SavedSearches = () => {
  const axiosSecure = useAxiosSecure();
  const searchContext = useSearchContext();
  const navigate = useNavigate();
  const [alert_type, setAlertType] = useState<string>("");

  // Getting the saved searches
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

  const refetchAlertType = async () => {
    const res2 = await axiosSecure.get("/alert");
    setAlertType(res2.data.alert_type);
  };

  useEffect(() => {
    refetchAlertType();
  }, []);

  if (!searchContext) {
    return <h1> Something went wrong. </h1>;
  }
  const { search, setSearch } = searchContext;

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

  const handleSearch = (src: SearchCredentialsType) => {
    setSearch({
      type: src.type,
      bedRooms: src.bedRooms,
      min_price: src.min_price,
      max_price: src.max_price,
      location: src.location,
      property_type: src.property_type,
      saved: {
        status: true,
        save_search_id: src._id!,
      },
    });
    navigate("/hauses");
  };

  const handleAlertChange = async (e: React.ChangeEvent<HTMLSelectElement>) => {
    setAlertType(e.target.value);
    const res = await axiosSecure.post("/alert", { alert: e.target.value });
    // if (res.data.success) {
    //   console.log("Setting the value");
    // }
    Swal.fire({
      icon: "success",
      title: res.data.message,
      timer: 1200,
    });
  };

  return (
    <main>
      <Helmet>
        <title>Saved Searches</title>
      </Helmet>
      <div className="container mx-auto my-6">
        <div className="flex justify-between flex-col md:flex-row">
          <h1 className="text-3xl font-semibold mb-12">Saved Searches</h1>
          <div className="flex items-center gap-3">
            <h5>Get Alert: </h5>
            <select
              // value={search.property_type}
              value={alert_type}
              onChange={handleAlertChange}
              className="select select-bordered "
            >
              <option value={"immediately"}>Immediately</option>
              <option value={"weekly"}>Weekly</option>
              <option value={"monthly"}>Monthly</option>
              <option value={"never"}>Never</option>
            </select>
          </div>
        </div>

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
                    <tr key={search._id}>
                      <th>{i + 1}</th>
                      <td>{search.type === "to_let" ? "To Let" : "To Buy"}</td>
                      <td>{search.bedRooms.join(", ")}</td>
                      <td>{search.min_price}</td>
                      <td>{search.max_price}</td>
                      <td>{getPropertyType(search.property_type)}</td>
                      <td>{search.location}</td>
                      <td>
                        <button
                          className="btn btn-circle btn-outline border-primary text-primary hover:bg-primary hover:text-white hover:border-primary mr-3 border"
                          onClick={() => handleSearch(search)}
                        >
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
