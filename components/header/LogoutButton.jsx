"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import logout from "@/actions/logout";
import { useSWRConfig } from "swr";
import { getGuestToken } from "@/lib/axios";

const LogoutButton = ({ setMenuOpened }) => {
  const { mutate } = useSWRConfig();
  const handleLogout = async () => {
    await logout();
    await getGuestToken();
    setMenuOpened(false);
    mutate(() => true, undefined, { revalidate: false });
    window.location.href = "/";
  };
  return (
    <div
      className={"flex items-center justify-center border-t border-gray-8 pb-6"}
    >
      <Button
        variant={"ghost"}
        className={"text-error-10 mt-auto"}
        onClick={handleLogout}
      >
        Logout
      </Button>
    </div>
  );
};

export default LogoutButton;
