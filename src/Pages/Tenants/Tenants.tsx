import Banner from "../../Components/Shared/Tanants-similler/Banner/Banner";
import ImgDescSec from "../../Components/Shared/Tanants-similler/ImgDescSec/ImgDescSec";
import Filter from "../../Components/Hauses/Filter/Filter";

import HouseImg from "../../assets/Images/Tanants-similler/House-door.png";
import HandImg from "../../assets/Images/Tanants-similler/Hand.png";
import ReadyToMoving from "../../Components/Shared/Tanants-similler/ReadyToMoving/ReadyToMoving";
import BottomDesc from "../../Components/Shared/Tanants-similler/BottomDesc/BottomDesc";
import { Helmet } from "react-helmet";

const Tenants = () => {
  return (
    <div>
      <Helmet>
        <title>TENANTS</title>
        {/* <meta name="description" content="Helmet application" /> */}
      </Helmet>
      <Filter />
      <Banner title="TENANTS" />
      <ImgDescSec
        title="A TENANTS GUIDE TO RENTING"
        desc="When you’re looking to rent a home, it can often feel like the pressure is on to make a quick decision or you’ll lose out. Don’t let these feelings get the best of you! It can take some careful thought and consideration to find the right place for you, so it’s worth being prepared."
        img={HouseImg}
        flexStyle="lg:flex-row"
        url="/tenants-guide-to-renting"
      />
      <ImgDescSec
        title="GUARANTORS"
        desc="In order to secure a property, we ask all tenants to submit details for credit and reference checking. If you’re unable to supply enough detail, or there is any other problem, you may be asked to supply a guarantor, who will also need to pass referencing."
        img={HandImg}
        flexStyle="lg:flex-row-reverse"
      />

      <BottomDesc
        title="READY TO GET MOVING?"
        desc="Our experienced team are ready to help you find your perfect property,
        or just answer any questions you may have about the renting process. You
        are very welcome to get intouch anytime, and we are more than happy to
        help."
      />

      <ReadyToMoving />
    </div>
  );
};

export default Tenants;
