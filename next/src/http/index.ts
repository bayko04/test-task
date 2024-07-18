import axios from "axios";

export const API_URL = "http://localhost:3002";

const $api = axios.create({
  baseURL: API_URL,
  withCredentials: true,
});

$api.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  config.headers.Authorization = `Token ${token}`;
  return config;
});

// $api.interceptors.response.use(
//   (config) => {
//     return config;
//   },
//   async (error) => {
//     const originalRequest = error.config;
//     if (
//       error.response.status == 401 &&
//       error.config &&
//       !error.config._isRetry
//     ) {
//       originalRequest._isRetry = true;
//       try {
//         const response = await axios.get(`${API_URL}/auth/refreshtoken`, {
//           withCredentials: true,
//         });
//         localStorage.setItem("token", response.data.accessToken);
//         localStorage.setItem("refreshToken", response.data.refreshToken);
//         return $api.request(originalRequest);
//       } catch (e) {
//         console.log("НЕ АВТОРИЗОВАН");
//       }
//     }
//     throw error;
//   }
// );

export default $api;
