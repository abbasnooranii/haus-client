import { VscTriangleLeft, VscTriangleRight } from "react-icons/vsc";
import radioBtn from "../../../assets/Logos/Radio_Button_01.png";
import { useState } from "react";

const Controller = () => {
  const [selectedPage, setSelectedPage] = useState<number>(1);

  const totalPage = [...Array(3).keys()];

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
      <div className="flex flex-col md:flex-row items-center md:items-start gap-6 md:justify-between mt-3">
        <h2 className="text-xl font-medium">
          <span className="border-b-2 border-primary pb-2">19</span> Properties
          Listed
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
            {totalPage.map((page) => (
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
            ))}
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
          // value={search.type}
          // onChange={(e) => setSearch({ ...search, type: e.target.value })}
          defaultValue=""
          className="select select-bordered w-full max-w-[125px]"
        >
          <option disabled value="">
            Sort By
          </option>
          <option value="price">Price</option>
        </select>
      </div>
    </div>
  );
};

export default Controller;
