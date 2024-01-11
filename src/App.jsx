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
import { ToastContainer } from "react-toastify";
import { AddEvent } from "./routes/AddEvent/AddEvent";
import { AllEvents } from "./routes/AllEvents";
import { useAuthContext } from "./hooks/useAuthContext";
import { AddFest } from "./routes/RegisterFest/AddFest";
import { Verify } from "./routes/AddEvent/Verify";
import { background } from "./assets/images/images";
import { PropTypes } from "prop-types";
const Layout = () => (
  <>
    <Header />
    <ScrollRestoration />
    <Outlet />
    <Footer />
  </>
);

const AddBgLayout = ({ heading }) => (
  <div className="relative">
    <div className="absolute top-0 left-0 h-full min-h-screen -z-50 overflow-hidden w-screen">
      <img
        src={background}
        alt="background"
        className="w-screen h-auto brightness-90"
      />
      <div className="absolute inset-0 h-full w-screen bg-gradient-to-t from-50% from-black"></div>
    </div>
    <div className="py-32 max-w-7xl w-11/12 mx-auto">
      <h1 className="text-5xl md:text-title font-title uppercase mx-auto text-center mb-16">
        {heading}
      </h1>
      <Outlet />
    </div>
  </div>
);
function App() {
  const { user } = useAuthContext();

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
          element: user ? <Navigate to="/" /> : <Login />,
        },
        {
          path: "signup",
          element: user ? <Navigate to="/" /> : <Signup />,
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
          path: "add_event",
          element: <AddBgLayout heading={"add an event"} />,
          children: [
            {
              path: "form",
              element: <AddEvent />,
            },
            {
              path: "verify",
              element: <Verify />,
            },
          ],
        },
        {
          path: "add_fest",
          element: <AddBgLayout heading={"create a new fest"} />,
          children: [
            {
              path: "form",
              element: <AddFest />,
            },
            {
              path: "verify",
              element: <Verify />,
            },
          ],
        },
        {
          path: "all_events",
          element: <AllEvents />,
        },

        {
          // Make the "profile" route protected
          path: "profile",
          element: !user ? <Navigate to="/login" replace /> : <Profile />,
        },
      ],
    },
  ]);

  return (
    <>
      <ToastContainer style={{ top: "100px" }} />

      <RouterProvider router={router} />
    </>
  );
}

export default App;

AddBgLayout.propTypes = {
  heading: PropTypes.string,
};
