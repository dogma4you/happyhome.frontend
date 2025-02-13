import Typography from "@/components/ui/typography";

const OurBenefits = ({ children, title }) => {
  return (
    <section className={"bg-[#090917]"}>
      <div className={"container py-6 md:py-20"}>
        <Typography
          variant={"h3"}
          mobileVariant={"h5"}
          className={"text-center mb-6 md:mb-10 text-gray-2 dark:text-gray-11"}
        >
          {title}
        </Typography>
        {children}
      </div>
    </section>
  );
};

export default OurBenefits;
