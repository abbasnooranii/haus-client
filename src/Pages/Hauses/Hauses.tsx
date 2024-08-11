import Controller from "../../Components/Hauses/Controller/Controller";
import Filter from "../../Components/Hauses/Filter/Filter";
import Haus from "../../Components/Hauses/Haus/Haus";

const Hauses = () => {
  return (
    <div className="">
      <Filter />
      <Controller />
      {/*---------- Hauses -----------*/}
      <div className="container mx-auto px-3 my-12 space-y-3">
        <Haus />
        <Haus />
        <Haus />
        <Haus />
      </div>
    </div>
  );
};

export default Hauses;
