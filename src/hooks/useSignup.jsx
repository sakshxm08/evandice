import { useState } from "react";
import { useAuthContext } from "./useAuthContext";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { apiConnector } from "../services/apiConnector";
import { endpoints } from "../services/apiRoutes";

export const useSignup = () => {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(null);

  const { dispatch } = useAuthContext();

  const navigate = useNavigate();

  const signup = async (name, email, password, confPassword) => {
    setIsLoading(true);
    setError(null);

    if (!name || !email || !password || !confPassword) {
      setIsLoading(false);
      return toast.error("Please fill all the fields", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    }

    // Check if Password and Conf. Password is same
    if (password !== confPassword) {
      setIsLoading(false);
      return toast.error("Passwords doesn't match", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    }

    apiConnector("POST", endpoints.SIGNUP_API, {
      name,
      email,
      password,
      confPassword,
    })
      .then((response) => {
        // Assuming the backend sends a token upon successful signup
        console.log("clicked");
        setIsLoading(false);
        const user = response.data;
        console.log(response.data);
        // Store the token in local storage or cookies for authentication
        localStorage.setItem("user", JSON.stringify(user));

        dispatch({ type: "LOGIN", payload: user });
        // React Toast
        navigate(-1);
        toast.success("Signed up successfully", {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });
      })
      .catch((err) => {
        setIsLoading(false);
        toast.error(err.response.data.message, {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          className: "text-sm",
          progress: undefined,
          theme: "dark",
        });
        console.log(err.response.data.message);
      });
  };
  return { signup, error, isLoading };
};
