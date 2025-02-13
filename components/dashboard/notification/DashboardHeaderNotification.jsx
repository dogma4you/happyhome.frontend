"use client";
import React, { useState } from "react";
import Icon from "@/components/ui/icon";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import NotificationsContent from "@/components/dashboard/notification/NotificationsContent";
import { Button } from "@/components/ui/button";
import useNotifications from "@/store/useNotifications";
import NotificationsContentHeader from "@/components/dashboard/notification/NotificationContentHeader";
import { useRouter } from "next/navigation";

const DashboardHeaderNotification = () => {
  const { notifications, isHasNewNotification } = useNotifications(
    (state) => state,
  );
  const router = useRouter();

  const [openDropDown, setOpenDropDown] = useState(false);

  return (
    <DropdownMenu
      open={openDropDown}
      onOpenChange={(isOpen) => setOpenDropDown(isOpen)}
    >
      <DropdownMenuTrigger asChild>
        <div
          className={
            "bg-gray-3 size-12 rounded-2xl flex items-center justify-center data-[state=open]:bg-blue-2"
          }
          onClick={() => setOpenDropDown(true)}
        >
          <div className={"relative "}>
            <Icon
              name={"bell"}
              className={"text-2xl dark:text-white text-black"}
            />
            {isHasNewNotification && (
              <div
                className={
                  "absolute top-[7px] right-[5px] border-2 border-white size-2 rounded-full bg-[#FF3400]"
                }
              />
            )}
          </div>
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        align={"end"}
        className={
          "border-gray-6 bg-background flex-col gap-y-2  min-w-full md:w-[600px]"
        }
      >
        <NotificationsContentHeader notificationsCount={notifications.length} />
        <div className={"p-0 md:p-3"}>
          <NotificationsContent maxCount={3} />
        </div>
        {!!notifications.length && (
          <div
            className={
              "md:py-[10px] flex justify-center border-t border-t-gray-6"
            }
          >
            <Button
              variant={"ghost"}
              size={"sm"}
              className={"uppercase"}
              onClick={() => {
                setOpenDropDown(false);
                router.push("/dashboard/notifications");
              }}
            >
              View All
            </Button>
          </div>
        )}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default DashboardHeaderNotification;
