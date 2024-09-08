import { useQuery } from "@tanstack/react-query";

import useAxiosSecure from "../../Hooks/useAxiosSecure";
import { PropertyType } from "../../types/PropertyType";
import Haus from "../../Components/Hauses/Haus/Haus";
import { Helmet } from "react-helmet";

const SavedProperties = () => {
  const axiosSecure = useAxiosSecure();
  const {
    data: savedProperties,
    refetch: refetchSavedProperties,
    isLoading,
    isError,
  } = useQuery<PropertyType[]>({
    queryKey: ["saved_properties"],
    queryFn: async () => {
      const res = await axiosSecure.get("/user/saved-properties");
      return res.data;
    },
  });
  return (
    <main>
      <Helmet>
        <title>Saved Properties</title>
      </Helmet>
      <div className="container mx-auto">
        <h1 className="text-4xl">Saved Properties</h1>
        <div>
          {isLoading ? (
            <div className="w-full min-h-screen flex justify-center">
              <span className="loading loading-spinner loading-lg"></span>
            </div>
          ) : isError ? (
            <div className="w-full flex justify-center">
              <h2 className="text-red-600">There was an error</h2>
            </div>
          ) : (
            <>
              {/*---------- Hauses -----------*/}
              <div className="container mx-auto px-3 my-12 space-y-3">
                {savedProperties && savedProperties.length > 0 ? (
                  <>
                    {savedProperties.map((property) => (
                      <Haus
                        key={property._id}
                        property={property}
                        refetchSavedProperties={refetchSavedProperties}
                      />
                    ))}
                  </>
                ) : (
                  <div className="w-full flex justify-center">
                    <h4 className="text-xl">You have no properties saved.</h4>
                  </div>
                )}
              </div>
            </>
          )}
        </div>
      </div>
    </main>
  );
};

export default SavedProperties;
