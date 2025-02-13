"use client";
import Typography from "@/components/ui/typography";
import Icon from "@/components/ui/icon";
import { useState } from "react";
import { cn } from "@/lib/utils";
import DashboardOfferItem from "@/components/dashboard/DashboardOfferItem";
import useGetOfferList from "@/queries/useGetOfferList";
import { Skeleton } from "@/components/ui/skeleton";

const DashboardOffers = () => {
  const [currentOffer, setCurrentOffer] = useState(0);
  const { isLoading, data } = useGetOfferList();

  if (isLoading || !data?.data?.data) {
    return <Skeleton className={"w-full h-[100px] mt-4"} />;
  }

  const offers = data?.data?.data.filter(({ status }) => status !== 2);

  if (offers.length === 0) {
    return (
      <div
        className={
          "w-full h-[100px] bg-background rounded-[24px] p-4 mt-4 flex justify-center items-center"
        }
      >
        <span>No Offers</span>
      </div>
    );
  }

  const handleNext = () => {
    setCurrentOffer((prev) => {
      if (prev + 1 <= offers.length - 1) {
        return prev + 1;
      }

      return prev;
    });
  };

  const handlePrev = () => {
    setCurrentOffer((prev) => {
      if (prev - 1 >= 0) {
        return prev - 1;
      }

      return prev;
    });
  };

  return (
    <div className={"mt-6 grid grid-cols-3 items-center"}>
      <Typography
        variant={"subtitle1"}
        mobileVariant={"subtitle3"}
        className={"normal-case "}
      >
        Offers
      </Typography>

      <div
        className={
          "col-span-2 items-center justify-end gap-x-6 contents md:flex"
        }
      >
        <p
          className={
            "text-xs text-end uppercase text-blue-6 font-bold m-0 col-span-2 md:col-span-1"
          }
        >
          {/*<Link href={"/dashboard/previous-offers"}></Link>*/}
          previous offers
        </p>
        <div
          className={
            "flex items-center gap-x-6 justify-end order-3 md:order-1 col-span-3 md:col-span-1 mt-8 md:mt-0"
          }
        >
          <div className={"flex items-center gap-x-2"}>
            <p className={"font-bold text-gray-11 text-xs uppercase"}>
              {currentOffer + 1} of {offers.length}
            </p>
            <div className={"flex items-center gap-x-2"}>
              <div
                className={cn(
                  "size-8 md:size-5 flex items-center justify-center bg-background rounded-full leading-none",
                  currentOffer === 0 && "opacity-70",
                )}
                onClick={handlePrev}
              >
                <Icon
                  name={"arrow-right"}
                  className={"block rotate-180 text-gray-12"}
                />
              </div>

              <div
                onClick={handleNext}
                className={cn(
                  "size-8 md:size-5 flex items-center justify-center bg-background rounded-full leading-none",
                  currentOffer === offers.length - 1 && "opacity-70",
                )}
              >
                <Icon name={"arrow-right"} className={"block text-gray-12"} />
              </div>
            </div>
          </div>
        </div>
      </div>

      <DashboardOfferItem
        offer={offers[currentOffer]}
        className={"col-span-3 mt-6"}
      />
    </div>
  );
};

export default DashboardOffers;
