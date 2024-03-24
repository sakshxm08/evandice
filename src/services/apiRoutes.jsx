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
    ADD: BASE_URL + "/event/add",
  },
  FESTS: {
    ADD: BASE_URL + "/fest/add",
    SEND_CODE: BASE_URL + "/verify/send-code",
    VERIFY_CODE: BASE_URL + "/verify/verify-code",
  },
  GET_DATA: {
    GET_FESTS_BY_GENRE: BASE_URL + "/fest/getfest",
    GET_EVENTS_BY_GENRE: BASE_URL + "/event/getevents",
    GET_UPC_AND_LIVE: BASE_URL + "/event/upc-live",
  },
};
