import React, { useState, useTransition } from "react";
import VerifyYourEmail from "@/components/authentication/verify-your-email/VerifyYourPassword";
import axios from "@/lib/axios";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import useGetAnOffer from "@/store/useGetAnOffer";

const GetOfferGuestVerifyEmail = ({ onSuccess, open, onClose }) => {
  const { user } = useGetAnOffer();
  const [isLoading, startTransition] = useTransition();

  const [error, setError] = useState("");

  const handleResendVerificationCode = async () => {
    try {
      await axios.get("/auth/resend_verification_code", {
        params: {
          email: user.email,
        },
      });
    } catch (e) {
      console.log(e);
    }
  };

  const handleCheckVerifyCode = (verifyCode) => {
    startTransition(async () => {
      try {
        await axios.put("/auth/verify", {
          email: user.email,
          code: verifyCode,
        });
        onSuccess();
      } catch (e) {
        setError(e.response?.data?.message || "Error");
        console.log(e);
      }
    });
  };

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className={"w-[732px] md:px-[56px]"}>
        <VerifyYourEmail
          isLoading={isLoading}
          email={user.email}
          handleSubmit={handleCheckVerifyCode}
          onBack={() => {}}
          onResend={handleResendVerificationCode}
          errorMessage={error}
        />
      </DialogContent>
    </Dialog>
  );
};

export default GetOfferGuestVerifyEmail;
