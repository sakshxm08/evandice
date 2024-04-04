import { IoEyeOffOutline, IoEye } from "react-icons/io5";
import { useRef, useState } from "react";
// import { FcGoogle } from "react-icons/fc";
import { useLogin } from "../hooks/useLogin";
import { setValues } from "../services/helperFunctions";
const Login = () => {
  // Login Hook
  const { login, isLoading } = useLogin();

  // Form Details State Object
  const [formDetails, setFormDetails] = useState({
    email: "",
    password: "",
  });

  // Password hidden state
  const [passHidden, setPassHidden] = useState(true);

  // References of DOM
  const pass_input = useRef();

  // Toggle Password Visibility
  const togglePass = () => {
    setPassHidden(!passHidden);
    if (passHidden) pass_input.current.type = "text";
    else pass_input.current.type = "password";
  };

  // Submitting the form
  const handleSignin = async (e) => {
    e.preventDefault();
    await login(formDetails);
  };

  return (
    <div className=" w-2/3 flex items-center justify-center mx-auto flex-col gap-8 mt-48">
      <h1 className="text-5xl font-extrabold ">Login to Your Account</h1>
      {/* <div className="flex flex-col items-center justify-center gap-4">
          <button className="border w-fit rounded-full px-12 py-2 flex gap-4 hover:bg-yellow/20 active:bg-yellow/40 transition-all items-center text-sm justify-center">
            <FcGoogle className="text-2xl" />
            Login with Google
          </button>
        </div> */}
      {/* <div className="flex gap-4 justify-center items-center w-full text-slate-400 text-xs">
          <span className="w-full flex-grow h-[1px] bg-slate-300"></span>or
          <span className="w-full h-[1px] flex-grow bg-slate-300"></span>
        </div> */}
      <form
        onSubmit={handleSignin}
        className="w-full flex justify-center items-center gap-4 flex-col"
      >
        <div className="flex flex-col w-full gap-1">
          <label htmlFor="email" className="text-xs text-slate-400">
            Email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            value={formDetails.email}
            onChange={(e) => setValues(e, formDetails, setFormDetails)}
            className="w-full px-3 placeholder:text-gray-600 py-2 rounded-lg border text-sm bg-transparent text-slate-100 focus-visible:border-yellow outline-none"
            placeholder="user@evandize.com"
          />
        </div>
        <div className="w-full flex flex-col gap-4  items-center justify-center">
          <div className="flex flex-col w-full gap-1">
            <label htmlFor="password" className="text-xs text-slate-300">
              Password
            </label>
            <div className="relative">
              <input
                ref={pass_input}
                type="password"
                name="password"
                id="password"
                value={formDetails.password}
                onChange={(e) => setValues(e, formDetails, setFormDetails)}
                className="w-full px-3 placeholder:text-gray-600 py-2 rounded-lg border text-sm bg-transparent text-slate-100 focus-visible:border-yellow outline-none"
                placeholder="Min. 8 characters"
              />
              <span
                className="absolute right-2 top-[6px] cursor-pointer hover:bg-white hover:text-black rounded-full p-1 transition-all"
                onClick={togglePass}
              >
                {passHidden ? (
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
            {/* <div className="text-yellow  hover:text-yellow/80 transition-all relative cursor-pointer after:absolute after:bottom-0 py-1 after:left-0 after:w-full after:h-[1px] after:bg-yellow after:opacity-0 after:transition-all hover:after:opacity-100">
              Forgot Password?
            </div> */}
          </div>
        </div>
        <button
          disabled={isLoading}
          className="bg-yellow mt-4 disabled:opacity-50 hover:bg-yellow/80 active:bg-yellow/70 transition-all text-black w-1/3 px-4 py-3 text-sm rounded-full"
        >
          Sign{isLoading ? "ing" : ""} In{isLoading ? "..." : ""}
        </button>
      </form>
    </div>
  );
};

export default Login;
