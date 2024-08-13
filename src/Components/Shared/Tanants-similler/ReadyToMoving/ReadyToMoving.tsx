import { FaFacebookSquare, FaPhoneAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";
import { RiInstagramFill } from "react-icons/ri";

const ReadyToMoving = () => {
  return (
    <div className="container mx-auto px-5">
      <div className="flex flex-col md:flex-row gap-6 md:gap-16 mt-24 mb-12">
        {/* ------Left------ */}
        <div className="md:w-1/2">
          {/* -------Haus Sales and Lettings Leeds------ */}
          <div className=" space-y-4 text-center md:text-left flex flex-col items-center md:items-start">
            <h6 className="font-helvetica mb-2">
              Haus Sales and Lettings Leeds
            </h6>
            <span className="link link-hover flex gap-3">
              <FaLocationDot size={20} />
              14 St Annes Road <br /> Headingley <br /> Leeds <br /> LS6 3NX
            </span>
            <span className="link link-hover flex items-center gap-3">
              <FaPhoneAlt size={20} />
              0113 323 1800
            </span>
            <span className="link link-hover flex items-center gap-3">
              <IoMdMail size={20} />
              headingley@haus-properties.com
            </span>
            <span className="link link-hover flex items-center gap-3 ml-6">
              <RiInstagramFill size={24} />
              <FaFacebookSquare size={24} />
            </span>
            <button className="btn btn-outline btn-primary">View Office</button>
          </div>
          {/* -------Haus Sales and Lettings Leeds------ */}
          <div className=" space-y-4 mt-6 ext-center md:text-left flex flex-col items-center md:items-start">
            <h6 className="font-helvetica mb-2">
              Haus Sales and Lettings South Yorkshire
            </h6>
            <span className="link link-hover flex gap-3">
              <FaLocationDot size={20} />
              15 Mansfield Road <br /> Rotherham <br /> S60 2DR
            </span>
            <span className="link link-hover flex items-center gap-3">
              <FaPhoneAlt size={20} />
              01226 414 115
            </span>
            <span className="link link-hover flex items-center gap-3">
              <FaPhoneAlt size={20} />
              01709 278 100
            </span>
            <span className="link link-hover flex items-center gap-3">
              <IoMdMail size={20} />
              southyorkshire@haus-properties.com
            </span>
            <span className="link link-hover flex items-center gap-3 ml-6">
              <RiInstagramFill size={24} />
              <FaFacebookSquare size={24} />
            </span>
            <button className="btn btn-outline btn-primary">View Office</button>
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
    </div>
  );
};

export default ReadyToMoving;
