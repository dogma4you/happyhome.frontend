import { create } from "zustand";

const useCongratsDialog = create((set) => ({
  isOpened: false,
  isDone: false,
  changeFields: (newState) =>
    set((prevState) => ({ ...prevState, ...newState })),
}));

export default useCongratsDialog;
