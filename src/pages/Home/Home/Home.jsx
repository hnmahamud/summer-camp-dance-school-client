import { Helmet } from "react-helmet-async";
import Slider from "../Slider/Slider";

const Home = () => {
  return (
    <>
      <Helmet>
        <title>DanceCampX - Home</title>
      </Helmet>
      <div>
        <Slider></Slider>
      </div>
    </>
  );
};

export default Home;
