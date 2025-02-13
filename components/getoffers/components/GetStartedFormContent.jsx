"use client";

import React from "react";
import CheckedField from "@/components/form/CheckedField";
import GoogleAddressAutoCompleteField from "@/components/form/GoogleAddressAutoCompleteField";
import InputField from "@/components/form/InputField";
import { cn } from "@/lib/utils";
import { useSession } from "@/providers/SessionProvider";

const GetStartedFormContent = ({ isGuestAuth }) => {
  const session = useSession();

  return (
    <>
      <div className={"flex flex-col gap-y-5"}>
        <GoogleAddressAutoCompleteField
          name={"address"}
          id={"address"}
          placeholder={"Street, house, city, country"}
          className={"w-full py-5 pr-8 pl-[50px] rounded-lg"}
          iconClassName={"left-[20px] text-xl text-gray-10 z-10"}
          label={"Address *"}
        />

        {!session && (
          <>
            <InputField
              disabled={isGuestAuth}
              label={"First Name *"}
              name={"first_name"}
              placeholder={"Enter your first name"}
              id={"first_name"}
              inputProps={{
                className: cn("py-5 px-4 text-base"),
              }}
            />

            <InputField
              disabled={isGuestAuth}
              label={"Last Name *"}
              name={"last_name"}
              placeholder={"Enter your last name"}
              id={"last_name"}
              inputProps={{
                className: cn("py-5 px-4 text-base"),
              }}
            />

            <InputField
              disabled={isGuestAuth}
              label={"Email *"}
              name={"email"}
              placeholder={"Enter your email"}
              id={"email"}
              inputProps={{
                className: cn("py-5 px-4 text-base"),
              }}
            />

            <InputField
              disabled={isGuestAuth}
              label={"Phone number"}
              name={"phone"}
              placeholder={"Enter your phone number"}
              id={"phone"}
              inputProps={{
                className: cn("py-5 px-4 text-base"),
              }}
            />
          </>
        )}
      </div>

      <div className="flex items-start space-x-2 mt-8">
        <CheckedField
          contentClassName={"items-start"}
          labelClassName={
            "text-sm text-gray-11 dark:text-white font-medium peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
          }
          name={"terms"}
          label={` By checking this box, I confirm that I am authorized to conduct
                        transactions and/or seek offers, on behalf of the owner of this property, and agree to receive a
                        purchase offer, communications and marketing texts, and emails from The Happy Home Initiative.`}
          id={"terms"}
        />
      </div>

      <div className="flex items-start space-x-2 mt-3">
        <CheckedField
          contentClassName={"items-start"}
          labelClassName={
            "text-sm text-gray-11 dark:text-white font-medium peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
          }
          name={"accept_terms"}
          label={` By checking this box, I agree to receive marketing emails from Happy Home Initiative`}
          id={"confirm-2"}
        />
      </div>
    </>
  );
};

export default GetStartedFormContent;
