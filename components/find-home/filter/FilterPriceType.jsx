"use client";
import React from "react";
import SelectField from "@/components/form/Select";
import { FIND_HOME_FILTER_PRICE_TYPE } from "@/utils/constants";
import useFindHome from "@/store/useFindHome";

const FilterPriceTypeOptions = [
  {
    value: FIND_HOME_FILTER_PRICE_TYPE.LOW_TO_HIGH,
    title: "Low to High",
  },
  {
    value: FIND_HOME_FILTER_PRICE_TYPE.HIGHT_TO_LOW,
    title: "High to low",
  },
];

const FilterPriceType = () => {
  const {
    filters: { ARV },
    setFilter,
  } = useFindHome();
  return (
    <>
      <SelectField
        label={"ARV"}
        labelClassName={"text-base"}
        placeholder={"Select"}
        onChange={(value) => setFilter({ ARV: value })}
        value={ARV}
        options={FilterPriceTypeOptions}
        triggerClassname={"md:px-4 md:py-[10px] text-sm rounded-sm"}
        optionItemClassname={"py-2 px-4 rounded-sm text-sm cursor-pointer"}
        className={"flex-grow mt-6"}
      />

      {/*<SelectField*/}
      {/*  label={"Repair Costs"}*/}
      {/*  labelClassName={"normal-case text-base"}*/}
      {/*  placeholder={"Select"}*/}
      {/*  onChange={(value) => setFilter({ repairCosts: value })}*/}
      {/*  value={repairCosts}*/}
      {/*  options={FilterPriceTypeOptions}*/}
      {/*  triggerClassname={"md:px-4 md:py-[10px] text-sm rounded-sm"}*/}
      {/*  optionItemClassname={"py-2 px-4 rounded-sm text-sm cursor-pointer"}*/}
      {/*  className={"flex-grow mt-6"}*/}
      {/*/>*/}
    </>
  );
};

export default FilterPriceType;
