import axios from "axios";

export const API_URL = "http://localhost:3002";

const $api = axios.create({
  baseURL: API_URL,
});

$api.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  config.headers.Authorization = `Token ${token}`;
  return config;
});

export default $api;
