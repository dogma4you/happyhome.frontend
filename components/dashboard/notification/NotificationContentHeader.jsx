"use client";
import Typography from "@/components/ui/typography";
import { cn } from "@/lib/utils";
import useNotifications from "@/store/useNotifications";

export const NotificationsContentHeader = ({ className }) => {
  const { notifications } = useNotifications();
  const notificationsCount = notifications.length;
  return (
    <div
      className={cn(
        "p-3 md:py-5 md:px-6 border-b border-b-gray-7 flex justify-between items-center",
        className,
      )}
    >
      <Typography variant={"subtitle1"} mobileVariant={"subtitle3"}>
        Recents ({notificationsCount})
      </Typography>
    </div>
  );
};

export default NotificationsContentHeader;
