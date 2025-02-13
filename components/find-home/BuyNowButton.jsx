import React from "react";
import { Button } from "@/components/ui/button";
import axios from "@/lib/axios";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

const BuyNowButton = ({
  className,
  disabled,
  size,
  mobileSize,
  id,
  onSuccess = () => {},
}) => {
  const router = useRouter();
  const handleBuyContract = async (e) => {
    try {
      e.stopPropagation();
      const { data } = await axios.put(`/contracts/purchase/${id}`);
      if (!data.success) {
        router.push("/dashboard");
      }
      toast.success(data.message);
      onSuccess();
    } catch (e) {
      console.error(e.message || "Error while trying to fetch purchase");
    }
  };

  return (
    <Button
      className={className}
      disabled={disabled}
      size={size}
      mobileSize={mobileSize}
      onClick={handleBuyContract}
    >
      Buy Now
    </Button>
  );
};

export default BuyNowButton;
