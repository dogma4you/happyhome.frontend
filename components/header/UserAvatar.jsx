"use client";
import React from "react";
import Avatar from "@/components/ui/avatar";
import { useRouter } from "next/navigation";

const UserAvatar = () => {
  const router = useRouter();
  return <Avatar onClick={() => router.push("/dashboard")} />;
};

export default UserAvatar;
