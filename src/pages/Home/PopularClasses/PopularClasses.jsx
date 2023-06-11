import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import ClassCard from "./ClassCard";

const PopularClasses = () => {
  const { data: topClasses = [] } = useQuery({
    queryKey: ["classes-top"],
    queryFn: async () => {
      const response = await axios.get(
        `${import.meta.env.VITE_SERVER_API}/classes-top`
      );
      return response.data;
    },
  });

  console.log(topClasses);

  return (
    <section className="my-32 text-center lg:text-left">
      <div className="md:w-[80%] mx-auto md:text-center space-y-4 mb-8">
        <h3 className="text-blue-500 text-2xl md:text-3xl font-semibold">
          Popular Classes
        </h3>
        <p>
          Discover our most sought-after dance classes at Summer Camp Dance
          School. These classes have captured the hearts of dancers of all
          levels, providing an immersive and rewarding experience. Join these
          popular classes and take your dance skills to new heights while
          enjoying the camaraderie of fellow dancers who share your passion and
          enthusiasm.
        </p>
      </div>

      <div className="grid lg:grid-cols-3 gap-6">
        {topClasses.length > 0 &&
          topClasses.map((singleClass) => (
            <ClassCard
              key={singleClass._id}
              singleClass={singleClass}
            ></ClassCard>
          ))}
      </div>
    </section>
  );
};

export default PopularClasses;
