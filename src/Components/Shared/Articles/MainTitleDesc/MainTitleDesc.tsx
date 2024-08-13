const MainTitleDesc = ({ title, desc }: { title: string; desc: string }) => {
  return (
    <div className="container mx-auto my-12 space-y-3">
      <h2 className="text-xl md:text-3xl font-roboto font-semibold px-3 md:px-6 border-l-4 border-white py-2">
        {title}
      </h2>
      <p className="px-3 md:px-6">{desc}</p>
    </div>
  );
};

export default MainTitleDesc;
