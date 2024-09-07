import { Helmet } from "react-helmet";
import DesktopFilter from "../../../Components/Hauses/Filter/DesktopFilter";
import ResponsiveBanner from "../../../Components/Shared/Tanants-similler/Banner/ResponsiveBanner";
import ContactUsMap from "../../../Components/ContactUs/ContactUsMap/ContactUsMap";
import LearnAboutHaus from "../../../Components/ContactUs/LearnAboutHaus/LearnAboutHaus";
import ServicesAvailable from "../../../Components/ContactUs/ServicesAvailable/ServicesAvailable";
import MeetTheTeam from "../../../Components/ContactUs/MeetTheTeam/MeetTheTeam";

const HausSalesandLettingsSouthYorkshire = () => {
  return (
    <div>
      <Helmet>
        <title>Haus Sales and Lettings South Yorkshire</title>
        {/* <meta name="description" content="Helmet application" /> */}
      </Helmet>
      <DesktopFilter />
      <ResponsiveBanner
        title="HAUS SALES AND LETTINGS SOUTH YORKSHIRE"
        width="max-w-[420px]"
      />
      <ContactUsMap />
      <div className="home-banner min-h-[500px] my-12"></div>
      <LearnAboutHaus />
      <ServicesAvailable />
      <MeetTheTeam />
    </div>
  );
};

export default HausSalesandLettingsSouthYorkshire;
