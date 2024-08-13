import HandImg from "../../../../assets/Images/Tanants-similler/Hand.png";

const ArticleCard = () => {
  return (
    <div className="rounded-md overflow-hidden border shadow-md">
      <div className="h-[280px]">
        <img src={HandImg} alt="" className="h-full object-cover" />
      </div>
      <div className="p-6 flex flex-col items-center gap-6">
        <h4 className="text-lg text-center font-roboto font-bold">
          {" "}
          A TENANT’S GUIDE TO RENTING{" "}
        </h4>
        <button className="btn btn-primary btn-outline mx-auto">
          Learn More
        </button>
      </div>
    </div>
  );
};

export default ArticleCard;
