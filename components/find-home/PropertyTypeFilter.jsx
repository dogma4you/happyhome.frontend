"use client";
import React from "react";
import Typography from "@/components/ui/typography";
import Icon from "@/components/ui/icon";
import { HOME_TYPE } from "@/utils/constants";
import CardOption from "@/components/ui/card-option";
import useFindHome from "@/store/useFindHome";

const PropertyTypeFilter = () => {
  const {
    filters: { propertyType },
    setFilter,
  } = useFindHome();

  const handleSelectPropertyTypeFilter = (name) => {
    let propertyTypeFilterValue = propertyType;
    if (propertyTypeFilterValue.includes(name)) {
      propertyTypeFilterValue = propertyTypeFilterValue.filter(
        (propertyType) => propertyType !== name,
      );
    } else {
      propertyTypeFilterValue.push(name);
    }
    setFilter({
      propertyType: propertyTypeFilterValue,
    });
  };
  return (
    <div className={"mt-6"}>
      <div className={"flex items-center justify-between"}>
        <Typography variant={"subtitle3"} className={"normal-case"}>
          Property type
        </Typography>
        {!!propertyType.length && (
          <div
            className={"flex items-center gap-x-1"}
            onClick={() => setFilter({ propertyType: [] })}
          >
            <Icon name={"plus"} className={"rotate-45 block text-gray-9"} />
            <span
              className={
                "uppercase text-gray-9 text-xs font-bold leading-[18px]"
              }
            >
              clear
            </span>
          </div>
        )}
      </div>

      <CardOption
        className={
          "py-[10px] md:py-[10px] px-3 md:px-3 [&>p]:text-sm mt-4 rounded-sm"
        }
        title={"Detached"}
        onClick={() => handleSelectPropertyTypeFilter(HOME_TYPE.DETACHED)}
        isActive={propertyType.includes(HOME_TYPE.DETACHED)}
        withCheckbox
      />

      <CardOption
        className={
          "py-[10px] md:py-[10px] px-3 md:px-3 [&>p]:text-sm mt-4 rounded-sm"
        }
        title={"Townhouse / Condo"}
        onClick={() =>
          handleSelectPropertyTypeFilter(HOME_TYPE.TOWNHOUSE_CONDO)
        }
        isActive={propertyType.includes(HOME_TYPE.TOWNHOUSE_CONDO)}
        withCheckbox
      />

      <CardOption
        className={
          "py-[10px] md:py-[10px] px-3 md:px-3 [&>p]:text-sm mt-4 rounded-sm"
        }
        title={"Multi familly"}
        onClick={() => handleSelectPropertyTypeFilter(HOME_TYPE.MULTI_FAMILY)}
        isActive={propertyType.includes(HOME_TYPE.MULTI_FAMILY)}
        withCheckbox
      />
    </div>
  );
};

export default PropertyTypeFilter;
