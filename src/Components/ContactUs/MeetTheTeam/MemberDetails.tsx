import CholeBigImg from "../../../assets/Images/ContactUs/Chole_big.png";

const MemberDetails = () => {
  return (
    <div className="flex flex-col md:flex-row gap-6 md:items-center my-24">
      <div className="flex-1 rounded overflow-hidden flex justify-center">
        <img src={CholeBigImg} alt="" />
      </div>
      <div className="flex-1 space-y-6">
        <h2 className="text-xl md:text-3xl font-roboto font-semibold px-3 md:px-6 border-l-4 border-primary py-2">
          CHLOE RHODES
        </h2>
        <span className="pl-4"> Head of Haus Sales & Lettings</span>
        <p className="pl-3">
          I joined Haus Sales + Lettings in December 2017 following many years
          working for well- known corporate estate agents in both North and West
          Yorkshire. I am level 3 qualified in letting and property management
          (ARLA) after successfully completing (and passing) 4 industry exams. I
          have vast experience as an estate agent, especially in residential
          investment and development. Always here to help be it, property
          sourcing for investors, portfolio advice, valuations or everything
          between/behind the scenes. Every one of our team members has years of
          experience in the West Yorkshire property market and are committed to
          giving our customers the best service. Our team is great and I'm proud
          of what we've all achieved together. When I am not in the office you
          will usually find me on a long country walk or out for dinner with
          family and friends.
        </p>
      </div>
    </div>
  );
};

export default MemberDetails;
