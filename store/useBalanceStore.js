import { create } from "zustand";
import { PURCHASE_BALANCE_MODAL } from "@/utils/constants";

const useBalanceStore = create((set) => ({
  balance: 0,
  credits: 0,
  singleCreditPrice: 0,
  view: PURCHASE_BALANCE_MODAL.AMOUNT_PAGE,
  dialogOpen: false,
  paymentInformation: null,
  setBalance: ({ balance, credits }) =>
    set((prevState) => {
      const balanceValue = balance ? balance : prevState.balance;
      const creditsValue = credits ? credits : prevState.credits;
      return {
        ...prevState,
        balance: balanceValue,
        credits: creditsValue,
      };
    }),
  setOpenBalanceDialog: (open) =>
    set((prevState) => {
      return {
        ...prevState,
        dialogOpen: open,
      };
    }),
  setView: (view) =>
    set((prevState) => {
      return {
        ...prevState,
        view,
      };
    }),

  setPaymentInformation: (paymentInformation) =>
    set((prevState) => {
      return {
        ...prevState,
        paymentInformation,
      };
    }),
  setSingleCreditPrice: (singleCreditPrice) =>
    set((prevState) => {
      return {
        ...prevState,
        singleCreditPrice,
      };
    }),
}));

export default useBalanceStore;
