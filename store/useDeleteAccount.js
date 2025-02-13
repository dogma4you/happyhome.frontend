import { create } from "zustand";
import { DELETE_ACCOUNT_MODAL } from "@/utils/constants";

const useDeleteAccount = create((set) => ({
  view: DELETE_ACCOUNT_MODAL.FIRST_PAGE,
  showDialog: false,
  reason: "",
  changeFields: (newState) => {
    set((prevState) => ({ ...prevState, ...newState }));
  },
}));

export default useDeleteAccount;
