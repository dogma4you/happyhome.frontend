"use client";

import { AUTH_VIEW } from "@/utils/constants";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import useAuthStore from "@/store/useAuthStore";

const AuthButton = ({
  isLogin = true,
  variant,
  title,
  size = "lg",
  mobileSize = "xs",
  className,
}) => {
  const { changeFields } = useAuthStore();
  const { REGISTER, LOGIN } = AUTH_VIEW;

  return (
    <Button
      size={size}
      mobileSize={mobileSize}
      className={cn("uppercase", className)}
      variant={variant}
      onClick={() =>
        changeFields({
          view: isLogin ? LOGIN : REGISTER,
          isLogin: isLogin,
          isDialogOpened: true,
        })
      }
    >
      {title}
    </Button>
  );
};

export default AuthButton;
