"use client";
import React, { useEffect } from "react";
import { useSearchParams, redirect, useRouter } from "next/navigation";
import useGetAnOffer from "@/store/useGetAnOffer";
import Cookies from "js-cookie";

export default function UploadLatterPage() {
  const { changeFields } = useGetAnOffer();
  const searchParams = useSearchParams();
  const router = useRouter();

  useEffect(() => {
    const token = searchParams.get("token");
    const refreshToken = searchParams.get("refreshtoken");
    const offerview = searchParams.get("offerview");

    if (!token || !refreshToken || !offerview) {
      return redirect("/");
    }

    Cookies.set("accessToken", token);
    Cookies.set("refresh_token", refreshToken);
    changeFields({ view: offerview });
    router.push("/getoffer");
  }, [searchParams]);

  return <></>;
}
