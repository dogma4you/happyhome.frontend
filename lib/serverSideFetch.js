"use server";
import axiosInstance from "@/lib/axios";
import { cookies } from "next/headers";

export default async function serverSideFetch(method = "get", url, options) {
  try {
    const cookieStore = cookies();
    const accessToken = cookieStore.get("accessToken")?.value;

    if (accessToken) {
      axiosInstance.defaults.headers.common[
        "Authorization"
      ] = `Bearer ${accessToken}`;
    }

    const response = await axiosInstance[method](url, options);

    return response.data;
  } catch (error) {
    return {
      error: true,
      message: error.response?.data?.message || "Server Error",
      errorData: error,
    };
  }
}
