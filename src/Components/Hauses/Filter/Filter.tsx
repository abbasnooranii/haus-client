import DesktopFilter from "./DesktopFilter";
import MobileFilter from "./MobileFilter";

const Filter = ({ refetchProperties }: { refetchProperties?: () => void }) => {
  return (
    <div className="mt-12">
      <DesktopFilter refetchProperties={refetchProperties} />
      <MobileFilter refetchProperties={refetchProperties} />
    </div>
  );
};

export default Filter;
