import { useRef } from "react";
import { login_bg } from "../assets/images/images";
import { Link } from "react-router-dom";
import { PropTypes } from "prop-types";
import Signup from "./Signup";
import Login from "./Login";

const AuthComponent = ({ type }) => {
  const loginScreen = useRef();
  const imgText = useRef();

  return (
    <div
      className={`flex justify-between w-[170%] duration-700 ${
        type === "signup" ? "-translate-x-[41%]" : ""
      }`}
      ref={loginScreen}
    >
      <Login />
      <div className="w-1/3 relative h-screen overflow-hidden object-cover">
        <img
          src={login_bg}
          className="w-auto object-cover min-h-screen -z-20 absolute top-0 left-0 opacity-40"
          alt=""
        />
        <div className="w-full h-full bg-black/20 absolute top-0 -z-10 left-0"></div>
        <div
          className={`w-[200%] flex h-full items-center justify-center overflow-hidden duration-700  ${
            type === "signup" ? "" : "-translate-x-1/2"
          }`}
          ref={imgText}
        >
          <div className="flex overflow-hidden w-1/2 origin-bottom duration-500 flex-col justify-center items-center text-white h-full gap-8">
            <h1 className="text-5xl drop-shadow-2xl font-bold">
              Already a user?
            </h1>
            <div className="text-xl font-light text-center text-slate-300 px-20 tracking-wider">
              Login to your account
            </div>
            <Link
              to="/auth/login"
              replace
              className="py-2 px-20 border border-white text-white hover:text-black hover:border-yellow font-medium mt-6 hover:bg-yellow transition-all rounded-full shadow-lg"
            >
              Login
            </Link>
          </div>
          <div className="flex overflow-hidden w-1/2 origin-top duration-500 flex-col justify-center items-center text-white h-full gap-8">
            <h1 className="text-5xl drop-shadow-2xl font-bold">New Here?</h1>
            <div className="text-xl font-light text-center text-slate-300 px-20 tracking-wider">
              Sign up and discover a great amount of new opportunities
            </div>
            <Link
              to="/auth/signup"
              replace
              className="py-2 px-20 border border-white text-white hover:text-black hover:border-yellow font-medium mt-6 hover:bg-yellow transition-all rounded-full shadow-lg"
            >
              Sign Up
            </Link>
          </div>
        </div>
      </div>
      <Signup />
    </div>
  );
};

export default AuthComponent;

AuthComponent.propTypes = {
  type: PropTypes.string,
};
