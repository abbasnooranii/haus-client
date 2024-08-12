import DeskSpecification from "../../Components/HauseDetails/DeskSpecification/DeskSpecification";
import HausDetails from "../../Components/HauseDetails/HausDetails/HausDetails";
import Images from "../../Components/HauseDetails/Images/Images";
import MobileSpecification from "../../Components/HauseDetails/MobileSpecification/MobileSpecification";
import Filter from "../../Components/Hauses/Filter/Filter";

const HauseDetails = () => {
  return (
    <div>
      <Filter />
      <MobileSpecification />
      <Images />
      <DeskSpecification />
      <HausDetails />
    </div>
  );
};

export default HauseDetails;
