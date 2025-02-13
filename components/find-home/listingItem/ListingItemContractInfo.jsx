import React from "react";
import { formatCurrency } from "@/utils/helper";

const ListingItemContractInfo = ({
  contractPrice = 0,
  arv = 0,
  netProfit = 0,
  rentPrice = 0,
  repairCosts = 0,
  assigmentFee = 0,
}) => {
  return (
    <div className={"xl:w-[200px]"}>
      <div className={"p-3 bg-gray-3 rounded-lg"}>
        <ul className={"flex flex-col gap-y-2"}>
          <li className={"flex items-center justify-between"}>
            <span className={"text-xs text-gray-11"}>Contract price:</span>
            <span className={"text-xs text-gray-12 font-bold"}>
              {formatCurrency(contractPrice)}
            </span>
          </li>

          <li className={"flex items-center justify-between"}>
            <span className={"text-xs text-gray-11"}>Est. ARV:</span>
            <span className={"text-xs text-gray-12 font-bold"}>
              {formatCurrency(arv)}
            </span>
          </li>

          <li className={"flex items-center justify-between"}>
            <span className={"text-xs text-gray-11"}>Est. Net Profit:</span>
            <span className={"text-xs text-gray-12 font-bold"}>
              {formatCurrency(netProfit)}
            </span>
          </li>
        </ul>
      </div>
      <ul className={"hidden md:block"}>
        <li className={"flex items-center justify-between p-2"}>
          <span className={"text-xs text-gray-11"}>Est. Rent/Mo:</span>
          <span className={"text-xs text-gray-12"}>
            {formatCurrency(rentPrice)}
          </span>
        </li>

        <li className={"flex items-center justify-between p-2"}>
          <span className={"text-xs text-gray-11"}>Est. Repair Costs:</span>
          <span className={"text-xs text-gray-12"}>
            {formatCurrency(repairCosts)}
          </span>
        </li>

        <li className={"flex items-center justify-between p-2"}>
          <span className={"text-xs text-gray-11"}>Assignment fee:</span>
          <span className={"text-xs text-gray-12"}>
            {formatCurrency(assigmentFee)}
          </span>
        </li>
      </ul>
    </div>
  );
};

export default ListingItemContractInfo;
