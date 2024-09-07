import { Helmet } from "react-helmet";
import DesktopFilter from "../../../Components/Hauses/Filter/DesktopFilter";
import ResponsiveBanner from "../../../Components/Shared/Tanants-similler/Banner/ResponsiveBanner";
import ContactUsMap from "../../../Components/ContactUs/ContactUsMap/ContactUsMap";
import LearnAboutHaus from "../../../Components/ContactUs/LearnAboutHaus/LearnAboutHaus";
import ServicesAvailable from "../../../Components/ContactUs/ServicesAvailable/ServicesAvailable";
import MeetTheTeam from "../../../Components/ContactUs/MeetTheTeam/MeetTheTeam";

const HausStudentLeeds = () => {
  return (
    <div>
      <Helmet>
        <title>Haus Student Leeds</title>
        {/* <meta name="description" content="Helmet application" /> */}
      </Helmet>
      <DesktopFilter />
      <ResponsiveBanner title="HAUS STUDENT LEEDS" width="max-w-[420px]" />
      <ContactUsMap />
      <div className="home-banner min-h-[500px] my-12"></div>
      <LearnAboutHaus />
      <ServicesAvailable />
      <MeetTheTeam />
    </div>
  );
};

export default HausStudentLeeds;
