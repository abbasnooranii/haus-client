const SecoundRow = ({ isPending }: { isPending: boolean }) => {
  return (
    <div className="container mx-auto px-3 flex flex-col md:flex-row gap-6 md:gap-16 my-12 md:my-24">
      {/* ------Owner--Fields----- */}
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
            required
            name="owner_name"
          />
          {/* ----Phone---- */}
          <input
            type="text"
            placeholder="Phone Number"
            className="p-3 border border-gray-300 w-full"
            required
            name="owner_phone"
          />
          {/* ----Email---- */}
          <input
            type="email"
            placeholder="Email"
            className="p-3 border border-gray-300 w-full"
            required
            name="owner_email"
          />
          {/* ----Address---- */}
          <input
            type="text"
            placeholder="Address"
            className="p-3 border border-gray-300 w-full"
            required
            name="owner_address"
          />
          <p>
            If you would prefer a paper copy to bring into the office, you can{" "}
            <span className="text-blue-600">download a copy here.</span>
          </p>
        </div>
      </div>
      {/* -----User Fields------- */}
      <div className="flex-1">
        <h1 className="text-xl md:text-2xl font-roboto font-bold mb-3">
          Your Details
        </h1>
        <div className="space-y-2">
          {/* ----Name---- */}
          <input
            type="text"
            placeholder="Name"
            className="p-3 border border-gray-300 w-full"
            required
            name="user_name"
          />
          {/* ----Phone---- */}
          <input
            type="text"
            placeholder="Phone Number"
            className="p-3 border border-gray-300 w-full"
            required
            name="user_phone"
          />
          {/* ----Email---- */}
          <input
            type="email"
            placeholder="Email"
            className="p-3 border border-gray-300 w-full"
            required
            name="user_email"
          />
          {/* ----Address---- */}
          <input
            type="text"
            placeholder="Address"
            className="p-3 border border-gray-300 w-full"
            required
            name="user_address"
          />
          <button
            type="submit"
            className="btn btn-primary w-full rounded-none btn-filled"
            disabled={isPending}
          >
            {isPending ? (
              <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-gray-900"></div>
            ) : (
              "GET BACK TO ME!"
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default SecoundRow;
