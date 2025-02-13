import React from "react";
import {
  calculateDuration,
  formatCurrency,
  formatDuration,
} from "@/utils/helper";
import Typography from "@/components/ui/typography";
import BuyNowButton from "@/components/find-home/BuyNowButton";
import { useRouter } from "next/navigation";

const FindHomeItemAmount = ({
  buyersFee = 0,
  moneyDep = 0,
  totalAmount = 0,
  locked,
  date = new Date(),
  contractId = 0,
}) => {
  const router = useRouter();
  return (
    <div className={"mt-3 border border-gray-6 p-6 rounded-lg pt-10"}>
      <ul className={"flex flex-col gap-y-3 border-b border-gray-6 pb-4"}>
        <li className={"flex items-center justify-between"}>
          <Typography
            variant={"body2"}
            mobileVariant={"body3"}
            className={"text-gray-11"}
          >
            Required Deposit:
          </Typography>
          <Typography
            variant={"subtitle2"}
            mobileVariant={"subtitle3"}
            className={"text-gray-12 font-bold"}
          >
            {formatCurrency(buyersFee)}
          </Typography>
        </li>

        <li className={"flex items-center justify-between"}>
          <Typography
            variant={"body2"}
            mobileVariant={"body3"}
            className={"text-gray-11"}
          >
            Includes Earnest Money Dep. of:
          </Typography>
          <Typography
            variant={"subtitle2"}
            mobileVariant={"subtitle3"}
            className={"text-gray-12 font-bold"}
          >
            {formatCurrency(moneyDep)}
          </Typography>
        </li>
      </ul>

      <div className={"flex items-center justify-between py-6"}>
        <Typography
          variant={"subtitle2"}
          mobileVariant={"subtitle3"}
          className={"text-gray-11 normal-case"}
        >
          Total Amount Due at Closing
        </Typography>
        <Typography
          variant={"subtitle2"}
          mobileVariant={"subtitle3"}
          className={"text-gray-12 font-bold"}
        >
          {formatCurrency(totalAmount)}
        </Typography>
      </div>

      <div className={"flex items-center justify-between"}>
        <div className={"flex items-center gap-x-2"}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            className={"w-[24px] h-[24px]"}
          >
            <ellipse
              cx="7.99935"
              cy="9.33333"
              rx="5.33333"
              ry="5.33333"
              stroke="#D93D42"
              strokeWidth="1.5"
            />
            <path
              d="M8 9.33203L8 7.33203"
              stroke="#D93D42"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
            <path
              d="M11.666 5L12.666 4"
              stroke="#D93D42"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
            <path
              d="M6.71275 1.58104C6.78872 1.51017 6.95611 1.44754 7.18897 1.40287C7.42183 1.3582 7.70714 1.33398 8.00065 1.33398C8.29416 1.33398 8.57947 1.3582 8.81233 1.40287C9.04519 1.44754 9.21259 1.51017 9.28855 1.58104"
              stroke="#D93D42"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
          </svg>

          <Typography
            variant={"subtitle2"}
            mobileVariant={"subtitle3"}
            className={
              "ml-1 text-error-10 font-bold uppercase whitespace-nowrap"
            }
          >
            {calculateDuration(date)}
          </Typography>
        </div>
        <BuyNowButton
          className={"md:px-6 md:py-[14px] ml-3 md:text-lg uppercase"}
          disabled={locked}
          id={contractId}
          onSuccess={() => router.push("/find-home")}
          mobileSize={"xs"}
        />
      </div>
    </div>
  );
};

export default FindHomeItemAmount;
