"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import FilterType from "@/components/find-home/filter/FilterType";
import FilterHeader from "@/components/find-home/filter/FilterHeader";
import PropertyTypeFilter from "@/components/find-home/PropertyTypeFilter";
import FilterRangeSlider from "@/components/find-home/filter/FilterRangeSlider";
import FilterPropertyStatus from "@/components/find-home/filter/FilterPropertyStatus";
import FilterRadiusAndZipCode from "@/components/find-home/filter/FilterRadiusAndZipCode";
import FilterPriceType from "@/components/find-home/filter/FilterPriceType";
import useFindHome from "@/store/useFindHome";
import { useRouter, useSearchParams } from "next/navigation";
import { FIND_HOME_FILTER_TYPE } from "@/utils/constants";

function setOrResetParam(params, value, paramName) {
  if (value) {
    params.set(paramName, value);
  } else if (params.get(paramName)) {
    params.delete(paramName);
  }
}

const Filter = () => {
  const { resetFilters, filters, isMapOpened } = useFindHome();

  const router = useRouter();
  const searchParams = useSearchParams();

  const handleSetSearchParams = () => {
    const newParams = new URLSearchParams(searchParams.toString());
    if (filters.propertyType.length) {
      newParams.set("propertyType", filters.propertyType);
    } else if (newParams.get("propertyType")) {
      newParams.delete("propertyType");
    }

    if (
      isMapOpened &&
      filters.mapsData.circleLat &&
      filters.mapsData.circleLng
    ) {
      newParams.set("radiusLat", filters.mapsData.circleLat);
      newParams.set("radiusLng", filters.mapsData.circleLng);
      newParams.set("mapZoom", filters.mapsData.mapZoom);
      newParams.set("radiusVal", filters.radiusMeasurement);
      newParams.set("radius", filters.radiusSize);
    }

    setOrResetParam(newParams, filters.zipCode, "zipCode");

    if (filters.type === FIND_HOME_FILTER_TYPE.ALL_LISTINGS) {
      newParams.delete("northLat");
      newParams.delete("westLng");
      newParams.delete("eastLng");
      newParams.delete("southLat");
      newParams.delete("northLng");
      newParams.delete("southLng");
      newParams.delete("eastLat");
      newParams.delete("westLat");

      newParams.delete("withinMapArea");
      newParams.delete("centerLat");
      newParams.delete("centerLng");
    }

    newParams.set("listedDurationFrom", filters.rangeValue[0]);
    newParams.set("listedDurationTo", filters.rangeValue[1]);

    newParams.set("paid", filters.propertyStatus);

    router.push(`?${newParams.toString()}`);
  };

  const handleResetAllSearchParams = () => {
    const newParams = new URLSearchParams("");
    router.push(`?${newParams.toString()}`);
  };

  const handleResetFilters = () => {
    resetFilters();
    handleResetAllSearchParams();
  };

  return (
    <div className={"p-6 border border-gray-6 rounded-lg mt-6"}>
      <FilterHeader />
      <FilterType />
      <FilterPropertyStatus />
      <FilterRadiusAndZipCode />
      <PropertyTypeFilter />
      <FilterPriceType />
      <FilterRangeSlider />

      <div
        className={
          "flex items-center justify-between pt-6 border-t border-gray-6 mt-6"
        }
      >
        <Button
          variant={"ghost"}
          size={"sm"}
          className={"px-0 uppercase text-gray-11"}
          onClick={handleResetFilters}
        >
          Clear ALL
        </Button>

        <Button
          size={"sm"}
          className={"py-2 uppercase"}
          onClick={handleSetSearchParams}
        >
          Apply
        </Button>
      </div>
    </div>
  );
};

export default Filter;
