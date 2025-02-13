"use client";

import React, { useTransition } from "react";
import { Button } from "@/components/ui/button";
import axios from "@/lib/axios";
import toast from "react-hot-toast";

const DashboardPlanItemPurchase = ({ id }) => {
  const [isLoading, startTransition] = useTransition();

  const handleSubmit = () => {
    startTransition(async () => {
      try {
        const { data } = await axios.post("/balance/credit", {
          plan: id,
          credits: null,
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
    <Button
      size={"sm"}
      mobileSize={"xs"}
      className={"uppercase"}
      disabled={isLoading}
      onClick={handleSubmit}
    >
      purchase
    </Button>
  );
};

export default DashboardPlanItemPurchase;
