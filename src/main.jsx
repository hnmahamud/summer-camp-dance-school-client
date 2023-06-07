import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import router from "./routes/Routes";
import { HelmetProvider } from "react-helmet-async";
import AuthProviders from "./context/AuthProviders";

ReactDOM.createRoot(document.getElementById("root")).render(
  <AuthProviders>
    <HelmetProvider>
      <RouterProvider router={router}></RouterProvider>
    </HelmetProvider>
  </AuthProviders>
);
