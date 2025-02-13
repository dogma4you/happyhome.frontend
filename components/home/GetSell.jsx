import * as React from "react";
import Typography from "@/components/ui/typography";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const GetSell = () => {
  return (
    <section className={"py-6 md:py-[80px] bg-background"}>
      <div className={"container relative"}>
        <Typography
          variant={"h5"}
          mobileVariant={"subtitle2"}
          className={"text-blue-6 normal-case mb-1 "}
        >
          Ready to Buy?
        </Typography>
        <Typography
          variant={"h1"}
          mobileVariant={"h5"}
          className={
            "text-black dark:text-white mb-3 md:mb-[30px] max-w-[662px]"
          }
        >
          Ready to make your move?
        </Typography>

        <Typography
          variant={"body1"}
          className={"text-gray-12 mb-6 md:mb-16 max-w-[506px]"}
        >
          Enter the Revolutionary Contract Exchange to search, look and buy.
          Made to level the field, for Independent Investors.
        </Typography>

        <Link href={"/find-home"}>
          <Button size={"lg"} mobileSize={"sm"}>
            GET STARTED
          </Button>
        </Link>

        <div className={"hidden xl:block"}>
          <div
            className={
              "rounded-full py-3 px-6 bg-orange-1 absolute top-0 right-[78px] animate-rotate-buy origin-center"
            }
            style={{ animationDirection: "alternate-reverse" }}
          >
            <Typography variant={"h4"} className={"text-[#1C2024] "}>
              <span className={"uppercase text-orange-6"}>Buy:</span> Contracts,
              Directly
            </Typography>
          </div>

          <div
            className={
              "rounded-full py-3 px-6 bg-orange-1 absolute top-[200px] right-[20px]  animate-rotate-properties origin-center"
            }
          >
            <Typography variant={"h4"} className={"text-[#1C2024] "}>
              <span className={"uppercase text-orange-6"}>On:</span> Vetted
              Properties
            </Typography>
          </div>

          <div
            className={
              "rounded-full py-3 px-6 bg-orange-1 absolute top-[360px] right-[0] animate-rotate-buyers origin-center"
            }
          >
            <Typography variant={"h4"} className={"text-[#1C2024] "}>
              <span className={"uppercase text-orange-6"}>For:</span> Qualified
              Buyers, Only
            </Typography>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GetSell;
