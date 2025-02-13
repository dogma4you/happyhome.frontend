import Image from "next/image";
import faqImage from "@/public/assets/faqheader.jpg";
import Typography from "@/components/ui/typography";

const FAQHeader = () => {
  return (
    <div className={"relative"}>
      <div className={"container pt-[100px] pb-[275px] relative z-20"}>
        <Typography
          variant={"h3"}
          mobileVariant={"h4"}
          className={"text-center text-white mb-3"}
        >
          Frequently asked questions
        </Typography>
        <Typography
          variant={"body1"}
          className={"text-center text-white mb-[30px]"}
        >
          Have any questions? We are here to assist you.
        </Typography>
        {/*<FAQForm />*/}
      </div>
      <div
        className={"faq-gradient absolute z-10 w-full h-full top-0 left-0"}
      ></div>
      <Image
        src={faqImage}
        className={
          "w-full h-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 object-cover"
        }
        alt={"Happy Home FAQ"}
      />
    </div>
  );
};

export default FAQHeader;
