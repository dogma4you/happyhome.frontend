import React from "react";
import ListingItemInfo from "@/components/find-home/listingItem/ListingItemInfo";
import ListingItemContractInfo from "@/components/find-home/listingItem/ListingItemContractInfo";
import ListingItemAmount from "@/components/find-home/listingItem/ListingItemAmount";
import { cn } from "@/lib/utils";
import Typography from "@/components/ui/typography";
import { formatDate, getAddressValue, getAreasData } from "@/utils/helper";
import Aggrements from "@/components/find-home/Aggrements";
import { BASE_URL } from "@/lib/axios";
import ListingItemUnlockNow from "@/components/find-home/listingItem/ListingItemUnlockNow";
import { useSession } from "next-auth/react";
import Cookies from "js-cookie";
import FavoriteIcon from "@/components/find-home/listingItem/FavoriteIcon";
import { useRouter } from "next/navigation";

const ListingItem = ({ contract, mutate }) => {
  const router = useRouter();
  const { data: session } = useSession();
  const {
    price = 0,
    images,
    totalAmount = 0,
    unlocked,
    estAvr = 0,
    estNetProfit = 0,
    estRentMo = 0,
    estRepairCost = 0,
    asignmentFee = 0,
    buyersFee = 0,
    earnestMoneyDep = 0,
    address,
    asignmentContract,
    realEstatePurchseAgreement,
    competitiveMarketAnalisys,
    scopeOfWork,
    expire_at,
    saved,
    id,
    areas,
  } = contract;

  const addressValue = getAddressValue(address, unlocked);

  const token = session?.user?.accessToken || Cookies.get("accessToken");

  const areasData = getAreasData(areas);

  const handleOpenContractPage = () => {
    if (unlocked) {
      router.push(`/find-home/${id}`);
    }
  };

  return (
    <div>
      <div
        className={cn(
          "py-6 border-b border-gray-6",
          unlocked && "hover:bg-gray-2 cursor-pointer",
        )}
        onClick={handleOpenContractPage}
      >
        <div
          className={
            "flex items-start md:items-center justify-between gap-x-2 "
          }
        >
          <div
            className={
              "md:size-[242px] md:min-w-[242px] size-[138px] min-w-[138px] relative rounded-md overflow-hidden"
            }
          >
            <div className={cn("relative size-[242px] min-w-[242px]")}>
              <FavoriteIcon isSelected={saved} id={id} mutate={mutate} />
              <img
                src={`${BASE_URL}/files/${images[0]}?token=${token}`}
                className={"image-cover"}
                alt={"user account"}
              />
            </div>
          </div>

          <div
            className={
              "w-full grid grid-cols-1 md:grid-cols-2 xl:flex md:gap-x-2 gap-y-4 justify-around"
            }
          >
            <ListingItemInfo
              status={"active"}
              title={addressValue}
              homeSize={`${areasData.square_feet.toLocaleString()} Sq Ft`}
              bedrooms={areasData.bedrooms}
              bathrooms={areasData.bathrooms}
              locked={!unlocked}
            />

            <ListingItemContractInfo
              contractPrice={price}
              arv={estAvr}
              netProfit={estNetProfit}
              rentPrice={estRentMo}
              repairCosts={estRepairCost}
              assigmentFee={asignmentFee}
            />
          </div>

          <div className={"hidden xl:block"}>
            <div className={"items-center justify-end hidden xl:flex"}>
              <Typography variant={"body4"} className={" text-gray-11"}>
                Listing End Date:
              </Typography>
              <Typography variant={"body4"} className={"text-error-10 ml-1"}>
                {expire_at && formatDate(new Date(expire_at))}
              </Typography>
            </div>
            <ListingItemAmount
              buyersFee={buyersFee}
              moneyDep={earnestMoneyDep}
              totalAmount={totalAmount}
              locked={!unlocked}
              date={expire_at || new Date()}
              contractId={id}
              mutate={mutate}
            />
          </div>
        </div>
        {!unlocked && <ListingItemUnlockNow id={id} mutate={mutate} />}
      </div>

      <Aggrements
        locked={!unlocked}
        asignmentContract={asignmentContract}
        realEstatePurchseAgreement={realEstatePurchseAgreement}
        competitiveMarketAnalisys={competitiveMarketAnalisys}
        scopeOfWork={scopeOfWork}
      />
    </div>
  );
};

export default ListingItem;
