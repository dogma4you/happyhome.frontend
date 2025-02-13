"use client";
import { FormProvider, useForm } from "react-hook-form";
import { cn } from "@/lib/utils";
import { zodResolver } from "@hookform/resolvers/zod";

const Form = ({
  children,
  onSubmit = () => {},
  initialValues = {},
  className,
  validationSchema,
  ...props
}) => {
  const methods = useForm({
    defaultValues: initialValues,
    resolver: zodResolver(validationSchema),
    ...props,
  });

  return (
    <FormProvider {...methods}>
      <form
        onSubmit={methods.handleSubmit((values) =>
          onSubmit(values, methods.setError, methods.reset),
        )}
        className={cn(className)}
      >
        {children}
      </form>
    </FormProvider>
  );
};

export default Form;
