import Resource from "./Resource";
import BTLImg from "../../../assets/Images/Home/BTL-Investors.png";
import BuyersImg from "../../../assets/Images/Home/Buyers.png";
import SellersImg from "../../../assets/Images/Home/Sellers.png";
import LandlordsImg from "../../../assets/Images/Home/Landlords.png";
import TenetsImg from "../../../assets/Images/Home/Tenets.png";
import StudentImg from "../../../assets/Images/Home/Student.png";

const Resources = () => {
  return (
    <div className="container mx-auto px-3 my-24 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
      <Resource img={StudentImg} title="STUDENT" btnText="Visit Haus Student" />
      <Resource img={TenetsImg} title="TENANTS" btnText="Learn More" />
      <Resource img={LandlordsImg} title="LANDLORDS" btnText="Learn More" />
      <Resource img={BTLImg} title="BTL INVESTORS" btnText="Learn More" />
      <Resource img={BuyersImg} title="BUYERS" btnText="Learn More" />
      <Resource img={SellersImg} title="SELLERS" btnText="Learn More" />
    </div>
  );
};

export default Resources;
