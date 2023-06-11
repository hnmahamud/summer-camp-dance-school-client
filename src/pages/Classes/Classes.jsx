import { useQuery } from "@tanstack/react-query";
import LoadingSpinner from "../../components/LoadingSpinner/LoadingSpinner";
import ClassCard from "./ClassCard";
import useAuth from "../../hooks/useAuth";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import useRole from "../../hooks/useRole";
import axios from "axios";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { Fade } from "react-awesome-reveal";

const Classes = () => {
  const { user } = useAuth();
  const [role] = useRole();

  const navigate = useNavigate();

  const [axiosSecure] = useAxiosSecure();
  const { data: classes = [], isLoading } = useQuery({
    queryKey: ["classes-approved"],
    queryFn: async () => {
      const response = await axios.get(
        `${import.meta.env.VITE_SERVER_API}/classes-approved`
      );
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
        .get(`/exist-classes?email=${user?.email}&id=${singleClass._id}`)
        .then((data) => {
          if (data.data.isExist === false) {
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
            Swal.fire("failed!", "Class has already been selected.", "error");
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
    <div className="my-16 space-y-8">
      <div className="md:w-[80%] mx-auto md:text-center space-y-4">
        <Fade cascade damping={0.2}>
          <h2 className="text-center text-3xl font-bold">
            Explore Our{" "}
            <u className="text-primary dark:text-primary-400">Dance Classes</u>
          </h2>
          <p>
            Get ready to discover a world of dance at Summer Camp Dance School!
            Our diverse range of classes offers something for everyone, from
            budding beginners to seasoned dancers. Immerse yourself in the grace
            of ballet, groove to the beats of hip-hop, unleash your creativity
            in contemporary fusion, or master the rhythmic footwork of tap. Led
            by passionate instructors, our classes are designed to inspire,
            challenge, and cultivate your love for dance. Join us and embark on
            an extraordinary dance journey this summer at Summer Camp Dance
            School.
          </p>
        </Fade>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Fade cascade damping={0.2}>
          {classes.length > 0 &&
            classes.map((singleClass) => (
              <ClassCard
                key={singleClass._id}
                singleClass={singleClass}
                handleSelect={handleSelect}
                role={role}
              ></ClassCard>
            ))}
        </Fade>
      </div>
    </div>
  );
};

export default Classes;
