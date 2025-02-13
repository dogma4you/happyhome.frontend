"use client";

import React from "react";
import Icon from "@/components/ui/icon";
import { useRouter } from "next/navigation";

const AddCreditButton = () => {
  const router = useRouter();
  return (
    <div
      className={
        "size-5 border-2 border-blue-6 rounded-full flex items-center justify-center"
      }
      onClick={() => router.push("/dashboard/unlock-listing")}
    >
      <Icon name={"plus"} className={"text-blue-6 text-[10px] font-bold"} />
    </div>
  );
};

export default AddCreditButton;
