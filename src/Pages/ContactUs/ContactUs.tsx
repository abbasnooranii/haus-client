import { Helmet } from "react-helmet";
import DesktopFilter from "../../Components/Hauses/Filter/DesktopFilter";
import ResponsiveBanner from "../../Components/Shared/Tanants-similler/Banner/ResponsiveBanner";
import ContactUsMap from "../../Components/ContactUs/ContactUsMap/ContactUsMap";
import LearnAboutHaus from "../../Components/ContactUs/LearnAboutHaus/LearnAboutHaus";
import ServicesAvailable from "../../Components/ContactUs/ServicesAvailable/ServicesAvailable";
import MeetTheTeam from "../../Components/ContactUs/MeetTheTeam/MeetTheTeam";

const ContactUs = () => {
  return (
    <div>
      <Helmet>
        <title>Contact us</title>
        {/* <meta name="description" content="Helmet application" /> */}
      </Helmet>
      <DesktopFilter />
      <ResponsiveBanner
        title="HAUS SALES AND LETTINGS LEEDS"
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

export default ContactUs;
