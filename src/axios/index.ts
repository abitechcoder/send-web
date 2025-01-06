import axios, { AxiosInstance } from "axios";

const instance: AxiosInstance = axios.create({
  baseURL: "https://send-backend-4w4l.onrender.com/api/",
  // baseURL: "http://127.0.0.1:3000/api/",
});

export default instance;
