import React from "react";
import { DialogContent } from "@/components/ui/dialog";
import Typography from "@/components/ui/typography";
import { Button } from "@/components/ui/button";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import Close from "@/public/assets/icons/close";
import useDeleteAccount from "@/store/useDeleteAccount";
import { DELETE_ACCOUNT_MODAL } from "@/utils/constants";
import { useSession } from "next-auth/react";
import axios from "@/lib/axios";
import toast from "react-hot-toast";

const DeleteAccountFirstPopUp = () => {
  const { changeFields } = useDeleteAccount();
  const { data } = useSession();
  const email = data?.user?.email;
  const handleNext = async () => {
    try {
      await axios.get("/auth/verify_email", {
        params: {
          email,
          type: 2,
        },
      });
      changeFields({
        view: DELETE_ACCOUNT_MODAL.VERIFY_YOUR_EMAIL,
      });
    } catch (error) {
      toast.error("Error while delete account");
    }
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
        Let us know it’s really you
      </Typography>
      <Typography variant={"body1"} className={"text-center"}>
        To continue, you’ll need to confirm you account through
        <span>{email}</span>
      </Typography>
      <div className={"flex justify-center mt-10"}>
        <Button
          variant={"outlined"}
          className={"text-blue-6"}
          onClick={handleNext}
        >
          Next
        </Button>
      </div>
    </DialogContent>
  );
};

export default DeleteAccountFirstPopUp;
