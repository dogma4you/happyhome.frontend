import Image from "next/image";
import { twMerge } from "tailwind-merge";
import orangeArrowIcon from "@/public/assets/icons/arrow-orange.svg";

const OrangeArrow = ({ height, className, width = 19 }) => {
  const heightCN = `md:h-[${height}px]`;
  const arrowLineHeight = height - 10;
  return (
    <div
      className={twMerge(
        "w-[19px] flex flex-col justify-center items-center",
        heightCN,
        className,
      )}
    >
      <div
        className={twMerge("w-[2px] bg-orange-6")}
        style={{ height: arrowLineHeight }}
      ></div>
      <Image
        width={width}
        height={10}
        src={orangeArrowIcon}
        alt={"orange arrow"}
      />
    </div>
  );
};

export default OrangeArrow;
