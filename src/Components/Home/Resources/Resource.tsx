import { Link } from "react-router-dom";

const Resource = ({
  img,
  title,
  btnText,
  url,
}: {
  img: string;
  title: string;
  btnText: string;
  url?: string;
}) => {
  return (
    <div className="rounded border max-w-[340px] shadow-lg">
      <div className="h-[200px]">
        <img src={img} alt="" className="h-full w-full object-cover" />
      </div>
      <div className="p-4 flex justify-between items-center">
        <p className="font-helvetica">{title}</p>
        <Link to={url || "/"} className="btn btn-outline btn-primary">
          {btnText}
        </Link>
      </div>
    </div>
  );
};

export default Resource;
