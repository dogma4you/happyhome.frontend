import React from "react";
import VerifyYourEmail from "@/components/authentication/verify-your-email/VerifyYourPassword";
import { useSession } from "next-auth/react";
import axios from "@/lib/axios";

const ForgotPasswordVerifyEmail = ({
  onSubmit,
  isLoading = false,
  error,
  onClose = () => {},
}) => {
  const { data } = useSession();
  const handleResendVerificationCode = async () => {
    try {
      await axios.get("/auth/resend_verification_code", {
        params: {
          email: data.user.email,
        },
      });
    } catch (e) {
      console.error(e);
    }
  };
  return (
    <VerifyYourEmail
      isLoading={isLoading}
      email={data.user.email}
      handleSubmit={onSubmit}
      onResend={handleResendVerificationCode}
      errorMessage={error}
      onBack={onClose}
    />
  );
};

export default ForgotPasswordVerifyEmail;
