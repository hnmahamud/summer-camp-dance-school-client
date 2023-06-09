import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";

const useRole = () => {
  const { user, loading } = useAuth();
  const [axiosSecure] = useAxiosSecure();

  const { data: role, isLoading: isRoleLoading } = useQuery({
    queryKey: ["users-role", user?.email],
    enabled: !loading,
    queryFn: async () => {
      if (user?.email && loading === false) {
        const response = await axiosSecure.get(`/users-role/${user?.email}`);
        return response?.data?.role ? response?.data?.role : "student";
      } else {
        return "userNull";
      }
    },
  });
  return [role, isRoleLoading];
};
export default useRole;
