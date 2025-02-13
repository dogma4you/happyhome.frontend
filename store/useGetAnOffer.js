import { create } from "zustand";
import {
  GET_AN_OFFER_VIEW,
  HOA_TYPE,
  HOME_TYPE,
  PROPERTY_TYPE,
  SELLER_TYPES,
} from "@/utils/constants";

const initialOfferState = {
  isGuestAuth: false,
  sellerType: SELLER_TYPES.HOMEOWNER,
  address: {},
  propertyType: PROPERTY_TYPE.HOME,
  descriptionType: HOME_TYPE.DETACHED,
  offerId: null,
  view: GET_AN_OFFER_VIEW.GET_STARTED,
  terms: false,
  builtYear: new Date(),
  areas: [
    {
      square_feet: undefined,
      bedrooms: 1,
      bathrooms: 1,
    },
  ],
  currentHOA: HOA_TYPE.MONTLY,
  heating: "",
  airConditioning: "",
  waterSupply: "",
  sewer: "",
  electricPanel: "",
  exteriorType: [],
  lotSize: null,
  property_condition: {
    id: undefined,
    hvac: 0,
    doors: 0,
    framing: 0,
    kitchen: 0,
    windows: 0,
    flooring: 0,
    bathrooms: 0,
    electrical: 0,
    foundation: 0,
    landscaping: 0,
    water_heater: 0,
    patio_and_shed: 0,
    plumbing_and_gas: 0,
    roof_and_gutters: 0,
    washer_and_dryer: 0,
    optional_features: 0,
    dry_wall_and_paint: 0,
    siding_and_exterior_trim: 0,
  },
  images: [],
  uploaded_files: [],
  user: {
    first_name: "",
    last_name: "",
    phone: "",
    email: "",
  },
};

const useGetAnOffer = create((set) => ({
  ...initialOfferState,
  changeView: (view) =>
    set(() => {
      return {
        view,
      };
    }),
  changeFields: (newState) =>
    set((prevState) => ({ ...prevState, ...newState })),
  resetGetAnOffer: () =>
    set(() => {
      return initialOfferState;
    }),
}));

export default useGetAnOffer;
