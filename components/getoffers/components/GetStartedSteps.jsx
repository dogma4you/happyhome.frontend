import React from "react";
import { cn } from "@/lib/utils";
import { Check } from "lucide-react";
import Typography from "@/components/ui/typography";

const getStartedStepsData = [
  {
    title: "BASICS OF THE PROPERTY",
    description: "Here we will learn about the basics of the property",
    isActive: true,
  },
  {
    title: "Condition of the property",
    description: "Here you need to rate the features of your home.",
    isActive: false,
  },
  {
    title: "Uploading pictures",
    description: "Providing pictures of each room, and exterior features",
    isActive: false,
  },
];

const GetStartedSteps = () => {
  return (
    <div className={"hidden md:block"}>
      <Typography variant={"subtitle3"} className={"mt-5 mb-4 normal-case"}>
        3 Steps to complete your home selling process
      </Typography>
      <ul className={"mb-5"}>
        {getStartedStepsData.map(({ isActive, title, description }, index) => {
          return (
            <li key={title} className={"flex gap-x-6 items-start"}>
              <div className={"flex flex-col items-center "}>
                <div
                  className={cn("get-offer-step-circle", isActive && "active")}
                >
                  {!isActive && <Check className="h-3 w-3 text-[#B1B1B1]" />}

                  {isActive && (
                    <div className={"w-1 h-1 rounded-full bg-white"}></div>
                  )}
                </div>
                {getStartedStepsData.length > index + 1 && (
                  <div
                    className={
                      "min-h-[32px] h-full my-[10px] bg-[#D4D4D4] w-[1px] mx-auto"
                    }
                  />
                )}
              </div>
              <div>
                <Typography
                  variant={"body3"}
                  className={"text-blue-6 uppercase font-bold"}
                >
                  {title}
                </Typography>
                <Typography variant={"body4"} className={"text-gray-12 mt-1"}>
                  {description}
                </Typography>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default GetStartedSteps;
