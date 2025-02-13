import Typography from "@/components/ui/typography";
import Icon from "@/components/ui/icon";

const WhatWeDoTitle = ({ iconName, title, description }) => {
  return (
    <div className={"container mb-12"}>
      <div
        className={
          "w-[96px] md:w-[112px] h-[96px] md:h-[112px] flex items-center justify-center rounded-full bg-blue-1 mx-auto"
        }
      >
        <Icon
          name={iconName}
          className={"text-[48px] md:text-[64px] text-blue-6"}
        />
      </div>
      <Typography
        className={"text-center mt-3 mb-4 text-black dark:text-white"}
        variant={"h3"}
        mobileVariant={"h4"}
      >
        {title}
      </Typography>
      <Typography
        className={"text-center"}
        variant={"body1"}
        mobileVariant={"body2"}
      >
        {description}
      </Typography>
    </div>
  );
};

export default WhatWeDoTitle;
