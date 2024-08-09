import { FaAngleDown } from "react-icons/fa";
import Logo from "../Logo/Logo";
import { FaEarthAmericas } from "react-icons/fa6";
import { LuCopySlash } from "react-icons/lu";
import { TbTriangleInvertedFilled } from "react-icons/tb";
import { GiHamburgerMenu } from "react-icons/gi";
import { Link } from "react-router-dom";
import { IoClose } from "react-icons/io5";
import { useState } from "react";

const DesktopNav = () => {
  const [showResources, setShowResources] = useState<boolean>(false);
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
        <button
          onClick={() => setShowResources(true)}
          className=" flex items-center hover:border-b hover:border-primary gap-2"
        >
          Resources <GiHamburgerMenu className="" size={18} />
        </button>
      </li>
    </>
  );
  const resourcesArr = [
    // Tanants
    {
      title: "Tenants",
      child: [
        {
          title: "A Tenant’s Guide to Renting",
        },
        {
          title: "Guarantors",
        },
      ],
    },
    // BTL Investors
    {
      title: "BTL Investors",
      child: [
        {
          title: "Buying and Selling Investment Properties",
        },
        {
          title: "Property Sourcing",
        },
      ],
    },
    // Buyers
    {
      title: "Buyers",
      child: [
        {
          title: "Buyers Guide",
        },
        {
          title: "Conveyancing",
        },
        {
          title: "Mortgages & Protections",
        },
      ],
    },
    // Sellers
    {
      title: "Sellers",
      child: [
        {
          title: "Conveyancing",
        },
        {
          title: "Mortgages & Protections",
        },
        {
          title: "Legal",
        },
        {
          title: "Sellers Guide",
        },
        {
          title: "Tips for Selling",
        },
        {
          title: "What Type of Seller Are You?",
        },
        {
          title: "Why Haus?",
        },
      ],
    },
    // Landlords
    {
      title: "Landlords",
      child: [
        {
          title: "Lettings Property Management",
        },
        {
          title: "Residential Lettings",
        },
        {
          title: "Safety Regulations and Responsibilities ",
        },
        {
          title: "Student Lettings",
        },
        {
          title: "Why Use an Agent?",
        },
      ],
    },
    // Careers
    {
      title: "Careers",
      child: [
        {
          title: "Join The Haus Family",
        },
      ],
    },
    // Refer a Friend
    {
      title: "Refer a Friend",
      child: [
        {
          title: "Claim Reward",
        },
      ],
    },
  ];
  return (
    <div className="bg-base-100 hidden lg:flex">
      <div className="navbar ">
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
      </div>
      <div //
        className={`min-w-[100vw] absolute left-0 bg-[#f7f0e7] px-8 py-12 ${
          showResources ? "top-0" : "-top-full"
        } duration-500`}
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
              <h3 className="text-xl text-center font-roboto font-semibold mb-3">
                {res.title}
              </h3>
              <ul className="font-roboto space-y-4">
                {res.child.map((link, i) => (
                  <li className="text-center" key={i + 100}>
                    <a
                      href="#"
                      className="text-sm hover:border-b hover:border-primary"
                    >
                      {link.title}
                    </a>
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
