"use client";

import Typography from "@/components/ui/typography";
import React from "react";
import useBalanceStore from "@/store/useBalanceStore";
import { formatCurrency } from "@/utils/helper";

const UnlockListingTitle = () => {
  const { singleCreditPrice } = useBalanceStore();
  if (!singleCreditPrice) return "";
  return (
    <Typography
      variant={"h5"}
      mobileVariant={"subtitle1"}
      className={"dark:text-white text-black normal-case"}
    >
      Purchase Unlock Listing Credits. 1 credit for only{" "}
      {formatCurrency(singleCreditPrice)}
    </Typography>
  );
};

export default UnlockListingTitle;
