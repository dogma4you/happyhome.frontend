import React from "react";
import Typography from "@/components/ui/typography";
import Icon from "@/components/ui/icon";
import cn from "classnames";
import { formatDate } from "@/utils/helper";

const ListingItemInfo = ({ title, homeSize, bedrooms, bathrooms, locked }) => {
  return (
    <div>
      <div
        className={
          "text-xs text-white uppercase font-bold px-3 py-[2px] rounded-full bg-[#32C688] inline-block"
        }
      >
        Active
      </div>

      <div className={"flex items-center xl:hidden my-2"}>
        <Typography
          variant={"body4"}
          className={"text-gray-11 text-xs md:text-sm"}
        >
          Listing End Date:
        </Typography>
        <Typography
          variant={"body4"}
          className={"text-error-10 ml-1 text-xs md:text-sm"}
        >
          {formatDate(new Date())}
        </Typography>
      </div>

      <Typography
        variant={"subtitle3"}
        className={cn("md:mt-3 normal-case", locked && "blur")}
      >
        {locked && "xxxx xxxxxx xxxx"}
      </Typography>
      <Typography variant={"subtitle3"} className={"md:mt-3 normal-case"}>
        {title}
      </Typography>
      <ul className={"flex md:flex-col gap-y-2 mt-2 md:mt-6 gap-x-3"}>
        <li className={"flex items-center gap-x-2"}>
          <Icon name={"house"} className={"text-blue-6 text-xl"} />
          <Typography
            variant={"body4"}
            className={"normal-case hidden md:block"}
          >
            Home size:
          </Typography>
          <Typography variant={"body4"} className={"normal-case"}>
            {homeSize}
          </Typography>
        </li>

        <li className={"flex items-center gap-x-2"}>
          <Icon name={"bed"} className={"text-blue-6 text-xl"} />
          <Typography
            variant={"body4"}
            className={"normal-case hidden md:block"}
          >
            Bedrooms:
          </Typography>
          <Typography variant={"body4"} className={"normal-case"}>
            {bedrooms}
          </Typography>
        </li>

        <li className={"flex items-center gap-x-2"}>
          <Icon name={"bathroom"} className={"text-blue-6 text-xl"} />
          <Typography
            variant={"body4"}
            className={"normal-case hidden md:block"}
          >
            Bathrooms:
          </Typography>
          <Typography variant={"body4"} className={"normal-case"}>
            {bathrooms}
          </Typography>
        </li>
      </ul>
    </div>
  );
};

export default ListingItemInfo;
