import { useState } from "react";
import { Link } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import google from "../../assets/photos/logos/google.png";
import { useForm } from "react-hook-form";
import { Helmet } from "react-helmet-async";

const Register = () => {
  // state
  const [err, setErr] = useState("");
  const [nLoading, setNLoading] = useState(false);

  // Registration with email password
  // React hook form
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    watch,
  } = useForm();

  const onSubmit = (data) => {
    // const name = data.name;
    // const email = data.email;
    // const photo = data.photoUrl;
    // const password = data.password;
  };

  //   setNLoading(true);

  //   // Create user
  //   createUser(email, password)
  //     .then((userCredential) => {
  //       // Signed in
  //       const user = userCredential.user;
  //       console.log(user);

  //       // Update user profile
  //       profileUpdate(name, photo)
  //         .then(() => {
  //           const saveUser = { name: data.name, email: data.email };
  //           fetch("https://bistro-boss-server-swart.vercel.app/users", {
  //             method: "POST",
  //             headers: {
  //               "Content-Type": "application/json",
  //             },
  //             body: JSON.stringify(saveUser),
  //           })
  //             .then((res) => res.json())
  //             .then((data) => {
  //               if (data.insertedId) {
  //                 reset();
  //                 const Toast = Swal.mixin({
  //                   toast: true,
  //                   position: "top-end",
  //                   showConfirmButton: false,
  //                   timer: 3000,
  //                   timerProgressBar: true,
  //                   didOpen: (toast) => {
  //                     toast.addEventListener("mouseenter", Swal.stopTimer);
  //                     toast.addEventListener("mouseleave", Swal.resumeTimer);
  //                   },
  //                 });

  //                 Toast.fire({
  //                   icon: "success",
  //                   title: "Registration successful!",
  //                 });
  //                 setLoading(false);
  //                 setNLoading(false);
  //                 navigate(from, { replace: true });
  //               }
  //             })
  //             .catch((error) => {
  //               setLoading(false);
  //               setNLoading(false);
  //               console.log(error);
  //               setError(error);
  //             });
  //         })
  //         .catch((error) => {
  //           setLoading(false);
  //           setNLoading(false);
  //           console.log(error);
  //           setError(error);
  //         });
  //     })
  //     .catch((error) => {
  //       setLoading(false);
  //       setNLoading(false);
  //       const errorMessage = error.message;
  //       console.log(errorMessage);
  //       setError(errorMessage);
  //     });
  // };

  return (
    <>
      <Helmet>
        <title>DanceCampX | Register</title>
      </Helmet>
      <section className="min-h-[calc(100vh-65px)] py-16">
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto lg:py-0">
          <div className="w-full bg-white rounded-lg shadow md:mt-0 sm:max-w-lg xl:p-0">
            {/* Error message */}
            {err ? (
              <div className="bg-white alert alert-error">
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="stroke-current flex-shrink-0 h-6 w-6 text-red-500"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <span className="text-red-500">{err}</span>
                </div>
              </div>
            ) : (
              ""
            )}
            {/* Register form */}
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl">
                Create and account
              </h1>
              <form
                onSubmit={handleSubmit(onSubmit)}
                className="space-y-4 md:space-y-6"
              >
                <div>
                  <label className="block mb-2 text-sm font-medium text-gray-900">
                    Your Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                    placeholder="John Doe"
                    required
                  />
                </div>
                <div>
                  <label className="block mb-2 text-sm font-medium text-gray-900">
                    Your email
                  </label>
                  <input
                    type="email"
                    name="email"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                    placeholder="name@company.com"
                    required
                  />
                </div>
                <div>
                  <label className="block mb-2 text-sm font-medium text-gray-900">
                    Photo URL
                  </label>
                  <input
                    type="url"
                    name="photoUrl"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                    placeholder="https://photo.com/"
                    required
                  />
                </div>
                <div>
                  <label className="block mb-2 text-sm font-medium text-gray-900">
                    Password
                  </label>
                  <div className="bg-gray-50 flex border border-gray-300 rounded-lg">
                    <input
                      {...register("password", {
                        pattern: {
                          value: /(?=.*[A-Z])(?=.*[!@#$%^&*])(.{6,})/,
                          message:
                            "Password should be 6 characters long, contain one special character, and have at least one capital letter.",
                        },
                      })}
                      name="password"
                      type="password"
                      placeholder="••••••••"
                      className="bg-gray-50 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                      required
                    />
                  </div>
                  {errors.password && (
                    <p className="text-red-600" role="alert">
                      {errors.password.message}
                    </p>
                  )}
                </div>

                <div>
                  <label className="block mb-2 text-sm font-medium text-gray-900">
                    Confirm Password
                  </label>
                  <div className="bg-gray-50 flex border border-gray-300 rounded-lg">
                    <input
                      {...register("confirmPassword", {
                        validate: (value) =>
                          value === watch("password") ||
                          "Passwords do not match",
                      })}
                      name="confirmPassword"
                      type="password"
                      placeholder="••••••••"
                      className="bg-gray-50 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                      required
                    />
                  </div>
                  {errors.confirmPassword && (
                    <p className="text-red-600" role="alert">
                      {errors.confirmPassword.message}
                    </p>
                  )}
                </div>

                <button
                  type="submit"
                  className="btn btn-outline btn-sm btn-primary w-full normal-case"
                >
                  Register
                </button>

                {/* Alternative login */}
                <div className="flex flex-col">
                  <div className="relative py-2">
                    <div className="absolute inset-0 flex items-center">
                      <div className="w-full border-b border-gray-300"></div>
                    </div>
                    <div className="relative flex justify-center">
                      <span className="bg-white px-4 text-sm text-gray-500">
                        Or
                      </span>
                    </div>
                  </div>
                  <button
                    className="btn btn-outline btn-sm bg-gray-200 hover:bg-gray-400 hover:text-black border-none w-full normal-case"
                    type="button"
                  >
                    <img className="h-5 w-5" src={google} alt="" />
                    <span>Login with Google</span>
                  </button>
                </div>

                <p className="text-sm font-light text-gray-500">
                  Already have an account?{" "}
                  <Link
                    to="/login"
                    className="font-medium text-primary-600 hover:underline"
                  >
                    Login here
                  </Link>
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Register;
