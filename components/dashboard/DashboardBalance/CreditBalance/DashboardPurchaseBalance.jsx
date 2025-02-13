import React from "react";
import BalanceIcon from "@/public/assets/icons/balanceIcon";
import Typography from "@/components/ui/typography";
import { formatCurrency } from "@/utils/helper";
import Card from "@/components/ui/card";
import ContractPurchaseBalanceDialog from "@/components/dashboard/DashboardBalance/CreditBalance/ContractPurchaseBalanceDialog";
import AddPurchaseBalanceButton from "@/components/dashboard/DashboardBalance/CreditBalance/AddPurchaseBalanceButton";
import { Skeleton } from "@/components/ui/skeleton";
import useBalanceStore from "@/store/useBalanceStore";

const DashboardPurchaseBalance = ({ isLoading }) => {
  const { balance } = useBalanceStore();
  if (isLoading) {
    return <Skeleton className={"w-full h-[70px]"} />;
  }
  return (
    <>
      <ContractPurchaseBalanceDialog />
      <Card className={"p-4 bg-background flex justify-between"}>
        <div className={"flex gap-x-3 items-center"}>
          <BalanceIcon />
          <div>
            <span
              className={
                "text-gray-10 text-xs uppercase font-bold leading-[18px]"
              }
            >
              Contract Purchase Balance
            </span>
            <Typography variant={"subtitle1"}>
              {formatCurrency(balance)}
            </Typography>
          </div>
        </div>
        <AddPurchaseBalanceButton />
      </Card>
    </>
  );
};

export default DashboardPurchaseBalance;
