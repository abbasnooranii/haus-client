import { FormEvent } from "react";
import { Link } from "react-router-dom";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import { useMutation } from "@tanstack/react-query";
import Swal from "sweetalert2";
import { AxiosError } from "axios";
import useAuth from "../../Hooks/useAuth";

type UserType = {
  email: string;
  password: string;
};

const Signin = () => {
  const axiosPublic = useAxiosPublic();
  const Auth = useAuth();

  const { mutate, isPending } = useMutation({
    mutationFn: (data: UserType) => {
      return axiosPublic.post("/auth/signin", data);
    },
  });

  const handleSignin = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;

    const email = form.email.value;
    const password = form.password.value;

    const user = {
      email,
      password,
    };

    mutate(user, {
      onSuccess: (data) => {
        Swal.fire({
          icon: "success",
          title: data.data.message,
        });
        Auth?.setUser(data.data.user);
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
  };
  return (
    <main>
      <div className="container mx-auto">
        <div className="max-w-[400px] mx-auto md:max-w-[500px] md:w-[500px] w-full my-6 md:my-24 px-9 py-12 border border-gray-400 rounded space-y-4">
          <h1 className="text-2xl md:text-4xl font-bold text-center md:leading-[3.8rem]">
            SIGN IN
          </h1>

          <form onSubmit={handleSignin} className="space-y-4">
            <div className="space-y-2">
              <input
                className="input input-bordered w-full"
                type="email"
                placeholder="Email"
                required
                name="email"
              />
              <div>
                <input
                  className="input input-bordered w-full"
                  type="password"
                  placeholder="Password"
                  required
                  name="password"
                />
                <Link
                  to={"/password-recovery"}
                  className="text-right text-primary text-xs"
                >
                  Forgot password?
                </Link>
              </div>
              <button
                className="btn btn-primary btn-filled w-full"
                disabled={isPending}
              >
                {isPending ? (
                  <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-gray-900"></div>
                ) : (
                  "Sign In"
                )}
              </button>
              <p className="text-xs">
                Don&apos;t have an account?
                <Link to="/signup" className="text-primary">
                  Sign Up
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </main>
  );
};

export default Signin;
