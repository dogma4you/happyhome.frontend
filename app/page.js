import TopSection from "@/components/home/TopSection/TopSection";
import HowItWorks from "@/components/home/HowItWorks";
import GetOffer from "@/components/home/GetOffer";
import GetSell from "@/components/home/GetSell";
import OurClients from "@/components/home/OurClients";
import OurPartners from "@/components/home/OurPartners";
import HomeFooter from "@/components/home/HomeFooter";
import Typography from "@/components/ui/typography";
import Header from "@/components/header/header";
import SubscribeForm from "@/components/home/SubscribeForm";

export default function Home() {
  return (
    <div className={"flex flex-col"}>
      <Header />
      <TopSection />
      <GetSell />
      <HowItWorks />
      <GetOffer />
      {/*<OurClients />*/}
      {/*<OurPartners />*/}
      <HomeFooter className={"pt-[30%]"}>
        <div className={"container"}>
          <Typography
            variant={"h3"}
            mobileVariant={"h5"}
            className={"text-center mb-[10px] text-gray-12 dark:text-white"}
          >
            Join the real estate revolution today!
          </Typography>

          <Typography
            variant={"body1"}
            mobileVariant={"body3"}
            className={"text-center text-gray-12 mb-6"}
          >
            Learn more to get started on selling your home, or buying one,
            today.
          </Typography>

          <div className={"flex justify-center"}>
            <SubscribeForm
              mode={"info"}
              containerClassName={"w-full max-w-[646px]"}
              buttonSize={"sm"}
              inputClassName={"py-4 rounded-[20px]"}
              buttonClassName={"top-[5px] right-2"}
            />
          </div>
        </div>
      </HomeFooter>
    </div>
  );
}
