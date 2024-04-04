import { IoEyeOffOutline, IoEye } from "react-icons/io5";
import { useRef, useState } from "react";
// import { FcGoogle } from "react-icons/fc";
import { useSignup } from "../hooks/useSignup";
import { setValues } from "../services/helperFunctions";

const Signup = () => {
  // Signup Hook
  const { signup, isLoading } = useSignup();

  // Form Details State Object
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confPassword: "",
  });

  // Password hidden states
  const [passHidden, setPassHidden] = useState(true);
  const [confPassHidden, setConfPassHidden] = useState(true);

  // References of DOM
  const pass_input = useRef();
  const conf_pass_input = useRef();

  // Toggle Password Visibility
  const togglePass = (hidden, setHidden, input) => {
    setHidden(!hidden);
    if (hidden) input.current.type = "text";
    else input.current.type = "password";
  };

  // Submitting the form
  const handleSignup = async (e) => {
    e.preventDefault();
    await signup(formData);
  };

  return (
    <div className=" w-2/3 flex items-center justify-center mx-auto flex-col gap-8 mt-28 dark:text-gray-50">
      <h1 className="text-5xl font-extrabold ">Create an Account</h1>
      {/* <div className="flex flex-col items-center justify-center gap-4">
          <button className="border w-fit rounded-full px-12 py-2 flex gap-4 hover:bg-yellow/20 active:bg-yellow/40 transition-all items-center text-sm justify-center">
            <FcGoogle className="text-2xl" />
            Signup with Google
          </button>
        </div> */}
      {/* <div className="flex gap-4 justify-center items-center w-full text-slate-400 text-xs">
          <span className="w-full flex-grow h-[1px] bg-slate-300"></span>
          <span className="whitespace-nowrap"> or continue with email</span>
          <span className="w-full h-[1px] flex-grow bg-slate-300"></span>
        </div> */}

      <form
        onSubmit={handleSignup}
        className="w-full flex justify-center items-center gap-4 flex-col"
      >
        <div className="flex flex-col w-full gap-1">
          <label
            htmlFor="fname"
            className="text-xs text-slate-400 dark:text-slate-300"
          >
            Name
          </label>

          <input
            name="name"
            id="name"
            type="text"
            value={formData.name}
            onChange={(e) => setValues(e, formData, setFormData)}
            className="w-full px-3 placeholder:text-gray-600 py-2 rounded-lg border text-sm bg-transparent text-slate-100 focus-visible:border-yellow outline-none"
            placeholder="Enter your name"
          />
        </div>
        <div className="flex flex-col w-full gap-1">
          <label
            htmlFor="email"
            className="text-xs text-slate-400 dark:text-slate-300"
          >
            Email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            value={formData.email}
            onChange={(e) => setValues(e, formData, setFormData)}
            className="w-full px-3 placeholder:text-gray-600 py-2 rounded-lg border text-sm bg-transparent text-slate-100 focus-visible:border-yellow outline-none"
            placeholder="user@evandize.com"
          />
        </div>

        <div className="flex flex-col w-full gap-1">
          <label
            htmlFor="password"
            className="text-xs text-slate-400 dark:text-slate-300"
          >
            Password
          </label>
          <div className="relative">
            <input
              ref={pass_input}
              type="password"
              name="password"
              id="password"
              value={formData.password}
              onChange={(e) => setValues(e, formData, setFormData)}
              className="w-full px-3 placeholder:text-gray-600 py-2 rounded-lg border text-sm bg-transparent text-slate-100 focus-visible:border-yellow outline-none"
              placeholder="Min. 8 characters"
            />
            <span
              className="absolute right-2 top-[6px] cursor-pointer hover:bg-white hover:text-black rounded-full p-1 transition-all"
              onClick={() => togglePass(passHidden, setPassHidden, pass_input)}
            >
              {passHidden ? <IoEyeOffOutline size={16} /> : <IoEye size={16} />}
            </span>
          </div>
        </div>
        <div className="flex flex-col w-full gap-1">
          <label
            htmlFor="confPassword"
            className="text-xs text-slate-400 dark:text-slate-300"
          >
            Confirm Password
          </label>
          <div className="relative">
            <input
              ref={conf_pass_input}
              type="password"
              name="confPassword"
              id="confPassword"
              value={formData.confPassword}
              onChange={(e) => setValues(e, formData, setFormData)}
              className="w-full px-3 placeholder:text-gray-600 py-2 rounded-lg border text-sm bg-transparent text-slate-100 focus-visible:border-yellow outline-none"
              placeholder="Enter your password again"
            />
            <span
              className="absolute right-2 top-[6px] cursor-pointer hover:bg-white hover:text-black rounded-full p-1 transition-all"
              onClick={() =>
                togglePass(confPassHidden, setConfPassHidden, conf_pass_input)
              }
            >
              {confPassHidden ? (
                <IoEyeOffOutline size={16} />
              ) : (
                <IoEye size={16} />
              )}
            </span>
          </div>
        </div>
        <button
          disabled={isLoading}
          className="bg-yellow disabled:opacity-50 mt-4 hover:bg-yellow/80 active:bg-yellow/70 transition-all text-black w-1/3 px-4 py-3 text-sm rounded-full"
        >
          Sign{isLoading ? "ing" : ""} Up{isLoading ? "..." : ""}
        </button>
      </form>
    </div>
  );
};

export default Signup;
