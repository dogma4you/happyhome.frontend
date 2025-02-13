import { create } from "zustand";

const useSettingsStore = create((set) => ({
  pushNotifications: false,

  setNotificationSettings: (isEnabled) =>
    set((prevState) => {
      return {
        ...prevState,
        pushNotifications: isEnabled,
      };
    }),
}));

export default useSettingsStore;
