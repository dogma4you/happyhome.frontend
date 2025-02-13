import React from "react";
import Typography from "@/components/ui/typography";
import { cn } from "@/lib/utils";
import { SETTINGS_TABS } from "@/utils/constants";
import PersonalInformation from "@/components/dashboard/settings/PersonalInformation";
import AccountManagement from "@/components/dashboard/settings/AccountManagment";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default async function () {
  return (
    <div>
      <Typography variant={"h5"} className={"normal-case dashboard-padding"}>
        Settings
      </Typography>
      <Tabs
        defaultValue={SETTINGS_TABS.PERSONAL_INFORMATION}
        className="flex flex-col gap-y-4 md:gap-y-10 items-center"
      >
        <TabsList
          className={
            "flex items-center justify-start border-b border-b-gray-6 gap-x-2 w-full md:px-6 px-4"
          }
        >
          <TabsTrigger
            resetDefaultStyles
            className={cn(
              "notification-tabs data-[state=active]:before:container md:px-3 px-0 w-full md:w-auto",
            )}
            value={SETTINGS_TABS.PERSONAL_INFORMATION}
          >
            <Typography variant={"subtitle3"} className={"normal-case"}>
              Personal Information
            </Typography>
          </TabsTrigger>
          <TabsTrigger
            resetDefaultStyles
            className={cn(
              "notification-tabs data-[state=active]:before:container md:px-3 px-0 w-full md:w-auto",
            )}
            value={SETTINGS_TABS.ACCOUNT_MANAGEMENT}
          >
            <Typography variant={"subtitle3"} className={"normal-case"}>
              Account management
            </Typography>
          </TabsTrigger>
        </TabsList>
        <TabsContent value={SETTINGS_TABS.PERSONAL_INFORMATION}>
          <PersonalInformation />
        </TabsContent>
        <TabsContent value={SETTINGS_TABS.ACCOUNT_MANAGEMENT}>
          <AccountManagement />
        </TabsContent>
      </Tabs>
    </div>
  );
}
