"use client";

import React, { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import Icon from "@/components/ui/icon";
import { useTheme } from "next-themes";
import axios from "@/lib/axios";
import toast from "react-hot-toast";
import { useSession } from "@/providers/SessionProvider";

const DarkLightSwitcher = () => {
  const { theme, setTheme } = useTheme();
  const [isDay, setIsDay] = useState();
  const session = useSession();

  useEffect(() => {
    if (theme) {
      setIsDay(theme === "light");
    }
  }, [theme]);

  const toggleSwitch = async () => {
    if (session) {
      try {
        await axios.put("/settings", { mode: +isDay });
        toast.success("Settings saved successfully");
      } catch (error) {
        toast.error("Something went wrong");
        return;
      }
    }
    const theme = isDay ? "dark" : "light";
    setTheme(theme);
  };

  if (isDay === undefined) return null;

  return (
    <div
      className={cn(
        `h-8 w-[51px] rounded-full cursor-pointer relative transition-colors`,
        isDay && "bg-orange-6",
        !isDay && "bg-blue-9",
      )}
      onClick={toggleSwitch}
    >
      {!isDay && (
        <Icon
          name={"sun"}
          className={
            "text-[#DDDDE3] text-base absolute top-1/2 -translate-y-1/2 left-[5px]"
          }
        />
      )}
      {isDay && (
        <Icon
          name={"moon"}
          className={
            "text-[#DDDDE3] text-base absolute top-1/2 -translate-y-1/2 right-[5px]"
          }
        />
      )}
      <div
        className={cn(
          `size-[28px] bg-white rounded-full absolute top-[2px] right-[2px] flex items-center justify-center transition-all`,
          isDay && "right-[calc(100%_-_30px)]",
        )}
      >
        {isDay ? (
          <Icon name={"sun"} className={"text-orange-6"} />
        ) : (
          <Icon name={"moon"} className={"text-blue-9"} />
        )}
      </div>
    </div>
  );
};

export default DarkLightSwitcher;
