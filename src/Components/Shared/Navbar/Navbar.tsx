import { FaAngleDown } from "react-icons/fa";
import Logo from "../Logo/Logo";
import { FaEarthAmericas } from "react-icons/fa6";
import { LuCopySlash } from "react-icons/lu";
import { TbTriangleInvertedFilled } from "react-icons/tb";
import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = () => {
  const links = (
    <>
      <li>
        <a className="flex items-center hover:border-b hover:border-primary">
          About
        </a>
      </li>
      <li>
        <a className=" flex items-center hover:border-b hover:border-primary gap-2">
          Haus Students <LuCopySlash />
        </a>
      </li>
      <li>
        <a className=" flex items-center hover:border-b hover:border-primary gap-2">
          Contact Us <TbTriangleInvertedFilled />
        </a>
      </li>
      <li>
        <a className=" flex items-center hover:border-b hover:border-primary gap-2">
          Resources <GiHamburgerMenu className="" size={18} />
        </a>
      </li>
    </>
  );
  return (
    <div className="container mx-auto">
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              {links}
            </ul>
          </div>
          <div className="flex items-center gap-3">
            <a className="h-10">
              <Logo />
            </a>
            <button className="btn btn-outline btn-secondary">
              Instant Valuation
            </button>
          </div>
        </div>
        <div className="navbar-end hidden lg:flex flex-col items-end gap-4">
          <ul className="menu menu-horizontal px-1">
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
              <button className="btn btn-outline btn-primary">Sign In</button>
            </li>
          </ul>
          <ul className="custome-nav px-1 text-sm font-normal font-helvetica flex gap-6 *:cursor-pointer">
            {links}
          </ul>
        </div>
        {/* <div className="navbar-end">
          <a className="btn">Button</a>
        </div> */}
      </div>
    </div>
  );
};

export default Navbar;
