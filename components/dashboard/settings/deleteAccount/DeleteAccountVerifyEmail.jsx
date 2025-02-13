import React, { useState, useTransition } from "react";
import { DialogContent } from "@/components/ui/dialog";
import VerifyYourEmail from "@/components/authentication/verify-your-email/VerifyYourPassword";
import toast from "react-hot-toast";
import axios from "@/lib/axios";
import { DELETE_ACCOUNT_MODAL } from "@/utils/constants";
import { useSession } from "next-auth/react";
import useDeleteAccount from "@/store/useDeleteAccount";

const DeleteAccountVerifyEmail = () => {
  const { changeFields, reason } = useDeleteAccount();
  const [error, setError] = useState("");
  const [isLoading, startTransition] = useTransition();

  const { data } = useSession();
  const email = data?.user?.email;

  const handleCheckVerifyCode = async (verifyCode) => {
    startTransition(async () => {
      try {
        setError(false);
        await axios.put("/auth/verify", {
          email: email,
          code: verifyCode,
        });
        await axios.put("/auth/account", { deleted_by_reason: reason });
        changeFields({
          view: DELETE_ACCOUNT_MODAL.ACCOUNT_DELETED,
        });
      } catch (e) {
        toast.error("Verification code failed");
        setError(true);
      }
    });
  };
  const handleResendVerificationCode = async (verifyEmail) => {
    try {
      await axios.get("/auth/resend_verification_code", {
        params: {
          email: verifyEmail,
        },
      });
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <DialogContent className={"w-[662px]"}>
      <VerifyYourEmail
        isLoading={isLoading}
        email={email}
        handleSubmit={handleCheckVerifyCode}
        onBack={() => changeFields({ view: DELETE_ACCOUNT_MODAL.FIRST_PAGE })}
        onResend={() => handleResendVerificationCode(email)}
        errorMessage={error}
      />
    </DialogContent>
  );
};

export default DeleteAccountVerifyEmail;
