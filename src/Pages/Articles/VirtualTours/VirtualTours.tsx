import { Helmet } from "react-helmet";
import VirtualBanner from "../../../Components/VirtualTours/VirtualBanner/VirtualBanner";
import VirtualVideoImg from "../../../assets/Images/VirtualTours/Virtual_tours_video.png";
import VirtualBlogImg from "../../../assets/Images/VirtualTours/blog_img.png";

const VirtualTours = () => {
  return (
    <div>
      <Helmet>
        <title>VIRTUAL TOURS</title>
        {/* <meta name="description" content="Helmet application" /> */}
      </Helmet>
      <VirtualBanner />
      {/* ENHANCHED MARKETING & VIRTUAL TOURS */}
      <div className="container mx-auto px-3 flex flex-col md:flex-row gap-6 items-center my-24">
        <div className="flex-1">
          <h1 className="text-xl md:text-3xl font-roboto font-bold px-3 md:px-6 border-l-4 border-primary py-2 ">
            ENHANCHED MARKETING & VIRTUAL TOURS
          </h1>
          <p className="my-3 md:my-8 px-4">
            No matter whether you’re selling or letting your home, you’ll want
            to make sure it stands out from the crowd and impresses potential
            buyers / tenants. This is especially important on busy online
            property portals such as Rightmove and Zoopla.
            <br />
            <br />
            Enhanced photography showcases your properties best features whilst
            virtual tours give potential buyers / tenants the opportunity to
            view from anywhere.
            <br />
            <br />
            Invite potential buyers / tenants into your home without having to
            open the front door, our virtual tours can show your home from the
            garden, to a walkthrough of the interior. These videos can be
            publicly available on the major property portals or privately upon
            the request from a potential buyer / tenant.
            <br />
            <br />
            We promise to always include a virtual tour and enhanced photography
            as standard!
          </p>
        </div>
        <div className="flex-1">
          <img src={VirtualVideoImg} alt="" />
        </div>
      </div>
      {/* PREMIUM MARKETING */}
      <div className="container mx-auto px-3 flex flex-col md:flex-row gap-6 items-center my-24">
        <div className="flex-1">
          <h1 className="text-xl md:text-3xl font-roboto font-bold px-3 md:px-6 border-l-4 border-primary py-2 ">
            PREMIUM MARKETING
          </h1>
          <p className="my-3 md:my-8 px-4">
            Is your home set in extensive land or landscaped gardens? Or maybe
            its located in a particularly unique, picturesque setting? Arial
            photography illustrated the lifestyle associated with your home. We
            can arrange for a professional to visit your home to capture aerial
            shots and videos from the air by using a drone.
            <br />
            <br />
            If you are interested in finding out more information regarding our
            premium marketing pack, including prices, please contact your local
            branch.
          </p>
        </div>
        <div className="flex-1">
          <img src={VirtualBlogImg} alt="" />
        </div>
      </div>
      {/* FAQs */}
      <div className="container mx-auto px-3 flex flex-col md:flex-row gap-6 items-center my-24">
        <div className="flex-1">
          <h1 className="text-xl md:text-3xl font-roboto font-bold px-3 md:px-6 border-l-4 border-primary py-2 ">
            FAQs
          </h1>
          <p className="my-3 md:my-8 px-4">
            How long are the virtual tour appointments?
            <br />
            <br />
            Appointments for virtual tours typically take between 45 and 90
            minutes, depending on property size. We would do the virtual tour,
            room measurements, floorplan and photos during this appointment.
            <br />
            <br />
            How do I get the most out of my virtual tour/photo appointment?
            <br />
            <br />
            We recommend making sure your home is as tidy as possible before the
            appointment as this ensures your property is marketing in the best
            possible light. For external shots, ideally cars should be removed
            from the driveway and outside bins to be hidden or moved.
            <br />
            <br />
            How do you take aerial footage?
            <br />
            <br />
            Our drone expert takes photos and videos from the air. If your
            property lies in a flight restriction zone, such as near to an
            airport, our drone expert will need to arrange special permission.
            The permission does not cost anything extra however you may need to
            allow extra time for this to be arranged. If there are no flight
            restrictions, we only require your permission to fly the drone
            around and over your property.
            <br />
            <br />
            Do I have to have my virtual viewing live online? No, this is
            personal preference. There are two options: 1) We can market your
            property online with the virtual tour visible to anyone who views
            the advert. We can also showcase your property with the virtual tour
            on social media. Sales adverts that have property videos on
            Rightmove receive on average 26% views and 31% more leads than those
            without*
            <br />
            <br />
            OR
            <br />
            <br />
            2) We can market your property online with a ‘Online viewing
            available’ sticker. The client would then have to request the
            virtual tour to be sent to them via email. This is emailed to the
            client once they have provided us with some basic information such
            as name, number, email address and current situation. This can work
            well as we then know who has viewed virtually, giving us the
            opportunity to ask for feedback on the property.
            <br />
            <br />
            *Source Rightmove data January – June 2020
          </p>
        </div>
        <div className="flex-1">
          <img src={VirtualBlogImg} alt="" />
        </div>
      </div>
    </div>
  );
};

export default VirtualTours;
