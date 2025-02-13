import Icon from "@/components/ui/icon";
import Typography from "@/components/ui/typography";
import { Controller, useFormContext } from "react-hook-form";
import ErrorMessage from "@/components/form/ErrorMessage";

const NumberField = ({
  title,
  value = 1,
  onChange = () => {},
  maxValue,
  className,
  name,
  ...props
}) => {
  const {
    control,
    formState: { errors },
  } = useFormContext();
  return (
    <div className={className}>
      <Controller
        render={({ field }) => {
          const handleMinus = () => {
            if (field.value - 1 < 1) return;
            field.onChange(field.value - 1);
          };

          const handlePlus = () => {
            if (field.value + 1 > maxValue) return;
            field.onChange(field.value + 1);
          };
          return (
            <div>
              <Typography
                variant={"subtitle1"}
                mobileVariant={"subtitle3"}
                className={"text-gray-12 font-medium normal-case"}
              >
                {title}
              </Typography>
              <div
                className={
                  "py-4 md:py-6 px-6 md:px-12 rounded-lg flex items-center justify-between mt-2 bg-gray-2"
                }
              >
                <button
                  onClick={handleMinus}
                  className={
                    "size-8 bg-white dark:bg-background rounded-full border border-gray-4 flex items-center justify-center text-gray-11 number-field-box-shadow"
                  }
                >
                  <Icon name={"minus"} />
                </button>
                <span className={"text-gray-12"}>{field.value}</span>
                <button
                  onClick={handlePlus}
                  className={
                    "size-8 bg-white dark:bg-background rounded-full border border-gray-4 flex items-center justify-center text-gray-11 number-field-box-shadow"
                  }
                >
                  <Icon name={"plus"} />
                </button>
              </div>
            </div>
          );
        }}
        control={control}
        name={name}
        {...props}
      />
      {errors[name] && <ErrorMessage>{errors[name].message}</ErrorMessage>}
    </div>
  );
};

export default NumberField;
