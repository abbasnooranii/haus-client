type detailsType = {
  id: number;
  name: string;
  designation: string;
  img: string;
  about: string;
};
const MemberDetails = ({ name, designation, img, about }: detailsType) => {
  return (
    <div className="flex flex-col md:flex-row gap-6 md:items-center my-24">
      <div className="flex-1 rounded overflow-hidden flex justify-center">
        <img src={img} alt="" className="object-cover" />
      </div>
      <div className="flex-1 space-y-6">
        <h2 className="text-xl md:text-3xl font-roboto font-semibold px-3 md:px-6 border-l-4 border-primary py-2">
          {name}
        </h2>
        <span className="pl-4"> {designation}</span>
        <p className="pl-3">{about}</p>
      </div>
    </div>
  );
};

export default MemberDetails;
