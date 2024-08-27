import Banner from "../../Components/Shared/Tanants-similler/Banner/Banner";
import ImgDescSec from "../../Components/Shared/Tanants-similler/ImgDescSec/ImgDescSec";
import Filter from "../../Components/Hauses/Filter/Filter";

import HouseImg from "../../assets/Images/Tanants-similler/House-door.png";
import HandImg from "../../assets/Images/Tanants-similler/Hand.png";
import GetPropertyValued from "../../Components/Shared/Tanants-similler/GetPropertyValued/GetPropertyValued";
import { Helmet } from "react-helmet";
const Sellers = () => {
  return (
    <div>
      <Helmet>
        <title>SELLERS</title>
        {/* <meta name="description" content="Helmet application" /> */}
      </Helmet>
      <Filter />
      <Banner title="SELLERS" />
      <GetPropertyValued
        title="GET YOUR PROPERTY VALUED BY A LOCAL EXPERT"
        desc="If you are ready to sell your house or you’re just interested in knowing what it might be worth; click on our instant valuation tool to get the information you need in moments. If you are looking for a more accurate and in-depth valuation, then feel free to give us a call and we’ll come out to see you."
      />
      <ImgDescSec
        title="CONVEYANCING"
        desc="We understand that your priority will be to finalise your sale as quickly and efficiently as possible, with as little uncertainty as possible. To achieve this, you will need a solicitor who is highly experienced within the field, and is great at communicating with clients, every step of the way."
        img={HouseImg}
        flexStyle="lg:flex-row"
      />
      <ImgDescSec
        title="THE COMPLETE GUIDE TO SELLING YOUR HOUSE"
        desc="Haus are specialists in letting of quality residential property and offer an outstanding service for all types of landlords. From first-time landlords with one or two properties to experienced landlords with large investment portfolios."
        img={HandImg}
        flexStyle="lg:flex-row-reverse"
      />
      <ImgDescSec
        title="LEGAL"
        desc="When you’re looking to rent a home, it can often feel like the pressure is on to make a quick decision or you’ll lose out. Don’t let these feelings get the best of you! It can take some careful thought and consideration to find the right place for you, so it’s worth being prepared."
        img={HouseImg}
        flexStyle="lg:flex-row"
      />
      <ImgDescSec
        title="TIPS FOR SELLING"
        desc="When you’re selling your house, you want to get the most you can and get it sold as quickly as you can. Here are 19 simple tips to guarantee you get a speedy and profitable sale!"
        img={HandImg}
        flexStyle="lg:flex-row-reverse"
      />
      <ImgDescSec
        title="WHAT TYPE OF SELLER ARE YOU?"
        desc="There are lots of different reasons for choosing to sell your home which can impact the sales process and how we approach it together. Now, we’re always going to give you the highest standard of..."
        img={HouseImg}
        flexStyle="lg:flex-row"
      />
      <ImgDescSec
        title="MORTGAGE & PROTECTION"
        desc="At Haus we are proud to recommend Adam and AP Mortgage Solutions; they continually demonstrate their superior expertise in financial services with an ability to deal with everything from simple issues to incredibly complex cases."
        img={HandImg}
        flexStyle="lg:flex-row-reverse"
      />
      <ImgDescSec
        title="WHY HAUS?"
        desc="You want to sell your house for the most money you can in the shortest amount of time possible. To do this you need to hire an agency with a proven track record and a great reputation. That’s us..."
        img={HouseImg}
        flexStyle="lg:flex-row"
      />
    </div>
  );
};

export default Sellers;
