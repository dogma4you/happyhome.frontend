"use client";

import * as React from "react";
import { cva } from "class-variance-authority";

import { cn } from "@/lib/utils";
import Typography from "@/components/ui/typography";
import Image from "next/image";
import { Checkbox } from "@/components/ui/checkbox";
import Icon from "@/components/ui/icon";

const cardVariants = cva(
  "md:px-4 md:py-6 flex items-center flex-col gap-y-5 justify-center rounded-[16px] border border-[#DDD] cursor-pointer",
  {
    variants: {
      variant: {
        default: "items-start pt-4",
        "with-out-image": "min-w-[148px]",
      },
    },
    defaultVariants: {
      size: "default",
    },
  },
);

const RadioButtonCircle = ({ isActive }) => {
  return (
    <div
      className={cn(
        `size-4 border border-gray-11 rounded-full flex items-center justify-center`,
        isActive && "border-blue-6",
      )}
    >
      {isActive && <div className={"size-2 bg-blue-6 rounded-full"}></div>}
    </div>
  );
};

const CardOption = React.forwardRef(
  (
    {
      className,
      title,
      image,
      isActive,
      withCheckbox,
      icon,
      radioButton,
      disabled,
      onClick,
      ...props
    },
    ref,
  ) => {
    const variant = image ? "default" : "with-out-image";
    const activeClassName = isActive
      ? "ring-2 ring-blue-4 border-transparent"
      : "";
    const withCheckboxClassName = withCheckbox
      ? "flex-row gap-x-4 justify-start"
      : "";
    const disabledClassName = disabled ? "opacity-70" : "";

    const handleClick = () => {
      if (disabled) return;
      onClick();
    };
    return (
      <div
        ref={ref}
        className={cn(
          cardVariants({ variant }),
          activeClassName,
          withCheckboxClassName,
          disabledClassName,
          className,
        )}
        onClick={handleClick}
        {...props}
      >
        {image && !withCheckbox && (
          <div
            className={
              "w-full pt-[67%] rounded-xl bg-[#D9D9D9] relative overflow-hidden"
            }
          >
            <Image
              src={image}
              alt={"happy home get an offer"}
              className={
                "w-full h-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 object-cover"
              }
            />
          </div>
        )}

        {withCheckbox && !radioButton && (
          <Checkbox className={"rounded-[4px]"} checked={isActive} />
        )}

        {withCheckbox && radioButton && (
          <RadioButtonCircle isActive={isActive} />
        )}

        {icon && <Icon name={icon} className={"text-2xl text-gray-12"} />}

        <Typography
          variant={"body2"}
          mobileVariant={"body3"}
          className={"whitespace-nowrap"}
        >
          {title}
        </Typography>
      </div>
    );
  },
);

export default CardOption;
