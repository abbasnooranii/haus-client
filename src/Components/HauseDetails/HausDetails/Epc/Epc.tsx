import Progress from "react-progressbar";

const Epc = () => {
  return (
    <div className="max-w-[660px] my-12 space-y-4">
      <h1 className=" text-xl md:text-2xl bg-[#28AE7B] text-white p-2 rounded">
        Energy Efficiency Rating
      </h1>
      <p className="text-gray-400 mt-4 text-sm">
        Very Energy Efficient - low running cost
      </p>
      <div>
        {/* ---------A--------- */}
        <div className="text-gray-400 text-sm">
          <p className="flex justify-between">
            <span>(92 Plus)</span>
            <span> A</span>
          </p>
          <div className="bg-gray-200 rounded overflow-hidden">
            <Progress
              completed={75}
              color="#00C851"
              animation={100}
              height={14}
            />
          </div>
        </div>
        {/* ---------B--------- */}
        <div className="text-gray-400 text-sm">
          <p className="flex justify-between">
            <span>(81-91)</span>
            <span> B</span>
          </p>
          <div className="bg-gray-200 rounded overflow-hidden">
            <Progress
              completed={75}
              color="#33B5E5"
              animation={100}
              height={14}
            />
          </div>
        </div>
        {/* ---------C--------- */}
        <div className="text-gray-400 text-sm">
          <p className="flex justify-between">
            <span>(69-80)</span>
            <span> C </span>
          </p>
          <div className="bg-gray-200 rounded overflow-hidden">
            <Progress
              completed={75}
              color="#FFBB33"
              animation={100}
              height={14}
            />
          </div>
        </div>
        {/* ---------D--------- */}
        <div className="text-gray-400 text-sm">
          <p className="flex justify-between">
            <span>(55-68)</span>
            <span> D </span>
          </p>
          <div className="bg-gray-200 rounded overflow-hidden">
            <Progress
              completed={75}
              color="#FF3547"
              animation={100}
              height={14}
            />
          </div>
        </div>
        <p className="text-gray-400 mt-4 text-sm">
          Not Energy Efficient - High running cost
        </p>
      </div>
    </div>
  );
};

export default Epc;
