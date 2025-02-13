import React from "react";
import Image from "next/image";
import notification from "@/public/assets/icons/notification_ball.svg";
import Typography from "@/components/ui/typography";
import { NOTIFICATIONS_TABS } from "@/utils/constants";

const NotificationEmptyContent = ({ activeTab }) => {
  const emptyTitle =
    activeTab === NOTIFICATIONS_TABS.ALL
      ? "Notifications"
      : "Unread Notifications";
  const emptyDescription =
    activeTab === NOTIFICATIONS_TABS.ALL
      ? "You don’t have any notifications"
      : "You don’t have any unread notifications";
  return (
    <div
      className={
        "h-full w-full flex flex-col items-center justify-center overflow-y-auto"
      }
    >
      <Image
        width={200}
        height={180}
        src={notification}
        alt={"notification"}
        className={"mb-6"}
      />
      <Typography variant={"subtitle1"} className={"normal-case"}>
        {emptyTitle}
      </Typography>
      <Typography variant={"body4"} className={"mt-2"}>
        {emptyDescription}
      </Typography>
    </div>
  );
};

export default NotificationEmptyContent;
