import { createContext, SetStateAction, useState } from "react";

export type SearchCredentialsType = {
  type: string;
  bedRooms: number[];
  min_price: number;
  max_price: number;
  property_type: string;
  location: string;
  saved: {
    status: boolean;
    save_search_id: string | null;
  };
};

export type SearchContextType = {
  search: SearchCredentialsType;
  setSearch: React.Dispatch<SetStateAction<SearchCredentialsType>>;
};

export const SearchContext = createContext<SearchContextType | null>(null);

const SearchContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [search, setSearch] = useState<SearchCredentialsType>({
    type: "to_let",
    bedRooms: [],
    min_price: 0,
    max_price: 0,
    property_type: "",
    location: "",
    saved: {
      status: false,
      save_search_id: null,
    },
  });

  return (
    <SearchContext.Provider value={{ search, setSearch }}>
      {children}
    </SearchContext.Provider>
  );
};

export default SearchContextProvider;
