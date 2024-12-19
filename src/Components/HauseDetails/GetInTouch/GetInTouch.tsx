import { FaPhoneAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";
import { useMutation } from "@tanstack/react-query";
import { FormEvent, useState } from "react";
import Swal from "sweetalert2";
import ReCAPTCHA from 'react-google-recaptcha';

interface RaferFormType {
  name: string;
  email: string;
  phone_number: string;
  property_id: string;
  message: string;
}

const GetInTouch = () => {
  const axiosPublic = useAxiosPublic();

  const [captchaToken, setCaptchaToken] = useState(null);
  const RECAPTCHA_SITE_KEY = '6Le9cwUTAAAAAGqeh8mx3y-siDLL6G3RW--fZeQn';
  const { mutate, isPending } = useMutation({
    mutationFn: (formData: RaferFormType) => {
      return axiosPublic.post("/send-touch-mail", formData);
    },
  });

  const handleCaptchaChange = (token: any) => {
    setCaptchaToken(token);
  };

  const handleFormSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // if (!captchaToken) {
    //   alert('Please complete the CAPTCHA!');
    //   return;
    // }
    const form = e.currentTarget;
    const name = form.user_name.value;
    const email = form.email.value;
    const phone_number = form.phone_number.value;
    const property_id = form.property_id.value;
    const message = form.message.value;
    const user = { name, email, phone_number, property_id, message };
    mutate(user, {
      onSuccess: () => {
        Swal.fire({
          icon: "success",
          title: "Email sent successfully",
          timer: 1500,
        });
        form.reset();
      },
      onError: (error) => {
        Swal.fire({
          icon: "error",
          title: "There was an error",
          text: "Please check the console",
          timer: 1500,
        });
        console.log(error);
      },
    });
    setCaptchaToken(null);
  };

  const mapSrc =
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2241.6307172849724!2d-1.5824484129825174!3d53.82343573675745!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48795937ed339b51%3A0x381bb43bb411c52c!2s14%20St.Annes%20Rd%2C%20Headingley%2C%20Leeds%20LS6%203NX%2C%20UK!5e1!3m2!1sen!2sbd!4v1723463896135!5m2!1sen!2sbd";

  return (
    <div className="container mx-auto px-5 flex flex-col md:flex-row gap-6 md:gap-16 mt-24 mb-12">
      {/* ------Left------ */}
      <div className="md:w-1/2 space-y-4">
        <h1 className="text-xl md:text-3xl font-bold ">GET IN TOUCH</h1>
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
        <form className="space-y-2" onSubmit={handleFormSubmit}>
          {/* ----Name---- */}
          <input
            type="text"
            placeholder="Name"
            name="user_name"
            required
            className="p-3 border border-gray-300 w-full"
          />
          {/* ----Email---- */}
          <input
            type="text"
            placeholder="Email"
            name="email"
            required
            className="p-3 border border-gray-300 w-full"
          />
          {/* ----Phone Number---- */}
          <input
            type="text"
            placeholder="Phone Number"
            name="phone_number"
            required
            className="p-3 border border-gray-300 w-full"
          />
          {/* ----Property ID---- */}
          <input
            type="text"
            placeholder="Property ID - 151_1748r"
            name="property_id"
            required
            className="p-3 border border-gray-300 w-full"
          />
          {/* -------Message--------- */}
          <textarea
            name="message"
            id=""
            className="p-3 border border-gray-300 w-full"
            placeholder="Message"
            required
            rows={8}
          ></textarea>
          <ReCAPTCHA
            sitekey={RECAPTCHA_SITE_KEY}
            onChange={handleCaptchaChange}
            onExpired={() => setCaptchaToken(null)} // Reset on expiration
          />
          <button
            type="submit"
            className="btn btn-primary w-full rounded-none btn-filled"
            disabled={isPending}
          >
            {isPending ? (
              <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-gray-900"></div>
            ) : (
              "GET BACK TO ME!"
            )}
          </button>
        </form>
      </div>
    </div>
  );
};

export default GetInTouch;
