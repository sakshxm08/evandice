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
import About from "./routes/About";
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
import Auth from "./routes/Auth";
import { AllCompetitions } from "./routes/AllCompetitions";
import { CreatePlan } from "./routes/RegisterFest/CreatePlan";
import { ScreenLoader } from "./components/ScreenLoader";
const Layout = () => (
  <>
    <Header />
    <ScrollRestoration />
    <Outlet />
    <Footer />
  </>
);

const AddBgLayout = ({ heading, mHeading = "mb-16" }) => (
  <div className="relative">
    <div className="absolute top-0 left-0 h-full -z-50 overflow-hidden object-cover">
      <img
        src={background}
        alt=""
        className="h-full w-screen object-cover object-center"
      />
      <div className="absolute inset-0 h-full w-screen bg-gradient-to-t from-50% from-black"></div>
    </div>
    <div className="py-32 flex flex-col items-center justify-center max-w-7xl w-11/12 mx-auto gap-10">
      {heading && (
        <h1
          className={`text-5xl md:text-title font-title uppercase mx-auto text-center ${mHeading}`}
        >
          {heading}
        </h1>
      )}
      <Outlet />
    </div>
  </div>
);
function App() {
  const { user, userFetched } = useAuthContext();
  console.log(userFetched);

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
          path: "auth",
          children: [
            {
              path: "",
              element: !userFetched ? (
                <ScreenLoader />
              ) : user ? (
                <Navigate to={"/"} />
              ) : (
                <Navigate to="login" />
              ),
            },
            {
              path: "login",
              element: !userFetched ? (
                <ScreenLoader />
              ) : user ? (
                <Navigate to={"/"} />
              ) : (
                <Auth type="login" />
              ),
            },
            {
              path: "signup",
              element: !userFetched ? (
                <ScreenLoader />
              ) : user ? (
                <Navigate to={"/"} />
              ) : (
                <Auth type="signup" />
              ),
            },
          ],
        },
        {
          path: "about",
          element: <About />,
        },
        {
          path: "events/:id",
          element: <AddBgLayout />,
          children: [
            {
              path: "",
              element: <Event />,
            },
          ],
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
            {
              path: "create_plan",
              element: <CreatePlan />,
            },
          ],
        },
        {
          path: "all_events",
          element: <AddBgLayout heading={"events"} mHeading="mb-0" />,
          children: [
            {
              path: "",
              element: <AllEvents />,
            },
          ],
        },
        {
          path: "all_competitions",
          element: <AddBgLayout heading={"competitions"} mHeading="mb-0" />,
          children: [
            {
              path: "",
              element: <AllCompetitions />,
            },
          ],
        },

        {
          // Make the "profile" route protected
          path: "profile",
          element: !userFetched ? (
            <ScreenLoader />
          ) : !user ? (
            <Navigate to="/auth/login" replace />
          ) : (
            <AddBgLayout heading={"my profile"} mHeading="mb-0" />
          ),
          children: [
            {
              path: "",
              element: <Profile />,
            },
          ],
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
  mHeading: PropTypes.string,
};
