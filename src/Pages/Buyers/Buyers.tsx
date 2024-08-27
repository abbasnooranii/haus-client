import Banner from "../../Components/Shared/Tanants-similler/Banner/Banner";
import ImgDescSec from "../../Components/Shared/Tanants-similler/ImgDescSec/ImgDescSec";
import Filter from "../../Components/Hauses/Filter/Filter";

import HouseImg from "../../assets/Images/Tanants-similler/House-door.png";
import HandImg from "../../assets/Images/Tanants-similler/Hand.png";
import ReadyToMoving from "../../Components/Shared/Tanants-similler/ReadyToMoving/ReadyToMoving";
import BottomDesc from "../../Components/Shared/Tanants-similler/BottomDesc/BottomDesc";
import { Helmet } from "react-helmet";
const Buyers = () => {
  return (
    <div>
      <Helmet>
        <title>BUYERS</title>
        {/* <meta name="description" content="Helmet application" /> */}
      </Helmet>
      <Filter />
      <Banner title="BUYERS" />
      <ImgDescSec
        title="BUYING GUIDE"
        desc="Buying a property can be confusing and incredibly stressful. If it’s your first time buying a house then you might feel totally lost, if it’s not your first time then it’s probably been a while since your last purchase and if you are a property developer..."
        img={HouseImg}
        flexStyle="lg:flex-row"
      />
      <ImgDescSec
        title="CONVEYANCING"
        desc="This is the legal process of your solicitor carrying out the statutory checks required for the property and the land you are purchasing. It is crucial to choose a solicitor who is thorough and efficient."
        img={HandImg}
        flexStyle="lg:flex-row-reverse"
      />
      <ImgDescSec
        title="MORTGAGES & PROTECTIONS"
        desc="Making sure your finances are all in order before you purchase your property is an integral part of the process. In fact, you need to make sure they’re all in order before you even start looking for your new house."
        img={HouseImg}
        flexStyle="lg:flex-row"
      />

      <BottomDesc
        title="STILL HAVE QUESTIONS ABOUT BUYING A HOUSE IN YORKSHIRE?"
        desc="When it comes to buying a house, there really are no such things as silly questions. This is a big decision and we’re more than happy to answer any questions to help you make the right one."
      />

      <ReadyToMoving />
    </div>
  );
};

export default Buyers;
