"use server";
import { cookies as cookiesNext } from "next/headers";

import { signOut } from "@/auth";

const logout = async () => {
  const cookies = cookiesNext();
  await cookies.delete("accessToken");
  await cookies.delete("refresh_token");
  await signOut({ redirectTo: "/" });
};

export default logout;
