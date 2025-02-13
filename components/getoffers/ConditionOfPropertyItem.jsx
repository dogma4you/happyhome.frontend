import Image from "next/image";
import Typography from "@/components/ui/typography";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";

const ConditionOfPropertyItem = ({
  image,
  title,
  description,
  onChange,
  value,
}) => {
  const radioOptions = new Array(10)
    .fill("")
    .map((_, index) => ({ value: index + 1, label: index + 1 }));
  return (
    <div
      className={
        "flex items-start xl:items-center gap-x-6 py-6 border-b border-b-gray-6 flex-col xl:flex-row"
      }
    >
      <div
        className={
          "size-[78px] md:size-[180px] md:min-w-[180px] rounded-[8px] bg-amber-500 relative overflow-hidden mb-3 xl:mb-0"
        }
      >
        <Image src={image} className={"image-cover"} alt={"happy home"} />
      </div>
      <div>
        <Typography variant={"h5"} mobileVariant={"subtitle3"}>
          {title}
        </Typography>
        <Typography variant={"body3"} mobileVariant={"body4"}>
          {description}
        </Typography>

        <RadioGroup
          defaultValue={0}
          className={"flex items-center mt-6 gap-x-10 flex-wrap md:flex-nowrap"}
          onValueChange={onChange}
          value={value}
        >
          {radioOptions.map(({ label, value }) => {
            return (
              <div
                className="flex items-center justify-center flex-col cursor-pointer"
                key={label}
              >
                <RadioGroupItem value={value} id={`${title}-${value}`} />
                <Label
                  htmlFor={`${title}-${value}`}
                  className={"leading-[42px] cursor-pointer"}
                >
                  {label}
                </Label>
              </div>
            );
          })}
          <div className="flex items-center justify-center flex-col border-l border-l-gray-7 px-6 cursor-pointer">
            <RadioGroupItem value={0} id={`${title}-${0}`} />
            <Label htmlFor={`${title}-${0}`} className={"leading-[42px]"}>
              N/A
            </Label>
          </div>
        </RadioGroup>
      </div>
    </div>
  );
};

export default ConditionOfPropertyItem;
