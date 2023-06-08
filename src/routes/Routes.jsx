import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/Home/Home/Home";
import ErrorPage from "../pages/Shared/ErrorPage/ErrorPage";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import Dashboard from "../layout/Dashboard";
import PrivateRoute from "./PrivateRoute";
import AddClass from "../pages/Dashboard/Instructor/AddClass/AddClass";
import MyClass from "../pages/Dashboard/Instructor/MyClass/MyClass";
import UpdateClass from "../pages/Dashboard/Instructor/UpdateClass/UpdateClass";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
    ],
  },
  {
    path: "dashboard",
    element: (
      <PrivateRoute>
        <Dashboard></Dashboard>
      </PrivateRoute>
    ),
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      // Instructor
      {
        path: "add-class",
        element: <AddClass></AddClass>,
      },
      {
        path: "my-class",
        element: <MyClass></MyClass>,
      },
      {
        path: "update-class/:id",
        element: <UpdateClass></UpdateClass>,
      },
    ],
  },
]);

export default router;
