"use client";

import React, { useEffect } from "react";
import DashboardPurchaseBalance from "@/components/dashboard/DashboardBalance/CreditBalance/DashboardPurchaseBalance";
import DashboardCreditBalance from "@/components/dashboard/DashboardBalance/DashboardCreditBalance";
import useGetBalance from "@/queries/useGetBalance";
import useBalanceStore from "@/store/useBalanceStore";

const DashboardBalance = () => {
  const { isLoading, data } = useGetBalance();
  const { setBalance } = useBalanceStore();

  useEffect(() => {
    if (data) {
      setBalance(data.data);
    }
  }, [data]);

  return (
    <div className={"grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-6"}>
      <DashboardPurchaseBalance isLoading={isLoading} />
      <DashboardCreditBalance isLoading={isLoading} />
    </div>
  );
};

export default DashboardBalance;
