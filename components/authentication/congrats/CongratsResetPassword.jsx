"use client";

import * as React from "react";
import {
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import useAuthStore from "@/store/useAuthStore";
import { AUTH_VIEW } from "@/utils/constants";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import Close from "@/public/assets/icons/close";
import Image from "next/image";
import congratsStars from "@/public/assets/icons/congarts_stars.svg";
import { Button } from "@/components/ui/button";

const CongratsResetPassword = () => {
  const setView = useAuthStore(({ setView }) => setView);

  return (
    <>
      <div className={"text-right"}>
        <DialogPrimitive.Close className="ml-auto transition-opacity hover:opacity-100 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground">
          <Close
            width={16}
            height={16}
            className={"fill-black dark:fill-white"}
          />
        </DialogPrimitive.Close>
      </div>
      <DialogHeader className={"mb-6"}>
        <DialogTitle className={"text-lg"}>Congrats!</DialogTitle>
        <DialogDescription className={"text-base"}>
          Your password has been changed successfully!
        </DialogDescription>
      </DialogHeader>

      <Image
        src={congratsStars}
        width={90}
        height={84}
        className={"mx-auto mb-10"}
        alt={"congrats"}
      />

      <div className={"flex justify-center"}>
        <Button
          type="submit"
          size={"sm"}
          className={"uppercase mx-auto"}
          onClick={() => setView({ view: AUTH_VIEW.LOGIN, isLogin: true })}
        >
          Back to login
        </Button>
      </div>
    </>
  );
};

export default CongratsResetPassword;
