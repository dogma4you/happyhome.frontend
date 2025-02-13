import React, { useState } from "react";
import { loginValidation } from "@/validations/authValidations";
import InputField from "@/components/form/InputField";
import { AUTH_VIEW } from "@/utils/constants";
import Arrow from "@/public/assets/icons/arrow";
import Form from "@/components/form/Form";
import { Button } from "@/components/ui/button";
import login from "@/actions/login";
import useAuthStore from "@/store/useAuthStore";
import axios from "@/lib/axios";
import useSettingsStore from "@/store/useSettingsStore";
import { useTheme } from "next-themes";
import toast from "react-hot-toast";

const LoginForm = () => {
  const { changeFields, setView } = useAuthStore();
  const { setNotificationSettings } = useSettingsStore();
  const { setTheme } = useTheme();
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (values) => {
    setLoading(true);
    try {
      const response = await login({
        email: values.email,
        password: values.password,
      });

      if (response?.error) {
        toast.error(response.message);
        setLoading(false);
        return;
      }

      const { data } = await axios.get("/settings");
      const theme = data.mode === 2 ? "dark" : "light";
      setNotificationSettings(data.push_notifications);
      setTheme(theme);

      changeFields({
        isDialogOpened: false,
      });
      window.location.reload();
    } catch (e) {
      console.error(e);
    }
    setLoading(false);
  };
  return (
    <Form
      initialValues={{}}
      onSubmit={handleSubmit}
      validationSchema={loginValidation}
    >
      <div className="grid gap-y-6 py-6">
        <InputField
          label={"Email"}
          name={"email"}
          placeholder={"Enter your email"}
          id={"email"}
          size={"sm"}
        />
        <InputField
          inputProps={{
            type: "password",
          }}
          label={"Password"}
          name={"password"}
          placeholder={"Enter your password"}
          id={"password"}
          size={"sm"}
        />
      </div>
      <div className={"flex items-center justify-between mt-3"}>
        <span
          className={
            "text-blue-6 uppercase text-sm font-bold hover:text-blue-7 cursor-pointer"
          }
          onClick={() =>
            setView({ view: AUTH_VIEW.FORGOT_PASSWORD, isLogin: true })
          }
        >
          Forgot password?
        </span>

        <Button size={"sm"} disabled={loading}>
          Login <Arrow width={10} height={15} className={"stroke-white"} />
        </Button>
      </div>
    </Form>
  );
};

export default LoginForm;
