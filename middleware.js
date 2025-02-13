import { NextResponse } from "next/server";
import authMiddlware from "@/middlewares/authMiddlware";
import setTokenMiddlware from "@/middlewares/setTokenMiddlware";

export async function middleware(req) {
  const authResponse = await authMiddlware(req);
  if (!authResponse.ok) {
    return authResponse;
  }

  const setTokenResponse = await setTokenMiddlware(req);

  if (setTokenResponse.ok) {
    return setTokenResponse;
  }

  return NextResponse.next();
}

// Optionally, don't invoke Middleware on some paths
export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
