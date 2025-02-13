import Image from "next/image";
import Icon from "@/components/ui/icon";
import Typography from "@/components/ui/typography";

const BuyerBenefitsBanner = ({ benefitsList = [], bannerImage, title }) => {
  return (
    <div
      className={
        "md:min-h-[435px] md:py-10 px-3 md:px-[78px] md:rounded-lg relative flex items-center overflow-hidden md:benefits-banner-gradient"
      }
    >
      <Image
        src={bannerImage}
        alt={"Happy Home Buy Benefits"}
        className={
          "w-full h-full absolute left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2 object-cover -z-10 hidden md:block"
        }
      />

      <div>
        {title && (
          <div
            className={
              "text-lg font-bold leading-[27px] uppercase mb-7 text-black dark:text-white md:text-white"
            }
          >
            {title}
          </div>
        )}

        <ul className={"flex flex-col gap-y-4 max-w-[600px]"}>
          {benefitsList.map(({ text }) => {
            return (
              <li key={text} className={"flex items-center gap-x-4"}>
                <Icon name={"check"} className={"text-orange-6 text-2xl"} />
                <Typography
                  variant={"body2"}
                  mobileVariant={"body3"}
                  className={"text-black dark:text-white md:text-white"}
                >
                  {text}
                </Typography>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default BuyerBenefitsBanner;
