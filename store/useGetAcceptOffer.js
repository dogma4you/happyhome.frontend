import { create } from "zustand";

const initialOfferState = {
  showAcceptOffer: false,
  estimated_lower_price: undefined,
  estimated_higher_price: undefined,
  estimated_date: undefined,
  offerId: undefined,
};

const useGetAcceptOffer = create((set) => ({
  ...initialOfferState,
  closeAcceptOffer: () => {
    set((prevState) => {
      return {
        ...prevState,
        showAcceptOffer: false,
      };
    });
  },
  setAcceptOfferInfo: (offerInfo) =>
    set((prevState) => {
      return {
        ...prevState,
        ...offerInfo,
      };
    }),
}));

export default useGetAcceptOffer;
