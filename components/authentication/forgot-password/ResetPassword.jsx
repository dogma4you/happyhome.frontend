"use client";
import { DialogHeader, DialogTitle } from "@/components/ui/dialog";
import useAuthStore from "@/store/useAuthStore";
import { FORGOT_PASSWORD_VIEWS } from "@/utils/constants";
import InputField from "@/components/form/InputField";
import Arrow from "@/public/assets/icons/arrow";
import { resetPasswordValidation } from "@/validations/authValidations";
import Form from "@/components/form/Form";
import { Button } from "@/components/ui/button";
import { useTransition } from "react";
import axios from "@/lib/axios";

const ResetPassword = () => {
  const { resetPasswordValues, changeFields } = useAuthStore();
  const [isLoading, startTransition] = useTransition();

  const handleSubmit = (values, setError) => {
    startTransition(async () => {
      try {
        await axios.post("/auth/reset_password", {
          code: resetPasswordValues.code,
          email: resetPasswordValues.email,
          password: values.password,
        });
        changeFields({
          forgotPasswordSelectedView: FORGOT_PASSWORD_VIEWS.CONGRATS_VIEW,
        });
      } catch (e) {
        if (e.response?.status === 400) {
          setError("confirm_password", {
            type: "manual",
            message: e.response?.data?.message,
          });
        }
      }
    });
  };

  return (
    <>
      <div
        className=" transition-opacity hover:opacity-100 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground cursor-pointer"
        onClick={() =>
          changeFields({
            forgotPasswordSelectedView: FORGOT_PASSWORD_VIEWS.CHECK_EMAIL_VIEW,
            isLogin: true,
          })
        }
      >
        <Arrow
          width={16}
          height={16}
          className={"stroke-black dark:stroke-white rotate-180"}
        />
      </div>
      <DialogHeader className={"mb-6"}>
        <DialogTitle>Reset password</DialogTitle>
      </DialogHeader>
      <Form
        initialValues={{}}
        onSubmit={handleSubmit}
        validationSchema={resetPasswordValidation}
        className={"flex flex-col gap-y-10"}
      >
        <InputField
          inputProps={{
            type: "password",
          }}
          label={"New Password"}
          name={"password"}
          placeholder={"Enter new password"}
          id={"password"}
          size={"sm"}
        />

        <InputField
          inputProps={{
            type: "password",
          }}
          label={"Confirm Password"}
          name={"confirm_password"}
          placeholder={"Confirm your password"}
          id={"confirm_password"}
          size={"sm"}
        />

        <div className={"flex items-center justify-end mt-[45px]"}>
          <Button size={"sm"} disabled={isLoading} className={"uppercase"}>
            Reset
          </Button>
        </div>
      </Form>
    </>
  );
};

export default ResetPassword;
