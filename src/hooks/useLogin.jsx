import { useState } from "react";
import { useAuthContext } from "./useAuthContext";
import { toast } from "react-toastify";
import { useLocation, useNavigate } from "react-router-dom";
import { apiConnector } from "../services/apiConnector";
import { endpoints } from "../services/apiRoutes";
export const useLogin = () => {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(null);

  const location = useLocation();

  const { dispatch } = useAuthContext();

  const navigate = useNavigate();

  const login = async (details) => {
    const { email, password } = details;
    setIsLoading(true);
    setError(null);

    apiConnector("POST", endpoints.AUTH.LOGIN_API, {
      email,
      password,
    })
      .then((response) => {
        const user = response.data;
        // Store the token in local storage or cookies for authentication
        localStorage.setItem("token", JSON.stringify(user.token));
        apiConnector("GET", endpoints.AUTH.GET_USER, null, {
          Authorization: user.token, // Replace with the actual JWT token
        }).then((res) => {
          dispatch({
            type: "LOGIN",
            payload: { user: res.data.user, userFetched: true },
          });
        });

        setIsLoading(false);
        // Redirect to the dashboard or any desired page after successful signup
        navigate(location.state?.redirect || "/");
        toast.success("Logged in successfully", {
          position: "top-right",
          autoClose: 5000,
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
        toast.error(err?.response?.data.message || err.message, {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });
      });
  };
  return { login, isLoading, error };
};
