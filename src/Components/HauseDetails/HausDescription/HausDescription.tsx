import { useState } from "react";
import Menu from "./Menu";

const HausDescription = () => {
  const [selectedSpec, setSelectedSpec] = useState<string>("map-street");
  return (
    <div className="container mx-auto px-5 my-12">
      <Menu selectedSpec={selectedSpec} setSelectedSpec={setSelectedSpec} />
    </div>
  );
};

export default HausDescription;
