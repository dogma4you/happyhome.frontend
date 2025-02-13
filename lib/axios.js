import axios from "axios";
import Cookies from "js-cookie";
import { signOut } from "next-auth/react";

export const BASE_URL = "https://api.happyhomeinitiative.com";
// export const BASE_URL = "https://1a7c-195-28-188-8.ngrok-free.app";

const axiosInstance = axios.create({
  baseURL: BASE_URL,
  headers: { "Content-Type": "application/json" },
});

const refreshToken = async () => {
  try {
    const refreshToken = Cookies.get("refresh_token");
    if (!refreshToken) throw new Error("No refresh token available");

    const response = await axiosInstance.post(`/auth/refresh_token`, {
      refresh_token: refreshToken,
    });

    const { data } = response;
    Cookies.set("accessToken", data.token);
    Cookies.set("refresh_token", data.refresh_token);

    return data.token;
  } catch (error) {
    Cookies.remove("accessToken");
    Cookies.remove("refresh_token");
    await signOut();
    throw error;
  }
};

export const getGuestToken = async () => {
  try {
    if (!Cookies.get("accessToken")) {
      const response = await axiosInstance.get(`/auth/guest`);
      const { data } = response.data;

      Cookies.set("accessToken", data.token);
      Cookies.set("refresh_token", data.refresh_token);
    }
  } catch (e) {
    console.error(e);
  }
};

axiosInstance.interceptors.request.use(
  async (config) => {
    const token = Cookies.get("accessToken");
    if (token && !config.headers["Authorization"]) {
      config.headers["Authorization"] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error),
);

axiosInstance.interceptors.response.use(
  (response) => response,
  async (error) => {
    const prevRequest = error.config;

    if (error.response?.status === 401 && !prevRequest._retry) {
      prevRequest._retry = true;

      try {
        if (
          prevRequest.url === "/auth/refresh_token" &&
          error.response?.status === 401
        ) {
          return Promise.reject(error);
        }

        const newToken = await refreshToken();
        prevRequest.headers["Authorization"] = `Bearer ${newToken}`;
        return axiosInstance(prevRequest);
      } catch (refreshError) {
        return Promise.reject(refreshError);
      }
    }

    return Promise.reject(error);
  },
);

export default axiosInstance;
