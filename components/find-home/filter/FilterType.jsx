"use client";
import React, { useEffect } from "react";
import CardOption from "@/components/ui/card-option";
import Icon from "@/components/ui/icon";
import useAuthStore from "@/store/useFindHome";
import { FIND_HOME_FILTER_TYPE } from "@/utils/constants";

const FilterType = () => {
  const {
    isMapOpened,
    setFilter,
    filters: { type },
  } = useAuthStore();

  const selectFilterType = (filterType) => {
    setFilter({
      type: filterType,
    });
  };

  useEffect(() => {
    if (!isMapOpened) {
      selectFilterType(FIND_HOME_FILTER_TYPE.ALL_LISTINGS);
    }
  }, [isMapOpened]);

  return (
    <div>
      <CardOption
        className={
          "py-[10px] md:py-[10px] px-3 md:px-3 [&>p]:text-sm mt-6 rounded-sm"
        }
        title={"All Listing"}
        onClick={() => selectFilterType(FIND_HOME_FILTER_TYPE.ALL_LISTINGS)}
        isActive={type === FIND_HOME_FILTER_TYPE.ALL_LISTINGS}
        radioButton
        withCheckbox
      />
      <CardOption
        disabled={!isMapOpened}
        className={"py-[10px] md:py-[10px] px-3 md:px-3 [&>p]:text-sm mt-3"}
        title={"Within map area"}
        onClick={() => selectFilterType(FIND_HOME_FILTER_TYPE.WITHIN_MAP_AREA)}
        isActive={type === FIND_HOME_FILTER_TYPE.WITHIN_MAP_AREA}
        radioButton
        withCheckbox
      />
      {!isMapOpened && (
        <div className={"flex items-start gap-x-3 mt-[6px]"}>
          <Icon name={"info"} className={"text-orange-6"} />
          <div className={"text-xs text-gray-10 leading-[18px]"}>
            "Within Map Area" is disabled when the map is turned off.
          </div>
        </div>
      )}
    </div>
  );
};

export default FilterType;
