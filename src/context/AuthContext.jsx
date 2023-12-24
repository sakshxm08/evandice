import PropTypes from "prop-types";
import { createContext, useReducer, useEffect } from "react";
import { authReducer } from "../reducers/authReducer";
import { apiConnector } from "../services/apiConnector";
import { endpoints } from "../services/apiRoutes";

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, {
    user: null,
  });

  // console.log(state.user);
  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("token"));
    if (user) {
      apiConnector("GET", endpoints.GET_USER, null, {
        Authorization: JSON.parse(localStorage.getItem("token")), // Replace with the actual JWT token
      }).then((res) => {
        dispatch({ type: "LOGIN", payload: res.data });
        console.log(res.data.user);
      });
    }
  }, []);

  return (
    <AuthContext.Provider value={{ ...state, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
};

AuthContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
