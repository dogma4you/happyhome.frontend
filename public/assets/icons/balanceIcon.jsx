import React from "react";
import cn from "classnames";

const BalanceIcon = ({ className, width = 23, height = 23 }) => {
  return (
    <div
      className={cn(
        "size-10 flex items-center justify-center bg-orange-1 rounded-sm",
        className,
      )}
    >
      <svg
        width={width}
        height={height}
        viewBox="0 0 23 23"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M3.37012 6.60373V6.60373C3.37012 5.32849 4.40391 4.29471 5.67915 4.29471L18.4118 4.29471C18.5603 4.29471 18.6346 4.29471 18.6956 4.31036C18.8725 4.35568 19.0105 4.49375 19.0559 4.67057C19.0715 4.73165 19.0715 4.80591 19.0715 4.95443V4.95443C19.0715 5.84553 19.0715 6.29108 18.9776 6.65756C18.7057 7.71849 17.8772 8.54693 16.8163 8.81884C16.4498 8.91276 16.0043 8.91276 15.1132 8.91276L14.4535 8.91276M3.37012 6.60373V6.60373C3.37012 7.87897 4.40391 8.91276 5.67915 8.91276L17.9951 8.91276C18.9379 8.91276 19.4093 8.91276 19.7022 9.20565C19.9951 9.49855 19.9951 9.96995 19.9951 10.9128L19.9951 12.6072M3.37012 6.60373L3.37012 15.9961C3.37012 17.8817 3.37012 18.8245 3.95591 19.4103C4.5417 19.9961 5.48451 19.9961 7.37012 19.9961L17.9951 19.9961C18.9379 19.9961 19.4093 19.9961 19.7022 19.7032C19.9951 19.4103 19.9951 18.9389 19.9951 17.9961L19.9951 16.3016M19.9951 16.3016H16.3007C15.5055 16.3016 15.1079 16.3016 14.8361 16.0883C14.7731 16.0389 14.7162 15.982 14.6668 15.919C14.4535 15.6472 14.4535 15.2496 14.4535 14.4544V14.4544C14.4535 13.6592 14.4535 13.2617 14.6668 12.9898C14.7162 12.9268 14.7731 12.87 14.8361 12.8205C15.1079 12.6072 15.5055 12.6072 16.3007 12.6072H19.9951M19.9951 16.3016L19.9951 12.6072"
          stroke="#D9882B"
          strokeWidth="2"
        />
      </svg>
    </div>
  );
};

export default BalanceIcon;
