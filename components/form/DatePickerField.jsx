"use client";
import { Controller, useFormContext } from "react-hook-form";
import { Label } from "@/components/ui/label";
import ErrorMessage from "@/components/form/ErrorMessage";
import DatePicker from "react-datepicker";
import * as React from "react";
import { cn } from "@/lib/utils";
import "react-datepicker/dist/react-datepicker.css";

export default function DatePickerField(props) {
  const { control } = useFormContext();
  const { className, id, label, name, labelClassName, ...restProps } = props;
  return (
    <div>
      <Controller
        render={({ field, fieldState: { error } }) => (
          <div className={"flex flex-col"}>
            {label && (
              <Label htmlFor={id} className={labelClassName}>
                {label}
              </Label>
            )}

            <DatePicker
              id={id}
              selected={field.value}
              className={cn(
                "input-field",
                "mt-2",
                className,
                error &&
                  "border-error-10 focus:border-blue-10 ring-blue-10 ring-offset-error-10",
              )}
              onChange={field.onChange}
              minDate={new Date("1900-01-01")}
              {...restProps}
            />
            {error && <ErrorMessage>{error.message}</ErrorMessage>}
          </div>
        )}
        control={control}
        name={name}
        {...props}
      />
    </div>
  );
}
