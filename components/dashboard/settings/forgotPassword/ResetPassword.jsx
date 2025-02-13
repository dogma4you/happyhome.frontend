"use client";
import { DialogHeader, DialogTitle } from "@/components/ui/dialog";
import InputField from "@/components/form/InputField";
import { resetPasswordValidation } from "@/validations/authValidations";
import Form from "@/components/form/Form";
import { Button } from "@/components/ui/button";
import { useTransition } from "react";
import axios from "@/lib/axios";
import { useSession } from "next-auth/react";
import Icon from "@/components/ui/icon";
import toast from "react-hot-toast";

const ResetPassword = ({ verifyCode, onClose }) => {
  const [isLoading, startTransition] = useTransition();
  const { data } = useSession();

  const handleSubmit = (values, setError) => {
    startTransition(async () => {
      try {
        await axios.post("/auth/reset_password", {
          code: verifyCode,
          email: data.user.email,
          password: values.password,
        });
        toast.success("Password reset successfully!");
        onClose();
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
      <div className="flex justify-end cursor-pointer" onClick={onClose}>
        <Icon name={"plus"} className={"rotate-45"} />
      </div>
      <DialogHeader className={"mb-6"}>
        <DialogTitle>Reset password</DialogTitle>
        {/*<DialogDescription>Lorem ipsum dolar sit amet minim</DialogDescription>*/}
      </DialogHeader>
      <Form
        onSubmit={handleSubmit}
        validationSchema={resetPasswordValidation}
        className={"flex flex-col gap-y-10"}
      >
        <InputField
          inputProps={{
            type: "password",
          }}
          label={"Password"}
          name={"password"}
          placeholder={"Create a password"}
          id={"password"}
          size={"sm"}
        />

        <InputField
          inputProps={{
            type: "password",
          }}
          label={"Confirm Password"}
          name={"confirm_password"}
          placeholder={"Confirm password"}
          id={"confirm_password"}
          size={"sm"}
        />

        <div className={"flex items-center justify-end mt-[45px]"}>
          <Button size={"sm"} disabled={isLoading}>
            Reset
          </Button>
        </div>
      </Form>
    </>
  );
};

export default ResetPassword;
