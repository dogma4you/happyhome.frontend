import Image from "next/image";

import Typography from "@/components/ui/typography";
import { Button } from "@/components/ui/button";
import Arrow from "@/public/assets/icons/arrow";
import { GET_AN_OFFER_VIEW } from "@/utils/constants";
import useGetAnOffer from "@/store/useGetAnOffer";
import conditionOfProperty from "@/public/assets/condition_of_property.jpeg";
import { Progress } from "@/components/ui/progress";
import GetAnOfferDefaultHeader from "@/components/getoffers/components/GetAnOfferDefaultHeader";

const ConditionOfProperty = () => {
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
            "xl:max-w-[50%] xl:min-w-[700px] pl-6 py-6 pb-8 flex flex-col h-full"
          }
        >
          <div className={"flex flex-col flex-1 justify-center"}>
            <div className={"pr-6 md:pr-[120px]"}>
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
                  2
                </Typography>
              </div>
              <Typography
                variant={"h3"}
                mobileVariant={"h4"}
                className={"mb-2 md:mb-3 max-w-[510px]"}
              >
                condition
              </Typography>

              <Typography
                variant={"body1"}
                mobileVariant={"body3"}
                className={"mb-[60px]"}
              >
                No one knows your home like you do; to the best of your ability,
                please rate the following features of your home.
              </Typography>
            </div>

            <div className={"mt-[80px] relative h-[100px]"}>
              <Progress
                value={75}
                indicatorClassName={"bg-blue-6"}
                className={"bg-blue-2"}
              />

              <div className={"absolute top-0 left-0 w-[77px] md:w-auto"}>
                <div className={"h-[12px] w-1 rounded-[8px] bg-blue-6"}></div>
                <div
                  className={"text-base font-bold text-gray-12 leading-[42px]"}
                >
                  1
                </div>
                <div
                  className={
                    "text-xs md:text-sm font-bold text-gray-12 uppercase leading-[18px] md:leading-[22px] mb-[2px]"
                  }
                >
                  Very poor condition
                </div>
                <div className={"text-xs leading-[18px] text-gray-11"}>
                  needs full replacement
                </div>
              </div>

              <div className={"absolute top-0 left-[40%] w-[71px] md:w-auto"}>
                <div className={"h-[12px] w-1 rounded-[8px] bg-blue-6"}></div>
                <div
                  className={"text-base font-bold text-gray-12 leading-[42px]"}
                >
                  5
                </div>
                <div
                  className={
                    "text-xs md:text-sm font-bold text-gray-12 uppercase leading-[18px] md:leading-[22px] mb-[2px]"
                  }
                >
                  Good condition
                </div>
                <div className={"text-xs leading-[18px] text-gray-11"}>
                  may need updating
                </div>
              </div>

              <div className={"absolute top-0 left-[74.4%] w-[74px] md:w-auto"}>
                <div className={"h-[12px] w-1 rounded-[8px] bg-blue-6"}></div>
                <div
                  className={"text-base font-bold text-gray-12 leading-[42px]"}
                >
                  10
                </div>
                <div
                  className={
                    "text-xs md:text-sm font-bold text-gray-12 uppercase leading-[18px] md:leading-[22px] mb-[2px]"
                  }
                >
                  Like new condition
                </div>
                <div className={"text-xs leading-[18px] text-gray-11"}>
                  no updates necessary
                </div>
              </div>
            </div>
          </div>

          <div className={"flex justify-between mt-10 pr-6 md:pr-12"}>
            <Button
              variant={"ghost"}
              size={"lg"}
              className={"uppercase text-gray-10 pl-0 group/back-button"}
              onClick={() => changeView(GET_AN_OFFER_VIEW.HOME_BUILT_DETAILS)}
            >
              <Arrow
                width={10}
                height={15}
                className={
                  "stroke-white rotate-180 group-hover/back-button:stroke-blue-6 transition"
                }
              />
              back
            </Button>
            <Button
              size={"lg"}
              className={"uppercase"}
              onClick={() => changeView(GET_AN_OFFER_VIEW.HOME_RATE)}
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

export default ConditionOfProperty;
