import React, { useTransition } from "react";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import Close from "@/public/assets/icons/close";
import Typography from "@/components/ui/typography";
import { Button } from "@/components/ui/button";
import { DialogContent } from "@/components/ui/dialog";
import Icon from "@/components/ui/icon";
import useBalanceStore from "@/store/useBalanceStore";
import { PURCHASE_BALANCE_MODAL } from "@/utils/constants";
import axios from "@/lib/axios";
import { formatCurrency } from "@/utils/helper";
import toast from "react-hot-toast";
import { useSession } from "next-auth/react";

const ContractPurchaseBalanceConfirmation = () => {
  const { data: session } = useSession();
  const { setOpenBalanceDialog, setView, paymentInformation } =
    useBalanceStore();

  const [isLoading, startTransition] = useTransition();

  const {
    amount,
    recipient,
    bank_name,
    bank_address,
    routing_number,
    account_number,
    account_type,
  } = paymentInformation;

  const handleSubmit = () => {
    startTransition(async () => {
      try {
        await axios.post("/balance/fill", {
          price: amount,
        });
        setOpenBalanceDialog(false);
        setView(PURCHASE_BALANCE_MODAL.AMOUNT_PAGE);
        toast.success("Balance fill request created!");
      } catch (e) {
        toast.error("Error filling balance");
      }
    });
  };

  return (
    <DialogContent
      className={
        "w-full md:w-[618px] p-6 md:px-[56px] md:py-10 text-center md:auto"
      }
      disableOutsideClick
      overlayClassName={"md:items-center items-end"}
    >
      <div className={"text-right"}>
        <DialogPrimitive.Close className="ml-auto transition-opacity hover:opacity-100 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground">
          <Close
            width={16}
            height={16}
            className={"fill-black dark:fill-white"}
          />
        </DialogPrimitive.Close>
      </div>
      <Typography
        variant={"h4"}
        mobileVariant={"subtitle1"}
        className={"mt-2 md:mt-6"}
      >
        Top Up Confirmation
      </Typography>
      <Typography
        variant={"body2"}
        mobileVariant={"body3"}
        className={"mt-2 md:mt-3 max-w-[451px] mx-auto"}
      >
        The amount of {formatCurrency(amount)} will be added to your account
        when we receive the wire from you. Refund requests are accepted at
        info@thehhi.com and processed within 1 week.
      </Typography>

      <Typography variant={"subtitle3"} className={"text-left mt-3"}>
        Bank Details:
      </Typography>
      <ul className={"mt-1 list-disc pl-4 dark:text-white text-gray-12"}>
        <li className={"text-left"}>Recipient: {recipient}</li>
        <li className={"text-left"}>
          Bank Name: <b>{bank_name}</b>
        </li>
        <li className={"text-left"}>
          Bank Address: <b>{bank_address}</b>
        </li>
        <li className={"text-left"}>
          Routing Number: <b>{routing_number}</b>
        </li>
        <li className={"text-left"}>
          Account Number: <b>{account_number}</b>
        </li>
        <li className={"text-left"}>
          Account Type: <b>{account_type}</b>
        </li>
        <li className={"text-left"}>
          Reference Number: <b>{session.user.id}</b>
        </li>
      </ul>

      <div
        className={
          "py-[10px] px-4 inline-flex items-center gap-x-[10px] bg-orange-1 my-10"
        }
      >
        <Icon name={"warning"} className={"text-orange-7 text-lg"} />
        <span className={"text-orange-7 text-xs text-left font-bold uppercase"}>
          We will notify you by email upon receipt, and you may buy your next
          purchase contract.
        </span>
      </div>

      <div className={"flex justify-center"}>
        <Button
          className={"uppercase"}
          onClick={handleSubmit}
          disabled={isLoading}
        >
          top up now
        </Button>
      </div>
    </DialogContent>
  );
};

export default ContractPurchaseBalanceConfirmation;
