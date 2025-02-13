import { create } from "zustand";
import {
  FIND_HOME_FILTER_PRICE_TYPE,
  FIND_HOME_FILTER_PROPERTY_STATUS,
  FIND_HOME_FILTER_TYPE,
  FIND_HOME_MEASUREMENT,
} from "@/utils/constants";

const useFindHome = create((set) => ({
  isMapOpened: true,
  isFilterChanged: false,
  page: 1,
  limit: 10,
  setPageData: (pageData) =>
    set((prevState) => {
      return {
        ...prevState,
        ...pageData,
      };
    }),
  setMapOpened: (isMapOpened) =>
    set((prevState) => {
      return {
        ...prevState,
        isMapOpened,
      };
    }),
  filters: {
    mapsData: {
      lat: 37.0902,
      lng: -95.7129,
      mapZoom: 4,
      circleLat: null,
      circleLng: null,
    },
    type: FIND_HOME_FILTER_TYPE.ALL_LISTINGS,
    propertyStatus: FIND_HOME_FILTER_PROPERTY_STATUS.ALL,
    radiusSize: 10,
    radiusMeasurement: FIND_HOME_MEASUREMENT.MILE,
    zipCode: "",
    propertyType: [],
    ARV: FIND_HOME_FILTER_PRICE_TYPE.LOW_TO_HIGH,
    repairCosts: FIND_HOME_FILTER_PRICE_TYPE.HIGHT_TO_LOW,
    rangeValue: [1, 30],
    isFilterOpened: false,
  },
  resetFilters: () => {
    set((prevState) => {
      return {
        ...prevState,
        isFilterChanged: false,
        filters: {
          ...prevState.filters,
          type: FIND_HOME_FILTER_TYPE.ALL_LISTINGS,
          propertyStatus: FIND_HOME_FILTER_PROPERTY_STATUS.ALL,
          radiusSize: 10,
          radiusMeasurement: FIND_HOME_MEASUREMENT.MILE,
          zipCode: "",
          propertyType: [],
          ARV: FIND_HOME_FILTER_PRICE_TYPE.LOW_TO_HIGH,
          repairCosts: FIND_HOME_FILTER_PRICE_TYPE.HIGHT_TO_LOW,
          rangeValue: [1, 30],
          mapsData: {
            lat: 37.0902,
            lng: -95.7129,
            mapZoom: 4,
          },
        },
      };
    });
  },
  setFilter: (newFilters) => {
    set((prevState) => {
      return {
        ...prevState,
        isFilterChanged: true,
        filters: {
          ...prevState.filters,
          ...newFilters,
        },
      };
    });
  },
}));

export default useFindHome;
