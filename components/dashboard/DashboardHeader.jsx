import React from "react";
import DashboardHeaderNotification from "@/components/dashboard/notification/DashboardHeaderNotification";
import Avatar from "@/components/ui/avatar";
import Menu from "@/components/header/menu";
import DarkLightSwitcher from "@/components/ui/dark-light-switcher";
import Logo from "@/public/assets/Logo";

const DashboardHeader = () => {
  return (
    <header
      className={
        "py-4 pl-6 pr-10 border-b border-gray-6 flex justify-end bg-background gap-x-6 items-center"
      }
    >
      <Logo className={"mr-auto md:hidden"} />

      <DashboardHeaderNotification />

      <Avatar />
      <Menu />
      <DarkLightSwitcher />
    </header>
  );
};

export default DashboardHeader;
