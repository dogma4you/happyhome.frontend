"use client";

import * as React from "react";
import * as AccordionPrimitive from "@radix-ui/react-accordion";

import { cn } from "@/lib/utils";

const Accordion = AccordionPrimitive.Root;

const AccordionItem = React.forwardRef(({ className, ...props }, ref) => (
  <AccordionPrimitive.Item
    ref={ref}
    className={cn(
      "border-y border-y-gray-2 dark:border-y-gray-3 px-6",
      className,
    )}
    {...props}
  />
));
AccordionItem.displayName = "AccordionItem";
const AccordionTrigger = React.forwardRef(
  ({ className, children, arrowClassName, ...props }, ref) => (
    <AccordionPrimitive.Header className="flex">
      <AccordionPrimitive.Trigger
        ref={ref}
        className={cn(
          "flex flex-1 gap-x-2 items-center justify-between py-4 font-medium transition-all hover:underline group/accordion",
          className,
        )}
        {...props}
      >
        {children}
        <div className={"size-6 min-w-6 relative"}>
          <span
            className={cn(
              "accordion-arrow left-1 origin-left rotate-[45deg] group-data-[state=open]/accordion:rotate-0 transition-transform",
              arrowClassName,
            )}
          ></span>
          <span
            className={cn(
              "accordion-arrow right-1 origin-right -rotate-[45deg] group-data-[state=open]/accordion:rotate-0 transition-transform",
              arrowClassName,
            )}
          ></span>
        </div>
      </AccordionPrimitive.Trigger>
    </AccordionPrimitive.Header>
  ),
);

AccordionTrigger.displayName = AccordionPrimitive.Trigger.displayName;

const AccordionContent = React.forwardRef(
  ({ className, children, ...props }, ref) => (
    <AccordionPrimitive.Content
      ref={ref}
      className="overflow-hidden text-sm transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down"
      {...props}
    >
      <div className={cn("pb-4 pt-0", className)}>{children}</div>
    </AccordionPrimitive.Content>
  ),
);

AccordionContent.displayName = AccordionPrimitive.Content.displayName;

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent };
