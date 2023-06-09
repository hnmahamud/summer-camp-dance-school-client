import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../../hooks/useAuth";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import LoadingSpinner from "../../../../components/LoadingSpinner/LoadingSpinner";
import moment from "moment";

const PaymentsHistory = () => {
  const { user } = useAuth();
  const [axiosSecure] = useAxiosSecure();
  const { data: paymentsHistory = [], isLoading } = useQuery({
    queryKey: ["payments-history", user?.email],
    queryFn: async () => {
      const response = await axiosSecure.get(
        `/payments-history/${user?.email}`
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
            Name
          </th>
          <th scope="col" className="px-6 py-3">
            Instructor Name
          </th>
          <th scope="col" className="px-6 py-3">
            Instructor Email
          </th>
          <th scope="col" className="px-6 py-3">
            Price
          </th>
          <th scope="col" className="px-6 py-3">
            Transaction ID
          </th>
          <th scope="col" className="px-6 py-3">
            Date
          </th>
        </tr>
      </thead>
      <tbody>
        <>
          {paymentsHistory.length > 0 &&
            paymentsHistory.map((singlePayment) => (
              <tr key={singlePayment._id} className="bg-white border-b">
                <td className="px-6 py-4">{singlePayment?.className}</td>
                <td className="px-6 py-4">{singlePayment?.instructorName}</td>
                <td className="px-6 py-4">{singlePayment?.instructorEmail}</td>
                <td className="px-6 py-4">{singlePayment?.price}</td>
                <td className="px-6 py-4">{singlePayment?.transactionId}</td>
                <td className="px-6 py-4">
                  {moment(singlePayment.date).format("LLL")}
                </td>
              </tr>
            ))}
        </>
      </tbody>
    </table>
  );
};

export default PaymentsHistory;
