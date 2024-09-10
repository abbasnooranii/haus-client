import React, { SetStateAction, useEffect, useRef, useState } from "react";

// Define the shape of each option
interface OptionType {
  id: number;
  value: string;
  label: string;
}

// Options array
const options: OptionType[] = [
  { id: 1, value: "1", label: "1" },
  { id: 2, value: "2", label: "2" },
  { id: 3, value: "3", label: "3" },
  { id: 4, value: "4", label: "4" },
  { id: 5, value: "5", label: "5" },
  { id: 6, value: "6", label: "6" },
  { id: 7, value: "7", label: "7" },
  { id: 8, value: "8", label: "8" },
  { id: 9, value: "9", label: "9" },
  { id: 10, value: "10", label: "10" },
];

// MultiSelect component
const MultiSelect = ({
  selectedOptions,
  setSelectedOptions,
}: {
  selectedOptions: number[];
  setSelectedOptions: React.Dispatch<SetStateAction<number[]>>;
}) => {
  //   const [selectedOptions, setSelectedOptions] = useState<number[]>([]);
  const [showOptions, setShowOptions] = useState<boolean>(false);
  const divRef = useRef<HTMLDivElement>(null);

  // Handler to detect click outside the div
  const handleClickOutside = (event: MouseEvent) => {
    if (divRef.current && !divRef.current.contains(event.target as Node)) {
      setShowOptions(false); // User clicked outside the div
    }
  };

  useEffect(() => {
    // Attach the event listener when the component mounts
    document.addEventListener("mousedown", handleClickOutside);

    // Cleanup the event listener when the component unmounts
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Handle option toggle
  const toggleOption = (id: number) => {
    if (selectedOptions.includes(id)) {
      setSelectedOptions(selectedOptions.filter((optionId) => optionId !== id));
    } else {
      setSelectedOptions([...selectedOptions, id]);
    }
  };

  return (
    <div className="w-full max-w-xs mx-auto">
      <div className="relative">
        <div
          className="border rounded-lg p-2 h-12 flex justify-start items-center"
          onClick={() => setShowOptions(!showOptions)}
        >
          {/* Selected Options */}
          <div className="flex gap-2">
            {selectedOptions.length > 0 ? (
              selectedOptions.map((optionId) => {
                const selectedOption = options.find(
                  (option) => option.id === optionId
                );
                return (
                  <span
                    key={optionId}
                    className="bg-primary text-white px-3 py-1 rounded-full text-sm flex items-center"
                  >
                    {selectedOption?.label}
                    {/* <button
                    className="ml-2 text-white font-bold"
                    onClick={() => toggleOption(optionId)}
                  >
                    &times;
                  </button> */}
                  </span>
                );
              })
            ) : (
              <span className="text-gray-500">Bedrooms</span>
            )}
          </div>
        </div>

        {/* Dropdown */}
        <div
          ref={divRef}
          className={`absolute top-full mt-2 w-full bg-white border rounded-lg shadow-lg z-10 duration-300 ${
            showOptions ? "scale-100" : "scale-0"
          }`}
        >
          {options.map((option) => (
            <div
              key={option.id}
              className={`p-2 cursor-pointer ${
                selectedOptions.includes(option.id)
                  ? "bg-blue-100"
                  : "hover:bg-gray-100"
              }`}
              onClick={() => toggleOption(option.id)}
            >
              <input
                type="checkbox"
                checked={selectedOptions.includes(option.id)}
                onChange={() => toggleOption(option.id)}
                className="mr-2"
              />
              {option.label}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MultiSelect;
