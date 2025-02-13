import React from "react";
import Typography from "@/components/ui/typography";
import { formatCurrency } from "@/utils/helper";

const HomeAmountInfo = ({
  contractPrice = 0,
  arv = 0,
  netProfit = 0,
  rentPrice = 0,
  repairCosts = 0,
  assigmentFee = 0,
  totalSalesPrice = 0,
}) => {
  return (
    <div>
      <Typography variant={"subtitle1"}>Due Diligence Documents</Typography>
      <div className={"flex items-center mt-6 gap-x-7 max-md:flex-col"}>
        <ul
          className={"py-3 px-6 bg-gray-3 flex-grow rounded-lg max-md:w-full"}
        >
          <li className={"py-2 flex items-center justify-between"}>
            <Typography variant={"body3"} className={"normal-case"}>
              Total sales price:
            </Typography>
            <Typography variant={"subtitle3"}>
              {formatCurrency(totalSalesPrice)}
            </Typography>
          </li>

          <li className={"py-2 flex items-center justify-between"}>
            <Typography variant={"body3"} className={"normal-case"}>
              Contract price:
            </Typography>
            <Typography variant={"subtitle3"}>
              {formatCurrency(contractPrice)}
            </Typography>
          </li>

          <li className={"py-2 flex items-center justify-between"}>
            <Typography variant={"body3"} className={"normal-case"}>
              Est. ARV:
            </Typography>
            <Typography variant={"subtitle3"}>
              {formatCurrency(arv)}{" "}
            </Typography>
          </li>

          <li className={"py-2 flex items-center justify-between"}>
            <Typography variant={"body3"} className={"normal-case"}>
              Est. Net Profit:
            </Typography>
            <Typography variant={"subtitle3"}>
              {formatCurrency(netProfit)}
            </Typography>
          </li>
        </ul>

        <ul className={"py-3 px-6 flex-grow rounded-lg max-md:w-full"}>
          <li className={"py-2 flex items-center justify-between"}>
            <Typography variant={"body3"} className={"normal-case"}>
              Est. Rent/Mo:
            </Typography>
            <Typography variant={"subtitle3"}>
              {formatCurrency(rentPrice)}
            </Typography>
          </li>

          <li className={"py-2 flex items-center justify-between"}>
            <Typography variant={"body3"} className={"normal-case"}>
              Est. Repair Costs:
            </Typography>
            <Typography variant={"subtitle3"}>
              {formatCurrency(repairCosts)}
            </Typography>
          </li>

          <li className={"py-2 flex items-center justify-between"}>
            <Typography variant={"body3"} className={"normal-case"}>
              Assignment fee:
            </Typography>
            <Typography variant={"subtitle3"}>
              {formatCurrency(assigmentFee)}
            </Typography>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default HomeAmountInfo;
