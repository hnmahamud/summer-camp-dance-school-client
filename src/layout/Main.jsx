import { Outlet } from "react-router-dom";
import NavBar from "../pages/Shared/NavBar/NavBar";
import Footer from "../pages/Shared/Footer/Footer";
import useAuth from "../hooks/useAuth";
import LoadingSpinner from "../components/LoadingSpinner/LoadingSpinner";

const Main = () => {
  const { fullLoading } = useAuth();
  if (fullLoading) {
    return <LoadingSpinner fullScreen={true}></LoadingSpinner>;
  }

  return (
    <div className="w-[95%] md:w-[80%] mx-auto">
      <NavBar></NavBar>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default Main;
