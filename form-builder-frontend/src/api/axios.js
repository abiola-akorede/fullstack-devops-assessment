import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:8080/api", // change to your Railway URL later
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});

// Add the auth token (if available) automatically
API.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default API;
