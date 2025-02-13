"use client";

import React, { useTransition } from "react";
import { Button } from "@/components/ui/button";
import toast from "react-hot-toast";
import axios from "@/lib/axios";
import { emailValidations } from "@/validations/authValidations";
import InputField from "@/components/form/InputField";
import Form from "@/components/form/Form";
import { cn } from "@/lib/utils";

const SubscribeForm = ({
  containerClassName,
  inputClassName = "",
  buttonSize = "xs",
  buttonClassName = "",
  mode = "book",
}) => {
  const [isPending, startTransition] = useTransition();

  const handleSubscribe = ({ email }, _, reset = () => {}) => {
    startTransition(async () => {
      try {
        const res = await axios.post("/subsctiptions", {
          email: email,
          subscription_to: mode,
        });

        if (res.data.status === 400) {
          toast.error(res.data.message);
          return;
        }

        toast.success(res.data.message);
        reset();
      } catch (e) {
        toast.error("Subscribe failed!");
      }
    });
  };

  return (
    <div className={cn("relative", containerClassName)}>
      <Form
        initialValues={{
          email: "",
        }}
        validationSchema={emailValidations}
        onSubmit={handleSubscribe}
      >
        <InputField
          name={"email"}
          placeholder={"Enter email address"}
          id={"first_name"}
          size={"sm"}
          inputProps={{
            className: `border border-gray-9 rounded-full pl-4 py-2 pr-[130px] ${inputClassName}`,
          }}
        />

        <Button
          size={buttonSize}
          className={cn("absolute right-1 top-1", buttonClassName)}
          disabled={isPending}
        >
          SUBSCRIBE
        </Button>
      </Form>
    </div>
  );
};

export default SubscribeForm;
