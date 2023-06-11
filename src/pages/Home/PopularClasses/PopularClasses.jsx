import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import ClassCard from "./ClassCard";
import { Fade } from "react-awesome-reveal";
import useDarkMode from "../../../hooks/useDarkMode";

const PopularClasses = () => {
  const { darkMode } = useDarkMode();

  const { data: topClasses = [] } = useQuery({
    queryKey: ["classes-top"],
    queryFn: async () => {
      const response = await axios.get(
        `${import.meta.env.VITE_SERVER_API}/classes-top`
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
            Popular{" "}
            <u className="text-primary dark:text-primary-400">Classes</u>
          </h2>
          <p>
            Discover our most sought-after dance classes at Summer Camp Dance
            School. These classes have captured the hearts of dancers of all
            levels, providing an immersive and rewarding experience. Join these
            popular classes and take your dance skills to new heights while
            enjoying the camaraderie of fellow dancers who share your passion
            and enthusiasm.
          </p>
        </div>
      </Fade>

      <div className="grid lg:grid-cols-3 gap-4">
        <Fade cascade damping={0.2}>
          {topClasses.length > 0 &&
            topClasses.map((singleClass) => (
              <ClassCard
                key={singleClass._id}
                singleClass={singleClass}
              ></ClassCard>
            ))}
        </Fade>
      </div>
    </section>
  );
};

export default PopularClasses;
