import FAQHeader from "@/components/faq/FAQHeader";
import FAQList from "@/components/faq/FAQList";
import Footer from "@/components/footer/Footer";
import Typography from "@/components/ui/typography";

export default function FAQPage() {
  return (
    <>
      <FAQHeader />
      <FAQList />
      <div className={"container mb-10"}>
        <div
          className={
            "p-4 md:p-10 bg-blue-6 rounded-[24px] flex justify-between items-start md:items-center flex-col md:flex-row  "
          }
        >
          <div>
            <Typography variant={"body3"} className={"text-white"}>
              Can’t find the answer you are looking for? Please chat to our
              team!
            </Typography>
          </div>
          <div>
            <Typography
              variant={"subtitle2"}
              className={" normal-case text-white text-right"}
            >
              info@thehhi.com
            </Typography>
          </div>
        </div>
      </div>
      <Footer className={"bg-black"} />
    </>
  );
}
