import { Checkbox } from "@/components/ui/checkbox";
import { Controller, useFormContext } from "react-hook-form";
import { cn } from "@/lib/utils";

const CheckedField = (props) => {
  const {
    control,
    formState: { errors },
  } = useFormContext();
  const { className, id, label, name, contentClassName, labelClassName } =
    props;
  return (
    <div className={className}>
      <Controller
        control={control}
        name={name}
        render={({ field }) => (
          <div className={cn("flex items-center space-x-2", contentClassName)}>
            <Checkbox
              id={id}
              checked={field.value}
              onCheckedChange={field.onChange}
            />
            {label && (
              <label
                htmlFor={id}
                className={cn(
                  "text-sm text-black dark:text-white font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70",
                  labelClassName,
                )}
              >
                {label}
              </label>
            )}
          </div>
        )}
        {...props}
      />
      {errors[name] && (
        <p className={"text-error-10 font-medium text-base mt-2"}>
          {errors[name].message}
        </p>
      )}
    </div>
  );
};

export default CheckedField;
