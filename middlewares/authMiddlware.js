import {
  apiAuthPrefix,
  authRoutes,
  DEFAULT_LOGIN_REDIRECT,
  publicRoutes,
  publicRoutesWithNestedRoutes,
} from "@/routes";
import { NextResponse } from "next/server";
import { auth } from "@/auth";

export default auth((req) => {
  const { nextUrl } = req;
  const isLoggedin = !!req.auth;

  const isApiRoute = nextUrl.pathname.startsWith(apiAuthPrefix);
  const isPublicRoute = publicRoutes.includes(nextUrl.pathname);
  const isPublicRouteWithNestedRoute = publicRoutesWithNestedRoutes.find(
    (route) => nextUrl.pathname.startsWith(route),
  );

  const isAuthRoute = authRoutes.includes(nextUrl.pathname);

  if (isApiRoute) {
    return NextResponse.next();
  }

  if (isAuthRoute) {
    if (isLoggedin) {
      return Response.redirect(new URL(DEFAULT_LOGIN_REDIRECT, nextUrl));
    }

    return NextResponse.next();
  }

  if (
    !isPublicRoute &&
    !isPublicRouteWithNestedRoute &&
    !isApiRoute &&
    !isLoggedin &&
    nextUrl.pathname !== "/"
  ) {
    return Response.redirect(new URL("/", nextUrl));
  }

  return NextResponse.next();
});
