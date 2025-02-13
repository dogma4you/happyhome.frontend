"use client";
import { cn } from "@/lib/utils";
import MapSwitcher from "@/components/find-home/MapSwitcher";
import Filter from "@/components/find-home/filter/Filter";
import useFindHome from "@/store/useFindHome";
import Icon from "@/components/ui/icon";
import * as React from "react";
import { Skeleton } from "@/components/ui/skeleton";

const FilterContent = ({ isLoading }) => {
  const {
    filters: { isFilterOpened },
    setFilter,
  } = useFindHome();
  return (
    <>
      <div
        className={cn(
          "black-window z-[1000] xl:hidden",
          isFilterOpened && "opacity-100 pointer-events-auto",
        )}
        onClick={() => setFilter({ isFilterOpened: false })}
      />
      <div
        className={cn(
          "w-full md:w-[350px] md:min-w-[282px] xl:static xl:w-auto xl:p-0 xl:z-0 fixed top-full left-0 md:-left-full md:top-[88px] z-[1000] bg-background p-6 h-[calc(100%_-_77px)] md:h-[calc(100%_-_88px)] overflow-y-auto transition-all",
          isFilterOpened && "md:left-0 top-[77px]",
        )}
      >
        <div className={"mb-4 flex justify-end md:hidden"}>
          <Icon
            name={"plus"}
            className={"rotate-45 text-gray-9 block"}
            onClick={() => setFilter({ isFilterOpened: false })}
          />
        </div>
        {isLoading ? (
          <Skeleton className={"w-full h-[500px] "} />
        ) : (
          <>
            <MapSwitcher />
            <Filter />
          </>
        )}
      </div>
    </>
  );
};

export default FilterContent;
