import React, { useTransition } from "react";
import Form from "@/components/form/Form";
import InputField from "@/components/form/InputField";
import { Button } from "@/components/ui/button";
import { phoneValidations } from "@/validations/authValidations";
import axios from "@/lib/axios";
import toast from "react-hot-toast";
import { useSession } from "next-auth/react";

const EditPhone = ({ onSuccess = () => {} }) => {
  const [isLoading, startTransition] = useTransition();
  const { update, data } = useSession();
  const handleSubmit = (values) => {
    startTransition(async () => {
      const { phone } = values;
      try {
        await axios.put("/user/personal_info", {
          phone,
        });
        await update({
          ...data,
          user: { ...data.user, phone },
        });
        toast.success("Phone is updated!");
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
        initialValues={{ phone: data.user.phone }}
        validationSchema={phoneValidations}
        onSubmit={handleSubmit}
      >
        <InputField
          label={"Change Phone number"}
          name={"phone"}
          placeholder={"Type your phone number"}
          id={"phone"}
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

export default EditPhone;
