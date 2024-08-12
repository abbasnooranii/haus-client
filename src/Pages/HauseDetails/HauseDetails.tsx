import DeskSpecification from "../../Components/HauseDetails/DeskSpecification/DeskSpecification";
import HausDescription from "../../Components/HauseDetails/HausDescription/HausDescription";
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
      <HausDescription />
    </div>
  );
};

export default HauseDetails;
