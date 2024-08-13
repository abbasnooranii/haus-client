import ServicesAvailableImg from "../../../assets/Images/ContactUs/ServicesAvailable.png";
const ServicesAvailable = () => {
  return (
    <div className="container mx-auto px-3 flex flex-col-reverse md:flex-row gap-6 md:items-center mb-24 mt-6 md:mt-6">
      <div className="flex-1 rounded overflow-hidden">
        <img src={ServicesAvailableImg} alt="" />
      </div>
      <div className="flex-1">
        <h1 className="text-xl md:text-3xl font-roboto font-bold mb-3 md:mb-8">
          SERVICES AVAILABLE
        </h1>
        <ul className="space-y-6">
          <li className="font-roboto px-3 md:px-3 border-l-4 border-primary">
            Renting
          </li>
          <li className="font-roboto px-3 md:px-3 border-l-4 border-primary">
            Student Lettings
          </li>
          <li className="font-roboto px-3 md:px-3 border-l-4 border-primary">
            Student Property Sourcing
          </li>
          <li className="font-roboto px-3 md:px-3 border-l-4 border-primary">
            Student Property Management
          </li>
          <li className="font-roboto px-3 md:px-3 border-l-4 border-primary">
            Student Portfolio Health Checks
          </li>
          <li className="font-roboto px-3 md:px-3 border-l-4 border-primary">
            Bills Included Packages
          </li>
          <li className="font-roboto px-3 md:px-3 border-l-4 border-primary">
            Mortgage & Protection
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ServicesAvailable;
