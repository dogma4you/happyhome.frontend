import { twMerge } from "tailwind-merge";

const Divider = ({ children, className, dividerColor }) => {
  return (
    <div className={twMerge("flex items-center", className)}>
      <span className={twMerge("w-full h-[1px]", dividerColor)}></span>
      {children && (
        <span className={"px-4 text-sm text-gray-11"}>{children}</span>
      )}
      <span className={twMerge("w-full h-[1px]", dividerColor)}></span>
    </div>
  );
};

export default Divider;
