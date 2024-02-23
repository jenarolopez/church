import axios from 'axios'
import { redirect } from 'react-router-dom';
import Cookie from "js-cookie"
// Create an instance with custom configurations using environment variables
const axiosInstance = axios.create({
  baseURL: process.env.API_BASE_URL || "http://localhost:9000", // Set the base URL from environment variable or a default value
  timeout: process.env.REQUEST_TIMEOUT || 5000, // Set the timeout from environment variable or a default value (in milliseconds)
  headers: {
    "Content-Type": "application/json",
    // 'Authorization': `Bearer ${process.env.ACCESS_TOKEN || 'YOUR_DEFAULT_ACCESS_TOKEN'}`,  // Include an authorization header using environment variable or a default value
  },
});

axiosInstance.interceptors.request.use(
  (config) => {
    const token = Cookie.get('token')
    config.headers.Authorization = `Bearer ${token}`;
    return config;
  },
  (error) => {
    // Do something with request error
    return Promise.reject(error);
  }
);

axiosInstance.interceptors.response.use(
  (response) => {
    // Do something with successful response
    return response;
  },
  (error) => {
    // Do something with response error
    return Promise.reject(error);
  }
);

export default axiosInstance;
