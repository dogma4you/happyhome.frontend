"use client";
import { Controller, useFormContext } from "react-hook-form";
import ErrorMessage from "@/components/form/ErrorMessage";
import Select from "@/components/form/Select";

export default function SelectField(props) {
  const { control } = useFormContext();
  const { className, name } = props;
  return (
    <div className={className}>
      <Controller
        render={({ field, fieldState: { error } }) => {
          return (
            <>
              <Select {...props} error={error} {...field} />
              {error && <ErrorMessage>{error.message}</ErrorMessage>}
            </>
          );
        }}
        control={control}
        name={name}
        {...props}
      />
    </div>
  );
}
