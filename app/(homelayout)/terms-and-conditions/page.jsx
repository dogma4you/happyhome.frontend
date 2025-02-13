import React from "react";
import Footer from "@/components/footer/Footer";
import Typography from "@/components/ui/typography";

const Page = () => {
  return (
    <>
      <div className={"container py-10"}>
        <Typography variant={"h4"}>Terms and Conditions</Typography>
        <Typography variant={"subtitle3"}>
          <b>Effective Date:</b> November 2024
        </Typography>
        <hr className={"mt-2 mb-10 text-black dark:text-white"} />
        <div className={"flex flex-col gap-y-6"}>
          <div>
            <Typography variant={"subtitle1"}>
              1. Introduction and Acceptance of Terms
            </Typography>
            <Typography variant={"body3"}>
              Welcome to The Happy Home Initiative, LLC (“HHI,” “we,” “us,” or
              “our”). By accessing or using our website, services, or associated
              features on The HHI.com (collectively, the “Site”), you agree to
              comply with these Terms and Conditions (“Terms”) and our Privacy
              Policy. If you do not agree with these Terms, please refrain from
              using the Site. These Terms apply to all users, including buyers,
              sellers, and affiliates.
            </Typography>
          </div>

          <div>
            <Typography variant={"subtitle1"}>2. Eligibility</Typography>
            <Typography variant={"subtitle3"} className={"mt-2"}>
              The Contract Marketplace is available only to individuals who are
              at least 18 years old, have the legal capacity to enter into
              binding contracts, and meet all requirements to transact real
              estate in the United States. Buyers and sellers must be U.S.
              residents or entities legally able to engage in property
              transactions in the states where HHI operates. Use of our services
              in Arizona, Illinois, South Carolina, and Oklahoma is restricted
              due to state regulations on real estate wholesaling.
            </Typography>
          </div>
          <div>
            <Typography variant={"subtitle1"}>
              3. User Conduct and Prohibited Actions
            </Typography>
            <Typography variant={"subtitle3"} className={"mt-2"}>
              By using the Site, you agree not to:
            </Typography>
            <ul
              className={
                "list-disc pl-10 marker:text-black dark:marker:text-white flex flex-col gap-y-2 mt-4"
              }
            >
              <li>
                <Typography variant={"body3"}>
                  Provide false, inaccurate, or misleading information in your
                  profile, property listings, or transaction communications.
                </Typography>
              </li>
              <li>
                <Typography variant={"body3"}>
                  Share or distribute Site content, contracts, or listings
                  without permission, except with parties genuinely interested
                  in transactions for evaluation purposes.
                </Typography>
              </li>
              <li>
                <Typography variant={"body3"}>
                  Use the Site in ways that violate any applicable laws,
                  infringe the rights of others, or harm HHI’s reputation or
                  functionality.
                </Typography>
              </li>
              <li>
                <Typography variant={"body3"}>
                  Post HHI affiliate links in unprofessional forums or formats.
                  All affiliate links must align with our guidelines and uphold
                  HHI’s branding standards.
                </Typography>
              </li>
            </ul>
            <Typography variant={"subtitle3"} className={"mt-2"}>
              Violating these rules may result in the immediate suspension or
              termination of your account at our discretion.
            </Typography>
          </div>
          <div>
            <Typography variant={"subtitle1"}>
              4. Transactions, Fees, and Refund Policies
            </Typography>
            <Typography variant={"subtitle3"} className={"mt-2"}>
              Certain transactions on the Site may incur fees, including, but
              not limited to, assignment fees, marketing fees, Finder’s Fees,
              and Earnest Money Deposits (EMD). By using the Site, you agree to
              pay all applicable fees in a timely manner. Unless otherwise
              specified, refunds are available under the following conditions:
            </Typography>
            <ul
              className={
                "list-disc pl-10 marker:text-black dark:marker:text-white flex flex-col gap-y-2 mt-4"
              }
            >
              <li>
                <Typography variant={"body3"}>
                  <b>Finder and Assignment Fees:</b> Sixty percent (60%) of
                  these fees are refundable if a transaction does not close due
                  to reasons other than buyer default, subject to HHI’s review.
                  Refund requests must be submitted to info@thehhi.com within 14
                  days of the transaction cancellation.
                </Typography>
              </li>
              <li>
                <Typography variant={"body3"}>
                  <b>Earnest Money Deposits (EMD):</b> EMDs are generally
                  non-refundable in cases where the buyer defaults on the
                  transaction. If a seller defaults, the deposit may be
                  refundable as specified in the applicable Assignment Contract
                  or Real Estate Purchase Agreement.
                </Typography>
              </li>
              <li>
                <Typography variant={"body3"}>
                  <b>Processing and Other Fees:</b> Non-refundable unless
                  otherwise stated.
                </Typography>
              </li>
            </ul>
          </div>

          <div>
            <Typography variant={"subtitle1"}>
              5. Data Collection and Privacy
            </Typography>
            <Typography variant={"body3"} className={"mt-2"}>
              HHI collects and processes user data necessary to facilitate real
              estate transactions, including personal information, property
              details, and transaction records, in accordance with our Privacy
              Policy. We are committed to protecting your data and will not sell
              your information to third parties without explicit consent.
            </Typography>
            <Typography variant={"body3"} className={"mt-2"}>
              You consent to HHI’s use of anonymized data for internal
              analytics, marketing, or performance improvements. You may opt out
              of such data use by contacting us at info@thehhi.com.
            </Typography>
          </div>
          <div>
            <Typography variant={"subtitle1"}>
              6. Intellectual Property Rights
            </Typography>
            <Typography variant={"body3"} className={"mt-2"}>
              All content on the Site, including text, graphics, logos, images,
              and other materials, is the property of HHI and is protected by
              copyright, trademark, and other intellectual property laws. Users
              may not copy, distribute, modify, or otherwise use HHI’s materials
              without our prior written authorization. Unauthorized use of our
              intellectual property may result in legal action.
            </Typography>
          </div>
          <div>
            <Typography variant={"subtitle1"}>
              7. Platform Availability and Downtime
            </Typography>
            <Typography variant={"body3"} className={"mt-2"}>
              While we strive to maintain uninterrupted access to the Site, we
              cannot guarantee that it will always be available or error-free.
              HHI is not liable for any losses, damages, or inconveniences
              caused by Site downtime or technical issues, whether scheduled or
              unforeseen. Planned maintenance may be scheduled with notice
              provided where feasible, but HHI reserves the right to conduct
              emergency maintenance as needed without prior notice.
            </Typography>
          </div>
          <div>
            <Typography variant={"subtitle1"}>
              8. Account Suspension or Termination
            </Typography>
            <Typography variant={"body3"} className={"mt-2"}>
              HHI reserves the right to suspend or terminate user accounts at
              our sole discretion for violations of these Terms, misuse of Site
              features, or engagement in prohibited conduct. In cases of account
              termination, pending refunds or fees will be handled as per our
              refund policies and in accordance with the applicable contract
              agreements.
            </Typography>
            <Typography variant={"body3"} className={"mt-2"}>
              Users whose accounts are suspended or terminated may not access or
              attempt to access the Site without HHI’s prior written consent.
            </Typography>
          </div>

          <div>
            <Typography variant={"subtitle1"}>
              9. Limitation of Liability and Disclaimers
            </Typography>
            <Typography variant={"body3"} className={"mt-2"}>
              HHI disclaims liability for any issues or damages arising from the
              actions or services of third-party vendors, including inspectors,
              title companies, or financial service providers involved in
              transactions facilitated on the Site. All information regarding
              repair costs, estimated returns on investment, or other financial
              projections are provided as general estimates only and are not
              guarantees of future performance. Users are advised to conduct
              independent due diligence prior to engaging in any transaction.
            </Typography>
            <Typography variant={"body3"} className={"mt-2"}>
              Any disputes or claims against HHI will be resolved exclusively
              through mediation and arbitration, with all parties agreeing to
              confidentiality throughout the dispute resolution process. Users
              waive any rights to pursue civil litigation against HHI.
            </Typography>
          </div>

          <div>
            <Typography variant={"subtitle1"}>
              10. Geographic Limitations
            </Typography>
            <Typography variant={"body3"} className={"mt-2"}>
              HHI’s services are available in most U.S. states, with certain
              restrictions in Arizona, Illinois, South Carolina, and Oklahoma.
              Users in these states are responsible for ensuring their
              compliance with local laws if they choose to engage in property
              listings, purchases, or other Site services.
            </Typography>
          </div>
          <div>
            <Typography variant={"subtitle1"}>
              11. Amendments to Terms
            </Typography>
            <Typography variant={"body3"} className={"mt-2"}>
              HHI reserves the right to modify or update these Terms at any time
              without prior notice. Your continued use of the Site after updates
              constitutes your acceptance of the revised Terms. Significant
              changes will be announced via email or directly on the Site, and
              users may be required to acknowledge the changes to continue
              accessing certain services.
            </Typography>
          </div>

          <div>
            <Typography variant={"subtitle1"}>
              12. Marketing Communications
            </Typography>
            <Typography variant={"body3"} className={"mt-2"}>
              By using the Site, you consent to receive necessary transactional
              communications related to your use of HHI services. Marketing
              communications will only be sent to users who have opted in. You
              may unsubscribe from marketing communications at any time by
              following the instructions in the email or by contacting us at
              info@thehhi.com.
            </Typography>
          </div>

          <hr className={"my-2 text-black dark:text-white"} />

          <div>
            <Typography variant={"subtitle1"}>Contact Us:</Typography>
            <Typography variant={"body3"} className={"mt-2"}>
              If you have any questions regarding these Terms or require further
              assistance, please contact us at info@thehhi.com. We are committed
              to providing clear and transparent terms and welcome your
              feedback.
            </Typography>
          </div>
        </div>
      </div>
      <Footer className={"bg-black"} />
    </>
  );
};

export default Page;
