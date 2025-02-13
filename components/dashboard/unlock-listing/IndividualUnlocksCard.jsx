"use client";
import React, { useEffect, useState, useTransition } from "react";
import Card from "@/components/ui/card";
import Typography from "@/components/ui/typography";
import { formatCurrency } from "@/utils/helper";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";
import axios from "@/lib/axios";
import { Skeleton } from "@/components/ui/skeleton";
import toast from "react-hot-toast";
import useBalanceStore from "@/store/useBalanceStore";

const IndividualUnlocksCard = () => {
  const [creditCount, setCreditCount] = useState(1);
  const { singleCreditPrice, setSingleCreditPrice } = useBalanceStore();

  const [isLoading, startTransition] = useTransition();

  useEffect(() => {
    (async () => {
      try {
        const { data } = await axios.get("/payment_infos/single_credit_price");
        setSingleCreditPrice(data.data);
      } catch (e) {
        toast.error("Error parsing payment response");
      }
    })();
  }, []);

  if (!singleCreditPrice)
    return <Skeleton className={"w-full h-[300px] mt-7"} />;

  const handleSubmit = () => {
    startTransition(async () => {
      try {
        const { data } = await axios.post("/balance/credit", {
          plan: null,
          credits: creditCount,
        });

        const blob = new Blob([data], { type: "text/html" });
        const url = URL.createObjectURL(blob);
        window.location.replace(url);
      } catch (e) {
        toast.error("Error parsing payment response");
      }
    });
  };
  return (
    <>
      <Card
        className={
          "px-6 py-6 md:py-10 w-full mt-7 rounded-bl-none rounded-br-none"
        }
      >
        <div>
          <Typography
            variant={"subtitle3"}
            className={"text-orange-6 text-center w-full"}
          >
            Individual unlocks
          </Typography>

          <Typography
            variant={"body3"}
            className={"text-gray-12 text-center w-full mt-1"}
          >
            Choose the quantity you need and add them to your balance.
          </Typography>
        </div>

        <div
          className={"flex items-center justify-center my-3 md:my-6 gap-x-1"}
        >
          <Typography variant={"h5"} className={"text-blue-6 font-bold"}>
            {formatCurrency(singleCreditPrice)}
          </Typography>

          <Typography variant={"body3"} className={"text-gray-11"}>
            / a credit
          </Typography>
        </div>

        <div className={"flex items-center justify-center gap-x-4"}>
          <div
            className={
              "size-[56px] min-w-[56px] rounded-full border border-gray-7 flex items-center justify-center text-2xl font-bold leading-none text-gray-12 hover:bg-background cursor-pointer"
            }
            onClick={() => setCreditCount((prev) => prev - 1)}
          >
            -
          </div>
          <Typography variant={"h5"} className={"font-bold"}>
            {creditCount}
          </Typography>
          <div
            className={
              "size-[56px] min-w-[56px] rounded-full border border-gray-7 flex items-center justify-center text-2xl font-bold leading-none text-gray-12 hover:bg-background cursor-pointer"
            }
            onClick={() => setCreditCount((prev) => prev + 1)}
          >
            +
          </div>
        </div>

        <div className={"mt-6 md:mt-10 flex justify-center"}>
          <Button
            size={"sm"}
            className={"uppercase"}
            disabled={isLoading}
            onClick={handleSubmit}
          >
            buy credits ( {formatCurrency(singleCreditPrice * creditCount)} )
          </Button>
        </div>
      </Card>
      <div
        className={
          "px-6 py-3 rounded-bl-lg rounded-br-lg bg-blue-1 gap-x-[10px] flex justify-center items-center"
        }
      >
        <Icon name={"info"} className={"text-blue-6 text-lg"} />
        <Typography variant={"body4"} className={"text-blue-6"}>
          Buying more unlock credits with special plans can save you money.
        </Typography>
      </div>
    </>
  );
};

export default IndividualUnlocksCard;
