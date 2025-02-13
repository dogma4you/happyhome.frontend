"use client";
import Typography from "@/components/ui/typography";
import { formatCurrency, formatDate } from "@/utils/helper";
import Card from "@/components/ui/card";
import { BASE_URL } from "@/lib/axios";
import DashboardReviewOfferButton from "@/components/dashboard/DashboardReviewOfferButton";
import { useSession } from "@/providers/SessionProvider";
import useGetAcceptOffer from "@/store/useGetAcceptOffer";
import { cn } from "@/lib/utils";
import emptyImage from "@/public/assets/empty.jpg";
import Image from "next/image";

const DashboardOfferItem = ({ offer, className }) => {
  const {
    id,
    price,
    images,
    created_at,
    status,
    address,
    estimated_lower_price,
    estimated_higher_price,
    estimated_date,
  } = offer;

  const { user } = useSession();
  const { setAcceptOfferInfo } = useGetAcceptOffer();

  if (!offer) return null;
  const isInProcess = status === 1 || status === 4;

  const handleReviewOffer = () => {
    setAcceptOfferInfo({
      offerId: id,
      address: address.formatted_address,
      image: `${BASE_URL}/files/${images[0]}?token=${user.accessToken}`,
      estimated_lower_price,
      estimated_higher_price,
      estimated_date,
      showAcceptOffer: true,
    });
  };

  return (
    <Card className={cn("p-3 flex gap-x-3", className)}>
      <div
        className={
          "size-[120px] min-w-[120px] md:size-[200px] md:min-w-[200px] relative rounded-[12px] overflow-hidden"
        }
      >
        {images[0] ? (
          <img
            src={`${BASE_URL}/files/${images[0]}?token=${user.accessToken}`}
            alt={"happy home offer"}
            className={"image-cover"}
          />
        ) : (
          <Image
            src={emptyImage}
            className={"image-cover"}
            width={120}
            height={120}
            alt={"happy home offer"}
          />
        )}
      </div>

      <div className={"flex flex-col justify-between md:py-4 py-0"}>
        <div className={"flex justify-between items-start"}>
          {isInProcess ? (
            <div>
              <span className={"text-gray-11 text-xs font-semibold uppercase"}>
                Address
              </span>
              <Typography
                variant={"subtitle1"}
                className={"text-gray-12 mt-2 md:mt-0"}
              >
                {address.formatted_address}
              </Typography>
            </div>
          ) : (
            <div>
              <span className={"text-gray-11 text-xs font-semibold uppercase"}>
                Price
              </span>
              <Typography variant={"h5"} className={"text-[#3EAF3F]"}>
                {formatCurrency(price)}
              </Typography>
            </div>
          )}

          <div
            className={
              "py-[2px] px-3 bg-error-10/10 rounded-full uppercase absolute top-4 md:top-8 right-6"
            }
          >
            <Typography
              variant={"body4"}
              className={"text-error-10 whitespace-nowrap"}
            >
              {isInProcess ? "in process" : formatDate(new Date(created_at))}
            </Typography>
          </div>
        </div>

        <DashboardReviewOfferButton
          status={status}
          price={price}
          estimatedHigherPrice={estimated_higher_price}
          estimatedLowerPrice={estimated_lower_price}
          onClick={handleReviewOffer}
          className={"mt-3"}
        />

        {/*<p className={"text-xs leading-[18px] text-gray-11"}>*/}
        {/*    We want to give you more than this… please describe new, improved,*/}
        {/*    or attractive features of your home, and increase your offer*/}
        {/*    accordingly.*/}
        {/*</p>*/}
        {/*<div className={"flex items-center gap-x-3 mt-7"}>*/}
        {/*    <Button>Accept</Button>*/}
        {/*    <Button*/}
        {/*        variant={"outlined"}*/}
        {/*        className={*/}
        {/*            "border-blue-6 text-blue-6 hover:border-blue-7 hover:text-blue-7"*/}
        {/*        }*/}
        {/*    >*/}
        {/*        Adjust*/}
        {/*    </Button>*/}
        {/*    <Button*/}
        {/*        variant={"ghost"}*/}
        {/*        className={"text-error-10 hover:text-error-11"}*/}
        {/*    >*/}
        {/*        Reject*/}
        {/*    </Button>*/}
        {/*</div>*/}
      </div>
    </Card>
  );
};

export default DashboardOfferItem;
