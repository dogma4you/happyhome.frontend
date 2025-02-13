import Typography from "@/components/ui/typography";
import Icon from "@/components/ui/icon";
import useGetAnOffer from "@/store/useGetAnOffer";
import { cn } from "@/lib/utils";

const GetAnOfferFormHeader = ({ title, description, infoText, className }) => {
  const address = useGetAnOffer(({ address }) => address.formatted_address);
  return (
    <div className={cn("flex items-end justify-between", className)}>
      <div className={"hidden xl:block"}>
        {title && (
          <Typography
            variant={"body3"}
            mobileVariant={"body4"}
            className={"text-blue-6 font-bold"}
          >
            {title}
          </Typography>
        )}

        <Typography
          variant={"h5"}
          mobileVariant={"subtitle2"}
          className={"normal-case"}
        >
          {description}
        </Typography>
        {infoText && (
          <Typography
            variant={"body2"}
            mobileVariant={"body4"}
            className={"normal-case mt-2"}
          >
            {infoText}
          </Typography>
        )}
      </div>

      <div
        className={
          "flex items-center gap-x-1 px-4 py-2 rounded-full bg-blue-1 leading-none w-full md:w-auto"
        }
      >
        <Icon name={"map"} className={" text-blue-6 py-[2px] px-1"} />
        <Typography
          variant={"body3"}
          mobileVariant={"body4"}
          className={"text-[#1C2024] whitespace-nowrap"}
        >
          {address}
        </Typography>
      </div>
    </div>
  );
};

export default GetAnOfferFormHeader;
