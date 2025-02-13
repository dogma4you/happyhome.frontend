import Image from "next/image";

import Typography from "@/components/ui/typography";
import { Button } from "@/components/ui/button";
import Arrow from "@/public/assets/icons/arrow";
import { GET_AN_OFFER_VIEW } from "@/utils/constants";
import useGetAnOffer from "@/store/useGetAnOffer";
import conditionOfProperty from "@/public/assets/condition_of_property.jpeg";
import * as React from "react";
import GetAnOfferDefaultHeader from "@/components/getoffers/components/GetAnOfferDefaultHeader";

const PropertyType = () => {
  const changeView = useGetAnOffer(({ changeView }) => changeView);
  return (
    <main className={"flex flex-col h-full"}>
      <GetAnOfferDefaultHeader />
      <section
        className={
          "flex items-center justify-center xl:justify-start w-full flex-1 gap-x-12"
        }
      >
        <div className={"w-[46%] h-full relative xl:block hidden"}>
          <Image
            src={conditionOfProperty}
            className={
              "w-full h-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 object-cover"
            }
            alt={"Get started to get offer in happy home"}
          />
        </div>

        <div
          className={
            "xl:max-w-[50%] xl:min-w-[700px] pb-8 px-4 xl:px-0 flex flex-col h-full w-full md:w-auto "
          }
        >
          <div className={"flex flex-col flex-1 justify-center"}>
            <div className={"xl:pr-[120px]"}>
              <div
                className={
                  "size-9 md:size-14 bg-[#1DCC00]/10 rounded-full flex items-center justify-center mb-3"
                }
              >
                <Typography
                  variant={"h5"}
                  mobileVariant={"subtitle2"}
                  className={"text-[#1DCC00]"}
                >
                  1
                </Typography>
              </div>
              <Typography
                variant={"h3"}
                mobileVariant={"h4"}
                className={"mb-3 max-w-[510px]"}
              >
                Property Basics
              </Typography>

              <Typography
                variant={"body1"}
                mobileVariant={"body3"}
                className={"mb-[60px]"}
              >
                Tell us about the basics of the property
              </Typography>
            </div>
          </div>

          <div className={"flex justify-between mt-10 xl:pr-12"}>
            <Button
              variant={"ghost"}
              size={"lg"}
              className={"uppercase text-gray-10 pl-0 group/back-button"}
              onClick={() => changeView(GET_AN_OFFER_VIEW.GET_STARTED)}
            >
              <Arrow
                width={10}
                height={15}
                className={
                  "dark:stroke-white stroke-gray-10 rotate-180 group-hover/back-button:stroke-blue-6 transition"
                }
              />
              back
            </Button>
            <Button
              size={"lg"}
              className={"uppercase"}
              onClick={() => changeView(GET_AN_OFFER_VIEW.HOME_TYPE)}
            >
              Next
              <Arrow width={10} height={15} className={"stroke-white"} />
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
};

export default PropertyType;
