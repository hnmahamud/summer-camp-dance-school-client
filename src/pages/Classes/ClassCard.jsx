import useDarkMode from "../../hooks/useDarkMode";

const ClassCard = ({ singleClass, handleSelect, role }) => {
  const { darkMode } = useDarkMode();

  const { classImage, className, instructorName, availableSeats, price } =
    singleClass;
  return (
    <div
      className={`${
        availableSeats < 1
          ? "bg-error border border-error"
          : `${
              darkMode
                ? "bg-black border border-gray-700"
                : "bg-white border border-gray-200"
            }`
      } rounded-md shadow`}
    >
      <img className="rounded-md h-60 w-full" src={classImage} alt="" />
      <div className="p-5">
        <h5 className="mb-2 text-2xl font-bold tracking-tight ">{className}</h5>
        <p className="font-normal">
          <span className="font-medium">Instructor Name:</span> {instructorName}
        </p>
        <div className="flex justify-between mb-3">
          <p className="font-normal">
            <span className="font-medium">Available Seats:</span>{" "}
            {availableSeats}
          </p>
          <p className="font-normal">
            <span className="font-medium">Price:</span> ${price}
          </p>
        </div>
        <button
          disabled={
            role === "admin" || role === "instructor" || availableSeats < 1
              ? true
              : false
          }
          onClick={() => handleSelect(singleClass)}
          className="btn btn-sm w-full text-white border-none bg-blue-500 hover:bg-blue-600"
        >
          Select
        </button>
      </div>
    </div>
  );
};

export default ClassCard;
