import {
  Select as SelectInput,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Typography from "@/components/ui/typography";
import { cn } from "@/lib/utils";
import { Label } from "@/components/ui/label";

const Select = ({
  label,
  placeholder = "select",
  options = [],
  onChange,
  value,
  defaultValue,
  message,
  error,
  triggerClassname,
  optionItemClassname,
  className,
  labelClassName,
  disabled,
}) => {
  return (
    <div className={cn(className, disabled && "opacity-50")}>
      {label && <Label className={cn("label", labelClassName)}>{label}</Label>}
      <SelectInput
        onValueChange={onChange}
        value={value}
        defaultValue={defaultValue}
        disabled={disabled}
      >
        <SelectTrigger
          className={cn(error && "border-error-10", triggerClassname)}
          textClassName={"text-sm"}
        >
          <SelectValue
            placeholder={placeholder}
            className={optionItemClassname}
          />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            {options.map(({ value, title }) => {
              return (
                <SelectItem
                  key={title}
                  value={value}
                  className={cn(optionItemClassname)}
                >
                  {title}
                </SelectItem>
              );
            })}
          </SelectGroup>
        </SelectContent>
      </SelectInput>
      {message && (
        <Typography
          variant={"body3"}
          className={cn("mt-2", error && "text-error-10")}
        >
          {message}
        </Typography>
      )}
    </div>
  );
};

export default Select;
