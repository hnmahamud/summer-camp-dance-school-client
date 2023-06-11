import { Helmet } from "react-helmet-async";
import Slider from "../Slider/Slider";
import PopularClasses from "../PopularClasses/PopularClasses";
import PopularInstructors from "../PopularInstructors/PopularInstructors";
import ContactUs from "../ContactUs/ContactUs";
import WhoWeAre from "../WhoWeAre/WhoWeAre";

const Home = () => {
  return (
    <>
      <Helmet>
        <title>DanceCampX - Home</title>
      </Helmet>
      <div>
        <Slider></Slider>
        <WhoWeAre></WhoWeAre>
        <PopularClasses></PopularClasses>
        <PopularInstructors></PopularInstructors>
        <ContactUs></ContactUs>
      </div>
    </>
  );
};

export default Home;
