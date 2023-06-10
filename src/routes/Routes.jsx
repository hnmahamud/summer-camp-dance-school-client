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
import ManageClasses from "../pages/Dashboard/Admin/ManageClasses/ManageClasses";
import ManageUsers from "../pages/Dashboard/Admin/ManageUsers/ManageUsers";
import Classes from "../pages/Classes/Classes";
import SelectedClasses from "../pages/Dashboard/Student/SelectedClasses/SelectedClasses";
import Payment from "../pages/Dashboard/Student/Payment/Payment";
import EnrolledClasses from "../pages/Dashboard/Student/EnrolledClasses/EnrolledClasses";
import PaymentsHistory from "../pages/Dashboard/Student/PaymentsHistory/PaymentsHistory";
import Instructors from "../pages/Instructors/Instructors";

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
        path: "/instructors",
        element: <Instructors></Instructors>,
      },
      {
        path: "/classes",
        element: <Classes></Classes>,
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
      // Admin
      {
        path: "manage-classes",
        element: <ManageClasses></ManageClasses>,
      },
      {
        path: "manage-users",
        element: <ManageUsers></ManageUsers>,
      },
      // Student
      {
        path: "selected-classes",
        element: <SelectedClasses></SelectedClasses>,
      },
      {
        path: "payment/:id",
        element: <Payment></Payment>,
      },
      {
        path: "enrolled-classes",
        element: <EnrolledClasses></EnrolledClasses>,
      },
      {
        path: "payments-history",
        element: <PaymentsHistory></PaymentsHistory>,
      },
    ],
  },
]);

export default router;
