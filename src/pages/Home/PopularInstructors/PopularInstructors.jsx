import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import InstructorCard from "./InstructorCard";
import { Fade } from "react-awesome-reveal";
import useDarkMode from "../../../hooks/useDarkMode";

const PopularInstructors = () => {
  const { darkMode } = useDarkMode();

  const { data: topInstructors = [] } = useQuery({
    queryKey: ["instructor-top"],
    queryFn: async () => {
      const response = await axios.get(
        `${import.meta.env.VITE_SERVER_API}/instructor-top`
      );
      return response.data;
    },
  });

  return (
    <section
      className={`${
        darkMode ? "text-gray-300" : ""
      } my-16 md:my-32 text-center lg:text-left`}
    >
      <Fade cascade damping={0.2}>
        <div className="md:w-[80%] mx-auto md:text-center space-y-4 mb-8">
          <h2 className="text-center text-3xl font-bold">
            Popular <u className="text-primary">Instructor</u>
          </h2>
          <p>
            Meet our highly sought-after dance instructors who have captured the
            hearts of dancers at Summer Camp Dance School. These talented and
            inspiring individuals bring their unique styles and expertise to
            their classes, creating an unforgettable experience for our
            students. Join their popular classes and be inspired by their
            passion, dedication, and ability to bring out the best in every
            dancer.
          </p>
        </div>
      </Fade>

      <div className="grid md:grid-cols-3 gap-4">
        <Fade cascade damping={0.2}>
          {topInstructors.length > 0 &&
            topInstructors.map((singleInstructor) => (
              <InstructorCard
                key={singleInstructor._id}
                singleInstructor={singleInstructor}
              ></InstructorCard>
            ))}
        </Fade>
      </div>
    </section>
  );
};

export default PopularInstructors;
