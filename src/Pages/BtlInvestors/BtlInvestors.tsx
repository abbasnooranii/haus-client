import Banner from "../../Components/Shared/Tanants-similler/Banner/Banner";
import ImgDescSec from "../../Components/Shared/Tanants-similler/ImgDescSec/ImgDescSec";
import Filter from "../../Components/Hauses/Filter/Filter";

import HouseImg from "../../assets/Images/Tanants-similler/House-door.png";
import HandImg from "../../assets/Images/Tanants-similler/Hand.png";
import ReadyToMoving from "../../Components/Shared/Tanants-similler/ReadyToMoving/ReadyToMoving";
import BottomDesc from "../../Components/Shared/Tanants-similler/BottomDesc/BottomDesc";
import { Helmet } from "react-helmet";

const BtlInvestors = () => {
  return (
    <div>
      <Helmet>
        <title>BTL INVERTORS</title>
        {/* <meta name="description" content="Helmet application" /> */}
      </Helmet>
      <Filter />
      <Banner title="BTL INVESTORS" />
      <ImgDescSec
        title="BUYING & SELLING INVESTMENT PROPERTIES"
        desc="Whether you are a buy-to-let investor, a parent purchaser or an experienced property guru selling a large portfolio, we pride ourselves on listening to your requirements and delivering excellent customer service."
        img={HouseImg}
        flexStyle="lg:flex-row"
      />
      <ImgDescSec
        title="PROPERTY SOURCING"
        desc="We have successfully sourced investment properties for clients from 2-bedroom terraces and apartments to blocks of 27+ apartments. No matter how big or small of an investment you are looking for, we are here to help every step of the way!"
        img={HandImg}
        flexStyle="lg:flex-row-reverse"
      />

      <BottomDesc
        title="LEARN MORE ABOUT PROPERTY INVESTING IN YORKSHIRE"
        desc="If you’d like to learn about the investing process, get in touch and speak to one of our local experts. We’ve helped hundreds of people invest in Yorkshire property and we’d love to help you too."
      />

      <ReadyToMoving />
    </div>
  );
};

export default BtlInvestors;
