"use client";

import React from "react";
import Image from "next/image";
import happyHomeSmallIcon from "@/public/assets/icons/happy-home-small-icon.svg";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

const GetOfferNowButton = () => {
  const router = useRouter();

  const handleOpenGetAnOffer = () => {
    router.push("/getoffer");
  };
  return (
    <Button
      size={"sm"}
      variant={"outline-white"}
      className={"uppercase py-[14px] px-6 bg-blue-6 dark:bg-transparent"}
      onClick={handleOpenGetAnOffer}
    >
      <Image
        src={happyHomeSmallIcon}
        width={30}
        height={25}
        alt={"happy home get an offer"}
      />
      get offer now
    </Button>
  );
};

export default GetOfferNowButton;
