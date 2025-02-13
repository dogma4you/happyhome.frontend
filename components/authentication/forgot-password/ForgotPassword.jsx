"use client";

import {
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import useAuthStore from "@/store/useAuthStore";
import { AUTH_VIEW, FORGOT_PASSWORD_VIEWS } from "@/utils/constants";
import InputField from "@/components/form/InputField";
import Arrow from "@/public/assets/icons/arrow";
import { Button } from "@/components/ui/button";
import Form from "@/components/form/Form";
import { forgotPasswordValidation } from "@/validations/authValidations";
import ForgotPasswordVerifyEmail from "@/components/authentication/forgot-password/ForgotPasswordVerifyEmail";
import { useEffect, useTransition } from "react";
import ResetPassword from "@/components/authentication/forgot-password/ResetPassword";
import CongratsResetPassword from "@/components/authentication/congrats/CongratsResetPassword";
import axios from "@/lib/axios";

const ForgotPassword = () => {
  const { setView, changeFields, forgotPasswordSelectedView } = useAuthStore();
  const [isLoading, startTransition] = useTransition();

  const handleSubmit = (values, setError) => {
    startTransition(async () => {
      try {
        await axios.get("/auth/reset_verification", {
          params: {
            type: 2,
            email: values.email,
          },
        });

        changeFields({
          forgotPasswordSelectedView: FORGOT_PASSWORD_VIEWS.CHECK_EMAIL_VIEW,
          isLogin: true,
          resetPasswordValues: { email: values.email },
        });
      } catch (e) {
        setError("email", {
          type: "manual",
          message: e.response?.data?.message,
        });
      }
    });
  };

  useEffect(() => {
    return () => {
      changeFields({
        forgotPasswordSelectedView: null,
        resetPasswordValues: {},
      });
    };
  }, []);

  switch (forgotPasswordSelectedView) {
    case FORGOT_PASSWORD_VIEWS.CHECK_EMAIL_VIEW:
      return <ForgotPasswordVerifyEmail />;
    case FORGOT_PASSWORD_VIEWS.RESET_PASSWORD_VIEW:
      return <ResetPassword />;
    case FORGOT_PASSWORD_VIEWS.CONGRATS_VIEW:
      return <CongratsResetPassword />;
  }

  return (
    <>
      <div
        className=" transition-opacity hover:opacity-100 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground cursor-pointer"
        onClick={() => setView({ view: AUTH_VIEW.LOGIN, isLogin: true })}
      >
        <Arrow
          width={16}
          height={16}
          className={"stroke-black dark:stroke-white rotate-180"}
        />
      </div>
      <DialogHeader className={"mb-6"}>
        <DialogTitle>Forgot password?</DialogTitle>
        <DialogDescription>
          Don’t worry! It happens. Please enter the email associated with your
          account.
        </DialogDescription>
      </DialogHeader>
      <Form
        initialValues={{}}
        onSubmit={handleSubmit}
        validationSchema={forgotPasswordValidation}
      >
        <InputField
          label={"Email"}
          name={"email"}
          placeholder={"Enter your email"}
          id={"email"}
          size={"sm"}
        />

        <div className={"flex items-center justify-end mt-[35px]"}>
          <Button size={"sm"} disabled={isLoading} className={"uppercase"}>
            Send code
          </Button>
        </div>
      </Form>
    </>
  );
};

export default ForgotPassword;
