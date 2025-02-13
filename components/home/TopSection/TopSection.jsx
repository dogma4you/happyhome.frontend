import Image from "next/image";
import TopSectionImage from "@/public/assets/top-section.jpg";
import Typography from "@/components/ui/typography";
import TopSectionOptions from "@/components/home/TopSection/TopSectionOptions";

const TopSection = () => {
  return (
    <section
      className={
        "pt-[78px] pb-[102px] md:pb-[116px] md:h-[924px] main-section-gradient relative overflow-hidden"
      }
    >
      <Image
        fill
        src={TopSectionImage}
        className={"absolute top-0 left-0 -z-10 object-cover w-full h-full"}
        alt={"FROM IDEA TO SALE"}
        priority
      />
      <div className={"container"}>
        <Typography
          variant={"h5"}
          className={"text-orange-6 normal-case"}
          mobileVariant={"subtitle1"}
        >
          Ready to Sell?
        </Typography>
        <Typography
          variant={"h1"}
          className={
            "text-white uppercase text-[40px] md:text-[80px] font-[800] leading-[50px] md:leading-[100px]"
          }
        >
          From Idea <br /> to Sale
          <span className={"block text-orange-6"}>in 24 hours</span>
        </Typography>

        <TopSectionOptions />
      </div>
    </section>
  );
};

export default TopSection;
