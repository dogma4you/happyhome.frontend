import { useFormContext, useWatch } from "react-hook-form";
import InputField from "@/components/form/InputField";
import CheckedField from "@/components/form/CheckedField";
import { Button } from "@/components/ui/button";
import Arrow from "@/public/assets/icons/arrow";
import useAuthStore from "@/store/useAuthStore";

const RegisterFormContent = ({ isLoading }) => {
  const { isFromOffer } = useAuthStore();
  const { control } = useFormContext();
  const allValues = useWatch({ control });

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-6 py-6">
        <InputField
          label={"First name"}
          name={"first_name"}
          placeholder={"Enter your first name"}
          id={"name"}
          size={"sm"}
          disabled={allValues.first_name && isFromOffer}
        />
        <InputField
          label={"Last name"}
          name={"last_name"}
          placeholder={"Enter your last name"}
          id={"surname"}
          size={"sm"}
          disabled={allValues.last_name && isFromOffer}
        />
        <InputField
          label={"Email"}
          name={"email"}
          placeholder={"Enter your Email"}
          id={"email"}
          size={"sm"}
          disabled={allValues.email && isFromOffer}
        />
        <InputField
          label={"Phone number"}
          name={"phone"}
          placeholder={"Enter your Phone"}
          id={"phone_number"}
          size={"sm"}
          disabled={allValues.phone && isFromOffer}
        />
        <InputField
          inputProps={{
            type: "password",
          }}
          label={"Password"}
          name={"password"}
          placeholder={"Create a password"}
          id={"password"}
          size={"sm"}
        />

        <InputField
          inputProps={{
            type: "password",
          }}
          label={"Confirm Password"}
          name={"confirm_password"}
          placeholder={"Confirm password"}
          id={"confirm_password"}
          size={"sm"}
        />
      </div>
      <div
        className={
          "flex items-start md:items-center justify-between mt-3 flex-col md:flex-row gap-y-6 md:gap-y-0 "
        }
      >
        <CheckedField
          name={"accept_terms"}
          label={"I accept the terms and privacy policy"}
          id={"accept_terms"}
        />
        <Button
          size={"sm"}
          className={"uppercase"}
          disabled={!allValues.accept_terms || isLoading}
        >
          Register <Arrow width={10} height={15} className={"stroke-white"} />
        </Button>
      </div>
    </>
  );
};

export default RegisterFormContent;
