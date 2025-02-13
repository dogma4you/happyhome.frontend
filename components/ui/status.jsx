import { cn } from "@/lib/utils";

const Status = ({ title, variant = "success" }) => {
  let indicatorColor = "bg-[#3EAF3F]";

  if (variant === "warning") {
    indicatorColor = "bg-orange-6";
  }

  if (variant === "danger") {
    indicatorColor = "bg-error-10";
  }

  return (
    <div
      className={
        "border border-gray-4 bg-background inline-flex items-center gap-x-1 px-2 py-1 rounded-[6px]"
      }
    >
      <div
        className={cn("size-[6px] min-w-[6px] rounded-full", indicatorColor)}
      ></div>
      <p className={"text-xs font-bold leading-[18px] uppercase text-gray-11"}>
        {title}
      </p>
    </div>
  );
};

export default Status;
