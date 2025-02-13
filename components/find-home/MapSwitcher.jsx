"use client";
import React from "react";
import Typography from "@/components/ui/typography";
import { Switch } from "@/components/ui/switch";
import useAuthStore from "@/store/useFindHome";

const MapSwitcher = () => {
  const { isMapOpened, setMapOpened } = useAuthStore();
  return (
    <div
      className={
        "flex items-center justify-between px-6 py-4 border border-gray-6 rounded-lg"
      }
    >
      <Typography variant={"subtitle1"} className={"normal-case"}>
        Map
      </Typography>
      <Switch checked={isMapOpened} onCheckedChange={setMapOpened} />
    </div>
  );
};

export default MapSwitcher;
