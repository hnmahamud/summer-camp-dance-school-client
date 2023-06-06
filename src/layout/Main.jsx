import { Outlet } from "react-router-dom";
import NavBar from "../pages/Shared/NavBar/NavBar";

const Main = () => {
  return (
    <div className="w-[95%] md:w-[80%] mx-auto">
      <NavBar></NavBar>
      <Outlet></Outlet>
    </div>
  );
};

export default Main;
