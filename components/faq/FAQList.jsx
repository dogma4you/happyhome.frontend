import { Fragment } from "react";
import { Accordion } from "@/components/ui/accordion";
import Typography from "@/components/ui/typography";
import FaqListItem from "@/components/faq/FaqListItem";
import { cn } from "@/lib/utils";
import Link from "next/link";

const FAQListWrapper = ({ children, className }) => {
  return (
    <ul
      className={cn(
        "list-disc pl-10 marker:text-black dark:marker:text-white",
        className,
      )}
    >
      {children}
    </ul>
  );
};

const FAQListWrapperItem = ({ children, className, isContentFragment }) => {
  const ContentComponent = isContentFragment ? Fragment : Typography;
  return (
    <li>
      <ContentComponent variant={"body3"} className={cn("mt-2", className)}>
        {children}
      </ContentComponent>
    </li>
  );
};

const FAQList = () => {
  return (
    <section className={"container py-6 md:py-20 bg-background"}>
      <Accordion type="single" collapsible>
        <FaqListItem title={"Who can use The Happy Home Initiative (HHI)?"}>
          <Typography variant={"body3"}>
            The Happy Home Initiative (HHI) is designed for:
          </Typography>

          <FAQListWrapper>
            <FAQListWrapperItem>
              Home Sellers - Streamline the selling process with a single home
              inspection and access to high-value offers.
              <FAQListWrapper>
                <FAQListWrapperItem>
                  FSBOs - Benefit from risk-free sales options and a
                  Pre-Qualified offer.
                </FAQListWrapperItem>
              </FAQListWrapper>
            </FAQListWrapperItem>

            <FAQListWrapperItem>
              Tired Landlords and Owners of Aging Listings - Convert unwanted
              properties into profitable, happy homes.
            </FAQListWrapperItem>
            <FAQListWrapperItem isContentFragment>
              <Typography variant={"body3"} className={"mt-2"}>
                Home Buyers
              </Typography>
              <FAQListWrapper>
                <FAQListWrapperItem>
                  Primary Residence Buyers - Present or Future homeowners
                  willing to renovate a home, and looking for a great deal on a
                  fixer upper.
                </FAQListWrapperItem>
                <FAQListWrapperItem>
                  Real Estate Investors - Utilize our unique contract
                  marketplace with thorough due diligence and custom listings.
                </FAQListWrapperItem>
                <FAQListWrapperItem>
                  Wholesalers - Leverage our service to display Inspected Home
                  Contracts to The Happy Home Community.
                </FAQListWrapperItem>
              </FAQListWrapper>
            </FAQListWrapperItem>

            <FAQListWrapperItem>
              HHI simplifies real estate transactions for all participants.
            </FAQListWrapperItem>
          </FAQListWrapper>
        </FaqListItem>
        <FaqListItem title={"Who can not be a user The Happy Home Initiative"}>
          <Typography variant={"body3"}>
            While buyers may use financing, our contracts do not include
            allowances for finance contingencies, meaning that an inability to
            secure financing may lead to a forfeiture of claims toward refund of
            deposit, including Earnest Money Deposit.
          </Typography>
        </FaqListItem>
        <FaqListItem
          title={"Is my Deposit with The Happy Home Initiative Refundable?"}
        >
          <Typography variant={"body3"}>
            Is my Deposit with The Happy Home Initiative Refundable?
          </Typography>

          <FAQListWrapper>
            <FAQListWrapperItem>
              Yes! 60% of paid Finders and Assignment Fees are refundable if the
              transaction does not close.
            </FAQListWrapperItem>
            <FAQListWrapperItem>
              Earnest Money Deposit is often non-refundable if Buyer does not
              perform to contract and agreements.
            </FAQListWrapperItem>
          </FAQListWrapper>
        </FaqListItem>

        <FaqListItem title={"Does HHI Buy properties?"}>
          <Typography variant={"body3"}>
            Yes, The HHI buys properties with these intentions
          </Typography>

          <FAQListWrapper>
            <FAQListWrapperItem>
              Sell contracts to qualified buyers
            </FAQListWrapperItem>
            <FAQListWrapperItem>Renovate and sell</FAQListWrapperItem>
            <FAQListWrapperItem>Renovate and rent</FAQListWrapperItem>
          </FAQListWrapper>
        </FaqListItem>

        <FaqListItem title={"Does HHI Sell properties?"}>
          <Typography variant={"body3"}>
            No, The Happy Home Initiative is a home buyer and lists available
            contracts for purchase. Buyers of home contracts have every right
            and duty that is outlined, usually in Real Estate Purchase
            Agreements and Assignment Contracts.
          </Typography>
        </FaqListItem>

        <FaqListItem title={"Is The HHI available nationwide?"}>
          <Typography variant={"body3"}>
            Yes, The HHI operates across the United States, providing services
            to sellers and buyers nationwide. Certain restrictions may apply in
            your state. Please email us for more information.
          </Typography>
        </FaqListItem>

        <FaqListItem title={"How can I contact The HHI for more information?"}>
          <Typography variant={"body3"}>
            For additional information or personalized assistance, please
            contact our support team{" "}
            <a href={"mailto::info@thehhi.com"}>info@thehhi.com</a>
          </Typography>
        </FaqListItem>

        <FaqListItem title={"How does The HHI work for sellers?"}>
          <Typography variant={"body3"}>
            The Happy Home Initiative (HHI) simplifies the selling process for
            home sellers through the following steps:
          </Typography>

          <FAQListWrapper>
            <FAQListWrapperItem>
              <Link href={"/getoffer"} className={"underline"}>
                Easy
              </Link>{" "}
              - Sellers provide information about their home using a simple
              3-part questionnaire and can upload pictures of their property.
            </FAQListWrapperItem>
            <FAQListWrapperItem>
              Valuation and Offer - Based on the inspection and provided
              information, HHI presents a high-value offer.
            </FAQListWrapperItem>
            <FAQListWrapperItem>
              Single Comprehensive Inspection - HHI arranges a single, thorough
              home inspection, avoiding multiple showings and ensuring accurate
              property assessment. This inspection is at no cost to Seller or
              Buyer.
            </FAQListWrapperItem>
            <FAQListWrapperItem>
              Inspection Processing - During this period, we analyze best
              disposition options for this property, determine likely
              flip/rental terms and lengths. The HHI also makes the contract
              available to our Qualified partners for a higher amount.
            </FAQListWrapperItem>
            <FAQListWrapperItem>
              Profit Sharing - If the home value increases, HHI shares profits
              with the seller when investors purchase the home.
            </FAQListWrapperItem>
            <FAQListWrapperItem>
              Easy Process - The entire process is designed to be quick,
              transparent, and hassle-free for the seller.
            </FAQListWrapperItem>
          </FAQListWrapper>

          <Typography variant={"body3"}>
            This streamlined approach ensures sellers can quickly and easily
            convert their properties into happy homes.
          </Typography>
        </FaqListItem>

        <FaqListItem
          title={"What are the benefits of using The HHI for sellers?"}
        >
          <Typography variant={"body3"}>
            The Happy Home Initiative (HHI) offers several benefits for sellers:
          </Typography>

          <FAQListWrapper>
            <FAQListWrapperItem>
              Easy Offer Request - Our Get Offer System is designed to be the
              fastest way for sellers to get a Real Offer.
            </FAQListWrapperItem>
            <FAQListWrapperItem>
              Fast and Real Offers - Most Purchase Agreements are signed within
              24 hours!
            </FAQListWrapperItem>
            <FAQListWrapperItem>
              Efficiency - Streamlined process with a single home inspection and
              no need for multiple showings.
            </FAQListWrapperItem>
            <FAQListWrapperItem>
              High-Value Offers - Access to competitive offers based on thorough
              inspections and market analysis.
            </FAQListWrapperItem>
            <FAQListWrapperItem>
              Profit Sharing - Opportunity to share in profits when the home is
              sold to investors.
            </FAQListWrapperItem>
            <FAQListWrapperItem>
              Ease of Use -Simplified, transparent transaction process designed
              to minimize stress and maximize convenience.
            </FAQListWrapperItem>
            <FAQListWrapperItem>
              Quick Turnaround - Faster sales process compared to traditional
              methods, reducing time on the market.
            </FAQListWrapperItem>
            <FAQListWrapperItem>
              See why The HHI is America’s favorite sales solution for
              homeowners{" "}
              <Link href={"/what-we-do"} className={"underline"}>
                Get Offer Now
              </Link>
            </FAQListWrapperItem>
          </FAQListWrapper>
        </FaqListItem>

        <FaqListItem title={"How does The HHI work for buyers?"}>
          <Typography variant={"body3"}>
            The Happy Home Initiative (HHI) provides a straightforward process
            for buyers:
          </Typography>

          <FAQListWrapper>
            <FAQListWrapperItem>
              Access the Listings - Buyers can explore a unique [contract
              listing marketplace (link)] curated by HHI, to find a property
              that may work for you. You can consider location, estimated profit
              and renovation costs
            </FAQListWrapperItem>

            <FAQListWrapperItem isContentFragment>
              Unlock and Review Due Diligence Documents:
              <FaqListItem
                title={"How does The HHI work for buyers?"}
                className={"list-numeric"}
              >
                <FAQListWrapper>
                  <FAQListWrapperItem>
                    Third-Party Independent Inspections - Homes listed on HHI
                    undergo thorough third-party inspections, ensuring
                    transparency and quality.
                  </FAQListWrapperItem>
                  <FAQListWrapperItem>
                    Scope-of-Work - Detailed estimate of likely repairs and
                    budget, formulated using reliable local and historic data.
                  </FAQListWrapperItem>
                  <FAQListWrapperItem>
                    Real Estate Purchase Agreement - Review the purchase
                    agreement BEFORE buying
                  </FAQListWrapperItem>
                  <FAQListWrapperItem>
                    Buyer Assignment Contract - Review any additional
                    considerations for this listing
                  </FAQListWrapperItem>
                </FAQListWrapper>
              </FaqListItem>
            </FAQListWrapperItem>

            <FAQListWrapperItem>
              Click ‘Buy Now’ - Reserve this property and access Wire
              Instructions.
            </FAQListWrapperItem>
            <FAQListWrapperItem>
              Review and Ratify Assignment Contract - Once the Deposit is
              received, we will send you the Assignment Contract.
            </FAQListWrapperItem>
            <FAQListWrapperItem>
              Title and Transaction Processing - Your Earnest Money Deposit will
              be transmitted to the processing title company, and they will
              prepare title work accordingly.
            </FAQListWrapperItem>
            <FAQListWrapperItem>
              Closing - most closings take place between 7 and 15 business days
              from contract ratification.
            </FAQListWrapperItem>
          </FAQListWrapper>
        </FaqListItem>

        <FaqListItem
          title={"What are the benefits of using The HHI for buyers?"}
        >
          <FAQListWrapper>
            <FAQListWrapperItem>
              Buyers using The Happy Home Initiative (HHI) enjoy the following
              benefits:
            </FAQListWrapperItem>
            <FAQListWrapperItem>
              Quality Assurance - Homes listed on HHI undergo rigorous
              third-party inspections, ensuring buyers invest in properties of
              high quality and value.
            </FAQListWrapperItem>
            <FAQListWrapperItem>
              Transparent Information - Contract property listings provide
              detailed information and visuals for each listing, aiding informed
              decision-making.
            </FAQListWrapperItem>
            <FAQListWrapperItem>
              Efficiency: Streamlined process with comprehensive support.
            </FAQListWrapperItem>
            <FAQListWrapperItem>
              Pre-Vetted Properties: Assurance of quality through due diligence.
            </FAQListWrapperItem>
            <FAQListWrapperItem>
              Off-Market Listings: Tailored to meet investment criteria.
            </FAQListWrapperItem>
            <FAQListWrapperItem>
              Unique Opportunities - Access to a curated contract listing
              marketplace with diverse investment opportunities.
            </FAQListWrapperItem>
            <FAQListWrapperItem>
              Streamlined Process - HHI facilitates a straightforward purchasing
              process, supported by comprehensive resources and guidance.
            </FAQListWrapperItem>
            <FAQListWrapperItem>
              Community Impact - Investing through HHI contributes to community
              development by transforming properties into desirable,
              well-maintained homes.
            </FAQListWrapperItem>
            <FAQListWrapperItem>
              By choosing HHI, buyers gain confidence in their real estate
              investments, benefiting from transparency, quality assurance, and
              a streamlined transaction experience.
            </FAQListWrapperItem>
          </FAQListWrapper>
        </FaqListItem>

        <FaqListItem
          title={
            "What documents do buyers need to provide to participate in the exchange?"
          }
        >
          <FAQListWrapper>
            <FAQListWrapperItem>
              To participate in buying contracts through The Happy Home
              Initiative (HHI)’s exchange, buyers are required to have the
              following documents:
            </FAQListWrapperItem>
            <FAQListWrapperItem>
              Verified Proof of Funds - Documentation confirming the buyer’s
              financial capability to complete the transaction. This could
              include recent bank statements or a letter from a financial
              institution verifying the availability of funds.
            </FAQListWrapperItem>
            <FAQListWrapperItem>
              Pre-Approvals - Pre-approval documents from a lender indicating
              the buyer’s eligibility for financing. These documents are
              typically valid for 30 days from the date of issue. Please note,
              that there is no contingency for financing approval, meaning that
              the Buyer may not receive Earnest Money Deposit refund upon
              contract default.
            </FAQListWrapperItem>
            <FAQListWrapperItem>
              These requirements ensure that buyers are prepared to engage in
              transactions effectively within HHI’s exchange platform,
              maintaining transparency and efficiency throughout the buying
              process.
            </FAQListWrapperItem>
          </FAQListWrapper>
        </FaqListItem>

        <FaqListItem
          title={
            "How does The HHI ensure the quality of listings in the exchange?"
          }
        >
          <FAQListWrapper>
            <FAQListWrapperItem>
              At The Happy Home Initiative (HHI), ensuring the quality of
              listings in our exchange is paramount. We achieve this through:
            </FAQListWrapperItem>
            <FAQListWrapperItem>
              Tailored Solutions - We offer customized solutions that cater to
              the diverse needs of home sellers and contract buyers, ensuring
              each listing meets our high standards of quality and relevance.
            </FAQListWrapperItem>
            <FAQListWrapperItem>
              Strategic Partnerships - By fostering strategic partnerships with
              real estate agents and investors, we enhance the visibility and
              attractiveness of our listings. This collaborative approach helps
              in sourcing high-quality properties for our Contract Marketplace.
            </FAQListWrapperItem>
            <FAQListWrapperItem>
              Efficient Processes - Our streamlined processes, including a
              single-visit home inspection, simplify transactions and improve
              efficiency. This approach minimizes disruptions and accelerates
              the listing process for our clients.
            </FAQListWrapperItem>
            <FAQListWrapperItem>
              Professional Oversight - A dedicated operations team oversees all
              listings, maintaining rigorous quality control and compliance with
              regulatory standards across different states.
            </FAQListWrapperItem>
            <FAQListWrapperItem>
              Market Insights - We leverage comprehensive market analysis to
              anticipate trends and adapt our strategies accordingly, ensuring
              we continue to offer relevant and competitive solutions in the
              real estate investment industry.
            </FAQListWrapperItem>
          </FAQListWrapper>
        </FaqListItem>

        <FaqListItem title={"What fees are involved in using The HHI?"}>
          <Typography variant={"body3"}>
            At The Happy Home Initiative (THHI), our process ensures
            transparency and clarity regarding fees:
          </Typography>

          <Typography variant={"body3"}>
            Real Estate Agents and Homeowners:
          </Typography>

          <FAQListWrapper>
            <FAQListWrapperItem>
              No Fees - There are no fees for homeowners or real estate agents
              when receiving an offer. The process involves uploading pictures
              of each room and exterior features to facilitate the offer
              process.
            </FAQListWrapperItem>
          </FAQListWrapper>

          <Typography variant={"body3"}>Wholesalers:</Typography>

          <FAQListWrapper>
            <FAQListWrapperItem>
              Marketing Fee - Wholesalers agree to a marketing fee of $5000.
              This fee covers the marketing of their contract on our platform,
              and is collected upon contract transfer.
            </FAQListWrapperItem>

            <FAQListWrapperItem>
              Other Fees: Additionally, there may be assignment and finder’s
              fees collected by HHI on behalf of the wholesaler from the
              contract buyer. These fees are deducted from the aggregate
              collected fees, and the wholesale agreement is honored.
            </FAQListWrapperItem>
          </FAQListWrapper>

          <Typography variant={"body3"}>Buyers:</Typography>

          <FAQListWrapper>
            <FAQListWrapperItem>
              Assignment Fee - This fee covers administrative costs and is
              usually due upon contract purchase
            </FAQListWrapperItem>

            <FAQListWrapperItem>
              Finder’s Fee - This fee is often dictated by market conditions and
              is usually collected at closing.
            </FAQListWrapperItem>

            <FAQListWrapperItem>
              Earnest Money Deposit - This Deposit is to ensure the Seller has
              Recompense in the case of Buyer Non-Performance.
            </FAQListWrapperItem>
          </FAQListWrapper>
        </FaqListItem>
        <FaqListItem title={"Is The HHI available nationwide?"}>
          <FAQListWrapper>
            <FAQListWrapperItem>
              In 46 states, individuals can legally participate in wholesaling
              real estate contracts.
            </FAQListWrapperItem>
            <FAQListWrapperItem>
              Real estate licensing is mandatory for regular real estate
              contract sales in Oklahoma (OK), Illinois (IL), Arizona (AZ), and
              South Carolina (SC).
            </FAQListWrapperItem>
            <FAQListWrapperItem>
              THHI operates across the country while adhering to local
              regulations, ensuring a legally compliant process for all
              transactions.
            </FAQListWrapperItem>
          </FAQListWrapper>
        </FaqListItem>
      </Accordion>
    </section>
  );
};

export default FAQList;
