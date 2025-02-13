"use client";
import React, { useEffect } from "react";
import { useParams, useRouter } from "next/navigation";
import axios from "@/lib/axios";
import toast from "react-hot-toast";

export default function PaymentSuccess() {
  const { id } = useParams();
  const router = useRouter();
  useEffect(() => {
    (async () => {
      if (!id) {
        return router.push("/");
      }

      try {
        await axios.post("/payment_infos/payment-success", {
          transaction: id,
        });
      } catch (e) {
        toast.error("Something went wrong");
      } finally {
        router.push("/");
      }
    })();
  }, [id]);

  return <></>;
}
