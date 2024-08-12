import { useState } from "react";
import Menu from "./Menu";
import Description from "./Description/Description";

const HausDetails = () => {
  const [selectedSpec, setSelectedSpec] = useState<string>("map-street");
  return (
    <div className="container mx-auto px-5 my-12">
      <Menu selectedSpec={selectedSpec} setSelectedSpec={setSelectedSpec} />
      {selectedSpec === "description" && <Description />}
    </div>
  );
};

export default HausDetails;
