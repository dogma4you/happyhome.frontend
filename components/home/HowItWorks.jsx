import Typography from "@/components/ui/typography";
import Image from "next/image";
import SubscribeForm from "@/components/home/SubscribeForm";

const HowItWorks = () => {
  return (
    <section className={"py-6 md:py-[48px] bg-[#0B0C0D]"} id="how-it-works">
      <div
        className={
          "container flex justify-between items-center md:gap-x-5 flex-col xl:flex-row gap-y-4 md:gap-y-0"
        }
      >
        <div className={"max-w-[590px]"}>
          <Typography variant={"h3"} className={"text-sm text-orange-6"}>
            Learn how to work with The Happy Home Initiative
          </Typography>
          <Typography
            variant={"h4"}
            mobileVariant={"h4"}
            className={"text-white"}
          >
            Unlock Expert Secrets of the #1 Alternative Real Estate Platform
          </Typography>
          <Typography
            variant={"body1"}
            mobileVariant={"body3"}
            className={"mt-6 text-white"}
          >
            See how Real Estate Buyers have reduced their monthly Marketing and
            Prospecting Budget
          </Typography>

          <Typography
            variant={"body1"}
            mobileVariant={"body3"}
            className={"mt-2 text-md md:text-xl text-white"}
          >
            from{" "}
            <span
              className={
                "text-[#D93D42] inline-block text-[32px] leading-[48px]"
              }
            >
              $15,000
            </span>{" "}
            to less than{" "}
            <span
              className={
                "text-[#1DB53F] inline-block text-[32px] leading-[48px]"
              }
            >
              $1,000
            </span>
          </Typography>
          <Typography variant={"body1"} className={"mt-6 text-white"}>
            Enter your email, and we’ll send you this Powerful free guide
          </Typography>

          <SubscribeForm containerClassName={"mt-3 max-w-[470px]"} />
        </div>

        <Image
          src={"/assets/guide.png"}
          width={534}
          height={548}
          alt={"How it works happy home"}
          className={"xl:mt-0 mt-6"}
        />
      </div>
    </section>
  );
};

export default HowItWorks;
