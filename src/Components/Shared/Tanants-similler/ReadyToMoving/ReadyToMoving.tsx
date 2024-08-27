import { FormEvent } from "react";
import { FaFacebookSquare, FaPhoneAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";
import { RiInstagramFill } from "react-icons/ri";
import useAxiosPublic from "../../../../Hooks/useAxiosPublic";
import { useMutation } from "@tanstack/react-query";
import Swal from "sweetalert2";

interface RaferFormType {
  name: string;
  email: string;
  phone_number: string;
  area: string;
  message: string;
}

const ReadyToMoving = () => {
  const axiosPublic = useAxiosPublic();

  const { mutate, isPending } = useMutation({
    mutationFn: (formData: RaferFormType) => {
      return axiosPublic.post("/send-ready-mail", formData);
    },
  });

  const handleFormSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const name = form.user_name.value;
    const email = form.email.value;
    const phone_number = form.phone_number.value;
    const area = form.area.value;
    const message = form.message.value;
    const user = { name, email, phone_number, area, message };
    if (area === "") {
      return Swal.fire({
        title: "Please choose an Area",
        icon: "error",
        timer: 1500,
      });
    }
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
  };

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
          <form className="space-y-2" onSubmit={handleFormSubmit}>
            {/* Area */}
            <select
              className="p-3 border border-gray-300 w-full"
              defaultValue=""
              name="area"
            >
              <option value="" disabled className="">
                Area
              </option>
              <option value="London">London</option>
              <option value="Tokyo">Tokyo</option>
            </select>
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
            {/* -------Message--------- */}
            <textarea
              name="message"
              id=""
              className="p-3 border border-gray-300 w-full"
              placeholder="Message"
              required
              rows={8}
            ></textarea>

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
    </div>
  );
};

export default ReadyToMoving;
