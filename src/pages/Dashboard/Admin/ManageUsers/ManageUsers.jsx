import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import LoadingSpinner from "../../../../components/LoadingSpinner/LoadingSpinner";
import useAuth from "../../../../hooks/useAuth";
import Swal from "sweetalert2";

const ManageUsers = () => {
  const { user } = useAuth();

  const [axiosSecure] = useAxiosSecure();
  const {
    data: singleUsers = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const response = await axiosSecure.get(`/users`);
      return response.data;
    },
  });

  if (isLoading) {
    return <LoadingSpinner></LoadingSpinner>;
  }

  // Make instructor
  const handleInstructor = (singleUser) => {
    if (user.email === singleUser.email) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "You can't change your own role!",
      });
      return;
    }

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
          .patch(`/users/change-role/${singleUser._id}`, { role: "instructor" })
          .then((data) => {
            if (data.data.modifiedCount > 0) {
              refetch();
              Swal.fire("Changed!", "Role has been changed.", "success");
            }
          })
          .catch((error) => {
            console.log(error);
          });
      }
    });
  };

  // Make admin
  const handleAdmin = (singleUser) => {
    if (user.email === singleUser.email) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "You can't change your own role!",
      });
      return;
    }

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
          .patch(`/users/change-role/${singleUser._id}`, { role: "admin" })
          .then((data) => {
            if (data.data.modifiedCount > 0) {
              refetch();
              Swal.fire("Changed!", "Role has been changed.", "success");
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
            Name
          </th>
          <th scope="col" className="px-6 py-3">
            Email
          </th>
          <th scope="col" className="px-6 py-3">
            Role
          </th>
          <th scope="col" className="px-6 py-3">
            Action
          </th>
        </tr>
      </thead>
      <tbody>
        <>
          {singleUsers.length > 0 &&
            singleUsers.map((singleUser) => (
              <tr key={singleUser._id} className="bg-white border-b">
                <td className="px-6 py-4">{singleUser?.name}</td>
                <td className="px-6 py-4">{singleUser?.email}</td>
                <td className="px-6 py-4">
                  {singleUser?.role ? singleUser?.role : "student"}
                </td>
                <td className="md:flex md:gap-2 py-4">
                  <button
                    onClick={() => handleInstructor(singleUser)}
                    disabled={singleUser?.role === "instructor"}
                    className="btn btn-xs"
                  >
                    Make Instructor
                  </button>
                  <button
                    onClick={() => handleAdmin(singleUser)}
                    disabled={singleUser?.role === "admin"}
                    className="btn btn-xs"
                  >
                    Make Admin
                  </button>
                </td>
              </tr>
            ))}
        </>
      </tbody>
    </table>
  );
};

export default ManageUsers;
