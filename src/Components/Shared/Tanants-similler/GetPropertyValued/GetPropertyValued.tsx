import { FcCalculator } from "react-icons/fc";

const GetPropertyValued = () => {
  return (
    <div className="bg-lightPrimary pt-24 md:pt-28 pb-24 md:pb-48 my-12 md:my-0">
      <div className="container mx-auto px-16 flex flex-col-reverse md:flex-row items-center justify-between gap-36 md:gap-6">
        {/* ------Left--------- */}
        <div className="space-y-3 max-w-[470px]">
          <h2 className="text-3xl font-roboto font-semibold">
            GET YOUR PROPERTY VALUED BY A LOCAL EXPERT
          </h2>
          <p>
            Are you looking to get your rental property valued by a local
            expert? Arranging a valuation couldn't get easier. For an accurate
            and in-depth valuation from one of our expert valuers, please call
            your local branch or use the online booking tool.
          </p>
          <p>
            Leeds - 0113 323 1800 <br />
            Rotherham - 01226 414 115 <br />
            Barnsley - 01709 287 100
          </p>
        </div>
        {/* -------Right------- */}
        <div>
          <div className="relative">
            <div className=" w-[350px] md:w-[370px] h-[290px] bg-primary/30"></div>
            <div className="bg-white p-8 w-[330px] text-center shadow-lg absolute top-3 md:top-6 left-3 md:left-6">
              <div className="border border-dashed border-gray-400 p-8 ">
                <div className="flex justify-center">
                  <div className="bg-primary/30 p-4 rounded-full">
                    <FcCalculator size={48} />
                  </div>
                </div>
                <h3 className="text-2xl"> Arrange a Valuation Today</h3>
                <p className="font-semibold text-sm my-3">
                  Book your free valuation today.
                </p>
                <button className="btn btn-primary btn-filled w-full">
                  BOOK NOW
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetPropertyValued;
