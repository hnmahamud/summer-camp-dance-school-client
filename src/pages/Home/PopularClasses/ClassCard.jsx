import { Link } from "react-router-dom";
import { FaEnvelope, FaUserCircle } from "react-icons/fa";
import useDarkMode from "../../../hooks/useDarkMode";

const ClassCard = ({ singleClass }) => {
  const { darkMode } = useDarkMode();
  const { classImage, className, instructorName, instructorEmail } =
    singleClass;
  return (
    <div
      className={`${
        darkMode ? "bg-black border border-gray-700" : "bg-white"
      } block rounded-lg shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)]`}
      data-te-ripple-init
      data-te-ripple-color="light"
    >
      <div className="relative overflow-hidden bg-cover bg-no-repeat">
        <img src={classImage} className="w-full h-60 rounded-t-lg" />
        <svg
          className={`${
            darkMode ? "text-black" : "text-white"
          } absolute left-0 bottom-0`}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
        >
          <path
            fill="currentColor"
            d="M0,288L48,272C96,256,192,224,288,197.3C384,171,480,149,576,165.3C672,181,768,235,864,250.7C960,267,1056,245,1152,250.7C1248,256,1344,288,1392,304L1440,320L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>
      </div>
      <div className="p-6">
        <h5 className="mb-4 text-lg font-bold">{className}</h5>
        <p className="font-semibold">Instructor Info:</p>
        <p className="flex items-center gap-2">
          <FaUserCircle></FaUserCircle> {instructorName}
        </p>
        <p className="flex items-center gap-2 mb-6">
          <FaEnvelope></FaEnvelope> {instructorEmail}
        </p>
        <Link
          to="/classes"
          data-te-ripple-init
          data-te-ripple-color="light"
          className="inline-block rounded bg-primary px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white"
        >
          See Details
        </Link>
      </div>
    </div>
  );
};

export default ClassCard;
