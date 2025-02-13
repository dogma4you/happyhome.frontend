import React from "react";
import Typography from "@/components/ui/typography";
import Link from "next/link";
import Icon from "@/components/ui/icon";
import Divider from "@/components/ui/divider";
import IndividualUnlocksCard from "@/components/dashboard/unlock-listing/IndividualUnlocksCard";
import DiscountPlanItem from "@/components/dashboard/unlock-listing/DiscoundPlanitem";
import serverSideFetch from "@/lib/serverSideFetch";
import UnlockListingTitle from "@/components/dashboard/unlock-listing/UnlockListingTitle";

export default async function () {
  const response = await serverSideFetch("get", "/plans");

  const plans = response.data || [];
  return (
    <div className={"dashboard-padding pt-[76px]"}>
      <div
        className={
          "p-[10px] bg-orange-1 absolute top-0 left-0 w-full text-center flex items-center justify-center gap-x-[10px]"
        }
      >
        <Icon name={"warning"} className={"text-orange-7"} />
        <Typography variant={"body4"} className={"text-orange-7"}>
          <Link href={"/dashboard"} className={"underline font-semibold"}>
            Unlock Listing
          </Link>{" "}
          to view Contracts, Home Inspection, Scope of work, CMA and Buy now.
        </Typography>
      </div>

      <UnlockListingTitle />

      <Typography
        variant={"body4"}
        className={"dark:text-white text-black normal-case mt-2 max-w-[848px]"}
      >
        When you want to dive deeper into details, this allows you to review the
        contracts, scopes-of-work, Comparative Market Analysis, and a
        third-party Home Inspection. This way, you can analyze BEFORE you buy
        the contract.
      </Typography>

      <div className={"mt-10 grid grid-cols-1 lg:grid-cols-[400px_60px_1fr]"}>
        <div>
          <Typography
            variant={"subtitle1"}
            className={"dark:text-white text-black normal-case"}
          >
            Buy Credits
          </Typography>

          <IndividualUnlocksCard />
        </div>
        <Divider
          direction={"col"}
          className={
            "items-center lg:flex-col lg:pt-[60px] lg:h-[90%] my-2 lg:mt-[25px] lg:[&>span:first-child]:h-full lg:[&>span:last-child]:h-full lg:[&>span:first-child]:w-[1px] lg:[&>span:last-child]:w-[1px] [&>span:first-child]:w-full [&>span:last-child]:w-full"
          }
          dividerColor={"bg-[#D9D9D9]"}
        >
          <div className={"py-6"}>or</div>
        </Divider>
        <div>
          <div className={"flex items-center gap-x-2"}>
            <Typography variant={"subtitle1"} className={"normal-case"}>
              Activate Discount Plan
            </Typography>
            <div className={"px-2 py-1 bg-orange-6 rounded-[8px]"}>
              <Typography variant={"body4"}>Special offers</Typography>
            </div>
          </div>

          <div className={"flex flex-col gap-y-6 mt-7"}>
            {plans.map(({ price, title, credits, discount, id }) => {
              return (
                <DiscountPlanItem
                  key={id}
                  id={id}
                  price={price}
                  title={title}
                  credits={credits}
                  discount={discount}
                />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
