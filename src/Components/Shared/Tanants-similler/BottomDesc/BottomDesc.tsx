const BottomDesc = ({ title, desc }: { title: string; desc: string }) => {
  return (
    <div className="container mx-auto px-3">
      <div className="max-w-[640px] mx-auto">
        <h1 className="text-xl md:text-3xl font-roboto font-bold text-center">
          {title}
        </h1>
        <p className="text-center max-w-[540px] mx-auto my-6">{desc}</p>
      </div>
    </div>
  );
};

export default BottomDesc;
