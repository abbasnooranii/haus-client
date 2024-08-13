import { FaAngleDown } from "react-icons/fa";
import Logo from "../Logo/Logo";
import { FaEarthAmericas } from "react-icons/fa6";
import { LuCopySlash } from "react-icons/lu";
import { TbTriangleInvertedFilled } from "react-icons/tb";
import { GiHamburgerMenu } from "react-icons/gi";
import { Link } from "react-router-dom";
import { IoClose } from "react-icons/io5";
import { useState } from "react";

type ResourcesChildType = {
  title: string;
  link?: string;
};
type ResourcesLinkType = {
  title: string;
  link?: string;
  child: ResourcesChildType[];
};

const DesktopNav = () => {
  const [showResources, setShowResources] = useState<boolean>(false);
  const links = (
    <>
      <li>
        <a className="flex items-center border-b border-white hover:border-primary">
          About
        </a>
      </li>
      <li>
        <a className=" flex items-center border-b border-white hover:border-primary gap-2">
          Haus Students <LuCopySlash />
        </a>
      </li>
      <li>
        <a className=" flex items-center border-b border-white hover:border-primary gap-2">
          Contact Us <TbTriangleInvertedFilled />
        </a>
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
  const resourcesArr: ResourcesLinkType[] = [
    // Tanants
    {
      title: "Tenants",
      link: "/tenants",
      child: [
        {
          title: "A Tenant’s Guide to Renting",
          link: "/tenants",
        },
        {
          title: "Guarantors",
          link: "/tenants",
        },
      ],
    },
    // BTL Investors
    {
      title: "BTL Investors",
      link: "/btl-investors",
      child: [
        {
          title: "Buying and Selling Investment Properties",
          link: "/btl-investors",
        },
        {
          title: "Property Sourcing",
          link: "/btl-investors",
        },
      ],
    },
    // Buyers
    {
      title: "Buyers",
      link: "/buyers",
      child: [
        {
          title: "Buyers Guide",
          link: "/buyers",
        },
        {
          title: "Conveyancing",
          link: "/buyers",
        },
        {
          title: "Mortgages & Protections",
          link: "/buyers",
        },
      ],
    },
    // Sellers
    {
      title: "Sellers",
      link: "/sellers",
      child: [
        {
          title: "Conveyancing",
          link: "/sellers",
        },
        {
          title: "Mortgages & Protections",
          link: "/sellers",
        },
        {
          title: "Legal",
          link: "/sellers",
        },
        {
          title: "Sellers Guide",
          link: "/sellers",
        },
        {
          title: "Tips for Selling",
        },
        {
          title: "What Type of Seller Are You?",
          link: "/sellers",
        },
        {
          title: "Why Haus?",
          link: "/sellers",
        },
      ],
    },
    // Landlords
    {
      title: "Landlords",
      link: "/landlords",
      child: [
        {
          title: "Lettings Property Management",
          link: "/landlords",
        },
        {
          title: "Residential Lettings",
          link: "/landlords",
        },
        {
          title: "Safety Regulations and Responsibilities ",
          link: "/landlords",
        },
        {
          title: "Student Lettings",
          link: "/landlords",
        },
        {
          title: "Why Use an Agent?",
          link: "/landlords",
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
      {/* Nested menus */}
      <div
        className={`min-w-[100vw] absolute left-0 bg-[#f7f0e7] px-8 py-12 ${
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
              <Link to={res.link ? res.link : "/"}>
                <h3 className="text-xl text-center font-roboto font-semibold mb-3">
                  {res.title}
                </h3>
              </Link>
              <ul className="font-roboto space-y-4">
                {res.child.map((nested, i) => (
                  <li className="text-center" key={i + 100}>
                    <Link
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
