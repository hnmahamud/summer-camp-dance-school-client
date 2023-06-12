import { Link } from "react-router-dom";
import useDarkMode from "../../hooks/useDarkMode";

const InstructorCard = ({ singleCard }) => {
  const { darkMode } = useDarkMode();

  const { profilePhoto, name, email } = singleCard;
  return (
    <div
      className={`${
        darkMode ? "bg-black border border-gray-700" : "bg-white"
      } w-full rounded-lg shadow`}
    >
      <div className="flex justify-end px-4 pt-4">
        <svg
          className="w-6 h-6"
          aria-hidden="true"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z"></path>
        </svg>
      </div>
      <div className="flex flex-col items-center pb-10">
        <img
          className="w-24 h-24 mb-3 rounded-full shadow-lg"
          src={profilePhoto}
        />
        <h5
          className={`${
            darkMode ? "text-gray-300" : "text-gray-900"
          } mb-1 text-xl font-medium `}
        >
          {name}
        </h5>
        <span
          className={`${darkMode ? "text-gray-300" : "text-gray-500"} text-sm`}
        >
          {email}
        </span>
        <div className="flex mt-4 space-x-3 md:mt-6">
          <Link className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800">
            See Classes
          </Link>
          <Link className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-gray-900 bg-white border border-gray-300 rounded-lg hover:bg-gray-100">
            Message
          </Link>
        </div>
      </div>
    </div>
  );
};

export default InstructorCard;
