import { useQuery } from "@tanstack/react-query";
import Controller from "../../Components/Hauses/Controller/Controller";
import Filter from "../../Components/Hauses/Filter/Filter";
import Haus from "../../Components/Hauses/Haus/Haus";
import useSearchContext from "../../Hooks/useSearchContext";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import { PropertyType } from "../../types/PropertyType";

const Hauses = () => {
  const searchContext = useSearchContext();
  const axiosPublic = useAxiosPublic();

  const {
    data: properties,
    refetch,
    isLoading,
    isError,
  } = useQuery<PropertyType[]>({
    queryKey: ["properties"],
    enabled: !!searchContext,
    queryFn: async () => {
      const res = await axiosPublic.get(
        `/property?agent_ref=${
          searchContext?.search.type === "to_let" ? "r" : "s"
        }&badrooms=${searchContext?.search.bedRooms}&max_price=${
          searchContext?.search.max_price
        }&min_price=${searchContext?.search.min_price}&prop_sub_id=${
          searchContext?.search.property_type
        }&location=${searchContext?.search.location}`
      );
      return res.data;
    },
  });

  if (!searchContext) {
    return <h1> Something went wrong. </h1>;
  }
  // const { search } = searchContext;
  if (isLoading) {
    return (
      <div className="w-full flex justify-center">
        <span className="loading loading-spinner loading-lg"></span>
      </div>
    );
  } else if (isError) {
    return (
      <div className="w-full flex justify-center">
        <h2 className="text-red-600">There was an error</h2>
      </div>
    );
  }

  return (
    <div className="">
      <Filter refetchProperties={refetch} />
      <Controller />
      {/*---------- Hauses -----------*/}
      <div className="container mx-auto px-3 my-12 space-y-3">
        {properties && properties.length > 0 ? (
          <>
            {properties.map((property) => (
              <Haus key={property._id} property={property} />
            ))}
          </>
        ) : (
          <div className="w-full flex justify-center">
            <h4 className="text-xl">
              No properties available for this search.
            </h4>
          </div>
        )}
      </div>
    </div>
  );
};

export default Hauses;
