"use client";
import Image from "next/image";
import filterIcon from "@/public/assets/icons/filter.svg";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogTrigger,
} from "@/components/ui/dialog";
import Typography from "@/components/ui/typography";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";
import SelectField from "@/components/form/Select";
import * as React from "react";
import { Range } from "react-range";
import { formatCurrency } from "@/utils/helper";
import DatePicker from "react-datepicker";

const statusOptions = [
  {
    value: 0,
    title: "All",
  },
  {
    value: 2,
    title: "Locked",
  },
  {
    value: 1,
    title: "Unlocked",
  },
];

const CustomInput = React.forwardRef(({ value, onClick }, ref) => (
  <div
    type="button"
    onClick={onClick}
    ref={ref}
    className="input-field w-full flex items-center justify-start py-2 pr-4 gap-x-2"
  >
    <Icon name={"loupe"} />
    <span>{value || "Choose Date"}</span>
  </div>
));

const TableFilter = ({
  date,
  status,
  rangeValue,
  onChangeDate,
  onChangeStatus,
  onChangeRangeValue,
  onSubmit,
  isHaveSubmittedFilters,
  onClearAll,
}) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <div
          className={
            "relative size-[34px] flex items-center justify-center rounded-full bg-background border border-gray-6 cursor-pointer"
          }
        >
          {!!isHaveSubmittedFilters && (
            <div
              className={
                "absolute top-0 right-0 size-[10px] bg-error-10 border-2 border-white rounded-full"
              }
            ></div>
          )}

          <Image src={filterIcon} alt={"filter"} />
        </div>
      </DialogTrigger>
      <DialogContent className={"max-w-[368px] p-0 md:p-0 ring-0 outline-none"}>
        <div
          className={
            "px-6 pt-6 pb-3 flex items-center gap-x-[5px] border-b border-b-gray-6"
          }
        >
          <Image src={filterIcon} alt={"filter"} />
          <Typography variant={"subtitle3"}>Filter</Typography>
        </div>
        <div className={"p-6"}>
          <div className={"flex items-center justify-between"}>
            <Typography variant={"subtitle3"} className={"normal-case mb-2"}>
              Date
            </Typography>

            {date?.from && (
              <div
                className={"flex items-center gap-x-1"}
                onClick={() => onChangeDate("")}
              >
                <Icon
                  name={"plus"}
                  className={"rotate-45 text-gray-9 block text-sm"}
                />
                <span className={"uppercase text-xs text-gray-9"}>clear</span>
              </div>
            )}
          </div>
          <DatePicker
            wrapperClassName={"w-full"}
            popperClassName={"!z-10"}
            selected={date[0]}
            startDate={date[0]}
            endDate={date[1]}
            selectsRange
            className={"input-field w-full !py-2 !pr-4 rounded-sm"}
            onChange={onChangeDate}
            minDate={new Date("1900-01-01")}
            placeholderText={"Choose Date"}
            autoFocus={false}
            tabIndex={-1}
            customInput={<CustomInput />}
          />

          <div className={"flex items-center justify-between mt-6"}>
            <Typography variant={"subtitle3"} className={"normal-case mb-2"}>
              Status
            </Typography>

            {status && (
              <div
                className={"flex items-center gap-x-1"}
                onClick={() => onChangeStatus("")}
              >
                <Icon
                  name={"plus"}
                  className={"rotate-45 text-gray-9 block text-sm"}
                />
                <span className={"uppercase text-xs text-gray-9"}>clear</span>
              </div>
            )}
          </div>

          <SelectField
            placeholder={"Select status"}
            onChange={(value) => onChangeStatus(value)}
            value={status}
            options={statusOptions}
            triggerClassname={"md:px-4 md:py-3 text-sm rounded-sm"}
            optionItemClassname={"py-2 px-4 rounded-sm text-sm cursor-pointer"}
          />

          <div className={"flex items-center justify-between mt-6"}>
            <Typography variant={"subtitle3"} className={"normal-case mb-2"}>
              Price range
            </Typography>

            {status && (
              <div
                className={"flex items-center gap-x-1"}
                onClick={() => onChangeStatus("")}
              >
                <Icon
                  name={"plus"}
                  className={"rotate-45 text-gray-9 block text-sm"}
                />
                <span className={"uppercase text-xs text-gray-9"}>clear</span>
              </div>
            )}
          </div>

          <div className={"pt-[53px]"}>
            <Range
              values={rangeValue}
              step={10}
              min={0}
              max={1000000}
              onChange={(values) => onChangeRangeValue(values)}
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
                  <div className={"size-2 bg-[#1DB53F] rounded-full relative"}>
                    <div
                      className={
                        "absolute -top-[36px] left-1/2 -translate-x-1/2 py-1 px-2 bg-[#1DB53F] rounded-sm"
                      }
                    >
                      <Typography
                        variant={"body4"}
                        className={
                          "whitespace-nowrap text-xs font-bold leading-[18px]"
                        }
                      >
                        {formatCurrency(rangeValue[props.key])}
                      </Typography>
                    </div>
                    <svg
                      width="12"
                      height="6"
                      viewBox="0 0 12 6"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className={
                        "absolute -top-[11px] left-1/2 -translate-x-1/2"
                      }
                    >
                      <path
                        d="M5.25259 5.67752C5.65038 6.10749 6.34962 6.10749 6.74741 5.67752L12 0H0L5.25259 5.67752Z"
                        fill="#1DB53F"
                      />
                    </svg>
                  </div>
                </div>
              )}
            />
            <div className={"flex items-center justify-between mt-3"}>
              <Typography variant={"body4"} className={"text-gray-10"}>
                {formatCurrency(0)}
              </Typography>
              <Typography variant={"body4"} className={"text-gray-10"}>
                {formatCurrency(1000000)}
              </Typography>
            </div>
          </div>
        </div>
        <div
          className={"flex items-center justify-end border-t border-t-gray-6"}
        >
          <Button
            variant={"ghost"}
            className={"uppercase text-gray-7"}
            onClick={onClearAll}
          >
            Reset all
          </Button>
          <DialogClose>
            <Button
              variant={"ghost"}
              className={"uppercase"}
              onClick={onSubmit}
            >
              Apply
            </Button>
          </DialogClose>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default TableFilter;
