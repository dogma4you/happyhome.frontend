import React from "react";
import Image from "next/image";
import filterIcon from "@/public/assets/icons/filter.svg";
import Typography from "@/components/ui/typography";

const FilterHeader = () => {
  return (
    <div className={"flex items-center gap-x-2"}>
      <Image src={filterIcon} width={24} height={24} alt="contract" />
      <Typography variant={"subtitle1"} className={"normal-case"}>
        Filter
      </Typography>
    </div>
  );
};

export default FilterHeader;
