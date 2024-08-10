const Trusted = () => {
  return (
    <div className="bg-lightPrimary py-9 md:py-16 my-12">
      <div className="container mx-auto">
        <h2 className="text-xl md:text-2xl font-helvetica text-center">
          TRUSTED BY
        </h2>
        <div className="mt-6 flex gap-2 md:gap-20 items-center justify-center *:gap-3">
          {/* Landlords */}
          <div className="flex flex-col items-center flex-1">
            <h1 className="text-4xl md:text-7xl text-primary">387</h1>
            <span className="font-medium text-center text-sm md:text-base">
              Landlords
            </span>
          </div>
          {/* Registered House Hunters */}
          <div className="flex flex-col items-center flex-1">
            <h1 className="text-4xl md:text-7xl text-primary">5,983</h1>
            <span className="font-medium text-center text-sm md:text-base">
              Registered House <br />
              Hunters
            </span>
          </div>
          {/* Tenants */}
          <div className="flex flex-col items-center flex-1">
            <h1 className="text-4xl md:text-7xl text-primary">10,607</h1>
            <span className="font-medium text-center text-sm md:text-base">
              Tenants
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Trusted;
