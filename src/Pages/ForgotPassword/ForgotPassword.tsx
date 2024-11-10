import { FormEvent } from "react";
import useAuth from "../../Hooks/useAuth";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";

const ForgotPassword = () => {
  const Auth = useAuth();

  const handleSignin = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;

    const email = form.email.value;

    Auth?.forgotPassword(email)
      .then(() => {
        // const loggedInUser = res.user;
        Swal.fire({
          // position: "top-end",
          icon: "success",
          title: "Please check your email",
          showConfirmButton: false,
          timer: 1500,
        });
        // navigate("/");
      })
      .catch((err) => {
        Swal.fire({
          title: err.message,
          icon: "error",
        });
        Auth.setLoading(false);
        console.log(err);
      });
  };

  return (
    <main>
      <div className="container mx-auto min-h-[70vh] grid place-content-center">
        <div className="max-w-[400px] mx-auto md:max-w-[500px] md:w-[500px] w-full my-6 md:my-24 px-9 py-12 border border-gray-400 rounded space-y-4">
          <h1 className="text-2xl md:text-4xl font-bold text-center md:leading-[3.8rem]">
            Password Recovery
          </h1>
          <form onSubmit={handleSignin} className="space-y-3">
            <input
              className="input input-bordered w-full"
              type="email"
              placeholder="Enter your email"
              required
              name="email"
            />
            <button
              className="btn btn-primary btn-filled w-full"
              disabled={Auth?.loading}
            >
              {Auth?.loading ? (
                <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-gray-900"></div>
              ) : (
                "Verify"
              )}
            </button>
          </form>
          <p className="text-xs">
            Don&apos;t have an account?{" "}
            <Link to="/signup" className="text-primary">
              Sign Up
            </Link>
          </p>
        </div>
      </div>
    </main>
  );
};

export default ForgotPassword;
