import { FaPhoneAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";

const GetInTouch = () => {
  const mapSrc =
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2241.6307172849724!2d-1.5824484129825174!3d53.82343573675745!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48795937ed339b51%3A0x381bb43bb411c52c!2s14%20St.Annes%20Rd%2C%20Headingley%2C%20Leeds%20LS6%203NX%2C%20UK!5e1!3m2!1sen!2sbd!4v1723463896135!5m2!1sen!2sbd";

  return (
    <div className="container mx-auto px-5 flex flex-col md:flex-row gap-6 md:gap-16 mt-24 mb-12">
      {/* ------Left------ */}
      <div className="md:w-1/2 space-y-4">
        <h1 className="text-lg md:text-2xl font-helvetica">GET IN TOUCH</h1>
        <span className="link link-hover flex gap-3">
          <FaLocationDot size={20} />
          14 St Annes Road Headingley Leeds LS6 3NX
        </span>
        <span className="link link-hover flex items-center gap-3">
          <FaPhoneAlt size={20} />
          0113 323 1800
        </span>
        <span className="link link-hover flex items-center gap-3">
          <IoMdMail size={20} />
          headingley@haus-properties.com
        </span>
        <div style={{ width: "100%", height: "350px" }}>
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
      {/* ------Right----- */}
      <div className="md:w-1/2">
        <div className="space-y-2">
          {/* ----Name---- */}
          <input
            type="text"
            placeholder="Name"
            className="p-3 border border-gray-300 w-full"
          />
          {/* ----Email---- */}
          <input
            type="text"
            placeholder="Email"
            className="p-3 border border-gray-300 w-full"
          />
          {/* ----Phone Number---- */}
          <input
            type="text"
            placeholder="Phone Number"
            className="p-3 border border-gray-300 w-full"
          />
          {/* ----Property ID---- */}
          <input
            type="text"
            placeholder="Property ID - 151_1748r"
            className="p-3 border border-gray-300 w-full"
          />
          {/* -------Message--------- */}
          <textarea
            name="message"
            id=""
            className="p-3 border border-gray-300 w-full"
            placeholder="Message"
            rows={8}
          ></textarea>

          <button className="btn btn-primary w-full rounded-none btn-filled">
            GET BACK TO ME!
          </button>
        </div>
      </div>
    </div>
  );
};

export default GetInTouch;
