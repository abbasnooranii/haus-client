const VirtualBlogSection = ({
  title,
  desc,
  img,
}: {
  title: string;
  desc: string;
  img: string;
}) => {
  return (
    <div>
      <div className="container mx-auto px-3 flex flex-col md:flex-row gap-6 items-center my-24">
        <div className="flex-1">
          <h1 className="text-xl md:text-3xl font-roboto font-bold px-3 md:px-6 border-l-4 border-primary py-2 ">
            {title}
          </h1>
          <p className="my-3 md:my-8 px-4">{desc}</p>
        </div>
        <div className="flex-1">
          <img src={img} alt="" />
        </div>
      </div>
    </div>
  );
};

export default VirtualBlogSection;
