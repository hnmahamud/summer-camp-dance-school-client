import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import LoadingSpinner from "../../../../components/LoadingSpinner/LoadingSpinner";
import Swal from "sweetalert2";

const ManageClasses = () => {
  const [axiosSecure] = useAxiosSecure();
  const {
    data: classes = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["classes"],
    queryFn: async () => {
      const response = await axiosSecure.get(`/classes`);
      return response.data;
    },
  });

  if (isLoading) {
    return <LoadingSpinner></LoadingSpinner>;
  }

  // Make approve
  const handleApprove = (id) => {
    Swal.fire({
      title: "Are you sure?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure
          .patch(`/classes/change-status/${id}`, { status: "approved" })
          .then((data) => {
            if (data.data.modifiedCount > 0) {
              refetch();
              Swal.fire("Approved!", "Class has been approved.", "success");
            }
          })
          .catch((error) => {
            console.log(error);
          });
      }
    });
  };

  // Make deny
  const handleDeny = (id) => {
    Swal.fire({
      title: "Are you sure?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure
          .patch(`/classes/change-status/${id}`, { status: "denied" })
          .then((data) => {
            if (data.data.modifiedCount > 0) {
              refetch();
              Swal.fire("Denied!", "Class has been denied.", "success");
            }
          })
          .catch((error) => {
            console.log(error);
          });
      }
    });
  };

  const handleFeedback = (id) => {
    Swal.fire({
      title: "Please type your feedback",
      input: "text",
      inputAttributes: {
        autocapitalize: "off",
      },
      showCancelButton: true,
      confirmButtonText: "Submit",
    }).then((result) => {
      if (result.isConfirmed) {
        const feedback = result.value;
        axiosSecure
          .patch(`/classes/add-feedback/${id}`, { feedback: feedback })
          .then((data) => {
            if (data.data.modifiedCount > 0) {
              refetch();
              Swal.fire("Submitted", "Feedback has been submitted.", "success");
            }
          })
          .catch((error) => {
            console.log(error);
          });
      }
    });
  };

  return (
    <table className="w-full text-sm text-left text-gray-500">
      <thead className="text-xs text-gray-700 uppercase bg-gray-50">
        <tr>
          <th scope="col" className="px-6 py-3">
            Class name
          </th>
          <th scope="col" className="px-6 py-3">
            Instructor name
          </th>
          <th scope="col" className="px-6 py-3">
            Instructor email
          </th>
          <th scope="col" className="px-6 py-3">
            Available seats
          </th>
          <th scope="col" className="px-6 py-3">
            Price
          </th>
          <th scope="col" className="px-6 py-3">
            Status
          </th>
          <th scope="col" className="px-6 py-3">
            Action
          </th>
        </tr>
      </thead>
      <tbody>
        <>
          {classes.length > 0 &&
            classes.map((cls) => (
              <tr key={cls._id} className="bg-white border-b">
                <th
                  scope="row"
                  className="flex items-center px-6 py-4 text-gray-900 whitespace-nowrap"
                >
                  <img className="w-16 h-16 rounded-lg" src={cls?.classImage} />
                  <div className="pl-3">
                    <div className="text-base font-semibold">
                      {cls?.className}
                    </div>
                  </div>
                </th>
                <td className="px-6 py-4">{cls?.instructorName}</td>
                <td className="px-6 py-4">{cls?.instructorEmail}</td>
                <td className="px-6 py-4">{cls?.availableSeats}</td>
                <td className="px-6 py-4">${cls?.price}</td>
                <td className="px-6 py-4">{cls?.status}</td>
                <td className="space-x-2">
                  <button
                    onClick={() => handleApprove(cls?._id)}
                    disabled={cls?.status === "pending" ? false : true}
                    className="btn btn-xs"
                  >
                    Approve
                  </button>
                  <button
                    onClick={() => handleDeny(cls?._id)}
                    disabled={cls?.status === "pending" ? false : true}
                    className="btn btn-xs"
                  >
                    Deny
                  </button>
                  <button
                    onClick={() => handleFeedback(cls?._id)}
                    className="btn btn-xs"
                  >
                    Feedback
                  </button>
                </td>
              </tr>
            ))}
        </>
      </tbody>
    </table>
  );
};

export default ManageClasses;
