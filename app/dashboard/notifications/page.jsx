"use client";

import React from "react";
import Typography from "@/components/ui/typography";
import NotificationsContent from "@/components/dashboard/notification/NotificationsContent";
import NotificationsContentHeader from "@/components/dashboard/notification/NotificationContentHeader";

export default function () {
  return (
    <div className={"h-full flex flex-col"}>
      <Typography variant={"h5"} className={"normal-case dashboard-padding"}>
        Notifications
      </Typography>

      <NotificationsContentHeader />
      <NotificationsContent />
    </div>
  );
}
