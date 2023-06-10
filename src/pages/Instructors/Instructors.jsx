import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import LoadingSpinner from "../../components/LoadingSpinner/LoadingSpinner";
import InstructorCard from "./InstructorCard";

const Instructors = () => {
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
    <div className="my-16 space-y-8">
      <div className="md:w-[80%] mx-auto md:text-center space-y-4">
        <h3 className="text-blue-500 text-2xl md:text-3xl font-semibold">
          Meet Our Inspiring Dance Instructors
        </h3>
        <p>
          Our talented and passionate dance instructors at Summer Camp Dance
          School bring diverse backgrounds and expertise to their classes. From
          ballet to hip-hop, contemporary to tap, they foster growth and ignite
          a love for dance in a dynamic learning environment. Get ready to be
          inspired by our exceptional team as you embark on a journey of
          self-expression, skill development, and creativity. Elevate your dance
          experience with our inspiring instructors at Summer Camp Dance School.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {instructors.length > 0 &&
          instructors.map((singleCard) => (
            <InstructorCard
              key={singleCard._id}
              singleCard={singleCard}
            ></InstructorCard>
          ))}
      </div>
    </div>
  );
};

export default Instructors;
