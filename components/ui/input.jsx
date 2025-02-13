"use client";

import * as React from "react";

import { cn } from "@/lib/utils";
import { cva } from "class-variance-authority";
import Icon from "@/components/ui/icon";
import useWindowSize from "@/hooks/useWindowSize";
import Typography from "@/components/ui/typography";

const inputVariants = cva(`input-field`, {
  variants: {
    variant: {
      default: "focus:border-blue-4ring-blue-4 ring-offset-blue-4 text-[14px]",
      error:
        "border-error-10 focus:border-blue-10 ring-blue-10 ring-offset-error-10",
    },
    size: {
      default: "md:text-base",
      sm: "text-[14px] py-[10px] px-3 radius-3 ",
      lg: "md:text-lg p-6",
    },
  },
  defaultVariants: {
    variant: "default",
    size: "default",
  },
});

const Input = React.forwardRef(
  (
    {
      className,
      type,
      size,
      mobileSize,
      variant,
      showIcon = false,
      icon,
      iconClassName,
      symbol,
      containerClassName,
      ...props
    },
    ref,
  ) => {
    const { isMobile } = useWindowSize();

    const currentSize = isMobile && mobileSize ? mobileSize : size;
    const withIconClassName = showIcon ? "pl-10" : "";
    const withSymbolClassName = symbol ? "pl-8" : "";

    return (
      <div className={cn("inline-block relative w-full", containerClassName)}>
        {symbol && (
          <Typography
            variant={"body3"}
            className={
              "absolute text-base left-4 top-1/2 -translate-y-1/2 text-gray-12 z-10"
            }
          >
            {symbol}
          </Typography>
        )}

        {showIcon && (
          <Icon
            name={icon || "loupe"}
            className={cn(
              "absolute text-base left-3 top-1/2 -translate-y-1/2 text-gray-12 z-10",
              iconClassName,
            )}
          />
        )}

        <input
          type={type}
          className={cn(
            inputVariants({ size: currentSize, variant }),
            withIconClassName,
            withSymbolClassName,
            className,
          )}
          ref={ref}
          {...props}
        />
      </div>
    );
  },
);
Input.displayName = "Input";

export { Input };
