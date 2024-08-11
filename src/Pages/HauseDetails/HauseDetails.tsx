import Images from "../../Components/HauseDetails/Images/Images";
import MobileSpecification from "../../Components/HauseDetails/MobileSpecification/MobileSpecification";
import Filter from "../../Components/Hauses/Filter/Filter";

const HauseDetails = () => {
  return (
    <div>
      <Filter />
      <MobileSpecification />
      <Images />
    </div>
  );
};

export default HauseDetails;
