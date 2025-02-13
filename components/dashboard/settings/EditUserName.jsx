import React, { useTransition } from "react";
import Form from "@/components/form/Form";
import InputField from "@/components/form/InputField";
import { Button } from "@/components/ui/button";
import { nameValidations } from "@/validations/authValidations";
import axios from "@/lib/axios";
import toast from "react-hot-toast";
import { useSession } from "next-auth/react";

const EditUserName = ({ onSuccess = () => {} }) => {
  const [isLoading, startTransition] = useTransition();
  const { update, data } = useSession();

  const handleSubmit = (values) => {
    startTransition(async () => {
      const { first_name, last_name } = values;
      try {
        await axios.put("/user/personal_info", {
          first_name,
          last_name,
        });

        await update({
          ...data,
          user: { ...data.user, first_name, last_name },
        });
        toast.success("User name updated!");
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
          first_name: data.user.first_name,
          last_name: data.user.last_name,
        }}
        validationSchema={nameValidations}
        onSubmit={handleSubmit}
      >
        <InputField
          label={"First name"}
          name={"first_name"}
          placeholder={"Type your first name"}
          id={"first_name"}
          size={"sm"}
          className={"mt-6"}
        />

        <InputField
          label={"Last name"}
          name={"last_name"}
          placeholder={"Type your last name"}
          id={"last_name"}
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

export default EditUserName;
