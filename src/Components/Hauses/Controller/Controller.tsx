import { VscTriangleLeft, VscTriangleRight } from "react-icons/vsc";
// import radioBtn from "../../../assets/Logos/Radio_Button_01.png";
import { Dispatch, ChangeEvent, SetStateAction } from "react";
import { PropertyType } from "../../../types/PropertyType";

const Controller = ({
  properties,
  propertiesCount,
  selectedPage,
  setSelectedPage,
  priceIncludingBills,
  handlePriceBillsChange,
  showLetAgreed,
  handleLetAgreedChange,
  sort,
  handleSortChange,
  pageCount,
  isLoading,
  isError,
}: {
  refetchProperties?: () => void;
  refetchPageCount?: () => void;
  properties: PropertyType[];
  selectedPage: number;
  setSelectedPage: Dispatch<SetStateAction<number>>;
  priceIncludingBills: boolean;
  handlePriceBillsChange: (event: boolean) => void;
  showLetAgreed: boolean;
  handleLetAgreedChange: (event: boolean) => void;
  sort: string;
  handleSortChange: (e: ChangeEvent<HTMLSelectElement>) => void;
  propertiesCount: number | undefined;
  pageCount: { count: number } | undefined;
  isLoading: boolean;
  isError: boolean;
}) => {

  const handleLetAgreed = (e: React.ChangeEvent<HTMLInputElement>) => {
    handleLetAgreedChange(e.target.checked);
  };

  const handlePriceBills = (e: React.ChangeEvent<HTMLInputElement>) => {
    handlePriceBillsChange(e.target.checked);
  };

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
      {properties.length > 0 && properties[0].AGENT_REF.includes("r") && (
        <div className="font-helvetica flex justify-between md:justify-end gap-6">
          <span className="flex items-center gap-3 text-sm md:text-base">
            <label htmlFor="priceIncludingBills" className="flex items-center gap-3">
              Price Including Bills
              <input
                type="checkbox"
                id="priceIncludingBills"
                name="priceIncludingBills"
                checked={priceIncludingBills}
                onChange={handlePriceBills}
                className="form-checkbox custom-checkbox"
              />
            </label>
          </span>
          <span className="flex items-center gap-3 text-sm md:text-base">
            <label htmlFor="showLetAgreed" className="flex items-center gap-3">
              Show Let Agreed
              <input
                type="checkbox"
                id="showLetAgreed"
                name="showLetAgreed"
                checked={showLetAgreed}
                onChange={handleLetAgreed}
                className="form-checkbox custom-checkbox"
              />
            </label>
          </span>
        </div>
      )}


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
