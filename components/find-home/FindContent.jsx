"use client";
import React from "react";
import ListingItem from "@/components/find-home/listingItem/ListingItem";
import GoogleMapComponent from "@/components/find-home/googlemaps";
import Typography from "@/components/ui/typography";
import filterIcon from "@/public/assets/icons/filter.svg";
import mapIcon from "@/public/assets/icons/map.svg";
import Image from "next/image";
import useFindHome from "@/store/useFindHome";
import { Skeleton } from "@/components/ui/skeleton";
import PaginationField from "@/components/form/PaginationField";

const FindContentList = ({ contracts, isLoading, mutate }) => {
  const { setFilter, setMapOpened } = useFindHome();

  if (isLoading) {
    return <Skeleton className={"w-full h-[200px] "} />;
  }

  return (
    <>
      <div className={"flex justify-between items-center w-full"}>
        <Typography
          variant={"h5"}
          mobileVariant={"subtitle1"}
          className={"normal-case"}
        >
          Listing
        </Typography>

        <div className={"flex items-center gap-x-2"}>
          <div className={"xl:hidden"}>
            <div
              className={
                "w-[34px] h-[34px] rounded-full flex items-center justify-center border border-gray-6 cursor-pointer hover:bg-gray-3"
              }
              onClick={() => setFilter({ isFilterOpened: true })}
            >
              <Image src={filterIcon} alt={"filter"} />
            </div>
          </div>

          <div className={"xl:hidden"}>
            <div
              className={
                "w-[34px] h-[34px] rounded-full flex items-center justify-center border border-gray-6 cursor-pointer hover:bg-gray-3"
              }
              onClick={() => setMapOpened(true)}
            >
              <Image src={mapIcon} alt={"filter"} />
            </div>
          </div>
        </div>
      </div>
      {contracts.map((contract) => {
        return <ListingItem contract={contract} mutate={mutate} />;
      })}
    </>
  );
};

const FindContent = ({
  isLoading,
  contracts,
  totalCount,
  mutate,
  onChangePage,
  page,
}) => {
  const { isMapOpened } = useFindHome();

  return (
    <div className={"flex-grow"}>
      {isMapOpened ? <GoogleMapComponent contracts={contracts} /> : null}
      <FindContentList
        isLoading={isLoading}
        contracts={contracts}
        mutate={mutate}
      />
      <PaginationField
        currentPage={page}
        pagePerView={10}
        totalCount={totalCount}
        onPageChange={onChangePage}
      />
    </div>
  );
};

export default FindContent;
