import React from "react";
import { cn } from "@/lib/utils";
import Typography from "@/components/ui/typography";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";
import Logo from "@/public/assets/Logo";
import axios from "@/lib/axios";
import toast from "react-hot-toast";
import useGetNotifications from "@/queries/useGetNotifications";

const NotificationsItem = ({
  id,
  showButtons,
  title,
  description,
  date,
  isReaded,
}) => {
  const { mutate } = useGetNotifications();
  const handleDeleteNotification = async () => {
    try {
      await axios.delete(`/notifications/${id}`);
      await mutate();
      toast.success("Notification deleted successfully.");
    } catch (e) {
      toast.error("Error deleting notification");
    }
  };

  return (
    <div
      className={cn(
        "flex items-center justify-between p-3 md:py-4 md:px-6 border-b border-b-gray-6 group/notification last:border-b-0",
        isReaded && "bg-gray-2",
      )}
    >
      <div
        className={cn(
          "flex items-center gap-x-3 py-4 px-1",
          showButtons && "items-start",
        )}
      >
        <div
          className={
            "size-8 md:size-12 min-w-8 md:min-w-12 rounded-full bg-blue-6 flex items-center justify-center"
          }
        >
          <Logo
            onlyMobileView
            className={"[&>path]:stroke-white w-full h-[20px] md:h-[30px]"}
          />
        </div>
        <div>
          {title && (
            <Typography
              variant={"subtitle3"}
              className={"text-gray-12 normal-case"}
            >
              {title}
            </Typography>
          )}

          {description && (
            <Typography variant={"body4"} className={"text-gray-11"}>
              {description}
            </Typography>
          )}

          {date && (
            <Typography variant={"body4"} className={"text-gray-10"}>
              {date}
            </Typography>
          )}

          {showButtons && (
            <div className={"flex items-center gap-x-2 mt-3"}>
              <Button size={"sm"}>Accept offer</Button>
              <Button size={"sm"} variant={"outline"}>
                View details
              </Button>
            </div>
          )}
        </div>
      </div>
      <div className={"flex items-center gap-x-2"}>
        {isReaded && <Icon name={"email-opened"} className={"text-gray-12"} />}
        {!showButtons && (
          <Icon
            onClick={handleDeleteNotification}
            name={"plus"}
            className={"text-gray-12 rotate-45 cursor-pointer block"}
          />
        )}
      </div>
    </div>
  );
};

export default NotificationsItem;
