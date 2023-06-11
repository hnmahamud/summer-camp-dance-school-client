import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import InstructorCard from "./InstructorCard";

const PopularInstructors = () => {
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
    <section className="my-16 md:my-32 text-center lg:text-left">
      <div className="md:w-[80%] mx-auto md:text-center space-y-4 mb-8">
        <h2 className="text-center text-3xl font-bold">
          Popular{" "}
          <u className="text-primary dark:text-primary-400">Instructor</u>
        </h2>
        <p>
          Meet our highly sought-after dance instructors who have captured the
          hearts of dancers at Summer Camp Dance School. These talented and
          inspiring individuals bring their unique styles and expertise to their
          classes, creating an unforgettable experience for our students. Join
          their popular classes and be inspired by their passion, dedication,
          and ability to bring out the best in every dancer.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-4">
        {topInstructors.length > 0 &&
          topInstructors.map((singleInstructor) => (
            <InstructorCard
              key={singleInstructor._id}
              singleInstructor={singleInstructor}
            ></InstructorCard>
          ))}
      </div>
    </section>
  );
};

export default PopularInstructors;
