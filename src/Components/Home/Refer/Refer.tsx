import { Link } from "react-router-dom";
import ReferImg from "../../../assets/Images/Home/Rafar-a-friend.png";

const Refer = () => {
  return (
    <div className="container mx-auto px-3 my-24 flex flex-col-reverse md:flex-row items-center">
      <div className="space-y-6 text-center md:text-left flex-1">
        <h2 className="text-2xl font-helvetica hidden md:block">
          Refer A Friend And Get £25 Each
        </h2>
        <p className="max-w-[540px]">
          If you know someone who is looking to sell their house or if you have
          a friend who want to start renting out their property, let us know
          about them and if they complete with us, we'll give each of you a £25
          voucher.
        </p>
        <Link to={"/refer-a-friend"} className="btn btn-outline btn-primary">
          Learn More
        </Link>
      </div>
      <div className="rounded overflow-hidden">
        <h2 className="text-xl font-helvetica md:hidden text-center mb-3">
          Refer A Friend And Get £25 Each
        </h2>
        <img src={ReferImg} alt="" />
      </div>
    </div>
  );
};

export default Refer;
