import React from "react";
import Icon from "@/components/ui/icon";

const AddMoreDragZoneContent = () => {
  return (
    <div
      className={"text-center flex items-center justify-center flex-col h-full"}
    >
      <Icon
        name={"plus"}
        className={
          "text-[30px] leading-[30px] text-gray-12 text-sm md:text-base"
        }
      />
      <p
        className={"mt-2 font-bold uppercase text-gray-12 text-xs sm:text-base"}
      >
        Add more
      </p>
    </div>
  );
};

export default AddMoreDragZoneContent;
