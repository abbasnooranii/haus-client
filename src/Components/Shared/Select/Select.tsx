import React, { SetStateAction, useEffect, useRef, useState } from "react";
import { SearchCredentialsType } from "../../../Context/SearchContext";

// Options array
const options: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// MultiSelect component
const MultiSelect = ({
  search,
  setSearch,
}: {
  search: SearchCredentialsType;
  setSearch: React.Dispatch<SetStateAction<SearchCredentialsType>>;
}) => {
  //   const [selectedOptions, setSearch] = useState<number[]>([]);
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
    if (search.bedRooms.includes(id)) {
      setSearch({
        ...search,
        bedRooms: search.bedRooms.filter((optionId) => optionId !== id),
      });
    } else {
      setSearch({ ...search, bedRooms: [...search.bedRooms, id] });
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
            {search.bedRooms.length > 0 ? (
              search.bedRooms.map((optionId) => {
                const selectedOption = options.find(
                  (option) => option === optionId
                );
                return (
                  <span
                    key={optionId}
                    className="bg-primary text-white px-3 py-1 rounded-full text-sm flex items-center"
                  >
                    {selectedOption}
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
              key={option}
              className={`p-2 cursor-pointer ${
                search.bedRooms.includes(option)
                  ? "bg-blue-100"
                  : "hover:bg-gray-100"
              }`}
              onClick={() => toggleOption(option)}
            >
              <input
                type="checkbox"
                checked={search.bedRooms.includes(option)}
                onChange={() => toggleOption(option)}
                className="mr-2"
              />
              {option}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MultiSelect;
