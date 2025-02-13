import React, { Fragment } from "react";
import Typography from "@/components/ui/typography";
import { Accordion } from "@/components/ui/accordion";
import FaqListItem from "@/components/faq/FaqListItem";
import { cn } from "@/lib/utils";

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

const FindHomeItemFaq = () => {
  return (
    <div className={"mt-12"}>
      <Typography variant={"subtitle1"}>FAQ</Typography>

      <div className={"mt-6"}>
        <Accordion type="single" collapsible>
          <FaqListItem title={"Who can use The Happy Home Initiative (HHI)?"}>
            <Typography variant={"body3"}>
              The Happy Home Initiative (HHI) is designed for:
            </Typography>

            <FAQListWrapper>
              <FAQListWrapperItem>
                Home Sellers - Streamline the selling process with a single home
                inspection and access to high-value offers.
              </FAQListWrapperItem>
              <FAQListWrapperItem>
                FSBOs - Benefit from risk-free sales options and a Pre-Qualified
                offer.
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
                    willing to renovate a home, and looking for a great deal on
                    a fixer upper.
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
            </FAQListWrapper>

            <Typography variant={"body3"} className={"mt-2"}>
              The Happy Home Initiative (HHI) is designed for:
            </Typography>
          </FaqListItem>
          <FaqListItem
            title={"Who can not be a user The Happy Home Initiative"}
          >
            <Typography variant={"body3"}>
              While buyers may use financing, our contracts do not include
              allowances for finance contingencies, meaning that an inability to
              secure financing may lead to a forfeiture of claims toward refund
              of deposit, including Earnest Money Deposit.
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
                Yes! 60% of paid Finders and Assignment Fees are refundable if
                the transaction does not close.
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
        </Accordion>
      </div>
    </div>
  );
};

export default FindHomeItemFaq;
