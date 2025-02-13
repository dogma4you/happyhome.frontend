import React from "react";
import { cn } from "@/lib/utils";

const ErrorMessage = ({ children, className }) => {
  return (
    <p className={cn("text-error-10 font-medium text-base mt-2", className)}>
      {children}
    </p>
  );
};

export default ErrorMessage;
