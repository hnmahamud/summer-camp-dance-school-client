import { Helmet } from "react-helmet-async";
import Slider from "../Slider/Slider";
import PopularClasses from "../PopularClasses/PopularClasses";
import PopularInstructors from "../PopularInstructors/PopularInstructors";
import ContactUs from "../ContactUs/ContactUs";
import WhoWeAre from "../WhoWeAre/WhoWeAre";
import GetReady from "../GetReady/GetReady";
import { useLocation } from "react-router-dom";
import useScrollTop from "../../../hooks/useScrollTop";

const Home = () => {
  // Custom hook
  const { pathname } = useLocation();
  useScrollTop(pathname);

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
        <GetReady></GetReady>
        <ContactUs></ContactUs>
      </div>
    </>
  );
};

export default Home;
