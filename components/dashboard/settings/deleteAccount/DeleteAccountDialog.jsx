import React from "react";
import { Dialog } from "@/components/ui/dialog";
import DeleteAccountFirstPopUp from "@/components/dashboard/settings/deleteAccount/DeleteAccountFirstPopUp";
import useDeleteAccount from "@/store/useDeleteAccount";
import DeleteAccountVerifyEmail from "@/components/dashboard/settings/deleteAccount/DeleteAccountVerifyEmail";
import { DELETE_ACCOUNT_MODAL } from "@/utils/constants";
import DeleteAccountAccountDeleted from "@/components/dashboard/settings/deleteAccount/DeleteAccountAccountDeleted";
import Cookies from "js-cookie";
import { signOut } from "next-auth/react";
import { useRouter } from "next/navigation";

const DeleteAccountDialog = () => {
  const { showDialog, changeFields, view } = useDeleteAccount();
  const router = useRouter();
  const handleClose = async () => {
    if (view === DELETE_ACCOUNT_MODAL.ACCOUNT_DELETED) {
      Cookies.remove("accessToken");
      Cookies.remove("refresh_token");
      await signOut();
      router.push("/");
      return;
    }

    changeFields({ showDialog: false });
  };
  return (
    <Dialog open={showDialog} onOpenChange={handleClose}>
      {view === DELETE_ACCOUNT_MODAL.FIRST_PAGE && <DeleteAccountFirstPopUp />}
      {view === DELETE_ACCOUNT_MODAL.VERIFY_YOUR_EMAIL && (
        <DeleteAccountVerifyEmail />
      )}
      {view === DELETE_ACCOUNT_MODAL.ACCOUNT_DELETED && (
        <DeleteAccountAccountDeleted />
      )}
    </Dialog>
  );
};

export default DeleteAccountDialog;
