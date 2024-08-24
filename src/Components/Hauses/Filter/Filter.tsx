import DesktopFilter from "./DesktopFilter";
import MobileFilter from "./MobileFilter";

const Filter = ({
  refetchProperties,
  refetchPageCount,
}: {
  refetchProperties?: () => void;
  refetchPageCount?: () => void;
}) => {
  const handleSearch = () => {
    if (refetchPageCount && refetchProperties) {
      refetchProperties();
      refetchPageCount();
    }
  };

  return (
    <div className="mt-12">
      <DesktopFilter handleSearch={handleSearch} />
      <MobileFilter handleSearch={handleSearch} />
    </div>
  );
};

export default Filter;
