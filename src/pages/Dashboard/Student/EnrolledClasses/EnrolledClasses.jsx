import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../../hooks/useAuth";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import LoadingSpinner from "../../../../components/LoadingSpinner/LoadingSpinner";

const EnrolledClasses = () => {
  const { user } = useAuth();
  const [axiosSecure] = useAxiosSecure();
  const { data: enrolledClasses = [], isLoading } = useQuery({
    queryKey: ["enrolled-classes", user?.email],
    queryFn: async () => {
      const response = await axiosSecure.get(
        `/enrolled-classes/${user?.email}`
      );
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
        </tr>
      </thead>
      <tbody>
        <>
          {enrolledClasses.length > 0 &&
            enrolledClasses.map((cls) => (
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
              </tr>
            ))}
        </>
      </tbody>
    </table>
  );
};

export default EnrolledClasses;
