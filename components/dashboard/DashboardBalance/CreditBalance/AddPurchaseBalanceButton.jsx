"use client";

import React from "react";
import Icon from "@/components/ui/icon";
import useBalanceStore from "@/store/useBalanceStore";

const AddPurchaseBalanceButton = () => {
  const { setOpenBalanceDialog } = useBalanceStore();
  return (
    <div
      className={
        "size-5 border-2 border-blue-6 rounded-full flex items-center justify-center cursor-pointer"
      }
      onClick={() => setOpenBalanceDialog(true)}
    >
      <Icon name={"plus"} className={"text-blue-6 text-[10px] font-bold"} />
    </div>
  );
};

export default AddPurchaseBalanceButton;
