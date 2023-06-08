import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import LoadingSpinner from "../../components/LoadingSpinner/LoadingSpinner";
import ClassCard from "./ClassCard";

const Classes = () => {
  const [axiosSecure] = useAxiosSecure();
  const { data: classes = [], isLoading } = useQuery({
    queryKey: ["classes-approved"],
    queryFn: async () => {
      const response = await axiosSecure.get("/classes-approved");
      return response.data;
    },
  });

  if (isLoading) {
    return <LoadingSpinner></LoadingSpinner>;
  }

  return (
    <div className="my-16">
      <h3>Classes</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {classes.length > 0 &&
          classes.map((singleClass) => (
            <ClassCard
              key={singleClass._id}
              singleClass={singleClass}
            ></ClassCard>
          ))}
      </div>
    </div>
  );
};

export default Classes;
