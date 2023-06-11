import { Helmet } from "react-helmet-async";
import Slider from "../Slider/Slider";
import PopularClasses from "../PopularClasses/PopularClasses";
import PopularInstructors from "../PopularInstructors/PopularInstructors";
import ContactUs from "../ContactUs/ContactUs";

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
        <ContactUs></ContactUs>
      </div>
    </>
  );
};

export default Home;
