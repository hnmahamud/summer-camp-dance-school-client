import { Helmet } from "react-helmet-async";
import Slider from "../Slider/Slider";
import PopularClasses from "../PopularClasses/PopularClasses";
import PopularInstructors from "../PopularInstructors/PopularInstructors";

const Home = () => {
  return (
    <>
      <Helmet>
        <title>DanceCampX - Home</title>
      </Helmet>
      <div>
        <Slider></Slider>
        <PopularClasses></PopularClasses>
        <PopularInstructors></PopularInstructors>
      </div>
    </>
  );
};

export default Home;
