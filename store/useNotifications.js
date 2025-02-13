import { create } from "zustand";
import { NOTIFICATIONS_TABS } from "@/utils/constants";

const useNotifications = create((set) => ({
  activeTab: NOTIFICATIONS_TABS.ALL,
  notifications: [],
  isLoading: true,
  isHasNewNotification: false,
  setLoading: (isLoading) =>
    set((prevState) => {
      return {
        ...prevState,
        isLoading,
      };
    }),
  setNotifications: (newNotification = []) =>
    set((prevState) => {
      return {
        ...prevState,
        notifications: newNotification,
      };
    }),
  setNotification: (notification) =>
    set((prevState) => {
      return {
        ...prevState,
        notifications: [notification, ...prevState.notifications],
        isHasNewNotification: true,
      };
    }),
  setSeenNotifications: () =>
    set((prevState) => {
      return {
        ...prevState,
        isHasNewNotification: false,
      };
    }),
  setActiveTab: (activeTab) =>
    set((prevState) => {
      return {
        ...prevState,
        activeTab,
      };
    }),
}));

export default useNotifications;
