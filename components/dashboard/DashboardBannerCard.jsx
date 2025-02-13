"use client";
import Image from "next/image";
import Typography from "@/components/ui/typography";
import { Button } from "@/components/ui/button";
import Card from "@/components/ui/card";
import { cn } from "@/lib/utils";

const DashboardBannerCard = ({
  className,
  buttonClassName,
  image,
  title,
  buttonTitle,
  onClick = () => {},
}) => {
  return (
    <Card
      className={cn("p-[10px] sm:p-4  flex gap-x-5 items-center", className)}
    >
      <div
        className={
          "w-[120px] sm:w-[190px] sm:h-[148px] h-[90px] rounded-lg relative overflow-hidden"
        }
      >
        <Image
          width={190}
          height={148}
          src={image}
          alt={"Happy home want to buy a property"}
          className={"image-cover"}
        />
      </div>

      <div>
        <Typography
          variant={"h5"}
          mobileVariant={"subtitle1"}
          className={"text-lg"}
        >
          {title}
        </Typography>
        <Button
          size={"sm"}
          variant={"ghost"}
          className={cn("md:mt-3 uppercase pl-0 ", buttonClassName)}
          onClick={onClick}
        >
          {buttonTitle}
        </Button>
      </div>
    </Card>
  );
};

export default DashboardBannerCard;
