const SecoundRow = () => {
  return (
    <div className="container mx-auto px-3 flex flex-col md:flex-row gap-6 md:gap-16 my-12 md:my-24">
      <div className="flex-1">
        <h1 className="text-xl md:text-2xl font-roboto font-bold mb-3">
          Prospective Landlord/Seller Details
        </h1>
        <div className="space-y-2">
          {/* ----Name---- */}
          <input
            type="text"
            placeholder="Name"
            className="p-3 border border-gray-300 w-full"
          />
          {/* ----Phone---- */}
          <input
            type="text"
            placeholder="Phone Number"
            className="p-3 border border-gray-300 w-full"
          />
          {/* ----Email---- */}
          <input
            type="email"
            placeholder="Email"
            className="p-3 border border-gray-300 w-full"
          />
          {/* ----Address---- */}
          <input
            type="text"
            placeholder="Address"
            className="p-3 border border-gray-300 w-full"
          />
          <p>
            If you would prefer a paper copy to bring into the office, you can{" "}
            <span className="text-blue-600">download a copy here.</span>
          </p>
        </div>
      </div>
      <div className="flex-1">
        <h1 className="text-xl md:text-2xl font-roboto font-bold mb-3">
          Prospective Landlord/Seller Details
        </h1>
        <div className="space-y-2">
          {/* ----Name---- */}
          <input
            type="text"
            placeholder="Name"
            className="p-3 border border-gray-300 w-full"
          />
          {/* ----Phone---- */}
          <input
            type="text"
            placeholder="Phone Number"
            className="p-3 border border-gray-300 w-full"
          />
          {/* ----Email---- */}
          <input
            type="email"
            placeholder="Email"
            className="p-3 border border-gray-300 w-full"
          />
          {/* ----Address---- */}
          <input
            type="text"
            placeholder="Address"
            className="p-3 border border-gray-300 w-full"
          />
          <button className="btn btn-primary w-full rounded-none btn-filled">
            GET BACK TO ME!
          </button>
        </div>
      </div>
    </div>
  );
};

export default SecoundRow;
