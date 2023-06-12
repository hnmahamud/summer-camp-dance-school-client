import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import LoadingSpinner from "../../components/LoadingSpinner/LoadingSpinner";
import InstructorCard from "./InstructorCard";
import { Fade } from "react-awesome-reveal";
import { Helmet } from "react-helmet-async";
import { useLocation } from "react-router-dom";
import useScrollTop from "../../hooks/useScrollTop";
import useDarkMode from "../../hooks/useDarkMode";

const Instructors = () => {
  // Custom hook
  const { pathname } = useLocation();
  useScrollTop(pathname);

  const { darkMode } = useDarkMode();

  const { data: instructors = [], isLoading } = useQuery({
    queryKey: ["users-instructors"],
    queryFn: async () => {
      const response = await axios.get(
        `${import.meta.env.VITE_SERVER_API}/users-instructors`
      );
      return response.data;
    },
  });

  if (isLoading) {
    return <LoadingSpinner></LoadingSpinner>;
  }

  return (
    <>
      <Helmet>
        <title>DanceCampX - Instructors</title>
      </Helmet>
      <div className={`${darkMode ? "text-gray-300" : ""} my-16 space-y-8`}>
        <div className="md:w-[80%] mx-auto md:text-center space-y-4">
          <Fade cascade damping={0.2}>
            <h2 className="text-center text-3xl font-bold">
              Meet Our <u className="text-primary">Dance Instructors</u>
            </h2>
            <p>
              Our talented and passionate dance instructors at Summer Camp Dance
              School bring diverse backgrounds and expertise to their classes.
              From ballet to hip-hop, contemporary to tap, they foster growth
              and ignite a love for dance in a dynamic learning environment. Get
              ready to be inspired by our exceptional team as you embark on a
              journey of self-expression, skill development, and creativity.
              Elevate your dance experience with our inspiring instructors at
              Summer Camp Dance School.
            </p>
          </Fade>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Fade cascade damping={0.2}>
            {instructors.length > 0 &&
              instructors.map((singleCard) => (
                <InstructorCard
                  key={singleCard._id}
                  singleCard={singleCard}
                ></InstructorCard>
              ))}
          </Fade>
        </div>
      </div>
    </>
  );
};

export default Instructors;
