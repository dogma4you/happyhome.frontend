"use client";

import React from "react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import Link from "next/link";
import Icon from "@/components/ui/icon";
import FindHomeSinglePagePhotos from "@/components/find-home/FindHomeSinglePagePhotos";
import Typography from "@/components/ui/typography";
import { formatDate, getAddressValue } from "@/utils/helper";
import FindHomeItemAmount from "@/components/find-home/findHomeItem/FindHomeItemAmount";
import HomeInfo from "@/components/find-home/findHomeItem/HomeInfo";
import HomeAmountInfo from "@/components/find-home/findHomeItem/HomeAmountInfo";
import Aggrements from "@/components/find-home/Aggrements";
import FindHomeItemFaq from "@/components/find-home/findHomeItem/FindHomeItemFAQ";
import Footer from "@/components/footer/Footer";
import { Button } from "@/components/ui/button";
import useGetContractsById from "@/queries/useGetContractsById";
import { useParams, useRouter } from "next/navigation";
import { Skeleton } from "@/components/ui/skeleton";
import toast from "react-hot-toast";
import { GoogleMap, Marker } from "@react-google-maps/api";

const Page = () => {
  const { id } = useParams();
  const router = useRouter();
  const { isLoading, data, error } = useGetContractsById(id);
  const isLocked = false;
  if (isLoading)
    return <Skeleton className={"w-full h-[300px] container mt-4"} />;

  if (error) {
    router.push("/find-home");
    toast.error("Something went wrong");
    return null;
  }

  const {
    address,
    images,
    buyersFee,
    earnestMoneyDep,
    totalAmount,
    expire_at,
    price,
    estAvr,
    estNetProfit,
    estRentMo,
    estRepairCost,
    asignmentFee,
    totalSalesPrice,
    asignmentContract,
    realEstatePurchseAgreement,
    competitiveMarketAnalisys,
    scopeOfWork,
  } = data;

  const addressValue = getAddressValue(address, true);
  const isAggreementsExist =
    asignmentContract ||
    realEstatePurchseAgreement ||
    competitiveMarketAnalisys ||
    scopeOfWork;

  return (
    <>
      <div className={"container pt-6 pb-[74px]"}>
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink asChild>
                <Link href="/find-home">Find a home</Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator>
              <Icon
                name={"arrow-right"}
                className={"text-base leading-[18px] text-gray-11"}
              />
            </BreadcrumbSeparator>
            <BreadcrumbItem>
              <BreadcrumbPage>Single page</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>

        <FindHomeSinglePagePhotos images={images} />

        <div
          className={
            "grid grid-cols-1 max-xl:gap-y-4 xl:grid-cols-[1fr_450px] items-start gap-x-[45px] mt-7"
          }
        >
          <div>
            <div className={"flex-grow flex items-center gap-x-2"}>
              <Typography variant={"h5"} mobileVariant={"subtitle3"}>
                {addressValue}
              </Typography>
              <div
                className={
                  "text-xs text-white uppercase font-bold px-3 py-[2px] rounded-full bg-[#32C688] inline-block"
                }
              >
                Active
              </div>
            </div>

            <HomeInfo data={data} />
          </div>

          <div>
            <div className={"flex items-center justify-end gap-x-2"}>
              <Typography variant={"body2"} className={"text-gray-11"}>
                Listing End Date:
              </Typography>
              <Typography variant={"subtitle2"} className={"text-error-10"}>
                {expire_at && formatDate(new Date(expire_at))}
              </Typography>
            </div>

            <FindHomeItemAmount
              buyersFee={buyersFee}
              moneyDep={earnestMoneyDep}
              totalAmount={totalAmount}
              date={expire_at || new Date()}
              locked={false}
              contractId={id}
            />

            {isLocked && (
              <div
                className={
                  "flex items-center justify-between mt-3 bg-orange-1 px-3 py-2 rounded-[8px]"
                }
              >
                <div className={"flex items-center gap-x-[10px]"}>
                  <Icon name={"warning"} className={"text-orange-7 text-lg"} />
                  <p className={"uppercase text-orange-7 text-xs font-bold"}>
                    unlock now to view Photos, Contracts, Home Inspection, Scope
                    of work, CMA and to Buy now.
                  </p>
                </div>
                <Button
                  size={"lg"}
                  className={
                    "uppercase  bg-orange-7 border-orange-7 hover:bg-orange-8 hover:border-orange-8"
                  }
                >
                  unlock now
                </Button>
              </div>
            )}
          </div>
          <div className={"flex flex-col gap-y-10"}>
            <HomeAmountInfo
              totalSalesPrice={totalSalesPrice}
              contractPrice={price}
              arv={estAvr}
              netProfit={estNetProfit}
              rentPrice={estRentMo}
              repairCosts={estRepairCost}
              assigmentFee={asignmentFee}
            />
            <div>
              {isAggreementsExist && (
                <>
                  <Typography variant={"subtitle1"}>Aggrements</Typography>
                  <Aggrements
                    className={
                      "justify-start single-page mt-6 !flex max-md:flex-col max-md:gap-y-2 mb-6"
                    }
                    asignmentContract={asignmentContract}
                    realEstatePurchseAgreement={realEstatePurchseAgreement}
                    competitiveMarketAnalisys={competitiveMarketAnalisys}
                    scopeOfWork={scopeOfWork}
                  />
                </>
              )}

              <GoogleMap
                mapContainerStyle={{
                  width: "100%",
                  height: "400px",
                }}
                center={{
                  lat: address.lat,
                  lng: address.lng,
                }}
                zoom={4}
              >
                <Marker position={{ lat: address.lat, lng: address.lng }} />
              </GoogleMap>

              <FindHomeItemFaq />
            </div>
          </div>
        </div>
      </div>
      <Footer className={"bg-black"} />
    </>
  );
};

export default Page;
