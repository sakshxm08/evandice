import { Link } from "react-router-dom";
import { login_bg } from "../assets/images/images";
import EvMail from "../assets/icons/EvMail";
import EvLock from "../assets/icons/EvLock";
import { IoEyeOffOutline, IoEye } from "react-icons/io5";
import { useRef, useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { FaApple } from "react-icons/fa";
import { BsFacebook } from "react-icons/bs";
const Login = () => {
  const [passHidden, setPassHidden] = useState(true);
  const pass_input = useRef();
  const togglePass = () => {
    setPassHidden(!passHidden);
    if (passHidden) pass_input.current.type = "text";
    else pass_input.current.type = "password";
  };
  return (
    <div className="w-screen h-screen relative">
      <div className="absolute w-full h-full top-0 -z-40">
        <img
          src={login_bg}
          className="w-full h-full -z-20 absolute top-0 left-0 opacity-40"
          alt=""
        />
        <div className="w-full h-full bg-gradient-to-l from-25% from-black absolute top-0 -z-10 left-0"></div>
      </div>
      <div className=" h-full flex items-center justify-between max-w-6xl w-11/12 mx-auto ">
        <h1 className=" font-title text-8xl uppercase w-2/3">
          Some text goes here
        </h1>
        <div className="w-1/3 flex flex-col justify-center gap-10 mt-14">
          <div className="flex flex-col gap-2">
            <h2 className="font-medium text-3xl">Sign in</h2>
            <div>
              If you don&apos;t have an account,{" "}
              <Link
                to="/register"
                className="text-[#C10C99] font-medium tracking-wide relative after:content-[''] after:absolute after:-bottom-1 after:bg-[#C10C99] after:w-0 after:h-px after:left-0 hover:after:w-full after:transition-all after:duration-300"
              >
                register here!
              </Link>{" "}
            </div>
          </div>
          <form className="flex flex-col justify-center gap-10">
            <div className="flex flex-col gap-3">
              <label htmlFor="email" className="text-sm">
                Email
              </label>
              <div className="relative w-full">
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Enter your email address"
                  className="bg-transparent border-b pb-2 pl-8 pr-2 font-light w-full outline-none focus:border-b-[#C10C99] transition-all"
                />
                <span className="absolute left-0 top-[2px]">
                  <EvMail width={20} />
                </span>
              </div>
            </div>
            <div className="flex flex-col gap-3">
              <label htmlFor="password" className="text-sm">
                Password
              </label>
              <div className="relative w-full">
                <input
                  ref={pass_input}
                  type="password"
                  name="password"
                  id="password"
                  placeholder="Enter your password"
                  className="bg-transparent border-b pb-2 pl-8 pr-8 font-light w-full outline-none focus:border-b-[#C10C99] transition-all"
                />
                <span className="absolute left-0 top-[2px]">
                  <EvLock width={18} />
                </span>
                <span
                  className="absolute right-0 top-[0px] cursor-pointer hover:bg-white hover:text-black rounded-full p-1 transition-all"
                  onClick={togglePass}
                >
                  {passHidden ? (
                    <IoEyeOffOutline size={20} />
                  ) : (
                    <IoEye size={20} />
                  )}
                </span>
              </div>
              <div className="flex justify-between items-center mt-2">
                <div className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    name="remember"
                    id="remember"
                    className="bg-transparent accent-[#C10C99]"
                  />
                  <label htmlFor="remember" className="text-xs">
                    Remember me
                  </label>
                </div>
                <div className="font-light text-xs relative cursor-pointer after:content-[''] after:absolute after:-bottom-1 after:bg-[#C10C99] after:w-0 after:h-px after:left-0 hover:after:w-full after:transition-all after:duration-300">
                  Forgot Password?
                </div>
              </div>
            </div>
            <button className="rounded-full w-full py-3 text-sm hover:bg-[#C10C99]/70 transition-all bg-[#C10C99]">
              Login
            </button>
          </form>
          <div className=" flex items-center justify-center text-sm text-gray-400">
            or continue with
          </div>
          <div className="flex items-center justify-center gap-6">
            <span className="rounded-full  p-0 hover:bg-[#316FF6] outline outline-transparent hover:outline-white outline-offset-8 hover:text-white transition-all cursor-pointer h-fit w-fit text-[#316FF6] bg-white">
              <BsFacebook size={32} />
            </span>
            <span className="rounded-full  hover:bg-[#808080] outline outline-transparent hover:outline-[#808080] outline-offset-8 hover:text-white transition-all cursor-pointer h-max p-[6px] aspect-square text-[#808080] bg-white">
              <FaApple size={24} />
            </span>
            <span className="rounded-full p-0 bg-black hover:bg-white outline outline-transparent hover:outline-white outline-offset-8 transition-all cursor-pointer w-fit h-fit">
              <FcGoogle size={34} />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
