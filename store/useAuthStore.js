import { create } from "zustand";

const useAuthStore = create((set) => ({
  view: null,
  isLogin: null,
  registerValues: {},
  registerSelectedView: null,
  resetPasswordValues: {},
  forgotPasswordSelectedView: null,
  isDialogOpened: false,
  getUserInfo: true,
  changeFields: (newState) => {
    set((prevState) => ({ ...prevState, ...newState }));
  },
  setView: ({ view, isLogin }) =>
    set(() => {
      return {
        view,
        isLogin,
      };
    }),
}));

export default useAuthStore;
