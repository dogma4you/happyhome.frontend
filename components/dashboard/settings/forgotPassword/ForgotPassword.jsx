import axios from "@/lib/axios";
import React, { useState, useTransition } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import ForgotPasswordVerifyEmail from "@/components/dashboard/settings/forgotPassword/ForgotPasswordVerifyEmail";
import { useSession } from "next-auth/react";
import ResetPassword from "@/components/dashboard/settings/forgotPassword/ResetPassword";

const ForgotPassword = ({ onSuccess = () => {} }) => {
  const [showVerifyEmailPopup, setShowVerifyEmailPopup] = useState(true);
  const [showResetPassword, setShowRestPassword] = useState(false);
  const [isPending, startTransition] = useTransition();
  const [error, setError] = useState("");
  const [verifyCode, setVerifyCode] = useState("");
  const { data } = useSession();

  const handleSubmit = (verifyCode) => {
    startTransition(async () => {
      try {
        setError("");
        await axios.put("/auth/verify", {
          code: verifyCode,
          email: data.user.email,
        });
        setVerifyCode(verifyCode);
        setShowRestPassword(true);
      } catch (e) {
        if (e.response?.status === 400) {
          setError(e.response?.data?.message);
        }
      }
    });
  };

  const handleCloseDialog = () => {
    setShowVerifyEmailPopup(false);
    onSuccess();
  };

  return (
    <>
      <Dialog open={showVerifyEmailPopup} onOpenChange={handleCloseDialog}>
        <DialogContent
          className={"w-[732px] px-4 md:px-[56px]"}
          disableOutsideClick
        >
          {!showResetPassword && (
            <ForgotPasswordVerifyEmail
              onSubmit={handleSubmit}
              onClose={handleCloseDialog}
              isLoading={isPending}
              error={error}
            />
          )}

          {showResetPassword && (
            <ResetPassword
              onSuccess={handleCloseDialog}
              verifyCode={verifyCode}
              onClose={handleCloseDialog}
            />
          )}
        </DialogContent>
      </Dialog>
    </>
  );
};

export default ForgotPassword;
