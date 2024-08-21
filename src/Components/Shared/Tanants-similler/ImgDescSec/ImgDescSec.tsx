import { Link } from "react-router-dom";

const ImgDescSec = ({
  title,
  img,
  desc,
  flexStyle,
  url,
}: {
  title: string;
  img: string;
  desc: string;
  flexStyle: string;
  url?: string;
}) => {
  return (
    <div
      className={`container mx-auto px-5 flex flex-col items-center ${flexStyle} gap-6 md:gap-12 my-24`}
    >
      <h1 className="text-xl font-roboto font-bold text-center md:hidden">
        {title}
      </h1>
      {/* ------Image---- */}
      <div className="md:min-w-[540px] rounded overflow-hidden">
        <img src={img} alt="" className="" />
      </div>
      {/* -------Description--------- */}
      <div className="flex flex-col items-center md:items-start">
        <h1 className="md:text-3xl font-roboto font-bold hidden md:block">
          {title}
        </h1>
        <p className="mb-6 md:my-6 text-center md:text-left">{desc}</p>
        <Link to={url || "/"} className="btn btn-outline btn-primary">
          Learn More
        </Link>
      </div>
    </div>
  );
};

export default ImgDescSec;
