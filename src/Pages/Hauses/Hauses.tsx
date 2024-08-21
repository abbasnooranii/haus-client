import { useQuery } from "@tanstack/react-query";
import Controller from "../../Components/Hauses/Controller/Controller";
import Filter from "../../Components/Hauses/Filter/Filter";
import Haus from "../../Components/Hauses/Haus/Haus";
import useSearchContext from "../../Hooks/useSearchContext";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import { PropertyType } from "../../types/PropertyType";
import { ChangeEvent, useState } from "react";

const Hauses = () => {
  const searchContext = useSearchContext();
  const axiosPublic = useAxiosPublic();
  const [properties, setProperties] = useState<PropertyType[]>([]);
  const [selectedPage, setSelectedPage] = useState<number>(1);
  const [sort, setSort] = useState<string>("");

  const { refetch, isLoading, isError } = useQuery<PropertyType[]>({
    queryKey: ["properties", selectedPage],
    enabled: !!searchContext,
    queryFn: async () => {
      const res = await axiosPublic.get(
        `/property?agent_ref=${
          searchContext?.search.type === "to_let" ? "r" : "s"
        }&badrooms=${searchContext?.search.bedRooms}&max_price=${
          searchContext?.search.max_price
        }&min_price=${searchContext?.search.min_price}&prop_sub_id=${
          searchContext?.search.property_type
        }&location=${
          searchContext?.search.location
        }&selectedPage=${selectedPage}`
      );
      sortFunc(sort, res.data);
      return res.data;
    },
  });

  const sortFunc = (sortby: string, defaultProperties?: PropertyType[]) => {
    const allProp = defaultProperties ? defaultProperties : [...properties];

    if (sortby === "price-asc") {
      const sortedProperties = allProp.sort(
        (a, b) => parseFloat(a.PRICE) - parseFloat(b.PRICE)
      );
      return setProperties(sortedProperties);
    } else if (sortby === "price-des") {
      const sortedProperties = allProp.sort(
        (a, b) => parseFloat(b.PRICE) - parseFloat(a.PRICE)
      );
      return setProperties(sortedProperties);
    } else if (sortby === "newest") {
      const sortedProperties = allProp.sort(
        (a, b) =>
          new Date(a.LET_DATE_AVAILABLE).getTime() -
          new Date(b.LET_DATE_AVAILABLE).getTime()
      );
      return setProperties(sortedProperties);
    } else if (sortby === "oldest") {
      const sortedProperties = allProp.sort(
        (a, b) =>
          new Date(b.LET_DATE_AVAILABLE).getTime() -
          new Date(a.LET_DATE_AVAILABLE).getTime()
      );
      return setProperties(sortedProperties);
    }
    return setProperties(allProp);
  };

  const handleSortChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value;
    setSort(value);
    sortFunc(value);
  };

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
      <Controller
        properties={properties}
        propertiesCount={properties?.length}
        setSelectedPage={setSelectedPage}
        selectedPage={selectedPage}
        sort={sort}
        handleSortChange={handleSortChange}
      />
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
