import Arrow from "@/public/assets/icons/arrow";
import * as React from "react";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";

const GetAnOfferFooter = ({
  step = 1,
  progress = 0,
  onClickBack = () => {},
  onClickNext = () => {},
  handleSubmit = () => {},
  showSubmitButton = false,
  isLoading = false,
}) => {
  const stepCount = 3;
  return (
    <footer className={"container"}>
      <div className={"flex items-center gap-x-[15px]"}>
        {new Array(stepCount).fill("").map((_, index) => {
          const progressCompleted =
            step > index + 1 ? 100 : step === index + 1 ? progress : 0;
          return <Progress value={progressCompleted} key={index} />;
        })}
      </div>
      <div className={"py-7 flex justify-between"}>
        <div
          className={
            "flex items-center gap-x-4 cursor-pointer group/back-button"
          }
          onClick={onClickBack}
        >
          <Arrow
            width={16}
            height={16}
            className={
              "stroke-gray-12 rotate-180 group-hover/back-button:stroke-blue-7"
            }
          />
          <span className={"text-gray-12 group-hover/back-button:text-blue-7"}>
            Back
          </span>
        </div>

        {showSubmitButton && (
          <Button
            size={"lg"}
            onClick={() => handleSubmit()}
            disabled={isLoading}
          >
            Submit <Arrow width={16} height={16} className={"stroke-white"} />
          </Button>
        )}
        {!showSubmitButton && (
          <Button size={"lg"} onClick={onClickNext}>
            Next
            <Arrow width={16} height={16} className={"stroke-white"} />
          </Button>
        )}
      </div>
    </footer>
  );
};

export default GetAnOfferFooter;
