import { TabsList, TabsTrigger } from "@/components/ui/tabs";
import * as React from "react";

const TabsHeader = () => {
  return (
    <div className={"w-full py-4 border-b border-gray-6 dark:border-gray-3"}>
      <div className={"container text-center"}>
        <TabsList
          className={
            "p-1 bg-background what-we-do-tabs-box-shadow border border-gray-6 dark:border-gray-3 rounded-full gap-x-0"
          }
        >
          <TabsTrigger
            className={
              "px-10 py-[6px] rounded-full bg-background text-black dark:text-white data-[state=active]:text-white data-[state=active]:bg-blue-6 md:text-xl font-medium normal-case"
            }
            value="buyer"
          >
            Buyer
          </TabsTrigger>
          <TabsTrigger
            className={
              "px-10 py-[6px] rounded-full bg-background text-black dark:text-white data-[state=active]:text-white data-[state=active]:bg-blue-6 md:text-xl font-medium normal-case"
            }
            value="seller"
          >
            Seller
          </TabsTrigger>
        </TabsList>
      </div>
    </div>
  );
};

export default TabsHeader;
