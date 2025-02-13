import Typography from "@/components/ui/typography";
import Card from "@/components/ui/card";
import Icon from "@/components/ui/icon";
import OrangeArrow from "@/components/ui/orange-arrow";
import React, { Fragment } from "react";
import GetOfferNowButton from "@/components/home/GetOfferNowButton";

const getOfferCardData = [
  {
    icon: "message",
    title: "Tell us about Your Home",
    description:
      "Enter your address, answer a few questions and upload photos. Accurate information speeds up the process and ensures a seamless transaction. No need for every little detail— just give it your best shot.",
  },
  {
    icon: "document-success",
    title: "Accept Your Offer",
    description:
      "We will send you a fair offer. You will be able to instantly increase this offer up to 30%, by describing unique features that make your house worth more. Schedule your single inspection, then If any of our partners want to pay more, you’ll receive additional $$$ at settlement.",
  },
  {
    icon: "job-offer",
    title: "Sign Closing Documents and Get $$$",
    description:
      "We handle the rest, and you close on your home sale between 20 and 60 days later, on YOUR schedule, anywhere you like. Submit your home info today to close sooner!",
  },
];

const GetOffer = () => {
  return (
    <section className={"py-6 md:py-[80px] relative"}>
      <div className={"container"}>
        <Typography
          variant={"subtitle1"}
          mobileVariant={"subtitle2"}
          className={"text-orange-6 text-center mb-1 normal-case"}
        >
          Ready to Sell?
        </Typography>
        <Typography
          variant={"h4"}
          mobileVariant={"h5"}
          className={
            "flex items-baseline justify-center gap-x-2 mb-3 text-center"
          }
        >
          TAKE 3 EASY STEPS FOR THE OFFER YOU’VE ALWAYS WANTED
        </Typography>

        <div className={"mt-6 md:mt-16 container max-w-[993px]"}>
          {getOfferCardData.map(({ icon, title, description }, index) => {
            return (
              <Fragment key={index}>
                <Card
                  className={
                    "p-6 flex items-center gap-x-4 md:gap-x-10 dark:!bg-white/[0.05] bg-black/[0.05]"
                  }
                >
                  <Icon
                    name={icon}
                    className={"text-blue-6 md:text-[64px] text-[40px]"}
                  />
                  <div>
                    <Typography
                      variant={"subtitle1"}
                      mobileVariant={"subtitle3"}
                      className={" mb-3 normal-case"}
                    >
                      {title}
                    </Typography>
                    <Typography
                      variant={"body2"}
                      mobileVariant={"body4"}
                      className={"text-[#8B8D98]"}
                    >
                      {description}
                    </Typography>
                  </div>
                </Card>
                {getOfferCardData.length - 1 !== index && (
                  <div className={"flex justify-center my-[2px]"}>
                    <OrangeArrow
                      height={55}
                      width={19}
                      className={"h-[30px] w-[12px] md:w-auto"}
                    />
                  </div>
                )}
              </Fragment>
            );
          })}

          <div className={"text-center mt-6"}>
            <GetOfferNowButton />
          </div>
        </div>
      </div>
    </section>
  );
};

export default GetOffer;
