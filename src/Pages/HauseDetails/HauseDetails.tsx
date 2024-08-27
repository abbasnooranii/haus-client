import { useParams } from "react-router-dom";
import DeskSpecification from "../../Components/HauseDetails/DeskSpecification/DeskSpecification";
import GetInTouch from "../../Components/HauseDetails/GetInTouch/GetInTouch";
import HausDetails from "../../Components/HauseDetails/HausDetails/HausDetails";
import Images from "../../Components/HauseDetails/Images/Images";
import MobileSpecification from "../../Components/HauseDetails/MobileSpecification/MobileSpecification";
import Filter from "../../Components/Hauses/Filter/Filter";
import { useQuery } from "@tanstack/react-query";
import { PropertyType } from "../../types/PropertyType";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import { Helmet } from "react-helmet";

const HauseDetails = () => {
  const { id } = useParams();
  const axiosPublic = useAxiosPublic();
  const {
    data: property,
    // refetch,
    isLoading,
    isError,
  } = useQuery<PropertyType>({
    queryKey: ["property-details", id],
    enabled: !!id,
    queryFn: async () => {
      const res = await axiosPublic.get(`/property/${id}`);
      return res.data;
    },
  });

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
    <div>
      <Helmet>
        <title>Haus Details-{property?.AGENT_REF}</title>
        {/* <meta name="description" content="Helmet application" /> */}
      </Helmet>
      <Filter />
      <MobileSpecification property={property} />
      <Images property={property} />
      <DeskSpecification property={property} />
      <HausDetails property={property} />
      <GetInTouch />
    </div>
  );
};

export default HauseDetails;
