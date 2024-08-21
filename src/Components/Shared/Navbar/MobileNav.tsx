import { Link } from "react-router-dom";
import Logo from "../Logo/Logo";
import { FaRegUserCircle, FaSearch } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose, IoExitOutline } from "react-icons/io5";
import studentImg from "../../../assets/Logos/student.png";
import { FaEarthAmericas } from "react-icons/fa6";
import { TbTriangleInvertedFilled } from "react-icons/tb";
import { useState } from "react";
import { ResourcesLinkType } from "../../../types/ResourcesLinkType";

const MobileNav = ({ resourcesArr }: { resourcesArr: ResourcesLinkType[] }) => {
  const [selectedMenu, setSelectedMenu] = useState<string>("");
  const [showNav, setShowNav] = useState<boolean>(false);

  return (
    <div className="bg-base-100 lg:hidden">
      <div className="navbar">
        <div className="navbar-start">
          <div className="dropdown">
            <button
              className="btn btn-ghost btn-circle"
              onClick={() => setShowNav(true)}
            >
              <GiHamburgerMenu size={18} />
            </button>
          </div>
        </div>
        <div className="navbar-center">
          <Link to={"/"} className="h-6">
            <Logo />
          </Link>
        </div>
        <div className="navbar-end">
          <button className="btn btn-ghost btn-circle">
            <FaSearch size={20} />
          </button>
          <button className="btn btn-ghost btn-circle">
            <FaRegUserCircle size={20} />
          </button>
        </div>
      </div>

      {/* Nested Menu */}
      <div
        className={`h-screen overflow-y-auto min-w-[300px] fixed z-10 ${
          showNav ? "left-0" : "-left-full"
        } top-0 bg-[#f7f0e7] p-4 duration-500`}
      >
        <div className="flex justify-between items-center">
          <div className="h-6">
            <Logo />
          </div>
          <button className="" onClick={() => setShowNav(false)}>
            <IoClose size={22} />
          </button>
        </div>
        <ul className="mt-6 font-helvetica space-y-1">
          {/* Hous Student */}
          <li>
            <div className="bg-white border-2 border-[#F6BB71] rounded-r-lg p-3 flex justify-between items-center">
              <div className="flex items-center">
                <div className="h-5">
                  <Logo />
                </div>
                <img src={studentImg} alt="" width={40} />
              </div>
              <IoExitOutline size={24} className="text-[#F6BB71]" />
            </div>
          </li>
          {/* Language */}
          <li>
            <div className="bg-[#EEEEEE] border-2 border-[#F6BB71] rounded-r-lg p-3 flex justify-between items-center">
              <span className="text-sm"> Language </span>
              <FaEarthAmericas size={24} />
            </div>
          </li>

          {resourcesArr.map((resourc, i) => (
            <li key={i} className="overflow-hidden">
              <div className="bg-[#EEEEEE] border-2 border-[#F6BB71] rounded-r-lg p-3 flex justify-between items-center">
                <Link
                  onClick={() => setShowNav(false)}
                  to={resourc.link || "/"}
                  className="text-sm"
                >
                  {" "}
                  {resourc.title}{" "}
                </Link>
                <button
                  onClick={() =>
                    setSelectedMenu(
                      selectedMenu === resourc.title ? "" : resourc.title
                    )
                  }
                >
                  <TbTriangleInvertedFilled
                    className={`${
                      selectedMenu === resourc.title ? "rotate-180" : "rotate-0"
                    } duration-500`}
                  />
                </button>
              </div>
              {/*2nd Nested menu */}
              <ul
                className={`mt-1 ml-2 space-y-1  ${
                  selectedMenu === resourc.title ? resourc.height : "h-0"
                } duration-500`}
              >
                {resourc.child.map((ch, i) => (
                  <li key={i}>
                    <Link
                      onClick={() => setShowNav(false)}
                      to={ch.link || "/"}
                      className="bg-[#EEEEEE] border-2 border-[#F6BB71] rounded-r-lg p-3 flex justify-between items-center"
                    >
                      <span className="text-sm">{ch.title}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
// {/* Tenants */}
// <li className="group overflow-hidden">
// <div className="bg-[#EEEEEE] border-2 border-[#F6BB71] rounded-r-lg p-3 flex justify-between items-center">
//   <span className="text-sm"> Tenants </span>
//   <TbTriangleInvertedFilled className=" group-hover:rotate-180 duration-500" />
// </div>
// {/*2nd Nested menu */}
// <ul className="mt-1 ml-2 space-y-1 h-0 group-hover:h-28 duration-500">
//   <li>
//     <div className="bg-[#EEEEEE] border-2 border-[#F6BB71] rounded-r-lg p-3 flex justify-between items-center">
//       <span className="text-sm"> A Tenant’s Guide to Renting </span>
//     </div>
//   </li>
//   <li>
//     <div className="bg-[#EEEEEE] border-2 border-[#F6BB71] rounded-r-lg p-3 flex justify-between items-center">
//       <span className="text-sm"> Guarantors </span>
//     </div>
//   </li>
// </ul>
// </li>
// {/* BTL Investors */}
// <li className="group overflow-hidden">
// <div className="bg-[#EEEEEE] border-2 border-[#F6BB71] rounded-r-lg p-3 flex justify-between items-center">
//   <span className="text-sm"> BTL Investors </span>
//   <TbTriangleInvertedFilled className=" group-hover:rotate-180 duration-500" />
// </div>
// {/*2nd Nested menu */}
// <ul className="mt-1 ml-2 space-y-1 h-0 group-hover:h-28 duration-500">
//   <li>
//     <div className="bg-[#EEEEEE] border-2 border-[#F6BB71] rounded-r-lg p-3 flex justify-between items-center">
//       <span className="text-sm">
//         Buying and Selling Investment Properties
//       </span>
//     </div>
//   </li>
//   <li>
//     <div className="bg-[#EEEEEE] border-2 border-[#F6BB71] rounded-r-lg p-3 flex justify-between items-center">
//       <span className="text-sm"> Property Sourcing </span>
//     </div>
//   </li>
// </ul>
// </li>
// {/* Buyers */}
// <li className="group overflow-hidden">
// <div className="bg-[#EEEEEE] border-2 border-[#F6BB71] rounded-r-lg p-3 flex justify-between items-center">
//   <span className="text-sm"> Buyers </span>
//   <TbTriangleInvertedFilled className=" group-hover:rotate-180 duration-500" />
// </div>
// {/*2nd Nested menu */}
// <ul className="mt-1 ml-2 space-y-1 h-0 group-hover:h-40 duration-500">
//   <li>
//     <div className="bg-[#EEEEEE] border-2 border-[#F6BB71] rounded-r-lg p-3 flex justify-between items-center">
//       <span className="text-sm"> Buyers Guide </span>
//     </div>
//   </li>
//   <li>
//     <div className="bg-[#EEEEEE] border-2 border-[#F6BB71] rounded-r-lg p-3 flex justify-between items-center">
//       <span className="text-sm"> Conveyancing </span>
//     </div>
//   </li>
//   <li>
//     <div className="bg-[#EEEEEE] border-2 border-[#F6BB71] rounded-r-lg p-3 flex justify-between items-center">
//       <span className="text-sm"> Mortgages & Protections </span>
//     </div>
//   </li>
// </ul>
// </li>
// {/* Sellers */}
// <li className="group overflow-hidden">
// <div className="bg-[#EEEEEE] border-2 border-[#F6BB71] rounded-r-lg p-3 flex justify-between items-center">
//   <span className="text-sm"> Sellers </span>
//   <TbTriangleInvertedFilled className=" group-hover:rotate-180 duration-500" />
// </div>
// {/*2nd Nested menu */}
// <ul className="mt-1 ml-2 space-y-1 h-0 group-hover:h-[370px] duration-500">
//   <li>
//     <div className="bg-[#EEEEEE] border-2 border-[#F6BB71] rounded-r-lg p-3 flex justify-between items-center">
//       <span className="text-sm"> Conveyancing </span>
//     </div>
//   </li>
//   <li>
//     <div className="bg-[#EEEEEE] border-2 border-[#F6BB71] rounded-r-lg p-3 flex justify-between items-center">
//       <span className="text-sm"> Mortgages & Protections </span>
//     </div>
//   </li>
//   <li>
//     <div className="bg-[#EEEEEE] border-2 border-[#F6BB71] rounded-r-lg p-3 flex justify-between items-center">
//       <span className="text-sm"> Legal </span>
//     </div>
//   </li>
//   <li>
//     <div className="bg-[#EEEEEE] border-2 border-[#F6BB71] rounded-r-lg p-3 flex justify-between items-center">
//       <span className="text-sm"> Sellers Guide </span>
//     </div>
//   </li>
//   <li>
//     <div className="bg-[#EEEEEE] border-2 border-[#F6BB71] rounded-r-lg p-3 flex justify-between items-center">
//       <span className="text-sm"> Tips for Selling </span>
//     </div>
//   </li>
//   <li>
//     <div className="bg-[#EEEEEE] border-2 border-[#F6BB71] rounded-r-lg p-3 flex justify-between items-center">
//       <span className="text-sm">
//         {" "}
//         What Type of Seller Are You?{" "}
//       </span>
//     </div>
//   </li>
//   <li>
//     <div className="bg-[#EEEEEE] border-2 border-[#F6BB71] rounded-r-lg p-3 flex justify-between items-center">
//       <span className="text-sm"> Why Haus? </span>
//     </div>
//   </li>
// </ul>
// </li>
// {/* Landlords */}
// <li className="group overflow-hidden">
// <div className="bg-[#EEEEEE] border-2 border-[#F6BB71] rounded-r-lg p-3 flex justify-between items-center">
//   <span className="text-sm"> Landlords </span>
//   <TbTriangleInvertedFilled className=" group-hover:rotate-180 duration-500" />
// </div>
// {/*2nd Nested menu */}
// <ul className="mt-1 ml-2 space-y-1 h-0 group-hover:h-64 duration-500">
//   <li>
//     <div className="bg-[#EEEEEE] border-2 border-[#F6BB71] rounded-r-lg p-3 flex justify-between items-center">
//       <span className="text-sm">
//         {" "}
//         Lettings Property Management{" "}
//       </span>
//     </div>
//   </li>
//   <li>
//     <div className="bg-[#EEEEEE] border-2 border-[#F6BB71] rounded-r-lg p-3 flex justify-between items-center">
//       <span className="text-sm"> Residential Lettings </span>
//     </div>
//   </li>
//   <li>
//     <div className="bg-[#EEEEEE] border-2 border-[#F6BB71] rounded-r-lg p-3 flex justify-between items-center">
//       <span className="text-sm">
//         {" "}
//         Safety Regulations and Responsibilities{" "}
//       </span>
//     </div>
//   </li>
//   <li>
//     <div className="bg-[#EEEEEE] border-2 border-[#F6BB71] rounded-r-lg p-3 flex justify-between items-center">
//       <span className="text-sm"> Student Lettings </span>
//     </div>
//   </li>
//   <li>
//     <div className="bg-[#EEEEEE] border-2 border-[#F6BB71] rounded-r-lg p-3 flex justify-between items-center">
//       <span className="text-sm"> Why Use an Agent? </span>
//     </div>
//   </li>
// </ul>
// </li>
// {/* Careers */}
// <li className="group overflow-hidden">
// <div className="bg-[#EEEEEE] border-2 border-[#F6BB71] rounded-r-lg p-3 flex justify-between items-center">
//   <span className="text-sm"> Careers </span>
//   <TbTriangleInvertedFilled className=" group-hover:rotate-180 duration-500" />
// </div>
// {/*2nd Nested menu */}
// <ul className="mt-1 ml-2 space-y-1 h-0 group-hover:h-16 duration-500">
//   <li>
//     <div className="bg-[#EEEEEE] border-2 border-[#F6BB71] rounded-r-lg p-3 flex justify-between items-center">
//       <span className="text-sm">Join The Haus Family</span>
//     </div>
//   </li>
// </ul>
// </li>
// {/* Rafer A Friend */}
// <li className="group overflow-hidden">
// <div className="bg-[#EEEEEE] border-2 border-[#F6BB71] rounded-r-lg p-3 flex justify-between items-center">
//   <span className="text-sm"> Rafer A Friend </span>
//   <TbTriangleInvertedFilled className=" group-hover:rotate-180 duration-500" />
// </div>
// {/*2nd Nested menu */}
// <ul className="mt-1 ml-2 space-y-1 h-0 group-hover:h-28 duration-500">
//   <li>
//     <div className="bg-[#EEEEEE] border-2 border-[#F6BB71] rounded-r-lg p-3 flex justify-between items-center">
//       <span className="text-sm">Claim Reward</span>
//     </div>
//   </li>
// </ul>
// </li>
export default MobileNav;
