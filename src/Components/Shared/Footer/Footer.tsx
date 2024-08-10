import { FaFacebookSquare, FaPhoneAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";
import { RiInstagramFill } from "react-icons/ri";
import hausStudentImg from "../../../assets/Images/haus_student.png";

const Footer = () => {
  return (
    <footer className="px-6 py-16 md:py-24 bg-lightPrimary text-textBlack">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-20 md:gap-12">
          {/* 1st Column */}
          <nav className="space-y-3 flex flex-col items-center lg:items-start *:text-center *:lg:text-left">
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
          </nav>
          {/* 2nd Column */}
          <nav className="space-y-3 flex flex-col items-center lg:items-start *:text-center *:lg:text-left">
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
          </nav>
          {/* 3rd Column */}
          <nav className="space-y-3 flex flex-col items-center lg:items-start *:text-center *:lg:text-left">
            <h6 className="font-helvetica mb-2">
              Haus Sales and Lettings Leeds
            </h6>
            <p>
              Haus Student has grown up and moved out on its own. We&apos;re
              still a family, they just have their own place now.
            </p>
            <span className="link link-hover">
              <img src={hausStudentImg} alt="" width={120} />
            </span>
          </nav>
        </div>
        <div className="flex flex-col md:flex-row items-center md:items-start md:justify-between mt-6">
          <span className="font-medium">
            Copyright © 2021 Haus All Rights Reserved
          </span>
          <a href="#" className="font-bold text-secondary">
            Privacy Policy
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
