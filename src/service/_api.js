import axios from "axios";
import { notification } from "antd";
const API = axios.create({
  baseURL: "http://localhost:8080",
});

API.interceptors.request.use(function (config) {
  const token = localStorage.getItem("token");
  if(token) {
    config.headers['Authorization'] = `Bearer ${token}`;
  }
  return config;
}, function (error) {
  // Do something with request error
  return Promise.reject(error);
});

API.interceptors.response.use(
  function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response;
  },
  function (error, config) {
    console.dir(error)
    notification.error({
      message: "Error consumiendo API",
      description: `${error.message} ${error.config.url}`
    });
    return Promise.reject(error);
  }
);

export default API;
