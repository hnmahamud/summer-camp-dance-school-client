import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import useAuth from "../../../../hooks/useAuth";
import LoadingSpinner from "../../../../components/LoadingSpinner/LoadingSpinner";
import { Link } from "react-router-dom";

const MyClass = () => {
  const { user } = useAuth();
  const [axiosSecure] = useAxiosSecure();
  const { data: classes = [], isLoading } = useQuery({
    queryKey: ["classes", user?.email],
    queryFn: async () => {
      const response = await axiosSecure.get(`/classes/${user?.email}`);
      return response.data;
    },
  });

  if (isLoading) {
    return <LoadingSpinner></LoadingSpinner>;
  }

  return (
    <table className="w-full text-sm text-left text-gray-500">
      <thead className="text-xs text-gray-700 uppercase bg-gray-50">
        <tr>
          <th scope="col" className="px-6 py-3">
            Name
          </th>
          <th scope="col" className="px-6 py-3">
            Available Seats
          </th>
          <th scope="col" className="px-6 py-3">
            Price
          </th>
          <th scope="col" className="px-6 py-3">
            Status
          </th>
          <th scope="col" className="px-6 py-3">
            Total Enrolled
          </th>
          <th scope="col" className="px-6 py-3">
            Feedback
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
                <td className="px-6 py-4">{cls?.availableSeats}</td>
                <td className="px-6 py-4">${cls?.price}</td>
                <td className="px-6 py-4">{cls?.status}</td>
                <td className="px-6 py-4">
                  {cls?.totalEnrolled ? cls?.totalEnrolled : 0}
                </td>
                <td className="px-6 py-4">
                  {cls?.feedback ? cls?.feedback : "N/A"}
                </td>
                <td className="px-6 py-4">
                  <Link
                    to={`/dashboard/update-class/${cls._id}`}
                    className="btn btn-xs"
                  >
                    Update Class
                  </Link>
                </td>
              </tr>
            ))}
        </>
      </tbody>
    </table>
  );
};

export default MyClass;
