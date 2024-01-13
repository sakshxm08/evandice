// import { Link } from "react-router-dom";

import { FcGoogle } from "react-icons/fc";
import { RxGithubLogo } from "react-icons/rx";
import { useRef } from "react";
import { login_bg } from "../assets/images/images";
import { IoEyeOffOutline, IoEye } from "react-icons/io5";

import { useState } from "react";
// import Theme from "../../context/darkModeContext";
// import DarkModeToggle from "../../components/DarkModeToggle";

const Auth = () => {
  //   const { darkMode } = useContext(Theme);
  const loginScreen = useRef();
  const imgText = useRef();
  const shift = () => {
    loginScreen.current.classList.toggle("-translate-x-[41%]");
    imgText.current.classList.toggle("-translate-x-1/2");
  };

  const [loginPassword, setLoginPassword] = useState("");
  const [signupPassword, setSignupPassword] = useState("");
  const [loginPassHidden, setLoginPassHidden] = useState(true);
  const [signupPassHidden, setSignupPassHidden] = useState(true);

  const login_pass_input = useRef();
  const signup_pass_input = useRef();

  const toggleLoginPass = () => {
    setLoginPassHidden(!loginPassHidden);
    if (loginPassHidden) login_pass_input.current.type = "text";
    else login_pass_input.current.type = "password";
  };
  const toggleSignupPass = () => {
    setSignupPassHidden(!signupPassHidden);
    if (signupPassHidden) signup_pass_input.current.type = "text";
    else signup_pass_input.current.type = "password";
  };

  return (
    <div
      className="flex justify-between w-[170%] duration-700"
      ref={loginScreen}
    >
      <div className="w-2/3 px-16 pt-20 duration-700 origin-left">
        {/* <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center gap-4">
            <img
              src={darkMode ? logoLight : logoDark}
              className="w-10"
              alt=""
            />
            <span className="text-3xl font-bold dark:text-gray-50">
              ProMize
            </span>
          </Link>
          <DarkModeToggle />
        </div> */}
        <div className=" w-2/3 flex items-center justify-center mx-auto flex-col gap-8 mt-14">
          <h1 className="text-5xl font-extrabold ">Login to Your Account</h1>
          <div className="flex flex-col items-center justify-center gap-4">
            <button className="border w-fit rounded-full px-12 py-2 flex gap-4 hover:bg-yellow/20 active:bg-yellow/40 transition-all items-center text-sm justify-center">
              <FcGoogle className="text-2xl" />
              Login with Google
            </button>
            <button className="border w-fit rounded-full px-12 py-2 flex gap-4 hover:bg-yellow/20 active:bg-yellow/40 transition-all items-center text-sm justify-center">
              <RxGithubLogo className="text-2xl" />
              Login with Github
            </button>
          </div>
          <div className="flex gap-4 justify-center items-center w-full text-slate-400 text-xs">
            <span className="w-full flex-grow h-[1px] bg-slate-300"></span>or
            <span className="w-full h-[1px] flex-grow bg-slate-300"></span>
          </div>
          <div className="w-full flex justify-center items-center gap-4 flex-col">
            <div className="flex flex-col w-full gap-1">
              <label htmlFor="email-login" className="text-xs text-slate-400">
                Email
              </label>
              <input
                type="email"
                name="email-login"
                id="email-login"
                className="w-full px-3 placeholder:text-slate-500 py-2 rounded-lg border text-sm bg-transparent text-slate-100 focus-visible:border-yellow outline-none"
                placeholder="user@evandize.com"
              />
            </div>
            <div className="w-full flex flex-col gap-4  items-center justify-center">
              <div className="flex flex-col w-full gap-1">
                <label
                  htmlFor="password-login"
                  className="text-xs text-slate-300"
                >
                  Password
                </label>
                <div className="relative">
                  <input
                    ref={login_pass_input}
                    type="password"
                    name="password-login"
                    id="password-login"
                    value={loginPassword}
                    onChange={(e) => setLoginPassword(e.target.value)}
                    className="w-full px-3 placeholder:text-slate-500 py-2 rounded-lg border text-sm bg-transparent text-slate-100 focus-visible:border-yellow outline-none"
                    placeholder="Min. 8 characters"
                  />
                  <span
                    className="absolute right-2 top-[6px] cursor-pointer hover:bg-white hover:text-black rounded-full p-1 transition-all"
                    onClick={toggleLoginPass}
                  >
                    {loginPassHidden ? (
                      <IoEyeOffOutline size={16} />
                    ) : (
                      <IoEye size={16} />
                    )}
                  </span>
                </div>
              </div>
              <div className=" w-full px-2 flex justify-between items-center text-xs">
                <div className="flex gap-2 justify-center items-center">
                  <input
                    type="checkbox"
                    name="remember"
                    id="remember"
                    className=" accent-yellow"
                  />
                  <label htmlFor="remember" className="text-slate-300">
                    Remember Me
                  </label>
                </div>
                <div className="text-yellow  hover:text-yellow/80 transition-all relative cursor-pointer after:absolute after:bottom-0 py-1 after:left-0 after:w-full after:h-[1px] after:bg-yellow after:opacity-0 after:transition-all hover:after:opacity-100">
                  Forgot Password?
                </div>
              </div>
            </div>
          </div>
          <button className="bg-yellow hover:bg-yellow/80 active:bg-yellow/70 transition-all text-black w-1/3 px-4 py-3 text-sm rounded-full">
            Sign In
          </button>
        </div>
      </div>
      <div className="w-1/3 relative h-screen overflow-hidden object-cover">
        <img
          src={login_bg}
          className="w-auto object-cover min-h-screen -z-20 absolute top-0 left-0 opacity-40"
          alt=""
        />
        <div className="w-full h-full bg-black/20 absolute top-0 -z-10 left-0"></div>
        <div
          className="w-[200%] flex h-full items-center justify-center overflow-hidden duration-700 -translate-x-1/2"
          ref={imgText}
        >
          <div className="flex overflow-hidden w-1/2 origin-bottom duration-500 flex-col justify-center items-center text-white h-full gap-8">
            <h1 className="text-5xl drop-shadow-2xl font-bold">
              Already a user?
            </h1>
            <div className="text-xl font-light text-center text-slate-300 px-20 tracking-wider">
              Login to your account
            </div>
            <button
              onClick={shift}
              className="py-2 px-20 border border-white text-white hover:text-black hover:border-yellow font-medium mt-6 hover:bg-yellow transition-all rounded-full shadow-lg"
            >
              Login
            </button>
          </div>
          <div className="flex overflow-hidden w-1/2 origin-top duration-500 flex-col justify-center items-center text-white h-full gap-8">
            <h1 className="text-5xl drop-shadow-2xl font-bold">New Here?</h1>
            <div className="text-xl font-light text-center text-slate-300 px-20 tracking-wider">
              Sign up and discover a great amount of new opportunities
            </div>
            <button
              onClick={shift}
              className="py-2 px-20 border border-white text-white hover:text-black hover:border-yellow font-medium mt-6 hover:bg-yellow transition-all rounded-full shadow-lg"
            >
              Sign Up
            </button>
          </div>
        </div>
      </div>

      <div className="w-2/3 px-16 pt-20 duration-700 origin-right">
        {/* <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center gap-4">
            <img
              src={darkMode ? logoLight : logoDark}
              className="w-10"
              alt=""
            />
            <span className="text-3xl font-bold dark:text-gray-50">
              ProMize
            </span>
          </Link>
          <DarkModeToggle />
        </div> */}
        <div className=" w-2/3 flex items-center justify-center mx-auto flex-col gap-8 mt-14 dark:text-gray-50">
          <h1 className="text-5xl font-extrabold ">Create an Account</h1>
          <div className="flex flex-col items-center justify-center gap-4">
            <button className="border w-fit rounded-full px-12 py-2 flex gap-4 hover:bg-yellow/20 active:bg-yellow/40 transition-all items-center text-sm justify-center">
              <FcGoogle className="text-2xl" />
              Signup with Google
            </button>
            <button className="border w-fit rounded-full px-12 py-2 flex gap-4 hover:bg-yellow/20 active:bg-yellow/40 transition-all items-center text-sm justify-center">
              <RxGithubLogo className="text-2xl" />
              Signup with Github
            </button>
          </div>
          <div className="flex gap-4 justify-center items-center w-full text-slate-400 text-xs">
            <span className="w-full flex-grow h-[1px] bg-slate-300"></span>
            <span className="whitespace-nowrap"> or continue with email</span>
            <span className="w-full h-[1px] flex-grow bg-slate-300"></span>
          </div>

          <form className="w-full flex justify-center items-center gap-4 flex-col">
            <div className="flex flex-col w-full gap-1">
              <label
                htmlFor="fname"
                className="text-xs text-slate-400 dark:text-slate-300"
              >
                Name
              </label>
              <div className="flex  gap-2 items-center justify-between">
                <input
                  type="text"
                  name="fname"
                  id="fname"
                  className="w-full px-3 placeholder:text-slate-500 py-2 rounded-lg border text-sm bg-transparent text-slate-100 focus-visible:border-yellow outline-none"
                  placeholder="First"
                />
                <input
                  name="lname"
                  id="lname"
                  type="text"
                  className="w-full px-3 placeholder:text-slate-500 py-2 rounded-lg border text-sm bg-transparent text-slate-100 focus-visible:border-yellow outline-none"
                  placeholder="Last"
                />
              </div>
            </div>
            <div className="flex flex-col w-full gap-1">
              <label
                htmlFor="email-signup"
                className="text-xs text-slate-400 dark:text-slate-300"
              >
                Email
              </label>
              <input
                type="email"
                name="email-signup"
                id="email-signup"
                className="w-full px-3 placeholder:text-slate-500 py-2 rounded-lg border text-sm bg-transparent text-slate-100 focus-visible:border-yellow outline-none"
                placeholder="user@evandize.com"
              />
            </div>

            <div className="flex flex-col w-full gap-1">
              <label
                htmlFor="password-signup"
                className="text-xs text-slate-400 dark:text-slate-300"
              >
                Password
              </label>
              <div className="relative">
                <input
                  ref={signup_pass_input}
                  type="password"
                  name="password-login"
                  id="password-login"
                  value={signupPassword}
                  onChange={(e) => setSignupPassword(e.target.value)}
                  className="w-full px-3 placeholder:text-slate-500 py-2 rounded-lg border text-sm bg-transparent text-slate-100 focus-visible:border-yellow outline-none"
                  placeholder="Min. 8 characters"
                />
                <span
                  className="absolute right-2 top-[6px] cursor-pointer hover:bg-white hover:text-black rounded-full p-1 transition-all"
                  onClick={toggleSignupPass}
                >
                  {signupPassHidden ? (
                    <IoEyeOffOutline size={16} />
                  ) : (
                    <IoEye size={16} />
                  )}
                </span>
              </div>
            </div>
          </form>
          <button className="bg-yellow hover:bg-yellow/80 active:bg-yellow/70 transition-all text-black w-1/3 px-4 py-3 text-sm rounded-full">
            Sign Up
          </button>
        </div>
      </div>
    </div>
  );
};

export default Auth;
