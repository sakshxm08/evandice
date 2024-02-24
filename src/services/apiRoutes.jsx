const BASE_URL = import.meta.env.VITE_APP_BASE_URL;

export const endpoints = {
  // AUTH ENDPOINTS
  AUTH: {
    SIGNUP_API: BASE_URL + "/auth/signup",
    LOGIN_API: BASE_URL + "/auth/login",
    GET_USER: BASE_URL + "/auth/user-data",
  },
  // EVENTS ENDPOINTS
  EVENTS: {
    GET_ALL: BASE_URL + "/event/getevents",
  },
};
