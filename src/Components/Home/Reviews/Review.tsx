import { FaStar } from "react-icons/fa";

const Review = () => {
  return (
    <div className="bg-white p-6 rounded-lg max-w-[540px]">
      {/* Profile sectioin */}
      <div className="flex gap-2 items-center">
        {/* <div className="avatar"> */}
        <div className="w-12 rounded-full overflow-hidden">
          <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
        </div>
        {/* </div> */}
        <div>
          <h6 className="font-helvetica"> Jenna Chalmers </h6>
          <div className="text-orange-400 flex gap-1">
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
          </div>
        </div>
      </div>
      <p className="mt-2">
        We have recently signed for a property and were helped massively by
        Kimberley who showed us the house and replied to any queries we had very
        timely and professionally in a very friendly and positive manner! I also
        have spoken several times ...{" "}
        <span className="text-blue-500">More</span>
      </p>
    </div>
  );
};

export default Review;
