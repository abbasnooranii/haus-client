import { Link } from "react-router-dom";
import ComonTitleDesc from "../../Components/AboutUs/ComonTitleDesc/ComonTitleDesc";
import Reviews from "../../Components/Home/Reviews/Reviews";
import ResponsiveBanner from "../../Components/Shared/Tanants-similler/Banner/ResponsiveBanner";
import VirtualImg from "../../assets/Images/Virtual_Tours.png";
import { Helmet } from "react-helmet";

const AboutUs = () => {
  return (
    <div>
      <Helmet>
        <title>About</title>
        {/* <meta name="description" content="Helmet application" /> */}
      </Helmet>
      <ResponsiveBanner title="ABOUT US" />

      <div className="container mx-auto my-12 space-y-3">
        <h2 className="text-xl md:text-3xl font-roboto font-semibold px-3 md:px-6 border-l-4 border-primary py-2">
          WHO ARE <span className="text-primary">WE</span>?
        </h2>
        <p className="px-3 md:px-6">
          Today, Haus is one of the most successful local estate agents in
          Yorkshire. We're trusted by hundreds of landlords, have sold hundreds
          of properties and manage hundreds more professional and student
          houses. We have an unrivalled, in-depth knowledge of the Leeds
          property market and its surrounding areas. <br /> In 2018 we were
          crowned best letting agency (2-5 branches) in the negotiator awards.
          The judges look at hundreds of estate agents from all around the UK
          and decided that we are the best at what we do. We don't say this to
          brag. We say it because we're really proud of it. We've worked
          incredibly hard over the years to grow our business while building a
          reputation for honesty and exceeding our client's expectations
        </p>
      </div>
      <div className="container mx-auto my-12 space-y-3">
        <h2 className="text-xl md:text-3xl font-roboto font-semibold px-3 md:px-6 border-l-4 border-primary py-2">
          PEOPLE
        </h2>
        <p className="px-3 md:px-6">
          This really is a people business. We've built an amazing team based on
          the core values of honesty, trust and hard work. We have great
          relationships with other industry-leading experts in property
          maintenance, mortgage advice, legal services, and anything else that
          you could possibly need along the way. <br />
          Most importantly we build long-lasting relationships with our clients.
          We know that sometimes it’s easy to get a little lost in the property
          world, whether you're trying to sell your house, or you're looking for
          student accommodation. Always remember, there are no silly questions,
          and we are always happy to help. If you get a bit stuck then one of
          our friendly experts will be more than happy to talk you through
          anything, just give us a call. (link to contact info).
        </p>
      </div>
      <ComonTitleDesc
        title="PROPERTY"
        desc="Of course, we're passionate about property, right? But we're not just passionate about the flashy side of it. We're into the details too. We're into where the property market in Leeds will be in a few years, we're into new legislation which is going to affect you whether you're a landlord or a tenant, and we're into making sure you know about it all before it affects you. That's why we keep you up to date with our hugely popular blogs."
      />
      <ComonTitleDesc
        title="YORKSHIRE"
        desc="It's our home. Our team is made up of people from Leeds, York, Barnsley, Rotherham, Doncaster, Sheffield and beyond. This with our decades of experience, gives us unique insights into what is happening in the Yorkshire property market. Yorkshire is on the rise, and so are Haus Properties, we'd love you to join us for the next step of our journey."
      />
      <Reviews />

      <div>
        <div className="container mx-auto px-3 flex flex-col md:flex-row gap-6 items-center my-24">
          <div className="flex-1">
            <h1 className="text-xl md:text-3xl font-roboto font-bold px-3 md:px-6 border-l-4 border-primary py-2 ">
              VIRTUAL TOURS
            </h1>
            <p className="my-3 md:my-8 px-4">
              It's our home. Our team is made up of people from Leeds, York,
              Barnsley, Rotherham, Doncaster, Sheffield and beyond. This with
              our decades of experience, gives us unique insights into what is
              happening in the Yorkshire property market. Yorkshire is on the
              rise, and so are Haus Properties, we'd love you to join us for the
              next step of our journey.
            </p>
            <Link
              to="/virtual-tours"
              className="btn btn-outline btn-primary mx-4"
            >
              Learn More
            </Link>
          </div>
          <div className="flex-1">
            <img src={VirtualImg} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
