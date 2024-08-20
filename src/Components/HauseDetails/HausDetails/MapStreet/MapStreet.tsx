const MapStreet = () => {
  const mapSrc =
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2241.6307172849724!2d-1.5824484129825174!3d53.82343573675745!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48795937ed339b51%3A0x381bb43bb411c52c!2s14%20St.Annes%20Rd%2C%20Headingley%2C%20Leeds%20LS6%203NX%2C%20UK!5e1!3m2!1sen!2sbd!4v1723463896135!5m2!1sen!2sbd";

  // const baseUrl = "https://www.google.com/maps/embed/v1/place";
  // const apiKey = "AIzaSyDBBntYv6r6c-BcE9RLnc-tbcx-5jKFuMU"; // Replace with your Google Maps API key
  // const mapSrc = `${baseUrl}?key=${apiKey}&q=${encodeURIComponent(
  //   "14 St.Annes Rd, Headingley, Leeds LS6 3NX, UK"
  // )}`;

  return (
    <div className="my-12 border border-gray-200 p-6 md:p-10">
      <div style={{ width: "100%", height: "500px" }}>
        <iframe
          src={mapSrc}
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
        />
      </div>
    </div>
  );
};

export default MapStreet;
