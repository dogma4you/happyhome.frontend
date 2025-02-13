import React from "react";
import {
  calculateDuration,
  formatCurrency,
  formatDuration,
} from "@/utils/helper";
import BuyNowButton from "@/components/find-home/BuyNowButton";

const ListingItemAmount = ({
  buyersFee = 0,
  moneyDep = 0,
  totalAmount = 0,
  locked,
  date = new Date(),
  contractId = 0,
  mutate = () => {},
}) => {
  return (
    <div className={"mt-3 border border-gray-6 p-3 rounded-lg"}>
      <ul className={"flex flex-col gap-y-3 border-b border-gray-6 pb-3"}>
        <li className={"flex items-center justify-between"}>
          <span className={"text-xs text-gray-11"}>Buyer’s fee:</span>
          <span className={"text-xs text-gray-12 font-bold"}>
            {formatCurrency(buyersFee)}
          </span>
        </li>

        <li className={"flex items-center justify-between"}>
          <span className={"text-xs text-gray-11"}>Earnest Money Dep.:</span>
          <span className={"text-xs text-gray-12 font-bold"}>
            {formatCurrency(moneyDep)}
          </span>
        </li>
      </ul>

      <div className={"flex items-center justify-between py-3"}>
        <span className={"text-xs text-gray-11"}>Total amount</span>
        <span className={"text-xs text-gray-12 font-bold"}>
          {formatCurrency(totalAmount)}
        </span>
      </div>

      <div className={"flex items-center justify-between"}>
        <div className={"flex items-center"}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
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

          <span
            className={
              "ml-1 text-error-10 font-bold text-xs uppercase whitespace-nowrap"
            }
          >
            {calculateDuration(date)}
          </span>
        </div>
        <BuyNowButton
          className={"px-3 py-2 text-xs ml-3 uppercase"}
          disabled={locked}
          id={contractId}
          onSuccess={() => mutate()}
        />
      </div>
    </div>
  );
};

export default ListingItemAmount;
