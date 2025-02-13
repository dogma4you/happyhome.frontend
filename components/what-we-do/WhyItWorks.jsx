import Typography from "@/components/ui/typography";
import Image from "next/image";

const WhyItWorks = ({ title, descriptions = [], image, subtitle }) => {
  return (
    <section
      className={
        "py-6 md:py-[120px] container flex justify-between items-center gap-x-[60px] flex-col md:flex-row gap-y-4 md:gap-y-0"
      }
    >
      <div className={"md:max-w-[550px]"}>
        <Typography
          variant={"h3"}
          mobileVariant={"h4"}
          className={"text-black dark:text-white"}
        >
          {title}
        </Typography>
        {subtitle && (
          <p className={"text-base md:text-xl italic text-gray-13 mt-2"}>
            Eliminate your marketing costs
          </p>
        )}

        <div className={"flex flex-col gap-y-3 mt-6"}>
          {descriptions.map((description) => {
            return (
              <Typography
                key={description}
                variant={"body1"}
                mobileVariant={"body3"}
                className={"text-gray-12"}
              >
                {description}
              </Typography>
            );
          })}
        </div>
      </div>

      {image && (
        <Image
          src={image}
          width={590}
          height={590}
          className={"w-full md:w-[590px]"}
          alt={"why it works"}
        />
      )}
    </section>
  );
};

export default WhyItWorks;
