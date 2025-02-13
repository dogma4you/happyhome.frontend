"use client";

import React from "react";
import { cn } from "@/lib/utils";
import { NOTIFICATIONS_TABS } from "@/utils/constants";
import useNotifications from "@/store/useNotifications";

const NotificationsTabs = () => {
  const { setActiveTab, activeTab } = useNotifications();
  return (
    <div className={"flex items-center px-6 border-b border-b-gray-6 gap-x-2"}>
      <div
        className={cn(
          "notification-tabs",
          activeTab === NOTIFICATIONS_TABS.ALL && "active",
        )}
        onClick={() => setActiveTab(NOTIFICATIONS_TABS.ALL)}
      >
        All
      </div>
      <div
        className={cn(
          "notification-tabs",
          activeTab === NOTIFICATIONS_TABS.UNREAD && "active",
        )}
        onClick={() => setActiveTab(NOTIFICATIONS_TABS.UNREAD)}
      >
        Unread
      </div>
    </div>
  );
};

export default NotificationsTabs;
