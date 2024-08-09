import DesktopNav from "./DesktopNav";
import MobileNav from "./MobileNav";

const Navbar = () => {
  return (
    <div className="container mx-auto">
      <DesktopNav />
      <MobileNav />
    </div>
  );
};

export default Navbar;
