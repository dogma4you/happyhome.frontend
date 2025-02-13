import React from "react";
import Typography from "@/components/ui/typography";
import SelectField from "@/components/form/Select";
import { Input } from "@/components/ui/input";
import {
  FIND_HOME_FILTER_TYPE,
  FIND_HOME_MEASUREMENT,
} from "@/utils/constants";
import useFindHome from "@/store/useFindHome";

const radiusOptions = new Array(5).fill("").map((_, i) => {
  const value = (i + 1) * 10;
  return {
    value,
    title: value,
  };
});

const measurementTypeOptions = [
  {
    title: "Mile",
    value: FIND_HOME_MEASUREMENT.MILE,
  },
  {
    title: "KM",
    value: FIND_HOME_MEASUREMENT.KM,
  },
];
const FilterRadiusAndZipCode = () => {
  const {
    filters: { radiusSize, radiusMeasurement, zipCode, type },
    setFilter,
    isMapOpened,
  } = useFindHome();

  const isDisabled =
    type === FIND_HOME_FILTER_TYPE.WITHIN_MAP_AREA || !isMapOpened;

  return (
    <>
      <div className={"mt-6"}>
        <Typography variant={"subtitle3"} className={"mb-2 normal-case"}>
          Radius
        </Typography>
        <div className={"flex gap-x-3 "}>
          <SelectField
            placeholder={"Select"}
            onChange={(value) => setFilter({ radiusSize: value })}
            value={radiusSize}
            options={radiusOptions}
            triggerClassname={"md:px-3 md:py-[10px] rounded-sm"}
            optionItemClassname={"py-2 px-4 rounded-sm cursor-pointer text-sm"}
            className={"flex-grow"}
            disabled={isDisabled}
          />
          <SelectField
            placeholder={"Select"}
            onChange={(value) => setFilter({ radiusMeasurement: value })}
            value={radiusMeasurement}
            options={measurementTypeOptions}
            triggerClassname={"md:px-3 md:py-[10px] rounded-sm"}
            optionItemClassname={"py-2 px-4 rounded-sm text-sm cursor-pointer"}
            className={"w-[90px]"}
            disabled={isDisabled}
          />
        </div>
      </div>
      <div className={"mt-6"}>
        <Typography variant={"subtitle3"} className={"mb-2 normal-case"}>
          Zip code
        </Typography>
        <Input
          size={"sm"}
          placeholder={"ex: 123456"}
          className={"block w-full"}
          value={zipCode}
          disabled={type === FIND_HOME_FILTER_TYPE.WITHIN_MAP_AREA}
          onChange={(e) => {
            setFilter({ zipCode: e.target.value });
          }}
        />
      </div>
    </>
  );
};

export default FilterRadiusAndZipCode;
