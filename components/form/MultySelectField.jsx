import React from "react";
import CardOption from "@/components/ui/card-option";
import { Controller, useFormContext } from "react-hook-form";
import ErrorMessage from "@/components/form/ErrorMessage";
import { cn } from "@/lib/utils";

const MultiSelectField = ({ fields, name, ...props }) => {
  const { control } = useFormContext();
  return (
    <Controller
      render={({ field, fieldState: { error } }) => {
        const toggleExteriorType = (value) => {
          if (field.value.includes(value)) {
            const filteredValue = field.value.filter(
              (fieldValue) => fieldValue !== value,
            );
            field.onChange(filteredValue);
          } else {
            field.onChange([...field.value, value]);
          }
        };
        return (
          <>
            <div className={"grid grid-cols-1 md:grid-cols-3 gap-4"}>
              {fields.map(({ title, value }) => {
                return (
                  <CardOption
                    key={title}
                    title={title}
                    onClick={() => toggleExteriorType(value)}
                    isActive={field.value.includes(value)}
                    withCheckbox={true}
                    className={cn(`p-4  ${error && "border-error-10"}`)}
                  />
                );
              })}
            </div>
            {error && <ErrorMessage>{error.message}</ErrorMessage>}
          </>
        );
      }}
      control={control}
      name={name}
      {...props}
    />
  );
};

export default MultiSelectField;
