import { FormEvent } from "react";
import FirstRow from "../../Components/ReferFriend/FirstRow/FirstRow";
import SecoundRow from "../../Components/ReferFriend/SecoundRow/SecoundRow";
import ResponsiveBanner from "../../Components/Shared/Tanants-similler/Banner/ResponsiveBanner";
import Swal from "sweetalert2";
import { useMutation } from "@tanstack/react-query";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import { Helmet } from "react-helmet";

interface RaferFormType {
  which_area: string;
  landlord_or_seller: string;
  student_or_not: string;
  owner_name: string;
  owner_phone: string;
  owner_email: string;
  owner_address: string;
  user_name: string;
  user_phone: string;
  user_email: string;
  user_address: string;
}

const ReferFriend = () => {
  const axiosPublic = useAxiosPublic();

  const { mutate, isPending } = useMutation({
    mutationFn: (formData: RaferFormType) => {
      return axiosPublic.post("/send-rafer-mail", formData);
    },
  });

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const which_area = form.which_area.value;
    const landlord_or_seller = form.landlord_or_seller.value;
    const student_or_not = form.student_or_not.value;
    const owner_name = form.owner_name.value;
    const owner_phone = form.owner_phone.value;
    const owner_email = form.owner_email.value;
    const owner_address = form.owner_address.value;
    const user_name = form.user_name.value;
    const user_phone = form.user_phone.value;
    const user_email = form.user_email.value;
    const user_address = form.user_address.value;

    const reqBody = {
      which_area,
      landlord_or_seller,
      student_or_not,
      owner_name,
      owner_phone,
      owner_email,
      owner_address,
      user_name,
      user_phone,
      user_email,
      user_address,
    };
    if (
      which_area === "" ||
      landlord_or_seller === "" ||
      student_or_not === ""
    ) {
      return Swal.fire({
        title: "Please fill all the Property Details fields",
        icon: "error",
        timer: 1500,
      });
    }
    mutate(reqBody, {
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
    <div>
      <Helmet>
        <title>REFER A FRIEND</title>
        {/* <meta name="description" content="Helmet application" /> */}
      </Helmet>
      <ResponsiveBanner title="REFER A FRIEND" />
      <form onSubmit={handleSubmit}>
        <FirstRow />
        <SecoundRow isPending={isPending} />
      </form>
    </div>
  );
};

export default ReferFriend;
