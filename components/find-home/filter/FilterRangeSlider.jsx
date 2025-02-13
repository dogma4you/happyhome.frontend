import React from "react";
import { Range } from "react-range";
import Typography from "@/components/ui/typography";
import Icon from "@/components/ui/icon";
import useFindHome from "@/store/useFindHome";

const FilterRangeSlider = () => {
  const {
    filters: { rangeValue },
    setFilter,
  } = useFindHome();

  const minRangeValue = 1;
  const maxRangeValue = 30;

  const isRangeChanged =
    minRangeValue !== rangeValue[0] || maxRangeValue !== rangeValue[1];

  return (
    <div className={"mt-6"}>
      <div className={"flex items-center justify-between"}>
        <Typography variant={"subtitle3"} className={"normal-case"}>
          Listing duration
        </Typography>
        {isRangeChanged && (
          <div
            className={"flex items-center gap-x-1"}
            onClick={() =>
              setFilter({ rangeValue: [minRangeValue, maxRangeValue] })
            }
          >
            <Icon name={"plus"} className={"rotate-45 block text-gray-9"} />
            <span
              className={
                "uppercase text-gray-9 text-xs font-bold leading-[18px]"
              }
            >
              clear
            </span>
          </div>
        )}
      </div>

      <div className={"pt-[53px]"}>
        <Range
          values={rangeValue}
          step={1}
          min={1}
          max={30}
          onChange={(values) => setFilter({ rangeValue: values })}
          renderTrack={({ props, children }) => (
            <div>
              <div
                ref={props.ref}
                className={"h-1 w-full rounded-full bg-gray-6"}
                style={{
                  alignSelf: "center",
                }}
              >
                {children}
              </div>
            </div>
          )}
          renderThumb={({ props }) => (
            <div
              {...props}
              className={
                "size-4 bg-background rounded-full flex items-center justify-center"
              }
              style={props.style}
            >
              <div className={"size-2 bg-blue-6 rounded-[6px] relative"}>
                <div
                  className={
                    "absolute -top-[36px] left-1/2 -translate-x-1/2 py-1 px-2 bg-blue-6 rounded-[6px]"
                  }
                >
                  <Typography
                    variant={"body4"}
                    className={
                      "whitespace-nowrap text-xs font-bold leading-[18px] text-white"
                    }
                  >
                    {rangeValue[props.key]}
                  </Typography>
                </div>
                <svg
                  width="12"
                  height="6"
                  viewBox="0 0 12 6"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className={
                    "absolute -top-[11px] left-1/2 -translate-x-1/2 fill-blue-6"
                  }
                >
                  <path d="M5.25259 5.67752C5.65038 6.10749 6.34962 6.10749 6.74741 5.67752L12 0H0L5.25259 5.67752Z" />
                </svg>
              </div>
            </div>
          )}
        />
        <div className={"flex items-center justify-between mt-3"}>
          <Typography variant={"body4"} className={"text-gray-10"}>
            {1} day
          </Typography>
          <Typography variant={"body4"} className={"text-gray-10"}>
            {30} days
          </Typography>
        </div>
      </div>
    </div>
  );
};

export default FilterRangeSlider;
