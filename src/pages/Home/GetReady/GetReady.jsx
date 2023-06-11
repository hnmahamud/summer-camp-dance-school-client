import { Link } from "react-router-dom";
import readyForDance from "../../../assets/photos/ready-for-dance.jpg";

const GetReady = () => {
  return (
    <section className="my-16 md:my-32 text-center lg:text-left">
      <div className="px-6 md:px-12">
        <div className="grid items-center lg:grid-cols-2 lg:gap-x-12">
          <div className="mb-12 lg:mb-0">
            <h2 className="my-12 text-3xl font-bold leading-tight tracking-tight">
              Are you ready <br />
              <u className="text-primary dark:text-primary-400">to learn?</u>
            </h2>
            <Link
              className="mb-2 inline-block rounded bg-primary px-6 pt-2 pb-2 text-sm font-medium uppercase leading-normal text-white md:mr-2 md:mb-0"
              data-te-ripple-init
              data-te-ripple-color="light"
              role="button"
            >
              Get started
            </Link>
            <Link
              className="inline-block rounded px-12 pt-4 pb-3.5 text-sm font-medium uppercase leading-normal text-primary"
              data-te-ripple-init
              data-te-ripple-color="light"
              role="button"
            >
              Learn more
            </Link>
          </div>

          <div className="mb-12 lg:mb-0">
            <img
              src={readyForDance}
              className="w-full rounded-lg shadow-lg dark:shadow-black/20"
              alt=""
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default GetReady;
