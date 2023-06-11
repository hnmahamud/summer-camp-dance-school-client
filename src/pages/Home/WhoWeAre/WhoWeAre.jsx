import { FaRegCheckCircle } from "react-icons/fa";

const WhoWeAre = () => {
  return (
    <section className="my-16 md:my-32 text-center">
      <div className="flex justify-center">
        <div className="max-w-[700px] text-center">
          <h2 className="mb-6 text-center text-3xl font-bold">
            Who we are and why{" "}
            <u className="text-primary dark:text-primary-400">we are famous?</u>
          </h2>
          <p className="mb-16 text-neutral-500 dark:text-neutral-300">
            DanceCampX is an exciting and dynamic dance school that brings
            together dancers of all ages and levels to explore the world of
            dance. With a team of talented instructors and a vibrant community,
            we create an immersive and inspiring environment where dancers can
            learn, grow, and express themselves through the art of dance. At
            DanceCampX, we believe in the power of dance to transform lives and
            build lifelong connections.
          </p>
        </div>
      </div>

      <div className="grid gap-x-6 md:grid-cols-2 lg:grid-cols-4 lg:gap-x-12">
        <div className="mb-12 lg:mb-0">
          <div className="mb-6 inline-block rounded-full bg-primary-100 p-4 text-primary shadow-sm">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              className="h-6 w-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437l1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008z"
              />
            </svg>
          </div>
          <h5 className="mb-4 text-lg font-bold">Support 24/7</h5>
          <p className="text-neutral-500 dark:text-neutral-300">
            We provide round-the-clock assistance to ensure that dancers receive
            the support they need whenever they need it.
          </p>
        </div>

        <div className="mb-12 lg:mb-0">
          <div className="mb-6 inline-block rounded-full bg-primary-100 p-4 text-primary shadow-sm">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              className="h-6 w-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 5.25a3 3 0 013 3m3 0a6 6 0 01-7.029 5.912c-.563-.097-1.159.026-1.563.43L10.5 17.25H8.25v2.25H6v2.25H2.25v-2.818c0-.597.237-1.17.659-1.591l6.499-6.499c.404-.404.527-1 .43-1.563A6 6 0 1121.75 8.25z"
              />
            </svg>
          </div>
          <h5 className="mb-4 text-lg font-bold">Safe and solid</h5>
          <p className="text-neutral-500 dark:text-neutral-300">
            Our dance school prioritizes the safety and well-being of our
            students, offering a secure and reliable environment.
          </p>
        </div>

        <div className="mb-12 md:mb-0">
          <div className="mb-6 inline-block rounded-full bg-primary-100 p-4 text-primary shadow-sm">
            <FaRegCheckCircle className="h-6 w-6"></FaRegCheckCircle>
          </div>
          <h5 className="mb-4 text-lg font-bold">Extremely fast</h5>
          <p className="text-neutral-500 dark:text-neutral-300">
            Our classes are designed to deliver rapid progress, allowing dancers
            to see significant improvement in their skills and technique.
          </p>
        </div>

        <div className="mb-12 md:mb-0">
          <div className="mb-6 inline-block rounded-full bg-primary-100 p-4 text-primary shadow-sm">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              className="h-6 w-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M10.5 6a7.5 7.5 0 107.5 7.5h-7.5V6z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13.5 10.5H21A7.5 7.5 0 0013.5 3v7.5z"
              />
            </svg>
          </div>
          <h5 className="mb-4 text-lg font-bold">Live analytics</h5>
          <p className="text-neutral-500 dark:text-neutral-300">
            Through live analytics, we provide real-time feedback and insights
            to help dancers track their progress, identify areas for
            improvement.
          </p>
        </div>
      </div>
    </section>
  );
};

export default WhoWeAre;
