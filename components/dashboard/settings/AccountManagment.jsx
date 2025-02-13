"use client";
import React from "react";
import Typography from "@/components/ui/typography";
import { Switch } from "@/components/ui/switch";
import DarkLightSwitcher from "@/components/ui/dark-light-switcher";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";
import useSettingsStore from "@/store/useSettingsStore";
import axios from "@/lib/axios";
import toast from "react-hot-toast";
import useGetOfferList from "@/queries/useGetOfferList";

const AccountManagement = () => {
  const { pushNotifications, setNotificationSettings } = useSettingsStore();
  const isHaveCredits = false;
  const { data } = useGetOfferList();
  const offers = (data?.data?.data || []).filter(({ status }) => status !== 2);

  const handleChangeNotifications = async (value) => {
    try {
      await axios.put("/settings", { push_notifications: value });
      setNotificationSettings(value);
      toast.success("Settings saved successfully");
    } catch (error) {
      toast.error("Something went wrong");
    }
  };

  return (
    <div className={"max-w-[600px] px-4 md:p-6"}>
      <div
        className={
          "flex items-center py-3 border-b border-b-gray-6 justify-between"
        }
      >
        <div>
          <Typography variant={"subtitle3"}>Mode</Typography>
          <Typography variant={"body4"}>Change mode</Typography>
        </div>
        <div>
          <DarkLightSwitcher />
        </div>
      </div>

      <div
        className={
          "flex items-center py-3 border-b border-b-gray-6 justify-between"
        }
      >
        <div>
          <Typography variant={"subtitle3"}>Notifications</Typography>
          <Typography variant={"body4"} className={"mt-2"}>
            Receive news from HHI Company
          </Typography>
        </div>
        <div>
          <Switch
            checked={pushNotifications}
            onCheckedChange={handleChangeNotifications}
          />
        </div>
      </div>

      <div
        className={cn(
          "py-3",
          isHaveCredits && "opacity-70 pointer-events-none",
        )}
      >
        <Button
          size={"sm"}
          variant={"ghost"}
          className={"px-0 text-error-10 uppercase"}
          disabled={offers.length}
        >
          <Link href={"/dashboard/settings/delete-account"}>
            Delete account
          </Link>
        </Button>
        {!!offers.length && (
          <Typography variant={"body4"} className={"text-gray-10"}>
            You cannot delete your account when you have an offer
          </Typography>
        )}
      </div>
    </div>
  );
};

export default AccountManagement;
