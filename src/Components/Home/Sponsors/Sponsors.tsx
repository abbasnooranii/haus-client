import UnipolIcon from "../../../assets/Logos/Unipol-Code.svg";
import PropertyIcon from "../../../assets/Logos/Property-Ombudsman.png";
import TDSIcon from "../../../assets/Logos/Tds-Combined.svg";
import NagotiatorIcon from "../../../assets/Logos/The-Negotiator-Awards.svg";
import UnihomesIcon from "../../../assets/Logos/unihomes.svg";

const Sponsors = () => {
  return (
    <div className="container mx-auto px-3 my-24">
      <p className="text-sm text-center hidden md:block">
        HAUS IS AN AWARD WINNING AND FULLY ACCREDITED PROPERTY SALES AND LETTING
        AGENCY IN YORKSHIRE
      </p>
      <div className="flex items-center justify-center gap-2 md:gap-6 mt-6">
        <img src={UnipolIcon} alt="" className="w-16 md:w-36" />
        <img src={PropertyIcon} alt="" className="w-16 md:w-36" />
        <img src={TDSIcon} alt="" className="w-16 md:w-36" />
        <img src={NagotiatorIcon} alt="" className="w-16 md:w-36" />
        <img src={UnihomesIcon} alt="" className="w-16 md:w-24" />
      </div>
      <p className="text-sm text-center md:hidden mt-3">
        HAUS IS AN AWARD WINNING AND FULLY ACCREDITED PROPERTY SALES AND LETTING
        AGENCY IN YORKSHIRE
      </p>
    </div>
  );
};

export default Sponsors;
