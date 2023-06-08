const ClassCard = ({ singleClass, handleSelect }) => {
  const { classImage, className, instructorName, availableSeats, price } =
    singleClass;
  return (
    <div className="bg-white border border-gray-200 rounded-lg shadow">
      <img className="rounded-t-lg h-60 w-full" src={classImage} alt="" />
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
          onClick={() => handleSelect(singleClass)}
          className="btn btn-sm w-full text-white bg-blue-500 hover:bg-blue-600"
        >
          Select
        </button>
      </div>
    </div>
  );
};

export default ClassCard;
