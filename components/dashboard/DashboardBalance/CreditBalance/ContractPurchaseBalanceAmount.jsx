import React, { useTransition } from "react";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import Close from "@/public/assets/icons/close";
import BalanceIconStroke from "@/public/assets/icons/balanceIconStroke";
import Typography from "@/components/ui/typography";
import Form from "@/components/form/Form";
import InputField from "@/components/form/InputField";
import { Button } from "@/components/ui/button";
import { DialogContent } from "@/components/ui/dialog";
import useBalanceStore from "@/store/useBalanceStore";
import { PURCHASE_BALANCE_MODAL } from "@/utils/constants";
import { balanceAmountValidation } from "@/validations/dashboardValidations";
import axios from "@/lib/axios";
import toast from "react-hot-toast";

const ContractPurchaseBalanceAmount = () => {
  const { setView, setPaymentInformation } = useBalanceStore();
  const [isPending, startTransition] = useTransition();

  const handleSubmit = ({ amount }) => {
    startTransition(async () => {
      try {
        const { data } = await axios.get("/payment_infos");
        const paymentInfos = data.data[0];
        setPaymentInformation({
          ...paymentInfos,
          amount,
        });
        setView(PURCHASE_BALANCE_MODAL.CONFIRMATION);
      } catch (e) {
        toast.error("Error parsing payment response");
      }
    });
  };

  return (
    <DialogContent
      className={
        "w-full md:w-[618px] p-6 md:px-[56px] md:py-10 text-center h-[420px] md:auto"
      }
      disableOutsideClick
      overlayClassName={"md:items-center items-end"}
    >
      <div className={"text-right md:mb-6"}>
        <DialogPrimitive.Close className="ml-auto transition-opacity hover:opacity-100 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground">
          <Close
            width={16}
            height={16}
            className={"fill-black dark:fill-white"}
          />
        </DialogPrimitive.Close>
      </div>
      <div className={"mx-auto"}>
        <BalanceIconStroke
          className={"w-[40px] h-[40px] md:h-auto md:w-auto"}
        />
      </div>
      <Typography
        variant={"h4"}
        mobileVariant={"subtitle1"}
        className={"mt-2 md:mt-10"}
      >
        Contract Purchase Balance
      </Typography>
      <Typography
        variant={"body1"}
        mobileVariant={"body3"}
        className={"mt-2 md:mt-3 max-w-[451px] mx-auto"}
      >
        Please enter the amount you wish to add to your balance:
      </Typography>
      <Form
        initialValues={{}}
        onSubmit={handleSubmit}
        validationSchema={balanceAmountValidation}
        className={"mt-6 md:mt-10"}
      >
        <InputField
          label={"Amount"}
          name={"amount"}
          placeholder={"amount"}
          id={"amount"}
          size={"default"}
          className={"[&>div>label]:text-left"}
          inputProps={{ symbol: "$" }}
        />

        <div className={"flex items-center justify-center mt-[35px]"}>
          <Button
            mobileSize={"sm"}
            disabled={isPending}
            className={"uppercase"}
          >
            Continue
          </Button>
        </div>
      </Form>
    </DialogContent>
  );
};

export default ContractPurchaseBalanceAmount;
