import { VscTriangleLeft, VscTriangleRight } from "react-icons/vsc";
import radioBtn from "../../../assets/Logos/Radio_Button_01.png";

import useAxiosPublic from "../../../Hooks/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";
import { ChangeEvent, SetStateAction } from "react";

const Controller = ({
  propertiesCount,
  selectedPage,
  setSelectedPage,
  sort,
  handleSortChange,
}: {
  selectedPage: number;
  setSelectedPage: React.Dispatch<SetStateAction<number>>;
  sort: string;
  handleSortChange: (e: ChangeEvent<HTMLSelectElement>) => void;
  propertiesCount: number | undefined;
}) => {
  const axiosPublic = useAxiosPublic();

  const {
    data: pageCount,
    isLoading,
    isError,
  } = useQuery<{ count: number }>({
    queryKey: ["property-count"],
    queryFn: async () => {
      const res = await axiosPublic.get("/property/page-count");
      return res.data;
    },
  });

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

  const totalPage = [...Array(pageCount?.count).keys()];

  return (
    <div className="container mx-auto px-3 my-8">
      {/* Rent options */}
      <div className="font-helvetica flex justify-between md:justify-end gap-6">
        <span className="flex items-center gap-3 text-sm md:text-base">
          Price Including Bills <img src={radioBtn} alt="" width={16} />
        </span>
        <span className="flex items-center gap-3 text-sm md:text-base">
          Show Let Agreed <img src={radioBtn} alt="" width={16} />
        </span>
      </div>

      {/* Other Controller */}
      <div className="flex flex-col md:flex-row items-center gap-6 md:justify-between mt-3">
        <h2 className="text-xl font-medium">
          <span className="border-b-2 border-primary">
            {propertiesCount || 0}{" "}
          </span>
          Properties Listed
        </h2>

        {/* Pagination */}
        <div className="flex items-center gap-3">
          {/* Left Btn */}
          <button
            disabled={selectedPage === 1}
            onClick={() => setSelectedPage(selectedPage - 1)}
          >
            <VscTriangleLeft size={16} />
          </button>

          {/*Pages */}
          <div className="flex gap-2">
            {selectedPage > 2 && "..."}

            {totalPage.map((page) => {
              if (
                selectedPage + 1 === page + 1 ||
                selectedPage === page + 1 ||
                selectedPage - 1 === page + 1
              ) {
                return (
                  <button
                    key={page}
                    className={
                      page + 1 === selectedPage
                        ? "border border-gray-500  px-[5px] rounded"
                        : ""
                    }
                    onClick={() => setSelectedPage(page + 1)}
                  >
                    {page + 1}
                  </button>
                );
              }
            })}
            {pageCount && selectedPage < pageCount?.count - 1 && "..."}
          </div>
          {/* Right Btn */}
          <button
            disabled={selectedPage === totalPage.length}
            onClick={() => setSelectedPage(selectedPage + 1)}
          >
            <VscTriangleRight size={16} />
          </button>
        </div>

        {/* Sort By */}
        <select
          value={sort}
          onChange={handleSortChange}
          className="select select-bordered w-full max-w-[125px]"
        >
          <option disabled value="">
            Sort By
          </option>
          <option value="newest">Newest</option>
          <option value="oldest">Oldest</option>
          <option value="price-asc">Price - Ascending</option>
          <option value="price-des">Price - Descending</option>
        </select>
      </div>
    </div>
  );
};

export default Controller;
