"use client";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import useAuthStore from "@/store/useAuthStore";
import {
  AUTH_VIEW,
  FORGOT_PASSWORD_VIEWS,
  REGISTER_VIEWS,
} from "@/utils/constants";
import Login from "@/components/authentication/login/Login";
import Register from "@/components/authentication/register/Register";
import ForgotPassword from "@/components/authentication/forgot-password/ForgotPassword";

function AuthDialog() {
  const {
    isLogin,
    forgotPasswordSelectedView,
    isDialogOpened,
    changeFields,
    registerSelectedView,
    view: selectedView,
  } = useAuthStore();

  const dialogWidth =
    isLogin &&
    forgotPasswordSelectedView !== FORGOT_PASSWORD_VIEWS.CHECK_EMAIL_VIEW
      ? "max-w-[600px]"
      : "max-w-[732px]";

  const isCongratsView =
    FORGOT_PASSWORD_VIEWS.CONGRATS_VIEW === forgotPasswordSelectedView ||
    registerSelectedView === REGISTER_VIEWS.CONGRATS_VIEW;

  const handleClose = (open) => {
    if (registerSelectedView === REGISTER_VIEWS.CONGRATS_VIEW) {
      window.location.reload();
    }
    changeFields({ isDialogOpened: open });
  };

  return (
    <Dialog open={isDialogOpened} onOpenChange={handleClose}>
      <DialogContent
        overlayClassName={`${isCongratsView && "items-center"}`}
        className={`${dialogWidth} ${
          isCongratsView && "mx-2 h-auto rounded-2xl p-6"
        }`}
        disableOutsideClick
      >
        {selectedView === AUTH_VIEW.LOGIN && <Login />}
        {selectedView === AUTH_VIEW.REGISTER && <Register />}
        {selectedView === AUTH_VIEW.FORGOT_PASSWORD && <ForgotPassword />}
      </DialogContent>
    </Dialog>
  );
}

export default AuthDialog;
