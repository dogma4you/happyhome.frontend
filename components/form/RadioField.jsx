import React from "react";
import { Controller, useFormContext } from "react-hook-form";
import CardOption from "@/components/ui/card-option";
import ErrorMessage from "@/components/form/ErrorMessage";

const RadioField = (props) => {
  const { control } = useFormContext();

  const { name, options, label } = props;

  return (
    <Controller
      control={control}
      name={name}
      render={({ field, fieldState: { error } }) => (
        <div>
          {label && <label className={"label"}>{label}</label>}

          <div className={"flex items-center gap-x-6"}>
            {options.map(({ title, value }) => {
              return (
                <CardOption
                  key={title}
                  title={title}
                  onClick={() => field.onChange(value)}
                  isActive={field.value === value}
                  className={"min-w-[182px] items-start"}
                />
              );
            })}
          </div>
          {error && <ErrorMessage>{error.message}</ErrorMessage>}
        </div>
      )}
      {...props}
    />
  );
};

export default RadioField;
