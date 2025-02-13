import * as React from "react";
import * as LabelPrimitive from "@radix-ui/react-label";
import { cva } from "class-variance-authority";

import { cn } from "@/lib/utils";

const labelVariants = cva("text-base font-semibold text-gray-11 inline-block", {
  variants: {
    size: {
      default: "md:text-lg",
      sm: "text-base",
      lg: "md:text-xl",
    },
  },
  defaultVariants: {
    size: "default",
  },
});

const Label = React.forwardRef(({ className, size, ...props }, ref) => (
  <LabelPrimitive.Root
    ref={ref}
    className={cn(labelVariants({ size }), className)}
    {...props}
  />
));
Label.displayName = LabelPrimitive.Root.displayName;

export { Label };
