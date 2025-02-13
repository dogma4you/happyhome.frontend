"use client";
import PurchasedContractTable from "@/components/dashboard/PurchasedContractTable";
import useGetPurchase from "@/queries/useGetPurchase";
import React, { useEffect } from "react";
import { Skeleton } from "@/components/ui/skeleton";

export default function PurchasedContract() {
  const { isLoading, data, mutate } = useGetPurchase();

  useEffect(() => {
    (async () => {
      await mutate();
    })();
  }, []);

  if (isLoading) return <Skeleton className={"w-full h-[40px]"} />;
  return (
    <div className={"dashboard-padding"}>
      <PurchasedContractTable data={data?.data || []} />
    </div>
  );
}
