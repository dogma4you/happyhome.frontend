"use client";

import { useEffect } from "react";
import useGetNotifications from "@/queries/useGetNotifications";
import toast from "react-hot-toast";
import useNotifications from "@/store/useNotifications";
import { useSession } from "next-auth/react";

const Notifications = () => {
  const { data: session } = useSession();
  const { isLoading, error, data, mutate } = useGetNotifications(session);
  const { setNotifications, setLoading, isHasNewNotification } =
    useNotifications();

  useEffect(() => {
    if (!session) return;
    if (error) {
      toast.error("Error getting notifications");
      setLoading(false);
      return;
    }
    if (!isLoading && data) {
      setNotifications(data.data);
      setLoading(false);
    }
  }, [isLoading, data, error, session?.user?.id]);

  useEffect(() => {
    (async () => {
      if (isHasNewNotification) {
        await mutate();
      }
    })();
  }, [isHasNewNotification]);

  return null;
};

export default Notifications;
