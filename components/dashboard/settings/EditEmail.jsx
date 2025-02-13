import React, { useTransition } from "react";
import Form from "@/components/form/Form";
import InputField from "@/components/form/InputField";
import { Button } from "@/components/ui/button";
import axios from "@/lib/axios";
import toast from "react-hot-toast";
import { emailValidations } from "@/validations/authValidations";
import { useSession } from "next-auth/react";

const EditEmail = ({ onSuccess = () => {} }) => {
  const [isLoading, startTransition] = useTransition();
  const { update, data } = useSession();
  const handleSubmit = (values) => {
    startTransition(async () => {
      const { email } = values;
      try {
        await axios.put("/user/personal_info", {
          email,
        });
        await update({
          ...data,
          user: { ...data.user, email },
        });
        toast.success("Email is updated!");
      } catch (e) {
        if (e.response?.data?.message) {
          toast.error(e.response?.data?.message);
        }
      }
      onSuccess();
    });
  };

  return (
    <div>
      <Form
        initialValues={{
          email: data.user.email,
        }}
        validationSchema={emailValidations}
        onSubmit={handleSubmit}
      >
        <InputField
          label={"Change email"}
          name={"email"}
          placeholder={"Type your email"}
          id={"email"}
          size={"sm"}
          className={"mt-6"}
        />

        <Button size={"sm"} className={"uppercase mt-6"} disabled={isLoading}>
          Update
        </Button>
      </Form>
    </div>
  );
};

export default EditEmail;
