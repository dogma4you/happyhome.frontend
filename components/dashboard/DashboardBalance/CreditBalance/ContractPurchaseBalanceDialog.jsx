"use client";

import React from "react";
import { Dialog } from "@/components/ui/dialog";
import { PURCHASE_BALANCE_MODAL } from "@/utils/constants";
import useBalanceStore from "@/store/useBalanceStore";
import ContractPurchaseBalanceAmount from "@/components/dashboard/DashboardBalance/CreditBalance/ContractPurchaseBalanceAmount";
import ContractPurchaseBalanceConfirmation from "@/components/dashboard/DashboardBalance/CreditBalance/ContractPurchaseBalanceConfirmation";

const ContractPurchaseBalanceDialog = () => {
  const { view, setOpenBalanceDialog, dialogOpen, setView } = useBalanceStore();
  const handleClose = () => {
    setOpenBalanceDialog(false);
    setView(PURCHASE_BALANCE_MODAL.AMOUNT_PAGE);
  };
  return (
    <Dialog open={dialogOpen} onOpenChange={handleClose}>
      {view === PURCHASE_BALANCE_MODAL.AMOUNT_PAGE && (
        <ContractPurchaseBalanceAmount />
      )}

      {view === PURCHASE_BALANCE_MODAL.CONFIRMATION && (
        <ContractPurchaseBalanceConfirmation />
      )}
    </Dialog>
  );
};

export default ContractPurchaseBalanceDialog;
