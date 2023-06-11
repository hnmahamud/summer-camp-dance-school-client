import { Helmet } from "react-helmet-async";
import Slider from "../Slider/Slider";
import PopularClasses from "../PopularClasses/PopularClasses";

const Home = () => {
  return (
    <>
      <Helmet>
        <title>DanceCampX - Home</title>
      </Helmet>
      <div>
        <Slider></Slider>
        <PopularClasses></PopularClasses>
      </div>
    </>
  );
};

export default Home;
