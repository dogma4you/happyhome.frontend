import React from "react";

const BalanceIcon = () => {
  return (
    <div
      className={
        "size-10 flex items-center justify-center bg-blue-1 rounded-sm"
      }
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="23"
        height="23"
        viewBox="0 0 23 23"
        fill="none"
      >
        <rect
          x="3.37012"
          y="6.14062"
          width="16.625"
          height="11.0833"
          rx="2"
          stroke="#265EF7"
          strokeWidth="2"
        />
        <path
          d="M6.14111 8.91211H7.98834"
          stroke="#265EF7"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <path
          d="M15.3772 14.4531H17.2244"
          stroke="#265EF7"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <circle
          cx="11.6827"
          cy="11.6829"
          r="1.77083"
          stroke="#265EF7"
          strokeWidth="2"
        />
      </svg>
    </div>
  );
};

export default BalanceIcon;
