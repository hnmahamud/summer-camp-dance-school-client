import { Link, useRouteError } from "react-router-dom";
import Lottie from "lottie-react";
import error404 from "../../../assets/animations/404-anim.json";

// Error page
const ErrorPage = () => {
  const { error } = useRouteError();
  console.error(error);
  return (
    <section className="flex items-center h-screen">
      <div className="flex flex-col items-center justify-center px-5 mx-auto">
        <Lottie className="h-[400px]" animationData={error404} loop={true} />
        <div className="text-center">
          <p className="text-lg font-semibold md:text-xl text-red-600 mb-4">
            {error?.message}
          </p>
          <Link
            to="/"
            className="btn btn-outline btn-sm btn-primary px-12 text-white"
          >
            Back to homepage
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ErrorPage;
