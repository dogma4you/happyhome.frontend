import {
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import Divider from "@/components/ui/divider";
import Close from "@/public/assets/icons/close";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import useAuthStore from "@/store/useAuthStore";
import { AUTH_VIEW } from "@/utils/constants";
import GoogleLoginButton from "@/components/ui/google-login-button";
import LoginForm from "@/components/authentication/login/LoginForm";
import Typography from "@/components/ui/typography";

const Login = () => {
  const { setView } = useAuthStore();

  return (
    <>
      <div className={"text-right"}>
        <DialogPrimitive.Close className="ml-auto transition-opacity hover:opacity-100 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground">
          <Close
            width={16}
            height={16}
            className={"fill-black dark:fill-white"}
          />
        </DialogPrimitive.Close>
      </div>
      <DialogHeader>
        <DialogTitle>Login</DialogTitle>
      </DialogHeader>

      <LoginForm />

      <Divider className={"my-6"} dividerColor={"bg-divider"}>
        or
      </Divider>

      <GoogleLoginButton />

      <Divider dividerColor={"bg-dividerLine"} className={"my-8"} />
      <DialogFooter>
        <Typography
          variant={"body2"}
          mobileVariant={"body4"}
          className={"text-gray-11"}
        >
          Don’t have an account?
        </Typography>
        <Typography
          variant={"body2"}
          mobileVariant={"body4"}
          className={
            "text-blue-6 font-bold uppercase hover:text-blue-7 cursor-pointer text-[12px]"
          }
        >
          <span
            onClick={() =>
              setView({ view: AUTH_VIEW.REGISTER, isLogin: false })
            }
          >
            CREATE AN account
          </span>
        </Typography>
      </DialogFooter>
    </>
  );
};

export default Login;
