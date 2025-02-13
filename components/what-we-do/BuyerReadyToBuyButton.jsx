"use client";

import AuthButton from "@/components/authentication/authButton";
import * as React from "react";
import { useSession } from "next-auth/react";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

const BuyerReadyToBuyButton = () => {
  const { data } = useSession();
  const router = useRouter();

  if (!data)
    return <AuthButton title={"Contract Marketplace"} isLogin={true} />;

  return (
    <Button className={"uppercase"} onClick={() => router.push("/find-home")}>
      Contract Marketplace
    </Button>
  );
};

export default BuyerReadyToBuyButton;
