import { SetStateAction } from "react";

const Menu = ({
  selectedSpec,
  setSelectedSpec,
}: {
  selectedSpec: string;
  setSelectedSpec: React.Dispatch<SetStateAction<string>>;
}) => {
  return (
    <div className="flex justify-center gap-6 font-helvetica">
      <button
        className={`text-sm md:text-base border-b-2 ${
          selectedSpec === "description"
            ? "border-primary"
            : "border-white text-gray-500"
        }`}
        onClick={() => setSelectedSpec("description")}
      >
        Description
      </button>
      <button
        className={`text-sm md:text-base border-b-2 ${
          selectedSpec === "map-street"
            ? "border-primary"
            : "border-white text-gray-500"
        }`}
        onClick={() => setSelectedSpec("map-street")}
      >
        Map & Street View
      </button>
      <button
        className={`text-sm md:text-base border-b-2 ${
          selectedSpec === "epc"
            ? "border-primary"
            : "border-white text-gray-500"
        }`}
        onClick={() => setSelectedSpec("epc")}
      >
        EPC
      </button>
    </div>
  );
};

export default Menu;
