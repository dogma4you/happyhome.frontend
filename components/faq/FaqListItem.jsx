import React from "react";
import {
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Typography from "@/components/ui/typography";

const FaqListItem = ({ title, children }) => {
  return (
    <AccordionItem value={title} className={"px-0"}>
      <AccordionTrigger arrowClassName={"bg-gray-11"}>
        <div className={"flex items-center gap-x-6"}>
          <Typography
            variant={"subtitle1"}
            mobileVariant={"subtitle3"}
            className={"normal-case text-left"}
          >
            {title}
          </Typography>
        </div>
      </AccordionTrigger>
      <AccordionContent>{children}</AccordionContent>
    </AccordionItem>
  );
};

export default FaqListItem;
