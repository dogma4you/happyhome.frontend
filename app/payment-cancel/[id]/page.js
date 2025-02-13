"use client";
import React, { useEffect } from "react";
import { useParams, useRouter } from "next/navigation";
import axios from "@/lib/axios";
import toast from "react-hot-toast";

export default function PaymentCancel() {
  const { id } = useParams();
  const router = useRouter();
  useEffect(() => {
    if (!id) {
      return router.push("/dashboard");
    }

    (async () => {
      try {
        await axios.post("/payment_infos/payment-cancel", {
          transaction: id,
        });
      } catch (e) {
        toast.error("Something went wrong");
      } finally {
        router.push("/dashboard");
      }
    })();
  }, [id]);

  return <></>;
}
