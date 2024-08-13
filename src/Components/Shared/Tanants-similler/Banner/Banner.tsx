const Banner = ({ title }: { title: string }) => {
  return (
    <div className="hidden md:flex bg-image tanants-similler-banner min-h-[464px] md:min-h-[640px] my-12 pb-36 items-end">
      <div className="container mx-auto px-3">
        <div className="relative p-4 max-w-[250px] bg-[#000000]/50 text-white font-helvetica text-xl tracking-wider border border-white before:w-[6px] before:h-[30px] before:bg-primary before:absolute before:top-4 before:left-0">
          {title}
        </div>
      </div>
    </div>
  );
};

export default Banner;
