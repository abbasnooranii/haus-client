import { FormEvent } from "react";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import useAuth from "../../Hooks/useAuth";

const Signin = () => {
  const Auth = useAuth();
  const navigate = useNavigate();

  const handleSignin = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;

    const email = form.email.value;
    const password = form.password.value;

    Auth?.login(email, password)
      .then((res) => {
        const loggedInUser = res.user;
        Swal.fire({
          // position: "top-end",
          icon: "success",
          title: "Login successfull!",
          showConfirmButton: false,
          timer: 1500,
        });
        navigate("/");
      })
      .catch((err) => {
        Swal.fire({
          title: err.message,
          icon: "error",
        });
        console.log(err);
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
                disabled={Auth?.loading}
              >
                {Auth?.loading ? (
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
