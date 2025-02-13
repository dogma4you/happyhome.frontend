"use client";
import { Controller, useFormContext } from "react-hook-form";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import ErrorMessage from "@/components/form/ErrorMessage";

export default function InputField(props) {
  const { control } = useFormContext();
  const {
    className,
    id,
    placeholder,
    label,
    name,
    size,
    type,
    inputProps,
    disabled,
    ...restProps
  } = props;
  return (
    <div className={className}>
      <Controller
        render={({ field, fieldState: { error } }) => {
          const inputVariant = error ? "error" : "default";
          return (
            <>
              <div className={"flex flex-col gap-y-2"}>
                {label && (
                  <Label htmlFor={id} size={size}>
                    {label}
                  </Label>
                )}

                <Input
                  variant={inputVariant}
                  id={id}
                  placeholder={placeholder}
                  size={size}
                  type={type}
                  disabled={disabled}
                  {...field}
                  {...inputProps}
                />
              </div>
              {error && <ErrorMessage>{error.message}</ErrorMessage>}
            </>
          );
        }}
        control={control}
        name={name}
        {...restProps}
      />
    </div>
  );
}
