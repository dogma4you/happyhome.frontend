"use client";
import { Controller, useFormContext } from "react-hook-form";
import { Label } from "@/components/ui/label";
import ErrorMessage from "@/components/form/ErrorMessage";
import { cn } from "@/lib/utils";
import GoogleAddressAutoComplete from "@/components/ui/googleAddressAutoComplete";
import { getAddressData } from "@/utils/helper";

export default function GoogleAddressAutoCompleteField(props) {
  const {
    control,
    formState: { errors },
  } = useFormContext();
  const { id, className, iconClassName, placeholder, label, name, size } =
    props;
  const inputVariant = errors[name] ? "error" : "default";
  return (
    <div className={"w-full"}>
      <Controller
        render={({ field }) => {
          const handleSelectAddress = (value) => {
            const addressData = getAddressData(value);
            field.onChange(addressData);
          };

          const handleChangeAddress = (e) => {
            if (e.target.value) {
              field.onChange({
                formatted_address: e.target.value,
              });
            } else {
              field.onChange({});
            }
          };

          const handleBlur = () => {
            if (!field?.value?.country) {
              field.onChange({});
            }
          };
          return (
            <div className={"flex flex-col gap-y-2"}>
              {label && (
                <Label htmlFor={id} size={size}>
                  {label}
                </Label>
              )}

              <GoogleAddressAutoComplete
                ref={field.ref}
                icon={"map"}
                placeholder={placeholder}
                className={cn(
                  className,
                  errors["address"] &&
                    "ring-1 ring-error-10 text-error-10 placeholder:text-error-10",
                )}
                iconClassName={cn(
                  iconClassName,
                  errors["address"] && "text-error-10",
                )}
                inputVariant={inputVariant}
                value={field.value?.formatted_address || ""}
                onChange={handleChangeAddress}
                onSelectAddress={handleSelectAddress}
                onBlur={handleBlur}
              />
            </div>
          );
        }}
        control={control}
        name={name}
        {...props}
      />
      {errors[name] && (
        <ErrorMessage>{errors[name]?.address?.message}</ErrorMessage>
      )}
    </div>
  );
}
