import AwesomeSlider from "react-awesome-slider";
import withAutoplay from "react-awesome-slider/dist/autoplay";
import "react-awesome-slider/dist/styles.css";
import "react-awesome-slider/dist/custom-animations/fall-animation.css";
import { Link } from "react-router-dom";

import img1 from "../../../assets/photos/slider/img2.jpg";
import img2 from "../../../assets/photos/slider/img4.jpg";
import img3 from "../../../assets/photos/slider/img3.jpg";
import img4 from "../../../assets/photos/slider/img1.jpg";

const AutoplaySlider = withAutoplay(AwesomeSlider);

const Slider = () => {
  return (
    <AutoplaySlider
      className="md:h-[calc(100vh-120px)] mb-16 mt-2"
      animation="fallAnimation"
      play={true}
      cancelOnInteraction={false} // should stop playing on user interaction
      interval={6000}
    >
      {/* Slider 1 */}
      <div className="relative">
        <img
          className="object-cover object-center h-full w-full"
          src={img1}
          alt="Slide 1"
        />
        <div className="bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)] absolute flex items-center gap-4 left-0 top-0 h-full">
          <div className="md:w-[50%] ml-4 md:ml-32 text-white space-y-2 md:space-y-4">
            <h1 className="md:text-4xl font-bold">
              Unleash Your Dance Potential!
            </h1>
            <p className="text-sm md:text-base hidden md:block">
              Ignite your passion for movement and discover the joy of dance at
              our dynamic dance camp!
            </p>
            <Link className="inline-flex items-center px-2 md:px-4 py-1 md:py-2 text-sm md:text-base font-medium text-center text-gray-900 bg-white border border-gray-300 rounded-md hover:bg-gray-100">
              Get in touch
            </Link>
          </div>
        </div>
      </div>
      {/* Slider 2 */}
      <div className="relative">
        <img src={img2} alt="Slide 2" />
        <div className="bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)] absolute flex items-center gap-4 left-0 top-0 h-full">
          <div className="md:w-[50%] ml-4 md:ml-32 text-white space-y-2 md:space-y-4">
            <h1 className="md:text-4xl font-bold">
              Discover the Rhythm Within!
            </h1>
            <p className="text-sm md:text-base hidden md:block">
              Elevate your dance journey and explore diverse styles in an
              inspiring and inclusive environment!
            </p>
            <Link className="inline-flex items-center px-2 md:px-4 py-1 md:py-2 text-sm md:text-base font-medium text-center text-gray-900 bg-white border border-gray-300 rounded-md hover:bg-gray-100">
              Get in touch
            </Link>
          </div>
        </div>
      </div>
      {/* Slider 3 */}
      <div className="relative">
        <img src={img3} alt="Slide 3" />
        <div className="bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)] absolute flex items-center gap-4 left-0 top-0 h-full">
          <div className="md:w-[50%] ml-4 md:ml-32 text-white space-y-2 md:space-y-4">
            <h1 className="md:text-4xl font-bold">Unlock the Power Within!</h1>
            <p className="text-sm md:text-base hidden md:block">
              Unleash your dance potential, push boundaries, and embrace your
              unique style at our transformative dance camp!
            </p>
            <Link className="inline-flex items-center px-2 md:px-4 py-1 md:py-2 text-sm md:text-base font-medium text-center text-gray-900 bg-white border border-gray-300 rounded-md hover:bg-gray-100">
              Get in touch
            </Link>
          </div>
        </div>
      </div>
      {/* Slider 4 */}
      <div className="relative">
        <img src={img4} alt="Slide 3" />
        <div className="bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)] absolute flex items-center gap-4 left-0 top-0 h-full">
          <div className="md:w-[50%] ml-4 md:ml-32 text-white space-y-2 md:space-y-4">
            <h1 className="md:text-4xl font-bold">
              Experience the Magic of Movement!
            </h1>
            <p className="text-sm md:text-base hidden md:block">
              Dance to your own beat and immerse yourself in the enchanting
              world of dance at our captivating dance camp!
            </p>
            <Link className="inline-flex items-center px-2 md:px-4 py-1 md:py-2 text-sm md:text-base font-medium text-center text-gray-900 bg-white border border-gray-300 rounded-md hover:bg-gray-100">
              Get in touch
            </Link>
          </div>
        </div>
      </div>
    </AutoplaySlider>
  );
};

export default Slider;
