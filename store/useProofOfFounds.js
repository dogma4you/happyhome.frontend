import { create } from "zustand";

const initialOfferState = {
  files: [],
  status: 0,
  uploaded_files: [],
};

const useProofOfFounds = create((set) => ({
  ...initialOfferState,
  setProofOfFound(newState) {
    set((prevState) => {
      return {
        ...prevState,
        ...newState,
      };
    });
  },
}));

export default useProofOfFounds;
