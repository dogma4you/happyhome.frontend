import { useSearchParams } from "next/navigation";
import useFindHome from "@/store/useFindHome";
import { useEffect } from "react";
import { FIND_HOME_FILTER_TYPE } from "@/utils/constants";

const useSetContractFilters = () => {
  const { setFilter, setPageData } = useFindHome();
  const searchParams = useSearchParams();

  const radiusMeasurement =
    searchParams.get("radiusVal") && +searchParams.get("radiusVal");
  const radiusSize = searchParams.get("radius") && +searchParams.get("radius");
  const propertyType =
    searchParams
      .get("propertyType")
      ?.split(",")
      .map((val) => +val) || [];

  const lat = searchParams.get("radiusLat") && +searchParams.get("radiusLat");
  const lng = searchParams.get("radiusLng") && +searchParams.get("radiusLng");
  const mapZoom = searchParams.get("mapZoom") && +searchParams.get("mapZoom");

  const listedDurationFrom =
    searchParams.get("listedDurationFrom") &&
    +searchParams.get("listedDurationFrom");

  const listedDurationTo =
    searchParams.get("listedDurationTo") &&
    +searchParams.get("listedDurationTo");

  const filters = {};

  const rangeValue = listedDurationFrom && listedDurationTo;

  filters["propertyType"] = propertyType;

  if (rangeValue) {
    filters["rangeValue"] = [+listedDurationFrom, +listedDurationTo];
  }

  if (lat && lng && mapZoom) {
    filters["mapsData"] = { lat, lng, mapZoom, circleLat: lat, circleLng: lng };
  }

  if (radiusMeasurement) {
    filters["radiusMeasurement"] = radiusMeasurement;
  }

  if (radiusSize) {
    filters["radiusSize"] = radiusSize;
  }

  if (searchParams.get("zipCode")) {
    filters["zipCode"] = searchParams.get("zipCode");
  }

  if (searchParams.get("withinMapArea")) {
    filters["type"] = searchParams.get("withinMapArea")
      ? FIND_HOME_FILTER_TYPE.WITHIN_MAP_AREA
      : FIND_HOME_FILTER_TYPE.ALL_LISTINGS;
  }

  if (
    searchParams.get("mapZoom") &&
    searchParams.get("centerLat") &&
    searchParams.get("centerLng")
  ) {
    filters["mapsData"] = {
      mapZoom: +searchParams.get("mapZoom"),
      lat: +searchParams.get("centerLat"),
      lng: +searchParams.get("centerLng"),
    };
  }

  useEffect(() => {
    setPageData({
      page: searchParams.get("page"),
      limit: searchParams.get("limit"),
    });
    setFilter(filters);
  }, []);
};

export default useSetContractFilters;
