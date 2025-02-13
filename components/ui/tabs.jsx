"use client";

import * as React from "react";
import * as TabsPrimitive from "@radix-ui/react-tabs";

import { cn } from "@/lib/utils";

const Tabs = TabsPrimitive.Root;

const TabsList = React.forwardRef(({ className, ...props }, ref) => (
  <TabsPrimitive.List
    ref={ref}
    className={cn("inline-flex items-center justify-center gap-x-3", className)}
    {...props}
  />
));
TabsList.displayName = TabsPrimitive.List.displayName;

const TabsTrigger = React.forwardRef(
  ({ className, resetDefaultStyles, ...props }, ref) => (
    <TabsPrimitive.Trigger
      ref={ref}
      className={cn(
        !resetDefaultStyles &&
          "uppercase inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 md:text-base text-white font-light transition-all data-[state=active]:bg-white/40 bg-white/10 font-helvetica",
        className,
      )}
      {...props}
    />
  ),
);
TabsTrigger.displayName = TabsPrimitive.Trigger.displayName;

const TabsContent = React.forwardRef(({ className, ...props }, ref) => (
  <TabsPrimitive.Content
    ref={ref}
    className={cn("mt-2 w-full ", className)}
    {...props}
  />
));
TabsContent.displayName = TabsPrimitive.Content.displayName;

export { Tabs, TabsList, TabsTrigger, TabsContent };
