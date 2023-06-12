import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import LoadingSpinner from "../../../../components/LoadingSpinner/LoadingSpinner";
import useAuth from "../../../../hooks/useAuth";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";

const SelectedClasses = () => {
  const { user } = useAuth();
  const [axiosSecure] = useAxiosSecure();
  const {
    data: selectedClasses = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["selected-classes", user?.email],
    queryFn: async () => {
      const response = await axiosSecure.get(
        `/selected-classes/${user?.email}`
      );
      return response.data;
    },
  });

  if (isLoading) {
    return <LoadingSpinner></LoadingSpinner>;
  }

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure
          .delete(`/selected-classes/${id}`)
          .then((data) => {
            if (data.data.deletedCount === 1) {
              refetch();
              Swal.fire("Deleted!", "Class has been deleted.", "success");
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
            Price
          </th>
          <th scope="col" className="px-6 py-3">
            Action
          </th>
        </tr>
      </thead>
      <tbody>
        <>
          {selectedClasses.length > 0 &&
            selectedClasses.map((cls) => (
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
                <td className="px-6 py-4">${cls?.price}</td>
                <td className="px-6 py-4 space-x-2 space-y-2">
                  <Link
                    to={`/dashboard/payment/${cls?._id}`}
                    className="btn btn-xs"
                  >
                    Pay
                  </Link>
                  <button
                    onClick={() => handleDelete(cls?._id)}
                    className="btn btn-xs"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
        </>
      </tbody>
    </table>
  );
};

export default SelectedClasses;
