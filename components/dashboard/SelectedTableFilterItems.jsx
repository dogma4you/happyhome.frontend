import React from "react";
import Typography from "@/components/ui/typography";
import Icon from "@/components/ui/icon";

const SelectedTableFilterItem = ({ title, onRemoveFilter }) => {
  return (
    <div
      className={
        "py-[6px] px-3 rounded-full flex items-center gap-x-[10px] border border-gray-8"
      }
    >
      <Typography variant={"body4"} className={"text-gray-12"}>
        {title}
      </Typography>
      <div
        className={
          "size-4 rounded-full flex items-center justify-center bg-gray-8 cursor-pointer"
        }
        onClick={onRemoveFilter}
      >
        <Icon
          name={"plus"}
          className={"block rotate-45 text-xs text-background"}
        />
      </div>
    </div>
  );
};

const SelectedTableFilterItems = ({
  filterValues = [],
  onClearAll,
  onRemoveFilter,
}) => {
  if (!filterValues.length) return null;
  return (
    <div className={"flex items-center gap-x-3"}>
      <div className={"flex items-center gap-x-[6px]"}>
        {filterValues.map(({ title, name }) => {
          return (
            <SelectedTableFilterItem
              title={title}
              name={name}
              onRemoveFilter={() => onRemoveFilter(name)}
            />
          );
        })}
      </div>
      <div
        className={
          "uppercase text-xs text-gray-12 cursor-pointer font-semibold px-2"
        }
        onClick={onClearAll}
      >
        Clear all
      </div>
    </div>
  );
};

export default SelectedTableFilterItems;
