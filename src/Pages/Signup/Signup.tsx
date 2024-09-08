import { useMutation } from "@tanstack/react-query";
import { FormEvent } from "react";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import { AxiosError } from "axios";
import useAuth from "../../Hooks/useAuth";

type UserType = {
  title: string;
  name: string;
  email: string;
  current_setuation: string;
  alerts: string;
};

const Signup = () => {
  const axiosPublic = useAxiosPublic();
  const navigate = useNavigate();
  const Auth = useAuth();

  const { mutate, isPending } = useMutation({
    mutationFn: (data: UserType) => {
      return axiosPublic.post("/auth/signup", data);
    },
  });

  const handleSignin = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const title = form.acc_title.value;
    const name = form.full_name.value;
    const email = form.email.value;
    const password = form.password.value;
    const confirm_password = form.confirm_password.value;
    const current_setuation = form.current_setuation.value;
    const alerts = form.alerts.value;
    if (password !== confirm_password) {
      return Swal.fire({
        icon: "error",
        title: "Password and Confirm Password didn't match",
      });
    }
    try {
      await Auth?.createAccount(email, password);
      await Auth?.updateAccount(name);

      const user = {
        title,
        name,
        email,
        current_setuation,
        alerts,
      };
      mutate(user, {
        onSuccess: (data) => {
          Swal.fire({
            icon: "success",
            title: data.data.message,
          });
          navigate("/");
        },
        onError: (err) => {
          console.log(err);
          if (err instanceof AxiosError) {
            Swal.fire({
              icon: "error",
              title: err.response?.data.message,
            });
          }
        },
      });
      // const { data: userData } = await axiosPublic.post("/auth/signup", user);
      // console.log(userData);
      // if (userData.insertedId) {
      //   Swal.fire({
      //     // position: "top-end",
      //     icon: "success",
      //     title: "User created successfully.",
      //     showConfirmButton: false,
      //     timer: 1500,
      //   });
      // }
    } catch (error) {
      console.log(error);
      if (error instanceof Error) {
        Swal.fire({
          title: error.message,
          icon: "error",
        });
      } else {
        Swal.fire({
          title: "An unknown error occurred",
          icon: "error",
        });
      }
    } finally {
      Auth?.setLoading(false);
    }
  };

  return (
    <main>
      <div className="container mx-auto">
        <div className="max-w-[400px] mx-auto md:max-w-[500px] md:w-[500px] w-full my-6 md:my-24 px-9 py-12 border border-gray-400 rounded space-y-4">
          <h1 className="text-2xl md:text-4xl font-bold text-center md:leading-[3.8rem]">
            CREATE ACCOUNT
          </h1>

          <form onSubmit={handleSignin} className="space-y-4">
            <div className="space-y-2">
              {/* Title */}
              <input
                className="input input-bordered w-full"
                type="text"
                placeholder="Title"
                required
                name="acc_title"
              />
              {/* Name */}
              <input
                className="input input-bordered w-full"
                type="text"
                placeholder="Full Name"
                required
                name="full_name"
              />
              {/* Email */}
              <input
                className="input input-bordered w-full"
                type="email"
                placeholder="Email"
                required
                name="email"
              />
              {/* Password */}
              <input
                className="input input-bordered w-full"
                type="password"
                placeholder="Password"
                required
                name="password"
              />
              {/* Confirm Password */}
              <input
                className="input input-bordered w-full"
                type="password"
                placeholder="Confirm Password"
                required
                name="confirm_password"
              />
              {/* Current Setuation */}
              <select
                name="current_setuation"
                className="select select-bordered w-full"
                defaultValue=""
              >
                <option disabled value="">
                  Current Setuation
                </option>
                <option value="Looking for student rentals">
                  Looking for student rentals
                </option>
                <option value="Looking for professional rentals">
                  Looking for professional rentals
                </option>
                <option value="Looking to rent with property to sell">
                  Looking to rent with property to sell
                </option>
                <option value="1st time buyer">1st time buyer</option>
                <option value="Buy to let buyers/investors">
                  Buy to let buyers/investors
                </option>
                <option value="Buy with property to sell">
                  Buy with property to sell
                </option>
              </select>
              {/* Alerts */}
              <select
                name="alerts"
                className="select select-bordered w-full"
                defaultValue=""
              >
                <option disabled value={""}>
                  Alerts
                </option>
                <option value="Immediately on property price reductions">
                  Immediately on property price reductions
                </option>
                <option value="Weekly on property price reductions">
                  Weekly on property price reductions
                </option>
                <option value="Monthly on property price reductions">
                  Monthly on property price reductions
                </option>
                <option value="Never">Never</option>
              </select>

              <button
                className="btn btn-primary btn-filled w-full"
                type="submit"
                disabled={isPending || Auth?.loading}
              >
                {isPending || Auth?.loading ? (
                  <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-gray-900"></div>
                ) : (
                  "Sign Up"
                )}
              </button>
              <p className="text-xs">
                Already have an account?
                <Link to="/signin" className="text-primary">
                  Sign In
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </main>
  );
};

export default Signup;
