import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import LoadingSpinner from "../../components/LoadingSpinner/LoadingSpinner";
import ClassCard from "./ClassCard";
import useAuth from "../../hooks/useAuth";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const Classes = () => {
  const { user } = useAuth();

  const navigate = useNavigate();

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

  const handleSelect = (singleClass) => {
    const selectedClass = {
      classId: singleClass._id,
      className: singleClass.className,
      classImage: singleClass.classImage,
      studentName: user?.displayName,
      studentEmail: user?.email,
      instructorName: singleClass.instructorName,
      instructorEmail: singleClass.instructorEmail,
      price: singleClass.price,
    };
    if (user) {
      axiosSecure
        .post("/selected-classes", selectedClass)
        .then((data) => {
          if (data.data.insertedId) {
            Swal.fire("Selected!", "Class has been selected.", "success");
          }
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
      Swal.fire({
        title: "You must login!",
        text: "You can select after login.",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Login",
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/login", { replace: true });
        }
      });
    }
  };

  return (
    <div className="my-16">
      <h3>Classes</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {classes.length > 0 &&
          classes.map((singleClass) => (
            <ClassCard
              key={singleClass._id}
              singleClass={singleClass}
              handleSelect={handleSelect}
            ></ClassCard>
          ))}
      </div>
    </div>
  );
};

export default Classes;
