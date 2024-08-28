import { useState } from "react";
import Menu from "./Menu";
import Description from "./Description/Description";
import MapStreet from "./MapStreet/MapStreet";
import Epc from "./Epc/Epc";
import { PropertyType } from "../../../types/PropertyType";

const HausDetails = ({ property }: { property: PropertyType | undefined }) => {
  const [selectedSpec, setSelectedSpec] = useState<string>("description");
  return (
    <div className="container mx-auto px-5 my-12">
      <Menu selectedSpec={selectedSpec} setSelectedSpec={setSelectedSpec} />
      {selectedSpec === "description" && <Description property={property} />}
      {selectedSpec === "map-street" && <MapStreet property={property} />}
      {selectedSpec === "epc" && <Epc property={property} />}
    </div>
  );
};

export default HausDetails;
