import CholeImg from "../../../assets/Images/ContactUs/Chole.png";
import WillImg from "../../../assets/Images/ContactUs/Will_White.png";
import LasiaImg from "../../../assets/Images/ContactUs/Lasia.png";
import KimberleyImg from "../../../assets/Images/ContactUs/Kinberley.png";
import MiaImg from "../../../assets/Images/ContactUs/Mia.png";
import MemberDetails from "./MemberDetails";

const MeetTheTeam = () => {
  return (
    <div className="container mx-auto px-3 my-12">
      <h1 className="text-xl md:text-3xl font-roboto font-bold text-center">
        MEET THE TEAM
      </h1>
      <div className="mt-12 flex gap-6 *:w-[225px] overflow-x-auto text-center">
        {/* ------Chole---- */}
        <div className="flex flex-col items-center">
          <div className="w-[150px] h-[150px] rounded-full overflow-hidden">
            <img src={CholeImg} alt="" />
          </div>
          <h4 className="text-xl font-roboto font-bold text-center mt-6">
            CHLOE
          </h4>
          <span className="font-roboto">Head of Haus Sales & Lettings</span>
        </div>
        {/* -------Will White------ */}
        <div className="flex flex-col items-center">
          <div className="w-[150px] h-[150px] rounded-full overflow-hidden">
            <img src={WillImg} alt="" />
          </div>
          <h4 className="text-xl font-roboto font-bold text-center mt-6">
            WILL WHITE
          </h4>
          <span className="font-roboto ">
            Senior Property Consultant & Valuer
          </span>
        </div>
        {/* -------Lasia------ */}
        <div className="flex flex-col items-center">
          <div className="w-[150px] h-[150px] rounded-full overflow-hidden">
            <img src={LasiaImg} alt="" />
          </div>
          <h4 className="text-xl font-roboto font-bold text-center mt-6">
            LESIA
          </h4>
          <span className="font-roboto">Sales & Lettings Negotiator</span>
        </div>
        {/* -------KIMBERLEY------ */}
        <div className="flex flex-col items-center">
          <div className="w-[150px] h-[150px] rounded-full overflow-hidden">
            <img src={KimberleyImg} alt="" />
          </div>
          <h4 className="text-xl font-roboto font-bold text-center mt-6">
            KIMBERLEY
          </h4>
          <span className="font-roboto">Sales & Lettings Negotiator</span>
        </div>
        {/* -------MIA------ */}
        <div className="flex flex-col items-center">
          <div className="w-[150px] h-[150px] rounded-full overflow-hidden">
            <img src={MiaImg} alt="" />
          </div>
          <h4 className="text-xl font-roboto font-bold text-center mt-6">
            MIA
          </h4>
          <span className="font-roboto">Office Co-Ordinator</span>
        </div>
      </div>
      <MemberDetails />
    </div>
  );
};

export default MeetTheTeam;
