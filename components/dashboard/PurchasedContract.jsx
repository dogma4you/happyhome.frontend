"use client";

import React, { useEffect } from "react";
import Typography from "@/components/ui/typography";
import { Button } from "@/components/ui/button";
import PurchasedContractTable from "@/components/dashboard/PurchasedContractTable";
import { useRouter } from "next/navigation";
import useGetPurchase from "@/queries/useGetPurchase";
import { Skeleton } from "@/components/ui/skeleton";

const PurchasedContract = () => {
  const router = useRouter();

  const { isLoading, data, mutate } = useGetPurchase();

  useEffect(() => {
    (async () => {
      await mutate();
    })();
  }, []);

  if (isLoading) return <Skeleton className={"w-full h-[40px]"} />;

  return (
    <>
      <div className={"flex justify-between items-center my-5"}>
        <Typography variant={"subtitle1"}>Purchased contracts</Typography>
        <Button
          size={"xs"}
          variant={"ghost"}
          className={"uppercase"}
          onClick={() => router.push("/dashboard/purchased-contract")}
        >
          view all
        </Button>
      </div>
      <PurchasedContractTable data={data?.data.slice(0, 3) || []} />
    </>
  );
};

export default PurchasedContract;
