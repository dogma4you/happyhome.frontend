import React from "react";
import DashboardHeaderNotification from "@/components/dashboard/notification/DashboardHeaderNotification";
import UserAvatar from "@/components/header/UserAvatar";

const UserInformation = () => {
  return (
    <>
      <DashboardHeaderNotification />
      <UserAvatar />
    </>
  );
};

export default UserInformation;
