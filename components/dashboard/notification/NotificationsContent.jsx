"use client";

import React, { useEffect } from "react";
import NotificationsItem from "./NotificationsItem";
import NotificationEmptyContent from "./NotificationEmptyContent";
import useNotifications from "@/store/useNotifications";
import { formatDate } from "@/utils/helper";
import { Skeleton } from "@/components/ui/skeleton";

const NotificationsContent = ({ maxCount }) => {
  const { activeTab, notifications, isLoading, setSeenNotifications } =
    useNotifications();

  useEffect(() => {
    setSeenNotifications();
  }, []);

  if (isLoading) {
    return new Array(3)
      .fill(0)
      .map((_, i) => <Skeleton key={i} className={"w-full h-[100px] mt-2"} />);
  }

  if (!notifications.length)
    return <NotificationEmptyContent activeTab={activeTab} />;

  let notificationsData = maxCount
    ? notifications.slice(0, maxCount)
    : notifications;

  return (
    <>
      {notificationsData.map(({ title, description, created_at, seen, id }) => {
        return (
          <NotificationsItem
            key={id}
            id={id}
            title={title}
            description={description}
            date={formatDate(new Date(created_at))}
            isReadOnly={seen === 2}
            showButtons={false}
          />
        );
      })}
    </>
  );
};

export default NotificationsContent;
