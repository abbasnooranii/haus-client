const FirstRow = () => {
  return (
    <div className="container mx-auto px-3 flex flex-col md:flex-row gap-6 md:gap-16 my-12 md:my-24">
      <div className="flex-1">
        <h1 className="text-xl md:text-3xl font-roboto font-bold mb-6">
          REFER A FRIEND AND GET £25 EACH
        </h1>
        <p className="">
          If you know someone who is looking to sell their house or if you have
          a friend who want to start renting out their property, let us know
          about them and if they complete with us, we’ll give each of you a £25
          voucher.
        </p>
      </div>
      <div className="flex-1 max-w-[530px]">
        <div className="">
          <h1 className="text-xl md:text-2xl font-roboto font-bold mb-3">
            Property Details
          </h1>
          <div className="space-y-2">
            {/* ----Which Area?---- */}
            <select
              className="p-3 border border-gray-300 w-full"
              defaultValue=""
              name="which_area"
            >
              <option value="" disabled className="">
                Which Area?
              </option>
              <option value="London">London</option>
              <option value="Tokyo">Tokyo</option>
            </select>
            {/* ----Landlord Or Seller?---- */}
            <select
              className="p-3 border border-gray-300 w-full"
              defaultValue=""
              name="landlord_or_seller"
            >
              <option value="" disabled className="">
                Landlord Or Seller?
              </option>
              <option value="Landloard">Landloard</option>
              <option value="Seller">Seller</option>
            </select>
            {/* ----Student Property Or Non Student Property?---- */}
            <select
              className="p-3 border border-gray-300 w-full"
              defaultValue=""
              name="student_or_not"
            >
              <option value="" disabled className="">
                Student Property Or Non Student Property?
              </option>
              <option value="Student Property">Student Property</option>
              <option value="Non Student Property">Non Student Property</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FirstRow;
