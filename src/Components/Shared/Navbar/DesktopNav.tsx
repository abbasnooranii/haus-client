import { FaAngleDown } from "react-icons/fa";
import Logo from "../Logo/Logo";
import { FaEarthAmericas } from "react-icons/fa6";
import { LuCopySlash } from "react-icons/lu";
import { TbTriangleInvertedFilled } from "react-icons/tb";
import { GiHamburgerMenu } from "react-icons/gi";
import { Link } from "react-router-dom";
import { IoClose } from "react-icons/io5";
import { useState } from "react";
import { ResourcesLinkType } from "../../../types/ResourcesLinkType";
import useAuth from "../../../Hooks/useAuth";

const DesktopNav = ({
  resourcesArr,
}: {
  resourcesArr: ResourcesLinkType[];
}) => {
  const [showResources, setShowResources] = useState<boolean>(false);
  const Auth = useAuth();

  const links = (
    <>
      <li>
        <Link
          to="/about-us"
          className="flex items-center border-b border-white hover:border-primary"
        >
          About
        </Link>
      </li>
      <li>
        <a className=" flex items-center border-b border-white hover:border-primary gap-2">
          Haus Students <LuCopySlash />
        </a>
      </li>
      {/* ---------Contact us-------- */}
      <li>
        <div className="relative group ">
          <div className="flex items-center border-b border-white hover:border-primary gap-2">
            Contact Us <TbTriangleInvertedFilled />
          </div>
          <div className="absolute -left-6 p-4 overflow-hidden origin-top scale-y-0 group-hover:scale-y-100 transition-all duration-300 bg-white rounded-lg space-y-4 w-auto *:text-nowrap z-10">
            <Link
              to="/contact-haus-sales-and-lettings-leeds"
              className=" flex items-center border-b border-white hover:border-primary gap-2"
            >
              Haus Sales and Lettings Leeds
            </Link>
            <Link
              to="/contact-haus-student-leeds"
              className=" flex items-center border-b border-white hover:border-primary gap-2"
            >
              Haus Student Leeds
            </Link>
            <Link
              to="/contact-haus-sales-and-lettings-south-yorkshire"
              className=" flex items-center border-b border-white hover:border-primary gap-2"
            >
              Haus Sales and Lettings South Yorkshire
            </Link>
          </div>
        </div>
      </li>
      <li>
        <button
          onClick={() => setShowResources(true)}
          className=" flex items-center border-b border-white hover:border-primary gap-2"
        >
          Resources <GiHamburgerMenu className="" size={18} />
        </button>
      </li>
    </>
  );

  return (
    <div className="bg-base-100 hidden lg:flex">
      <div className="navbar pt-3 pb-6 ">
        <div className="navbar-start">
          <div className="flex items-center gap-3">
            <Link to={"/"} className="h-10">
              <Logo />
            </Link>
            <button className="btn btn-outline btn-secondary">
              Instant Valuation
            </button>
          </div>
        </div>
        <div className="navbar-end hidden lg:flex flex-col items-end gap-4">
          <ul className="menu menu-horizontal items-center px-1">
            {/* ---------Dropdown------ */}
            <li className="dropdown">
              <div tabIndex={0} role="button" className="m-1 text-sm">
                <FaEarthAmericas /> Language <FaAngleDown />
              </div>
              <ul
                tabIndex={0}
                className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow"
              >
                <li>
                  <a>Item 1</a>
                </li>
                <li>
                  <a>Item 2</a>
                </li>
              </ul>
            </li>
            <li>
              {Auth?.user ? (
                <div className="dropdown p-0 hover:bg-none">
                  {/* -------Profile section------ */}
                  {/* Clickable button */}
                  <div tabIndex={0} role="button" className="m-1">
                    <div className="avatar">
                      <div className="w-8 mask mask-squircle">
                        <img
                          src={
                            Auth?.user?.photoURL
                              ? Auth?.user?.photoURL
                              : "https://img.icons8.com/?size=256w&id=7819&format=png&color=FA5252"
                          }
                        />
                        {/* <FaRegUserCircle /> */}
                      </div>
                    </div>
                  </div>
                  {/* Menu List */}
                  <ul
                    tabIndex={0}
                    className="dropdown-content z-[1] menu p-0 -left-[100px] top-full rounded-md overflow-hidden w-40 bg-gray-300 *:font-medium"
                  >
                    <p className="px-4 py-2 text-lg text-net-red font-semibold uppercase">
                      {Auth?.user?.displayName}
                    </p>

                    <li className="text-net-red hover:bg-net-red hover:text-white">
                      <Link to="/saved-properties">Saved Properties</Link>
                    </li>
                    <li className="text-net-red hover:bg-net-red hover:text-white">
                      <Link to="/saved-searches">Saved Searches</Link>
                    </li>
                    <li className="text-net-red hover:bg-net-red hover:text-white">
                      <button onClick={() => Auth?.logout()}>Logout</button>
                    </li>
                  </ul>
                </div>
              ) : (
                <div className="relative group p-0">
                  {/* <div className="flex items-center border-b border-white hover:border-primary gap-2 text-primary font-semibold"> */}
                  <button className="btn btn-outline btn-primary text-sm font-medium py-0">
                    Sign In
                    <TbTriangleInvertedFilled />
                  </button>
                  {/* </div> */}
                  <div className="absolute -left-6 top-full p-4 overflow-hidden origin-top scale-y-0 group-hover:scale-y-100 transition-all duration-300 bg-white rounded-lg space-y-4 w-auto *:text-nowrap z-10 border border-primary">
                    <Link
                      to="/signin"
                      className=" flex items-center border-b border-white hover:border-primary gap-2"
                    >
                      Just Looking
                    </Link>
                    <Link
                      to="/"
                      className=" flex items-center border-b border-white hover:border-primary gap-2"
                    >
                      Tenant Login
                    </Link>
                    <Link
                      to="/contact-haus-sales-and-lettings-south-yorkshire"
                      className=" flex items-center border-b border-white hover:border-primary gap-2"
                    >
                      Landloard Login
                    </Link>
                  </div>
                </div>
              )}
            </li>
          </ul>
          <ul className="custome-nav px-1 text-sm font-normal font-helvetica flex gap-6 *:cursor-pointer">
            {links}
          </ul>
        </div>
      </div>
      {/* Nested menus */}
      <div
        className={`w-100 absolute left-0 bg-[#f7f0e7] px-8 py-12 ${
          showResources ? "top-0" : "-top-[120%]"
        } duration-500 z-10`}
      >
        {/* Topbar */}
        <div className="flex items-center font-helvetica">
          <h1 className="text-4xl font-helvetica flex-1 text-center">
            {" "}
            RESOURCES
          </h1>
          <button
            className="justify-end"
            onClick={() => setShowResources(false)}
          >
            <IoClose size={26} />
          </button>
        </div>
        <div className="grid grid-cols-7 mt-12">
          {resourcesArr.map((res, i) => (
            <div key={i}>
              <Link
                to={res.link ? res.link : "/"}
                onClick={() => setShowResources(false)}
              >
                <h3 className="text-xl text-center font-roboto font-semibold mb-3">
                  {res.title}
                </h3>
              </Link>
              <ul className="font-roboto space-y-4">
                {res.child.map((nested, i) => (
                  <li className="text-center" key={i + 100}>
                    <Link
                      onClick={() => setShowResources(false)}
                      to={nested?.link ? nested.link : "/"}
                      className="text-sm hover:border-b hover:border-primary"
                    >
                      {nested.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DesktopNav;
