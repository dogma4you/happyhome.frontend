"use client";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

const SellerGetAnOfferButton = () => {
  const router = useRouter();

  const handleOpenGetAnOffer = () => {
    router.push("/getoffer");
  };

  return (
    <Button size={"lg"} className={"uppercase"} onClick={handleOpenGetAnOffer}>
      get an offer
    </Button>
  );
};

export default SellerGetAnOfferButton;
