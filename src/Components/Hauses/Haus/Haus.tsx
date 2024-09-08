import { FaHeart, FaRegHeart, FaShare } from "react-icons/fa";
import CardSlider from "./CardSlider";
import LocationRooms from "./Location&Rooms";
import { RiContactsBook3Fill } from "react-icons/ri";
import { Link, useNavigate } from "react-router-dom";
import { PropertyType } from "../../../types/PropertyType";
import useSearchContext from "../../../Hooks/useSearchContext";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import Swal from "sweetalert2";
import useAuth from "../../../Hooks/useAuth";
import auth from "../../../firebase/firebase.config";

const Haus = ({ property }: { property: PropertyType }) => {
  const searchContext = useSearchContext();
  const Auth = useAuth();
  const navigate = useNavigate();
  const axiosSecure = useAxiosSecure();
  if (!searchContext) {
    return <h1> Something went wrong. </h1>;
  }
  const { search } = searchContext;

  const handleSaveProperty = async () => {
    if (!Auth?.user) {
      return navigate("/signin");
    }
    const res = await axiosSecure.post("/user/save-property", {
      AGENT_REF: property.AGENT_REF,
    });
    if (res.status === 200) {
      await Auth.handleAuthState(auth.currentUser);
      Swal.fire({
        icon: "success",
        title: res.data.message,
        showCancelButton: false,
        timer: 1200,
      });
    } else if (res.status === 202) {
      Swal.fire({
        icon: "warning",
        title: res.data.message,
        showCancelButton: false,
        timer: 1200,
      });
    } else {
      Swal.fire({
        icon: "error",
        title: "Unable to save property",
      });
    }
  };
  console.log(Auth?.user);
  return (
    <div>
      <div className="border border-gray-400 rounded p-4 flex flex-col md:flex-row md:gap-8">
        <div className="md:hidden mb-6">
          <LocationRooms property={property} />
        </div>
        {/*---------- Left Section--------- */}
        <div className="max-w-[540px]">
          <p className="flex md:justify-end text-xs md:text-sm px-2">
            <strong>Property ID:</strong> {property.AGENT_REF}
          </p>
          {/* -----Slider----- */}
          <div className="max-h-[200px] lg:min-h-[200px] lg:min-w-[520px] my-3">
            <CardSlider property={property} />
          </div>
          {/* -----Price------ */}
          <div className="flex justify-between px-2">
            <h1 className=" text-xl md:text-2xl">
              £{property.PRICE}{" "}
              <span className="text-sm">
                {search.type === "to_let" ? "PCM" : ""}
              </span>
            </h1>
            {property.AGENT_REF.includes("r") && (
              <h1 className=" text-xl md:text-2xl">
                £{property.LET_BOND} <span className="text-sm">DEPOSIT</span>
              </h1>
            )}
          </div>
        </div>
        {/* --------Right Section---------- */}
        <div className="px-2 md:px-0 md:pt-8 flex flex-col justify-between">
          <Link to={`/hauses/${property._id}`}>
            <div className="hidden md:block">
              <LocationRooms property={property} />
            </div>
            <p className="my-3 mb-6 font-medium">{property.SUMMARY}</p>
          </Link>
          {/* --------Actions-------- */}
          <div className="flex gap-4 text-sm">
            {Auth?.user?.saved_properties &&
            Auth?.user?.saved_properties.includes(property.AGENT_REF) ? (
              <button
                className="flex items-center gap-1 font-helvetica"
                onClick={handleSaveProperty}
              >
                <FaHeart className="text-primary" /> Saved
              </button>
            ) : (
              <button
                className="flex items-center gap-1 font-helvetica"
                onClick={handleSaveProperty}
              >
                <FaRegHeart className="text-primary" /> Save
              </button>
            )}
            <button className="flex items-center gap-1 font-helvetica">
              <FaShare className="text-blue-600" /> Share
            </button>
            <button className="flex items-center gap-1 font-helvetica">
              <RiContactsBook3Fill className="text-primary" /> Book Viewing
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Haus;
