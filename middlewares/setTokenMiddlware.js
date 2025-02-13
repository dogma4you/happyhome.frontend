import { NextResponse } from "next/server";
import { auth } from "@/auth";
import axiosInstance from "@/lib/axios";

export default auth(async (req) => {
  const accessToken = req.cookies.get("accessToken")?.value;
  const isLoggedin = !!req.auth;
  const response = NextResponse.next();
  if (isLoggedin && !accessToken) {
    const {
      user: { accessToken, refreshToken },
    } = req.auth;
    response.cookies.set("accessToken", accessToken);
    response.cookies.set("refresh_token", refreshToken);
    return response;
  }

  if (!accessToken && !isLoggedin) {
    const res = await axiosInstance.get("/auth/guest");
    const { data } = res.data;
    response.cookies.set("accessToken", data.token);
    response.cookies.set("refresh_token", data.refresh_token);

    return response;
  }

  return NextResponse.next();
});
