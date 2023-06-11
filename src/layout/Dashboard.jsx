import { NavLink, Outlet } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import LoadingSpinner from "../components/LoadingSpinner/LoadingSpinner";
import {
  FaAddressCard,
  FaCheckCircle,
  FaCreditCard,
  FaHome,
  FaPlusCircle,
  FaSignInAlt,
  FaUserCog,
  FaUsers,
} from "react-icons/fa";
import Swal from "sweetalert2";
import useRole from "../hooks/useRole";
import { Helmet } from "react-helmet-async";

const Dashboard = () => {
  // Context API
  const { user, fullLoading, logout } = useAuth();
  const [role, isRoleLoading] = useRole();

  const logoutHandler = () => {
    logout()
      .then(() => {
        const Toast = Swal.mixin({
          toast: true,
          position: "top-end",
          showConfirmButton: false,
          timer: 3000,
          timerProgressBar: true,
          didOpen: (toast) => {
            toast.addEventListener("mouseenter", Swal.stopTimer);
            toast.addEventListener("mouseleave", Swal.resumeTimer);
          },
        });

        Toast.fire({
          icon: "success",
          title: "Logout successful!",
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  if (fullLoading || isRoleLoading) {
    return <LoadingSpinner fullScreen={true}></LoadingSpinner>;
  }

  return (
    <>
      <Helmet>
        <title>DanceCampX - Dashboard</title>
      </Helmet>
      <div className="drawer lg:drawer-open">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content">
          <div className="navbar bg-base-200 lg:hidden">
            <div className="navbar-start"></div>
            <div className="navbar-center"></div>
            <div className="navbar-end">
              <label
                htmlFor="my-drawer-2"
                tabIndex={0}
                className="btn btn-ghost btn-circle"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h7"
                  />
                </svg>
              </label>
            </div>
          </div>

          <div>
            <Outlet></Outlet>
          </div>
        </div>
        <div className="drawer-side">
          <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
          <ul className="menu p-4 w-80 h-full bg-base-200 text-base-content">
            {/* Sidebar content here */}
            <div className="flex flex-col ml-16">
              <div className="avatar">
                <div className="w-20 rounded-full">
                  <img src={user?.photoURL} />
                </div>
              </div>
              <h3 className="text-xl font-bold text-gray-600 mt-2">
                {user?.displayName}
              </h3>
              <h5 className="text-sm text-gray-600 mt-2">{user?.email}</h5>
            </div>

            {/* Divider */}
            <div className="divider"></div>

            {/* Dynamic */}
            <div className="text-base flex flex-col space-y-6 ml-16">
              {role === "instructor" ? (
                <>
                  <NavLink
                    to="/dashboard/add-class"
                    className={({ isActive }) =>
                      isActive
                        ? "text-blue-700 flex items-center gap-2"
                        : "flex items-center gap-2"
                    }
                  >
                    <FaAddressCard></FaAddressCard>
                    <span>Add a Class</span>
                  </NavLink>
                  <NavLink
                    to="/dashboard/my-class"
                    className={({ isActive }) =>
                      isActive
                        ? "text-blue-700 flex items-center gap-2"
                        : "flex items-center gap-2"
                    }
                  >
                    <FaUsers></FaUsers>
                    <span>My Classes</span>
                  </NavLink>
                </>
              ) : role === "admin" ? (
                <>
                  <NavLink
                    to="/dashboard/manage-classes"
                    className={({ isActive }) =>
                      isActive
                        ? "text-blue-700 flex items-center gap-2"
                        : "flex items-center gap-2"
                    }
                  >
                    <FaUsers></FaUsers>
                    <span>Manage Classes</span>
                  </NavLink>
                  <NavLink
                    to="/dashboard/manage-users"
                    className={({ isActive }) =>
                      isActive
                        ? "text-blue-700 flex items-center gap-2"
                        : "flex items-center gap-2"
                    }
                  >
                    <FaUserCog></FaUserCog>
                    <span>Manage Users</span>
                  </NavLink>
                </>
              ) : (
                <>
                  <NavLink
                    to="/dashboard/selected-classes"
                    className={({ isActive }) =>
                      isActive
                        ? "text-blue-700 flex items-center gap-2"
                        : "flex items-center gap-2"
                    }
                  >
                    <FaCheckCircle></FaCheckCircle>
                    <span>Selected Classes</span>
                  </NavLink>
                  <NavLink
                    to="/dashboard/enrolled-classes"
                    className={({ isActive }) =>
                      isActive
                        ? "text-blue-700 flex items-center gap-2"
                        : "flex items-center gap-2"
                    }
                  >
                    <FaPlusCircle></FaPlusCircle>
                    <span>Enrolled Classes</span>
                  </NavLink>
                  <NavLink
                    to="/dashboard/payments-history"
                    className={({ isActive }) =>
                      isActive
                        ? "text-blue-700 flex items-center gap-2"
                        : "flex items-center gap-2"
                    }
                  >
                    <FaCreditCard></FaCreditCard>
                    <span>Payments History</span>
                  </NavLink>
                </>
              )}
            </div>

            {/* Divider */}
            <div className="divider"></div>

            {/* Common */}
            <div className="text-base flex flex-col space-y-6 ml-16">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive
                    ? "text-blue-700 flex items-center gap-2"
                    : "flex items-center gap-2"
                }
              >
                <FaHome></FaHome>
                <span>Home</span>
              </NavLink>
              <button
                onClick={logoutHandler}
                className="flex items-center gap-2"
              >
                <FaSignInAlt></FaSignInAlt>
                <span>Logout</span>
              </button>
            </div>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
