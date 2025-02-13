import React from "react";
import Typography from "@/components/ui/typography";
import { getAreasData } from "@/utils/helper";

const HomeInfo = ({ data }) => {
  const { propertyType, areas } = data;
  const areasData = getAreasData(areas);

  return (
    <div
      className={
        "p-6 rounded-lg bg-gray-3 flex items-start gap-x-8 mt-6 max-md:flex-col "
      }
    >
      <ul className={"w-full flex flex-col md:gap-y-3"}>
        <li className={"flex items-center justify-between py-2"}>
          <Typography variant={"body3"} className={"normal-case"}>
            Property type:
          </Typography>

          <Typography variant={"subtitle3"} className={"normal-case font-bold"}>
            {propertyType === 1 ? "Home" : "Multi Family"}
          </Typography>
        </li>

        <li className={"flex items-center justify-between py-2"}>
          <Typography variant={"body3"} className={"normal-case"}>
            Home size:
          </Typography>

          <Typography variant={"subtitle3"} className={"normal-case font-bold"}>
            1,780 Sq Ft
          </Typography>
        </li>

        <li className={"flex items-center justify-between py-2"}>
          <Typography variant={"body3"} className={"normal-case"}>
            Lot Size:
          </Typography>

          <Typography variant={"subtitle3"} className={"normal-case font-bold"}>
            {areasData.square_feet.toLocaleString()} Sq Ft
          </Typography>
        </li>
      </ul>
      <ul className={"w-full flex flex-col md:gap-y-3"}>
        <li className={"flex items-center justify-between py-2"}>
          <Typography variant={"body3"} className={"normal-case"}>
            Bedrooms:
          </Typography>

          <Typography variant={"subtitle3"} className={"normal-case font-bold"}>
            {areasData.bedrooms}
          </Typography>
        </li>

        <li className={"flex items-center justify-between py-2"}>
          <Typography variant={"body3"} className={"normal-case"}>
            Bathrooms:
          </Typography>

          <Typography variant={"subtitle3"} className={"normal-case font-bold"}>
            {areasData.bathrooms}
          </Typography>
        </li>
      </ul>
    </div>
  );
};

export default HomeInfo;
