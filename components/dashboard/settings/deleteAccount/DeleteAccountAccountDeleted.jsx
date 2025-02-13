import React from "react";
import { DialogContent } from "@/components/ui/dialog";
import Typography from "@/components/ui/typography";
import { Button } from "@/components/ui/button";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import Close from "@/public/assets/icons/close";
import { signOut } from "next-auth/react";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";

const DeleteAccountAccountDeleted = () => {
  const router = useRouter();
  const handleSubmit = async () => {
    Cookies.remove("accessToken");
    Cookies.remove("refresh_token");
    await signOut();
    router.push("/");
  };
  return (
    <DialogContent className={"w-[481px]"}>
      <div className={"text-right mb-6"}>
        <DialogPrimitive.Close className="ml-auto transition-opacity hover:opacity-100 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground">
          <Close
            width={16}
            height={16}
            className={"fill-black dark:fill-white"}
          />
        </DialogPrimitive.Close>
      </div>
      <Typography variant={"h4"} className={"mb-3 text-center"}>
        Account deleted
      </Typography>
      <Typography variant={"body1"} className={"text-center"}>
        We are sorry to see you leave. Your are always welcome to join HHI
        again.
      </Typography>
      <div className={"flex justify-center mt-10"}>
        <Button onClick={handleSubmit}>Ok</Button>
      </div>
    </DialogContent>
  );
};

export default DeleteAccountAccountDeleted;
