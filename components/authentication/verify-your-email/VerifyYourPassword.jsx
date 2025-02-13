"use client";

import {
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import Arrow from "@/public/assets/icons/arrow";
import * as React from "react";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp";
import { REGEXP_ONLY_DIGITS_AND_CHARS } from "input-otp";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import ErrorMessage from "@/components/form/ErrorMessage";
import Typography from "@/components/ui/typography";

const VerifyYourEmail = ({
  handleSubmit,
  email = "",
  onBack = () => {},
  onResend = () => {},
  errorMessage = "",
  inputCount = 6,
  isLoading = false,
}) => {
  const [verifyCode, setVerifyCode] = useState("");
  const errorClassName = errorMessage ? "border-error-10" : "";
  return (
    <>
      <div
        className=" transition-opacity hover:opacity-100 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground cursor-pointer"
        onClick={onBack}
      >
        <Arrow
          width={16}
          height={16}
          className={"stroke-black dark:stroke-white rotate-180"}
        />
      </div>
      <DialogHeader className={"mb-10"}>
        <DialogTitle>Verify your Email</DialogTitle>
        <DialogDescription>We’ve sent a code to {email}</DialogDescription>
      </DialogHeader>

      <InputOTP
        onChange={(value) => setVerifyCode(value)}
        maxLength={inputCount}
        pattern={REGEXP_ONLY_DIGITS_AND_CHARS}
      >
        <InputOTPGroup>
          {new Array(inputCount).fill("").map((_, key) => {
            return (
              <InputOTPSlot key={key} index={key} className={errorClassName} />
            );
          })}
        </InputOTPGroup>
      </InputOTP>

      {errorMessage && (
        <ErrorMessage className={"px-10"}>{errorMessage}</ErrorMessage>
      )}

      <div className={"flex items-center justify-between mt-[96px]"}>
        <Typography variant={"body4"} className={"flex items-baseline gap-x-3"}>
          <span className={"text-gray-11"}>Didn’t receive a code?</span>
          <span
            className={
              "text-blue-6 uppercase text-sm font-bold hover:text-blue-7 cursor-pointer"
            }
            onClick={onResend}
          >
            Resend
          </span>
        </Typography>

        <Button
          size={"sm"}
          onClick={() => handleSubmit(verifyCode)}
          disabled={isLoading}
          className={"uppercase"}
        >
          Verify
        </Button>
      </div>
    </>
  );
};

export default VerifyYourEmail;
