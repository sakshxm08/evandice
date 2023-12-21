import {
  createBrowserRouter,
  RouterProvider,
  ScrollRestoration,
  Navigate,
} from "react-router-dom";
import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./routes/Home";
import Login from "./routes/Login";
import About from "./routes/About";
import Signup from "./routes/Signup";
import Event from "./routes/Event";
import Profile from "./routes/Profile";
import "react-toastify/dist/ReactToastify.min.css";
import PropTypes from "prop-types";
import { ToastContainer } from "react-toastify";
import { AuthContextProvider } from "./context/AuthContext";

const Layout = () => (
  <>
    <Header />
    <ScrollRestoration />
    <Outlet />
    <Footer />
  </>
);

const PrivateRoute = ({ element }) => {
  // Check if the user is authenticated
  const isAuthenticated = localStorage.getItem("token") !== null;

  return isAuthenticated ? element : <Navigate to="/login" replace />;
};

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "",
          element: <Home />,
        },
        {
          path: "login",
          element: <Login />,
        },
        {
          path: "register",
          element: <Signup />,
        },
        {
          path: "about",
          element: <About />,
        },
        {
          path: "events/:id",
          element: <Event />,
        },
        {
          // Make the "profile" route protected
          path: "profile",
          element: <PrivateRoute element={<Profile />} />,
        },
      ],
    },
  ]);

  return (
    <>
      <ToastContainer style={{ top: "100px" }} />
      <AuthContextProvider>
        <RouterProvider router={router} />
      </AuthContextProvider>
    </>
  );
}

export default App;

PrivateRoute.propTypes = {
  element: PropTypes.node.isRequired,
};
