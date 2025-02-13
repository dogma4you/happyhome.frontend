import React, { useTransition } from "react";
import Form from "@/components/form/Form";
import InputField from "@/components/form/InputField";
import { Button } from "@/components/ui/button";
import * as z from "zod";
import axios from "@/lib/axios";
import toast from "react-hot-toast";

const EditPassword = ({ onSuccess = () => {} }) => {
  const [isLoading, startTransition] = useTransition();

  const schema = z
    .object({
      currentPassword: z.string({ message: "Current password is required" }),
      newPassword: z.string({ message: "Please write new password" }),
      repeatPassword: z.string({ message: "Please repeat password" }),
    })
    .refine(
      (data) => {
        return data.newPassword === data.repeatPassword;
      },
      {
        message: "Passwords don't match",
        path: ["repeatPassword"],
      },
    );

  const handleSubmit = (values) => {
    startTransition(async () => {
      const { currentPassword, newPassword } = values;
      try {
        await axios.put("/user/forgot_password", {
          password: currentPassword,
          passwordNew: newPassword,
        });
        toast.success("Password is updated!");
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
      <Form validationSchema={schema} onSubmit={handleSubmit}>
        <InputField
          type={"password"}
          label={"Current password"}
          name={"currentPassword"}
          placeholder={"Type your current password"}
          id={"current_password"}
          size={"sm"}
          className={"mt-6"}
        />

        <InputField
          type={"password"}
          label={"New password"}
          name={"newPassword"}
          placeholder={"Type new password"}
          id={"new_password"}
          size={"sm"}
          className={"mt-6"}
        />
        <InputField
          type={"password"}
          label={"Repeat password"}
          name={"repeatPassword"}
          placeholder={"Repeat password"}
          id={"repeat_password"}
          size={"sm"}
          className={"mt-2"}
        />

        <Button size={"sm"} className={"uppercase mt-6"} disabled={isLoading}>
          Update
        </Button>
      </Form>
    </div>
  );
};

export default EditPassword;
