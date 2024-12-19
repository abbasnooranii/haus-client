import HausStudImg from "../../../assets/Images/haus_student.png";

const VirtualBanner = () => {
  return (
    <div className="flex bg-image virtual-tours-banner min-h-[464px] md:min-h-[640px] mt-12 py-2 md:py-36 md:items-end">
      <div className="container mx-auto px-3 flex flex-col justify-between">
        <div className="md:hidden flex justify-between">
          <button className="btn btn-outline btn-secondary bg-white btn-valuation">
            Instant Valuation
          </button>
          <button className="bg-white rounded-md overflow-hidden">
            <img src={HausStudImg} alt="" width={120} />
          </button>
        </div>
        <div
          className={`relative p-4 max-w-[250px] bg-[#000000]/60 text-white font-helvetica text-xl tracking-wider border border-white before:w-[6px] before:h-[30px] before:bg-primary before:absolute before:top-4 before:left-0`}
        >
          VIRTUAL TOURS
        </div>
      </div>
    </div>
  );
};

export default VirtualBanner;
