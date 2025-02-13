import * as React from "react";
import { Tabs, TabsContent } from "@/components/ui/tabs";
import TabsHeader from "@/components/what-we-do/TabsHeader";
import Buyer from "@/app/(homelayout)/what-we-do/Buyer";
import Seller from "@/app/(homelayout)/what-we-do/Seller";

export default function WhatWeDo() {
  return (
    <>
      <Tabs defaultValue="buyer" className="flex flex-col gap-y-10 items-start">
        <TabsHeader />
        <TabsContent value="buyer">
          <Buyer />
        </TabsContent>
        <TabsContent value="seller">
          <Seller />
        </TabsContent>
      </Tabs>
    </>
  );
}
