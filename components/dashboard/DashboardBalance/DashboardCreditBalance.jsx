import React from "react";
import Card from "@/components/ui/card";
import CreditIcon from "@/public/assets/icons/creditIcon";
import Typography from "@/components/ui/typography";
import AddCreditButton from "@/components/dashboard/DashboardBalance/AddCreditButton";
import useBalanceStore from "@/store/useBalanceStore";
import { Skeleton } from "@/components/ui/skeleton";

const DashboardCreditBalance = ({ isLoading }) => {
  const { credits } = useBalanceStore();
  if (isLoading) {
    return <Skeleton className={"w-full h-[70px]"} />;
  }
  return (
    <Card className={"p-4 bg-background flex justify-between"}>
      <div className={"flex gap-x-3 items-center"}>
        <CreditIcon />
        <div>
          <span
            className={
              "text-gray-10 text-xs uppercase font-bold leading-[18px]"
            }
          >
            Unlock Listings Credit Balance
          </span>
          <Typography variant={"subtitle1"}>{credits} Credit</Typography>
        </div>
      </div>
      <AddCreditButton />
    </Card>
  );
};

export default DashboardCreditBalance;
