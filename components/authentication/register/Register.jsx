import {
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import Divider from "@/components/ui/divider";
import useAuthStore from "@/store/useAuthStore";
import { AUTH_VIEW, REGISTER_VIEWS } from "@/utils/constants";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import Close from "@/public/assets/icons/close";
import GoogleLoginButton from "@/components/ui/google-login-button";
import RegisterForm from "@/components/authentication/register/RegisterForm";
import RegisterVerifyEmail from "@/components/authentication/register/RegisterVerifyEmail";
import CongratsRegister from "@/components/authentication/congrats/CongratsRegister";
import { useEffect } from "react";
import Typography from "@/components/ui/typography";

const Register = () => {
  const { registerSelectedView, setView, changeFields } = useAuthStore();

  useEffect(() => {
    return () => {
      changeFields({
        registerSelectedView: null,
        registerValues: {},
      });
    };
  }, []);

  switch (registerSelectedView) {
    case REGISTER_VIEWS.CHECK_EMAIL_VIEW: {
      return <RegisterVerifyEmail />;
    }
    case REGISTER_VIEWS.CONGRATS_VIEW: {
      return <CongratsRegister />;
    }
  }

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
      <DialogHeader>
        <DialogTitle>Register</DialogTitle>
        <DialogDescription className={"mt-1"}>
          <Typography variant={"body2"}>
            Already have an account?{" "}
            <span
              className={
                "text-blue-6 font-bold uppercase hover:text-blue-7 cursor-pointer whitespace-nowrap"
              }
              onClick={() => setView({ view: AUTH_VIEW.LOGIN, isLogin: true })}
            >
              Login here
            </span>
          </Typography>
        </DialogDescription>
      </DialogHeader>

      <RegisterForm />

      <Divider className={"my-6"} dividerColor={"bg-divider"}>
        or
      </Divider>
      <GoogleLoginButton />
      <Divider dividerColor={"bg-dividerLine"} className={"my-6"} />
      <DialogFooter>
        <Typography
          variant={"body2"}
          mobileVariant={"body4"}
          className={"text-gray-11"}
        >
          Already have an account?
        </Typography>
        <Typography
          variant={"body2"}
          mobileVariant={"body4"}
          className={
            "text-blue-6 font-bold uppercase hover:text-blue-7 cursor-pointer text-[12px]"
          }
        >
          <span
            onClick={() => setView({ view: AUTH_VIEW.LOGIN, isLogin: true })}
          >
            Login to your account
          </span>
        </Typography>
      </DialogFooter>
    </>
  );
};

export default Register;
