import React, { useState, useTransition } from "react";
import useAuthStore from "@/store/useAuthStore";
import registration from "@/actions/registration";
import VerifyYourEmail from "@/components/authentication/verify-your-email/VerifyYourPassword";
import { REGISTER_VIEWS } from "@/utils/constants";
import axios from "@/lib/axios";
import useSettingsStore from "@/store/useSettingsStore";
import { useTheme } from "next-themes";
import toast from "react-hot-toast";

const RegisterVerifyEmail = () => {
  const { registerValues, changeFields } = useAuthStore();
  const { setNotificationSettings } = useSettingsStore();
  const { setTheme } = useTheme();
  const [isLoading, startTransition] = useTransition();
  const [error, setError] = useState("");

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

  const handleCheckVerifyCode = (verifyCode) => {
    startTransition(async () => {
      try {
        setError("");
        const response = await registration({
          firstName: registerValues.first_name,
          lastName: registerValues.last_name,
          email: registerValues.email,
          password: registerValues.password,
          phone: registerValues.phone,
          code: verifyCode,
        });

        if (response?.error) {
          toast.error(response.message);
          return;
        }

        const { data } = await axios.get("/settings");
        const theme = data.mode === 2 ? "dark" : "light";
        setNotificationSettings(data.push_notifications);
        setTheme(theme);

        changeFields({
          registerValues: [],
          registerSelectedView: REGISTER_VIEWS.CONGRATS_VIEW,
        });
      } catch (e) {
        console.log(e);
      }
    });
  };

  return (
    <VerifyYourEmail
      isLoading={isLoading}
      email={registerValues.email}
      handleSubmit={handleCheckVerifyCode}
      onBack={() => changeFields({ registerSelectedView: null })}
      onResend={() => handleResendVerificationCode(registerValues.email)}
      errorMessage={error}
    />
  );
};

export default RegisterVerifyEmail;
