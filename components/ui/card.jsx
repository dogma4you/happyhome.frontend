"use client";

import * as React from "react";
import { cva } from "class-variance-authority";

import { cn } from "@/lib/utils";

const cardVariants = cva("bg-white dark:bg-white/[0.05] backdrop-blur-[15px]", {
  variants: {
    size: {
      default: "rounded-[24px]",
      sm: "rounded-lg",
    },
  },
  defaultVariants: {
    size: "default",
  },
});

const Card = React.forwardRef(({ className, size, ...props }, ref) => (
  <div ref={ref} className={cn(cardVariants({ size }), className)} {...props}>
    {props.children}
  </div>
));

export default Card;
