import LearnAboutHausImg from "../../../assets/Images/ContactUs/LearnAboutHaus.png";

const LearnAboutHaus = () => {
  return (
    <div className="container mx-auto px-3 flex flex-col md:flex-row gap-6 items-center mt-24">
      <div className="flex-1">
        <h1 className="text-xl md:text-3xl font-roboto font-bold mb-3 md:mb-8">
          LEARN ABOUT HAUS
        </h1>
        <p>
          If your are considering renting your student property, or perhaps
          looking to expand your exisiting property portfolio or are interested
          in investing in buy-to-let for the first time, our Haus Student team
          can help! Looking for a your next student home? Our friendly team of
          local student property experts are here to help find your perfect
          haus. Moving home as a student can be quiet daunting, we are on hand
          to help you every step of the way from viewing multiple properties and
          choosing the perfect haus through understanding the paperwork and
          completing everything needed for you to move in. We can even assist
          with bills by offering one of our competitive bills included
          packages..
        </p>
      </div>
      <div className="flex-1">
        <img src={LearnAboutHausImg} alt="" />
      </div>
    </div>
  );
};

export default LearnAboutHaus;
