import axios from "axios";

export const axiosInstance = axios.create({});

if (localStorage.getItem("token")) {
  axiosInstance.defaults.headers.common["Authorization"] = localStorage
    .getItem("token")
    .replace(/['"]+/g, "");
}

export const apiConnector = (method, url, bodyData, headers, params) => {
  return axiosInstance({
    method: `${method}`,
    url: `${url}`,
    data: bodyData ? bodyData : null,
    headers: headers ? headers : null,
    params: params ? params : null,
  });
};
