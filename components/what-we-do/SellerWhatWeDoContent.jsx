import Image from "next/image";
import sellerBenefits from "@/public/assets/seller-benefits.jpeg";
import Typography from "@/components/ui/typography";

const sellerBenefitsList = [
  "Repairs and cleaning",
  "Endless showings, inspections, and appraisals",
  "Financial hurdles for distressed properties",
  "Dealing with unqualified and indecisive buyers",
  "High seller’s fees (4% to 6%)",
  "Exposing your home to the public eye",
];

const SellerWhatWeDoContent = () => {
  return (
    <section
      className={
        "container md:pt-12 pb-20 flex justify-between items-center md:gap-x-12 flex-col md:flex-row gap-y-6 md:gap-y-0"
      }
    >
      <div>
        <div
          className={"inline-block py-[10px] px-4 rounded-full bg-blue-1  mb-2"}
        >
          <Typography
            variant={"subtitle2"}
            mobileVariant={"subtitle3"}
            className={"text-blue-6 font-semibold normal-case"}
          >
            Homeowners & Real Estate Agents
          </Typography>
        </div>
        <Typography
          variant={"h5"}
          mobileVariant={"body1"}
          className={"mb-4 normal-case text-black dark:text-white"}
        >
          Are you tired of dealing with these issues?
        </Typography>
        <ul className={"flex flex-col gap-y-3 mb-10"}>
          {sellerBenefitsList.map((listItem, index) => {
            return (
              <li key={index}>
                <Typography
                  variant={"body1"}
                  mobileVariant={"body3"}
                  className={"font-normal text-gray-12"}
                >
                  {index + 1}. {listItem}
                </Typography>
              </li>
            );
          })}
        </ul>

        <div
          className={"inline-block py-[10px] px-4 rounded-full bg-blue-1 mb-2"}
        >
          <Typography
            variant={"subtitle2"}
            mobileVariant={"subtitle3"}
            className={"text-blue-6 font-semibold normal-case"}
          >
            Real Estate Agents
          </Typography>
        </div>
        <Typography
          variant={"h5"}
          mobileVariant={"body1"}
          className={"mt-2 text-black dark:text-white font-bold uppercase"}
        >
          Looking for specialized, pre-qualified buyers for investment-worthy
          properties?
        </Typography>
      </div>
      <div
        className={
          "md:h-[637px] w-full md:max-w-[580px] overflow-hidden relative pt-[90%] md:pt-0"
        }
      >
        <Image
          src={sellerBenefits}
          className={
            "w-full h-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 object-cover"
          }
          alt={"Seller benefits in Happy Home"}
        />
      </div>
    </section>
  );
};

export default SellerWhatWeDoContent;
