import {
  createBrowserRouter,
  RouterProvider,
  ScrollRestoration,
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

const Layout = () => (
  <>
    <Header />
    <ScrollRestoration />
    <Outlet />
    <Footer />
  </>
);

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
          path: "profile",
          element: <Profile />,
        },
      ],
    },
  ]);
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
