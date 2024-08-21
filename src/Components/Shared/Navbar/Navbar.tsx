import { ResourcesLinkType } from "../../../types/ResourcesLinkType";
import DesktopNav from "./DesktopNav";
import MobileNav from "./MobileNav";

const Navbar = () => {
  const resourcesArr: ResourcesLinkType[] = [
    // Tanants
    {
      title: "Tenants",
      link: "/tenants",
      height: "h-28",
      child: [
        {
          title: "A Tenant’s Guide to Renting",
          link: "/tenants-guide-to-renting",
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
      height: "h-28",
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
      height: "h-40",
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
      height: "h-[370px]",
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
      height: "h-64",
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
      height: "h-16",
      child: [
        {
          title: "Join The Haus Family",
        },
      ],
    },
    // Refer a Friend
    {
      title: "Refer a Friend",
      link: "/refer-a-friend",
      height: "h-16",
      child: [
        {
          title: "Claim Reward",
          link: "/refer-a-friend",
        },
      ],
    },
  ];

  return (
    <div className="container mx-auto">
      <DesktopNav resourcesArr={resourcesArr} />
      <MobileNav resourcesArr={resourcesArr} />
    </div>
  );
};

export default Navbar;
