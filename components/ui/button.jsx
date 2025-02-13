"use client";

import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva } from "class-variance-authority";

import { cn } from "@/lib/utils";
import useWindowSize from "@/hooks/useWindowSize";

const buttonVariants = cva(
  `inline-flex items-center justify-center whitespace-nowrap
          rounded-full px-8 py-[14px] font-semibold ring-offset-background 
          transition-colors disabled:pointer-events-none
          disabled:opacity-50 border gap-x-4`,
  {
    variants: {
      variant: {
        default:
          "bg-blue-6 border-blue-6 text-white hover:bg-blue-7 hover:border-blue-7 disabled:opacity-70",
        "default-white":
          "bg-white border-white text-black hover:bg-blue-1 hover:border-blue-1",
        outline:
          "border border-blue-6 text-blue-6 bg-transparent shadow-none hover:border-blue-7 hover:text-blue-7",
        "outline-white":
          "bg-transparent shadow-none border border-white text-white hover:border-blue-1 hover:text-blue-1",
        ghost:
          "bg-transparent shadow-none border-transparent text-blue-6 hover:text-blue-7",
      },
      size: {
        default: "text-base",
        xs: "text-xs px-5 py-2",
        sm: "text-[14px] px-6 py-3",
        lg: "text-lg h-[55px]",
      },
    },
    defaultVariants: {
      size: "default",
    },
  },
);

const Button = React.forwardRef(
  (
    {
      className,
      variant = "default",
      size,
      mobileSize,
      color,
      asChild = false,
      ...props
    },
    ref,
  ) => {
    const Comp = asChild ? Slot : "button";

    const { isMobile } = useWindowSize();

    const currentSize = isMobile && mobileSize ? mobileSize : size;

    const variantName = color ? `${variant}-${color}` : variant;
    const variantStyles = buttonVariants({
      variant: variantName,
      size: currentSize,
    });

    return (
      <Comp
        className={cn(variantStyles, className)} // Include nested variant styles in className
        ref={ref}
        {...props}
      />
    );
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };
