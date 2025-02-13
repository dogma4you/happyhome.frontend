"use client";
import CardOption from "@/components/ui/card-option";
import useAuthStore from "@/store/useFindHome";
import { FIND_HOME_FILTER_PROPERTY_STATUS } from "@/utils/constants";
import useSWR from "swr";

const FilterPropertyStatus = () => {
  const {
    setFilter,
    filters: { propertyStatus },
  } = useAuthStore();

  const { isLoading, data } = useSWR("/contracts/all/info");

  const selectFilterType = (filterType) => {
    setFilter({
      propertyStatus: filterType,
    });
  };

  if (isLoading) return null;

  const { locked, unlocked } = data.data;

  return (
    <div>
      <CardOption
        className={
          "py-[10px] md:py-[10px] px-3 md:px-3 [&>p]:text-sm mt-6 rounded-sm"
        }
        title={"All"}
        onClick={() => selectFilterType(FIND_HOME_FILTER_PROPERTY_STATUS.ALL)}
        isActive={propertyStatus === FIND_HOME_FILTER_PROPERTY_STATUS.ALL}
        radioButton
        withCheckbox
      />
      <CardOption
        className={
          "py-[10px] md:py-[10px] px-3 md:px-3 [&>p]:text-sm mt-3 rounded-sm"
        }
        title={`Locked (${locked})`}
        onClick={() =>
          selectFilterType(FIND_HOME_FILTER_PROPERTY_STATUS.LOCKED)
        }
        isActive={propertyStatus === FIND_HOME_FILTER_PROPERTY_STATUS.LOCKED}
        radioButton
        withCheckbox
      />
      <CardOption
        className={
          "py-[10px] md:py-[10px] px-3 md:px-3 [&>p]:text-sm mt-3 rounded-sm"
        }
        title={`Unlocked (${unlocked})`}
        onClick={() =>
          selectFilterType(FIND_HOME_FILTER_PROPERTY_STATUS.UNLOCKED)
        }
        isActive={propertyStatus === FIND_HOME_FILTER_PROPERTY_STATUS.UNLOCKED}
        radioButton
        withCheckbox
      />
    </div>
  );
};

export default FilterPropertyStatus;
