import useAuthStore from "@/store/useAuthStore";
import Form from "@/components/form/Form";
import RegisterFormContent from "@/components/authentication/register/RegisterFormContent";
import { registerValidation } from "@/validations/authValidations";
import { useTransition } from "react";
import { REGISTER_VIEWS } from "@/utils/constants";
import axios from "@/lib/axios";

const RegisterForm = () => {
  const { registerValues, changeFields } = useAuthStore();
  const [isLoading, startTransition] = useTransition();

  const handleSubmit = (values, setError) => {
    startTransition(async () => {
      try {
        await axios.get("/auth/verify_email", {
          params: {
            email: values.email,
            type: 1,
          },
        });

        changeFields({
          registerValues: values,
          registerSelectedView: REGISTER_VIEWS.CHECK_EMAIL_VIEW,
        });
      } catch (e) {
        if (e?.response?.status === 400) {
          setError("email", {
            type: "manual",
            message: e.response?.data?.message,
          });
        }
      }
    });
  };

  return (
    <Form
      onSubmit={handleSubmit}
      validationSchema={registerValidation}
      initialValues={registerValues}
    >
      <RegisterFormContent isLoading={isLoading} />
    </Form>
  );
};

export default RegisterForm;
