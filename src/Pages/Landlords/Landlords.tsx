import Banner from "../../Components/Shared/Tanants-similler/Banner/Banner";
import ImgDescSec from "../../Components/Shared/Tanants-similler/ImgDescSec/ImgDescSec";
import Filter from "../../Components/Hauses/Filter/Filter";

import HouseImg from "../../assets/Images/Tanants-similler/House-door.png";
import HandImg from "../../assets/Images/Tanants-similler/Hand.png";
import GetPropertyValued from "../../Components/Shared/Tanants-similler/GetPropertyValued/GetPropertyValued";
import { Helmet } from "react-helmet";

const Landlords = () => {
  return (
    <div>
      <Helmet>
        <title>LANDLORDS</title>
        {/* <meta name="description" content="Helmet application" /> */}
      </Helmet>
      <Filter />
      <Banner title="LANDLORDS" />
      <GetPropertyValued
        title="GET YOUR PROPERTY VALUED BY A LOCAL EXPERT"
        desc="Are you looking to get your rental property valued by a local
            expert? Arranging a valuation couldn't get easier. For an accurate
            and in-depth valuation from one of our expert valuers, please call
            your local branch or use the online booking tool."
      />
      <ImgDescSec
        title="LETTINGS PROPERTY MANAGEMENT"
        desc="The Landlord and Tenant Act 1985 requires you as a landlord to maintain the structure of the building, the sanitation and the supply of services. In addition, you would be expected within the terms of the tenancy agreement to replace or repair any items..."
        img={HouseImg}
        flexStyle="lg:flex-row"
      />
      <ImgDescSec
        title="RESIDENTIAL LETTINGS"
        desc="Haus are specialists in letting of quality residential property and offer an outstanding service for all types of landlords. From first-time landlords with one or two properties to experienced landlords with large investment portfolios."
        img={HandImg}
        flexStyle="lg:flex-row-reverse"
      />
      <ImgDescSec
        title="SAFETY REGULATIONS & RESPONSIBILITIES"
        desc="When you’re looking to rent a home, it can often feel like the pressure is on to make a quick decision or you’ll lose out. Don’t let these feelings get the best of you! It can take some careful thought and consideration to find the right place for you, so it’s worth being prepared."
        img={HouseImg}
        flexStyle="lg:flex-row"
      />
      <ImgDescSec
        title="STUDENT LETTINGS"
        desc="With over 20-years of experience in the Leeds student market, at Haus we pride ourselves on being the student lettings experts. We understand the nuances of the market and move with the ever-changing times to ensure we remain industry leaders in student lettings."
        img={HandImg}
        flexStyle="lg:flex-row-reverse"
      />
      <ImgDescSec
        title="WHY USE AN AGENT?"
        desc="You may have considered not using an agent and letting on managing the property yourself. Here is why we recommend using an agent..."
        img={HandImg}
        flexStyle="lg:flex-row"
      />
    </div>
  );
};

export default Landlords;
