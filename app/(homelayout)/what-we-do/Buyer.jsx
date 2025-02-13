import WhatWeDoTitle from "@/components/what-we-do/WhatWeDoTitle";
import Roadmap from "@/components/what-we-do/Roadmap";
import Typography from "@/components/ui/typography";
import HomeFooter from "@/components/home/HomeFooter";
import * as React from "react";
import WhyItWorks from "@/components/what-we-do/WhyItWorks";
import BuyerWhatWeDoContent from "@/components/what-we-do/BuyerWhatWeDoContent";
import OurBenefits from "@/components/what-we-do/OurBenefits";
import Card from "@/components/ui/card";
import Icon from "@/components/ui/icon";
import whyItWorks from "@/public/assets/why-it-works-buyer.jpg";
import BuyerReadyToBuyButton from "@/components/what-we-do/BuyerReadyToBuyButton";

const roadmapBuyerList = [
  {
    title: "Create an account",
    icon: "add-people",
    description:
      "Using your desired credentials (example: investor, personal or work), create your Happy Home user account. This will give you access to your User Dashboard.",
  },
  {
    title: "Upload Pre-Approval/Proof of funds",
    icon: "upload",
    description:
      "At The Happy Home Initiative, we accept ‘Proof of Funds’ and/or ‘Pre-Approval Letters’ dated within the previous 30 days. In order to purchase contracts, these documents will need to be up-to-date.",
  },
  {
    title: "Search for properties",
    icon: "loupe",
    description:
      "Search by area, ARV, Repairs and more, to find the right property.",
  },
  {
    title: "Buy due-diligence packet",
    icon: "tile-success",
    description:
      "Happy Home has handled your marketing and due diligence efforts; unlock Home Inspection, Comparative Market Analysis c and Scope of Work to get a closer look before you buy.",
  },
  {
    title: "Buy Contract",
    icon: "contract",
    description: `Happy Home accepts wires to fund your Contract Purchase Account. When you’ve found the right property, click ‘Buy Now’ to initiate the contract ratification, escrow funding and title processes. <br/>
      Once the title company have guided you through these standard processes, you’ll close on your Happy Home!`,
  },
];

const buyerDescriptions = [
  "If you are a serious investor, looking to engage with real estate, instead of marketing, The HHI is the only resource of it’s kind. ",
  "We find the right home sellers, and properties, that are ready for value improvement through property renovation. This renovation can be simple, or extensive. And we provide both a Scope of Work and Third-Party Home Inspection to inform your repair estimation.",
  "Our Scopes of Work are built from experience, but you may find contractors to complete the work for less, or more. Regardless, we aim for fairness.",
  "We also take this approach with our Comparative Market Analysis, also included in our Due Diligence Packet.",
];

const buyerBenefitsList = [
  {
    icon: "home-contract",
    title: "Quick Contract Availability",
    description:
      "Gain access to contracts shortly after wire receipt, allowing for timely decision-making.",
  },
  {
    icon: "checklist",
    title: "Pre-Vetted Property List",
    description:
      "Access a curated list of properties with essential information, saving time and effort in the search process.",
  },
  {
    icon: "list",
    title: "Essential Property Information",
    description:
      "Receive detailed property information, including repair estimates, ARV, and more, enabling informed investment decisions.",
  },
];

const Buyer = () => {
  return (
    <>
      <WhatWeDoTitle
        iconName={"buyer"}
        title={"What we do for buyers"}
        description={
          "Any homebuyer, or investor who is looking for homes that need some TLC. Our contracts are often on homes that could use renovation, and our contract listings price reflects this. "
        }
      />

      <BuyerWhatWeDoContent />

      <Roadmap
        title={" How it works for buyers"}
        descripton={
          "We cater to a diverse range of buyers, from first-time homebuyers to seasoned investors. Here’s how our method works:"
        }
        roadmapList={roadmapBuyerList}
      />

      <WhyItWorks
        image={whyItWorks}
        title={"Why It Works"}
        subtitle={"Eliminate your marketing costs"}
        descriptions={buyerDescriptions}
      />

      <OurBenefits title={"Our benefits for buyers"}>
        <div
          className={
            "grid grid-cols-1 md:grid-cols-3 gap-y-4 md:gap-y-0 md:gap-x-5"
          }
        >
          {buyerBenefitsList.map(({ icon, title, description }) => {
            return (
              <Card
                className={"flex flex-col p-10 items-center !bg-white/[0.05]"}
                key={title}
              >
                <div
                  className={
                    "mb-6 inline-flex items-center justify-center size-[90px] bg-blue-6 rounded-full"
                  }
                >
                  <Icon name={icon} className={"text-4xl text-white"} />
                </div>
                <Typography
                  variant={"h5"}
                  className={"mb-3 text-white text-center normal-case"}
                >
                  {title}
                </Typography>
                <Typography
                  variant={"body2"}
                  className={"text-[#D3D4DB] text-center"}
                >
                  {description}
                </Typography>
              </Card>
            );
          })}
        </div>
      </OurBenefits>

      <HomeFooter>
        <div className={"container max-w-[846px] text-center"}>
          <Typography
            variant={"h3"}
            mobileVariant={"h5"}
            className={"text-center mb-[10px] text-gray-12 dark:text-white"}
          >
            READY TO BUY?
          </Typography>

          <Typography
            variant={"body1"}
            mobileVariant={"body3"}
            className={"text-center text-gray-12 mb-8"}
          >
            If you are a serious investor, looking to engage with real estate,
            instead of marketing, The HHI is the only resource of it’s kind.
          </Typography>

          <BuyerReadyToBuyButton />
        </div>
      </HomeFooter>
    </>
  );
};

export default Buyer;
