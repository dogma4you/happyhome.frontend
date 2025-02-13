import React from "react";
import Icon from "@/components/ui/icon";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

const EmptyDragZoneContent = ({ error }) => {
  return (
    <div className={"flex flex-col justify-center items-center md:px-[54px]"}>
      <Icon
        name={"images"}
        className={cn(
          "text-[64px] leading-[64px] text-gray-12",
          error && "text-error-10",
        )}
      />
      <p
        className={cn(
          "mt-4 font-bold uppercase text-gray-12 text-center",
          error && "text-error-10",
        )}
      >
        Drop your image here, or
      </p>
      <Button variant={"ghost"} className={"text-blue-6 uppercase"}>
        browse
      </Button>
      <span
        className={cn("mt-2 text-sm text-gray-10", error && "text-error-10")}
      >
        Supports: PNG, JPG, JPEG, WEBP
      </span>
    </div>
  );
};

export default EmptyDragZoneContent;
