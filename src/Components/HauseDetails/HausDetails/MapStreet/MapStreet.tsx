import { PropertyType } from "../../../../types/PropertyType";

const MapStreet = ({ property }: { property: PropertyType | undefined }) => {
  // console.log(
  //   `https://www.google.com/maps?q=${encodeURIComponent(
  //     property?.DISPLAY_ADDRESS || ""
  //   )}}`
  // );
  return (
    <div className="my-12 border border-gray-200 p-6 md:p-10">
      <div style={{ width: "100%", height: "500px" }}>
        <iframe
          width="100%"
          height="100%"
          style={{ border: "0" }}
          loading="lazy"
          allowFullScreen
          // src={`https://www.google.com/maps?q=https://www.google.com/maps?q=1600+Amphitheatre+Parkway,+Mountain+View,+CA&output=embed`}
          src={`https://www.google.com/maps?q=${property?.DISPLAY_ADDRESS.split(
            " "
          ).join("+")}&output=embed`}
        ></iframe>
      </div>
    </div>
  );
};

export default MapStreet;
