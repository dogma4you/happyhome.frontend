"use client";

import React, { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { SELLER_TYPES } from "@/utils/constants";
import HomeOwners from "@/components/home/TopSection/HomeOwners";
import RealEstateAgent from "@/components/home/TopSection/RealEstateAgent";
import WhoLesalers from "@/components/home/TopSection/WhoLesalers";
import TopSectionAddressInput from "@/components/home/TopSection/TopSectionAddressInput";

const TopSectionOptions = () => {
  const [sellerType, setSellerType] = useState(SELLER_TYPES.HOMEOWNER);
  return (
    <>
      <Tabs
        defaultValue={sellerType}
        className="flex flex-col gap-y-6 items-start mt-[30px]"
        onValueChange={setSellerType}
      >
        <TabsList className={"grid grid-cols-2 gap-3 md:flex"}>
          <TabsTrigger
            value={SELLER_TYPES.HOMEOWNER}
            className={"md:w-[200px] font-bold px-3 py-2 text-[14px]"}
          >
            Home Owners
          </TabsTrigger>
          <TabsTrigger
            value={SELLER_TYPES.REAL_ESTATE_AGENT}
            className={"md:w-[200px] font-bold px-3 py-2 text-[14px]"}
          >
            Real Estate Agent
          </TabsTrigger>
          <TabsTrigger
            value={SELLER_TYPES.WHOLESALER}
            className={"md:w-[200px] font-bold px-3 py-2 text-[14px]"}
          >
            Wholesalers
          </TabsTrigger>
        </TabsList>
        <TabsContent value={SELLER_TYPES.HOMEOWNER}>
          <HomeOwners />
        </TabsContent>
        <TabsContent value={SELLER_TYPES.REAL_ESTATE_AGENT}>
          <RealEstateAgent />
        </TabsContent>
        <TabsContent value={SELLER_TYPES.WHOLESALER}>
          <WhoLesalers />
        </TabsContent>
      </Tabs>
      <TopSectionAddressInput
        buttonTitle={"Get Offer"}
        sellerType={sellerType}
      />
    </>
  );
};

export default TopSectionOptions;
