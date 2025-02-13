import WhatWeDoTitle from "@/components/what-we-do/WhatWeDoTitle";
import Roadmap from "@/components/what-we-do/Roadmap";
import Typography from "@/components/ui/typography";
import HomeFooter from "@/components/home/HomeFooter";
import WhyItWorks from "@/components/what-we-do/WhyItWorks";
import SellerWhatWeDoContent from "@/components/what-we-do/SellerWhatWeDoContent";
import OurBenefits from "@/components/what-we-do/OurBenefits";
import Card from "@/components/ui/card";
import Icon from "@/components/ui/icon";
import whyItWorks from "@/public/assets/why-it-works-seller.jpg";
import SellerGetAnOfferButton from "@/components/what-we-do/SellerGetAnOfferButton";

const roadmapBuyerList = [
  {
    title: "Submit Property Information",
    icon: "add-people",
    description:
      "Provide basic information about your home, and rate the different features accordingly. Once you’ve uploaded photos of each room, and exterior, we’ll review all information for the best offer.",
  },
  {
    title: "Receive and Approve Offer",
    icon: "upload",
    description:
      "Within 24 hours of receiving your complete submission, we’ll send you a great offer. When you receive the offer, you may be able to adjust the offer (by up to 30%), by highlighting valuable features that have been overlooked otherwise.",
  },
  {
    title: "Schedule home Inspection",
    icon: "checklist",
    description:
      "After Offer Acceptance, and Contract Ratification, we will schedule your home inspection.",
  },
  {
    title: "Appraisal",
    icon: "loupe",
    description:
      "In certain cases, we may require an appraisal, and will schedule at a convenient time for you.",
  },
  {
    title: "Close on Property",
    icon: "tile-success",
    description:
      "Once the title company, inspection, and other necessary processes have been completed, it’s time to close! This is the last step in transferring your home.",
  },
  {
    title: "Receive Funds",
    icon: "contract",
    description:
      "At closing, you will receive any proceeds from your home sale. If you were notified of an offer increase, The Happy Home Initiative may even send additional funds after closing!",
  },
];

const buyerBenefitsList = [
  {
    icon: "not-bleach",
    title: "No Repairs or Cleaning required",
    description:
      "Happy Home will never ask for cleaning or repairs… we like your home As-Is!",
  },
  {
    icon: "hide",
    title: "No showings",
    description:
      "One Home Inspection replaces multiple showings from one or more interested buyers",
  },
  {
    icon: "analysis",
    title: "Home Inspection & Appraisal",
    description:
      "Single Home Inspection, and approximately one appraisal per financing buyer ",
  },
  {
    icon: "privacy-policy",
    title: "No public listings",
    description:
      "No public listings (only qualified buyers can see your property)",
  },
  {
    icon: "verify",
    title: "Quick closings",
    description:
      "We are, and we work with many cash buyers; our process can take as little as 14 days",
  },
  {
    icon: "evenue",
    title: "Profit Sharing",
    description:
      "Once our contract is executed, we begin the inspection period and processing. During this process, one of our qualified partners may offer more to settle the contract. This is great news for the seller since our profit sharing averages between $2,000 and $2,500 for every seller",
  },
];

const Seller = () => {
  return (
    <>
      <WhatWeDoTitle
        iconName={"seller"}
        title={"What we do for sellers"}
        description={
          "See why home sellers across the country are choosing our streamlined method."
        }
      />

      <SellerWhatWeDoContent />

      <Roadmap
        title={"How it works for sellers"}
        descripton={
          "Whether you are a homeowner looking to sell your property or a real estate agent representing a client, The HHI offers a seamless selling experience.The process involves no fees for sellers, and is legally binding. Here’s how our method works:"
        }
        roadmapList={roadmapBuyerList}
      />

      <WhyItWorks
        image={whyItWorks}
        title={"Why It Works"}
        descriptions={[
          "We set out to provide a solution for homeowners, and agents, who want to reach buyers outside of the traditional real estate sales process. While Realtors provide an amazing service, our method shifts fees from seller, to the final buyer. ",
        ]}
      />

      <OurBenefits title={"Our benefits for sellers"}>
        <div className={"grid grid-cols-1 md:grid-cols-2 gap-5"}>
          {buyerBenefitsList.map(({ icon, title, description }) => {
            return (
              <Card
                className={
                  "flex py-4 px-10 items-center gap-x-6 !bg-white/[0.05]"
                }
                key={title}
              >
                <div
                  className={
                    " inline-flex items-center justify-center min-w-[64px] size-[64px] bg-blue-6 rounded-full"
                  }
                >
                  <Icon name={icon} className={"text-3xl text-white"} />
                </div>
                <div>
                  <Typography
                    variant={"subtitle1"}
                    className={"mb-3 text-white"}
                  >
                    {title}
                  </Typography>
                  <Typography variant={"body3"} className={"text-[#D3D4DB]"}>
                    {description}
                  </Typography>
                </div>
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
            READY TO SELL?
          </Typography>

          <Typography
            variant={"body1"}
            mobileVariant={"body3"}
            className={"text-center text-gray-12 mb-6"}
          >
            Whether you are a homeowner looking to sell your property or a real
            estate agent representing a client, The HHI offers a seamless
            selling experience.
          </Typography>

          <SellerGetAnOfferButton />
        </div>
      </HomeFooter>
    </>
  );
};

export default Seller;
