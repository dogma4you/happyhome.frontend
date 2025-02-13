import React from "react";
import Footer from "@/components/footer/Footer";
import Typography from "@/components/ui/typography";

const Page = () => {
  return (
    <>
      <div className={"container py-10"}>
        <Typography variant={"h4"}>Privacy Policy</Typography>
        <Typography variant={"subtitle3"}>
          <b>Effective Date:</b> November 2024
        </Typography>
        <hr className={"mt-2 mb-10 text-black dark:text-white"} />
        <div className={"flex flex-col gap-y-6"}>
          <div>
            <Typography variant={"subtitle1"}>1. Introduction</Typography>
            <Typography variant={"body3"}>
              The Happy Home Initiative, LLC (“HHI,” “we,” “us,” or “our”)
              values your privacy and is committed to safeguarding your personal
              information. This Privacy Policy explains what data we collect,
              how we use it, and your rights regarding your data when you use
              our website, services, and features on The HHI.com (the “Site”).
              By accessing or using the Site, you agree to the collection and
              use of information in accordance with this policy.
            </Typography>
          </div>

          <div>
            <Typography variant={"subtitle1"}>
              2. Information We Collect
            </Typography>
            <Typography variant={"subtitle3"} className={"mt-2"}>
              To provide and improve our services, HHI collects various types of
              information, including:
            </Typography>
            <ul
              className={
                "list-disc pl-10 marker:text-black dark:marker:text-white flex flex-col gap-y-2 mt-4"
              }
            >
              <li>
                <Typography variant={"body3"}>
                  <b>Personal Information:</b> Identifying details such as your
                  name, email address, phone number, and mailing address, which
                  are collected during account creation, transaction processing,
                  or communications with us.
                </Typography>
              </li>
              <li>
                <Typography variant={"body3"}>
                  <b>Property Information:</b> Details about properties listed,
                  including property address, features, and other relevant
                  information required to facilitate transactions on our
                  Contract Marketplace.
                </Typography>
              </li>
              <li>
                <Typography variant={"body3"}>
                  <b>Financial Information:</b> Limited financial information,
                  such as transaction histories and payment details, may be
                  collected for completing transactions and processing payments.
                </Typography>
              </li>
              <li>
                <Typography variant={"body3"}>
                  <b>Usage Data:</b> Non-identifiable information about how you
                  access and use the Site, including IP address, browser type,
                  pages visited, and other analytics data that help us improve
                  user experience.
                </Typography>
              </li>
              <li>
                <Typography variant={"body3"}>
                  <b>Communications:</b> Information from emails, messages, and
                  other communications between you and HHI.
                </Typography>
              </li>
            </ul>
          </div>
          <div>
            <Typography variant={"subtitle1"}>
              3. How We Use Your Information
            </Typography>
            <Typography variant={"subtitle3"} className={"mt-2"}>
              HHI collects and processes data for the following purposes:
            </Typography>
            <ul
              className={
                "list-disc pl-10 marker:text-black dark:marker:text-white flex flex-col gap-y-2 mt-4"
              }
            >
              <li>
                <Typography variant={"body3"}>
                  <b>Transaction Facilitation:</b> To enable property listings,
                  transactions, payments, and contract assignments on the Site.
                </Typography>
              </li>
              <li>
                <Typography variant={"body3"}>
                  <b>Account Management:</b> To manage user accounts, provide
                  customer support, and communicate important updates.
                </Typography>
              </li>
              <li>
                <Typography variant={"body3"}>
                  <b>Marketing and Analytics:</b> To improve our services,
                  conduct analytics, and, with your consent, send marketing
                  materials by text, phone and/or email. Users may opt-out of marketing communications at
                  any time (see Section 7 for details).
                </Typography>
              </li>
              <li>
                <Typography variant={"body3"}>
                  <b>Legal Compliance and Security:</b> To comply with legal
                  obligations, enforce our Terms of Service, prevent fraud, and
                  protect the security of our users and Site.
                </Typography>
              </li>
            </ul>
          </div>
          <div>
            <Typography variant={"subtitle1"}>
              4. Information Sharing and Disclosure
            </Typography>
            <Typography variant={"subtitle3"} className={"mt-2"}>
              HHI does not sell or rent your personal information to third
              parties. However, we may share your information in the following
              instances:
            </Typography>
            <ul
              className={
                "list-disc pl-10 marker:text-black dark:marker:text-white flex flex-col gap-y-2 mt-4"
              }
            >
              <li>
                <Typography variant={"body3"}>
                  <b>Service Providers:</b> With trusted service providers who
                  assist us in operating our Site, conducting transactions, and
                  providing customer support. These providers have access to
                  necessary data solely for performing their designated
                  functions.
                </Typography>
              </li>
              <li>
                <Typography variant={"body3"}>
                  <b>Legal Requirements:</b> If required by law, regulation, or
                  legal process, we may disclose information to governmental
                  authorities, law enforcement, or other third parties.
                </Typography>
              </li>
              <li>
                <Typography variant={"body3"}>
                  <b>Business Transfers:</b> If HHI is involved in a merger,
                  acquisition, or asset sale, your information may be
                  transferred as part of that transaction. You will be notified
                  via email and/or prominent notice on the Site in such an
                  event.
                </Typography>
              </li>
            </ul>
          </div>
          <div>
            <Typography variant={"subtitle1"}>5. Data Security</Typography>
            <Typography variant={"body3"}>
              HHI prioritizes data security and uses reasonable administrative,
              technical, and physical safeguards to protect your personal
              information against unauthorized access, disclosure, or misuse.
              Despite our efforts, no system is completely secure, and we cannot
              guarantee absolute security. We encourage users to choose strong
              passwords and take steps to protect their account information.
            </Typography>
          </div>
          <div>
            <Typography variant={"subtitle1"}>
              6. Your Rights and Choices
            </Typography>
            <Typography variant={"subtitle3"} className={"mt-2"}>
              Depending on your location, you may have rights under applicable
              data protection laws, including:
            </Typography>
            <ul
              className={
                "list-disc pl-10 marker:text-black dark:marker:text-white flex flex-col gap-y-2 mt-4"
              }
            >
              <li>
                <Typography variant={"body3"}>
                  <b>Access:</b> You may request access to the personal
                  information we hold about you.
                </Typography>
              </li>
              <li>
                <Typography variant={"body3"}>
                  <b>Correction:</b> You can request corrections to any
                  inaccurate or incomplete personal information.
                </Typography>
              </li>
              <li>
                <Typography variant={"body3"}>
                  <b>Deletion:</b> You may request deletion of your personal
                  information, subject to applicable legal requirements.
                </Typography>
              </li>
              <li>
                <Typography variant={"body3"}>
                  <b>Marketing Opt-Out:</b> You may opt out of receiving
                  marketing communications from HHI at any time by following the
                  unsubscribe instructions in our emails or contacting us at
                  info@thehhi.com.
                </Typography>
              </li>
              <li>
                <Typography variant={"body3"}>
                  <b>Data Portability:</b> You may have the right to receive
                  your personal data in a structured, commonly used, and
                  machine-readable format.
                </Typography>
              </li>
            </ul>
            <Typography variant={"subtitle3"} className={"mt-2"}>
              To exercise any of these rights, please contact us at
              info@thehhi.com. We will respond to requests within a reasonable
              timeframe and in accordance with applicable laws.
            </Typography>
          </div>
          <div>
            <Typography variant={"subtitle1"}>
              7. Cookies and Tracking Technologies
            </Typography>
            <Typography variant={"subtitle3"} className={"mt-2"}>
              The Site uses cookies and similar tracking technologies to enhance
              user experience, analyze site traffic, and understand user
              interaction. You may adjust your browser settings to refuse
              cookies; however, doing so may limit your access to certain
              features on the Site.
            </Typography>
            <ul
              className={
                "list-disc pl-10 marker:text-black dark:marker:text-white flex flex-col gap-y-2 mt-4"
              }
            >
              <li>
                <Typography variant={"body3"}>
                  <b>Essential Cookies:</b> Necessary for the operation of the
                  Site and cannot be turned off.
                </Typography>
              </li>
              <li>
                <Typography variant={"body3"}>
                  <b>Analytics Cookies:</b> Collect anonymous data on how users
                  interact with the Site, helping us improve functionality and
                  user experience.
                </Typography>
              </li>
              <li>
                <Typography variant={"body3"}>
                  <b>Marketing Cookies:</b> Track browsing habits to provide
                  relevant advertisements. These are only enabled with user
                  consent.
                </Typography>
              </li>
            </ul>
          </div>
          <div>
            <Typography variant={"subtitle1"}>
              8. Third-Party Links and Services
            </Typography>
            <Typography variant={"subtitle3"} className={"mt-2"}>
              The Site may contain links to third-party websites or services
              that are not owned or controlled by HHI. This Privacy Policy does
              not apply to those third-party sites, and we are not responsible
              for their content or privacy practices. We encourage users to read
              the privacy policies of any third-party sites they visit.
            </Typography>
          </div>
          <div>
            <Typography variant={"subtitle1"}>9. Children’s Privacy</Typography>
            <Typography variant={"subtitle3"} className={"mt-2"}>
              The Site is not intended for individuals under the age of 18. HHI
              does not knowingly collect personal information from children. If
              we become aware that we have inadvertently collected information
              from a child, we will take steps to delete that information
              promptly.
            </Typography>
          </div>
          <div>
            <Typography variant={"subtitle1"}>
              10. Changes to This Privacy Policy
            </Typography>
            <Typography variant={"subtitle3"} className={"mt-2"}>
              HHI may update this Privacy Policy from time to time to reflect
              changes in our practices, legal requirements, or other factors. We
              will post the updated Privacy Policy on the Site and indicate the
              effective date of the latest version. Your continued use of the
              Site following any changes constitutes your acceptance of the
              revised Privacy Policy.
            </Typography>
          </div>
          <div>
            <Typography variant={"subtitle1"}>11. Contact Us</Typography>
            <Typography variant={"subtitle3"} className={"mt-2"}>
              If you have any questions about this Privacy Policy or your
              personal information, please contact us at:
            </Typography>
            <Typography variant={"body3"}>
              <b>Email</b> info@thehhi.com
            </Typography>
            <Typography variant={"body3"}>
              <b>Mailing Address:</b> The Happy Home Initiative, LLC, ℅ J.C.
              Praley III, 7419 Baltimore Annapolis Blvd., Glen Burnie, MD 21061
            </Typography>
            <hr className={"mt-6 mb-2 text-black dark:text-white"} />
          </div>

          <Typography variant={"body3"}>
            This Privacy Policy explains how we handle your personal
            information, aiming to provide transparency and respect for your
            privacy. By using our Site, you agree to the terms outlined in this
            policy.
          </Typography>
        </div>
      </div>
      <Footer className={"bg-black"} />
    </>
  );
};

export default Page;
