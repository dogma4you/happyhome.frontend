import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Icon from "@/components/ui/icon";
import BuyerBenefitsBanner from "@/components/what-we-do/BuyerBenefitsBanner";
import saveTime from "@/public/assets/save-time.jpeg";
import saveMoney from "@/public/assets/save-money.jpeg";

const saveTimeBannerList = [
  { text: "Shifting through on-market listings" },
  {
    text: "Visiting ‘wholesale’ properties that may, or may not be controlled by seller",
  },
  {
    text: "Working up ‘scopes-of-work’ in order to find the property is overvalued, or gone by the time you make the offer",
  },
  {
    text: "Designing and implementing emails, letters, postcards, bandit signs and texts, to find that one property",
  },
];

const saveMoneyBannerList = [
  { text: "Spent on letters, ads and marketing" },
  {
    text: "Lost due to lack of home inspection",
  },
  {
    text: "Never realized, because it’s better to be working on almost any property, than none at all",
  },
];

const BuyerWhatWeDoContent = () => {
  return (
    <section className={"mb-10"}>
      <Tabs
        defaultValue="buyer"
        className="flex flex-col gap-y-10 items-center container"
      >
        <TabsList className={"gap-x-0"}>
          <TabsTrigger
            className={
              "px-6 py-[14px] border-b border-b-transparent md:border-b-gray-6 text-gray-11 data-[state=active]:border-b-blue-6 bg-transparent font-medium  rounded-none data-[state=active]:bg-background data-[state=active]:text-blue-6 gap-x-4"
            }
            value="buyer"
          >
            <Icon name={"save-time"} className={"text-3xl"} />
            Save Time
          </TabsTrigger>
          <TabsTrigger
            className={
              "px-6 py-[14px] border-b border-b-transparent md:border-b-gray-6 text-gray-11 data-[state=active]:border-b-blue-6 bg-transparent font-medium  rounded-none data-[state=active]:bg-background data-[state=active]:text-blue-6 gap-x-4"
            }
            value="seller"
          >
            <Icon name={"save-money"} className={"text-3xl"} />
            Save Money
          </TabsTrigger>
        </TabsList>
        <TabsContent value="buyer">
          <BuyerBenefitsBanner
            title={"No More"}
            bannerImage={saveTime}
            benefitsList={saveTimeBannerList}
          />
        </TabsContent>
        <TabsContent value="seller">
          <BuyerBenefitsBanner
            title={"No More $$$"}
            bannerImage={saveMoney}
            benefitsList={saveMoneyBannerList}
          />
        </TabsContent>
      </Tabs>
    </section>
  );
};

export default BuyerWhatWeDoContent;
