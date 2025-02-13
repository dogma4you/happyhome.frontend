"use client";
import React, { useState, useTransition } from "react";
import useAuthStore from "@/store/useAuthStore";
import VerifyYourEmail from "@/components/authentication/verify-your-email/VerifyYourPassword";
import { FORGOT_PASSWORD_VIEWS } from "@/utils/constants";
import axios from "@/lib/axios";

const ForgotPasswordVerifyEmail = () => {
  const { registerValues, changeFields, resetPasswordValues } = useAuthStore();
  const [isLoading, startTransition] = useTransition();

  const [error, setError] = useState("");

  const handleResendVerificationCode = async () => {
    try {
      await axios.get("/auth/resend_verification_code", {
        params: {
          email: resetPasswordValues.email,
        },
      });
    } catch (e) {
      console.error(e);
    }
  };

  const handleCheckVerifyCode = (verifyCode) => {
    startTransition(async () => {
      try {
        setError("");
        await axios.put("/auth/verify", {
          code: verifyCode,
          email: resetPasswordValues.email,
        });

        changeFields({
          forgotPasswordSelectedView: FORGOT_PASSWORD_VIEWS.RESET_PASSWORD_VIEW,
          resetPasswordValues: { ...resetPasswordValues, code: verifyCode },
        });
      } catch (e) {
        if (e.response?.status === 400) {
          setError(e.response?.data?.message);
        }
      }
    });
  };

  return (
    <VerifyYourEmail
      isLoading={isLoading}
      email={registerValues.email}
      handleSubmit={handleCheckVerifyCode}
      onBack={() => changeFields({ forgotPasswordSelectedView: null })}
      onResend={handleResendVerificationCode}
      errorMessage={error}
    />
  );
};

export default ForgotPasswordVerifyEmail;
