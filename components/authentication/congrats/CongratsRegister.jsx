"use client";

import * as React from "react";
import {
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import useAuthStore from "@/store/useAuthStore";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import Close from "@/public/assets/icons/close";
import Image from "next/image";
import congratsHome from "@/public/assets/icons/congrats_home.svg";
import { Button } from "@/components/ui/button";
import Divider from "@/components/ui/divider";

const CongratsRegister = () => {
  const { changeFields } = useAuthStore();

  const handleCloseAuthDialog = () => {
    changeFields({
      isDialogOpened: false,
    });
    window.location.reload();
  };

  return (
    <>
      <div className={"text-right"}>
        <DialogPrimitive.Close className="ml-auto opacity-70 transition-opacity hover:opacity-100 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground">
          <Close
            width={16}
            height={16}
            className={"fill-black dark:fill-white"}
          />
        </DialogPrimitive.Close>
      </div>
      <DialogHeader className={"mb-6"}>
        <DialogTitle>Congrats!</DialogTitle>
        <DialogDescription>
          You now have access to more from HHI!
        </DialogDescription>
      </DialogHeader>

      <Image
        src={congratsHome}
        width={360}
        height={360}
        className={"mx-auto w-[200px] md:w-[360px]"}
        alt={"congrats"}
      />

      <Divider
        className={"my-6"}
        dividerColor={"bg-dividerLine hidden md:block"}
      />

      <div className={"flex items-center justify-center mt-3"}>
        <Button
          type="submit"
          size={"sm"}
          className={"uppercase"}
          onClick={handleCloseAuthDialog}
        >
          Continue
        </Button>
      </div>
    </>
  );
};

export default CongratsRegister;
