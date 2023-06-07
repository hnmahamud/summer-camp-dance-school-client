import { Navigate, useLocation } from "react-router-dom";
import LoadingSpinner from "../components/LoadingSpinner/LoadingSpinner";
import useAuth from "../hooks/useAuth";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useAuth();

  // Use Location for remember user target page
  const location = useLocation();

  // if user is not available then return
  if (loading) {
    return <LoadingSpinner fullScreen={true}></LoadingSpinner>;
  }

  // if user is logged in then go to private target page
  if (user) {
    return children;
  }

  // if user is not logged in then don't go to private target page. Navigate login page
  return <Navigate to="/login" state={location?.pathname} replace></Navigate>;
};

export default PrivateRoute;
