import axios from "axios";
import { jwtDecode } from "jwt-decode";

const api = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
});

api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    console.log("REQUEST URL:", config.url);
    console.log("REQUEST METHOD:", config.method);
    console.log("REQUEST DATA:", config.data);
    if (!token) {
      return config;
    }

    try {
      const decoded = jwtDecode(token);

      console.log("Token:", decoded);

      // exp menggunakan satuan detik
      const sekarang = Date.now() / 1000;

      if (decoded.exp && decoded.exp < sekarang) {
        console.log("Token sudah expired");

        localStorage.removeItem("token");

        return Promise.reject(new axios.Cancel("Token sudah expired"));
      }

      config.headers.Authorization = `Bearer ${token}`;

      return config;
    } catch (error) {
      console.log("Token tidak valid");

      localStorage.removeItem("token");

      return Promise.reject(error);
    }
  },
  (error) => {
    return Promise.reject(error);
  }
);

api.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error.response?.status === 401) {
      console.log("Server menolak token");

      localStorage.removeItem("token");
    }

    return Promise.reject(error);
  }
);

export default api;
