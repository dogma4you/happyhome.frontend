"use client";

import { useFormContext } from "react-hook-form";
import { Button } from "@/components/ui/button";

const SubmitButton = ({ children, onSubmit = () => {}, size }) => {
  const { handleSubmit } = useFormContext();

  return (
    <Button
      size={size}
      className={"uppercase"}
      onClick={handleSubmit(onSubmit)}
    >
      {children}
    </Button>
  );
};

export default SubmitButton;
