import React from "react";
import Card from "@/components/ui/card";
import Typography from "@/components/ui/typography";
import { formatCurrency } from "@/utils/helper";
import DashboardPlanItemPurchase from "@/components/dashboard/unlock-listing/DashboardPlanItemPurchase";

const DiscountPlanItem = ({ price = 0, title, credits = 0, discount, id }) => {
  return (
    <Card className={"p-0 flex md:items-center"}>
      <div
        className={
          "py-3 px-[10px] md:py-9 md:px-5 border-r border-dashed border-r-gray-7 flex flex-col justify-center items-center"
        }
      >
        <p
          className={
            "text-xs md:text-sm font-bold text-blue-6 uppercase text-center"
          }
        >
          you will save
        </p>
        <Typography
          variant={"h4"}
          mobileVariant={"h5"}
          className={"text-center font-bold text-blue-6"}
        >
          {formatCurrency(discount)}
        </Typography>
      </div>
      <div className={"px-4 py-[10px] md:p-6 flex justify-between flex-grow"}>
        <div>
          <div
            className={
              "uppercase text-orange-6 font-bold leading-6 text-xs md:text-base"
            }
          >
            {title}
          </div>
          <Typography
            variant={"h5"}
            mobileVariant={"subtitle1"}
            className={"my-1 text-gray-13 normal-case"}
          >
            {credits} Unlock Listing Credits
          </Typography>
          {discount && (
            <Typography
              variant={"body4"}
              className={"text-gray-11 hidden md:block"}
            >
              saves {formatCurrency(discount)} compared to individual unlocks
            </Typography>
          )}
        </div>
        <div className={"inline-flex flex-col justify-between"}>
          <div className={"flex items-center justify-end gap-x-1"}>
            <Typography
              variant={"h5"}
              mobileVariant={"subtitle1"}
              className={"text-blue-6"}
            >
              {formatCurrency(price - discount)}
            </Typography>
            {discount && (
              <p className={"text-gray-11 line-through"}>
                {formatCurrency(price)}
              </p>
            )}
          </div>
          <DashboardPlanItemPurchase id={id} />
        </div>
      </div>
    </Card>
  );
};

export default DiscountPlanItem;
