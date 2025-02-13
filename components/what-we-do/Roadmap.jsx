import Typography from "@/components/ui/typography";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Icon from "@/components/ui/icon";
import { Fragment } from "react";
import OrangeArrow from "@/components/ui/orange-arrow";

const Roadmap = ({ title, descripton, roadmapList = [] }) => {
  return (
    <section className={"bg-black py-6 md:py-[80px]"}>
      <div className={"container"}>
        <Typography
          variant={"h3"}
          mobileVariant={"h5"}
          className={"text-white text-center"}
        >
          {title}
        </Typography>
        <Typography
          variant={"body1"}
          className={"text-[#8B8D98] mt-2 md:mt-4 text-center mb-6 md:mb-12"}
        >
          {descripton}
        </Typography>

        <Accordion type="single" collapsible>
          {roadmapList.map(({ title, description, icon }, index) => {
            return (
              <Fragment key={title}>
                <AccordionItem
                  value={title}
                  className={"border-y-gray-11 dark:border-y-gray-3"}
                >
                  <AccordionTrigger>
                    <div className={"flex items-center gap-x-6"}>
                      <Icon
                        name={icon}
                        className={"text-2xl md:text-3xl text-white"}
                      />
                      <Typography
                        variant={"subtitle1"}
                        mobileVariant={"subtitle3"}
                        className={"normal-case text-gray-2 dark:text-gray-11"}
                      >
                        {title}
                      </Typography>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent>
                    <Typography
                      variant={"body3"}
                      mobileVariant={"body4"}
                      className={"normal-case text-gray-2 dark:text-gray-11"}
                    >
                      <span dangerouslySetInnerHTML={{ __html: description }} />
                    </Typography>
                  </AccordionContent>
                </AccordionItem>
                {roadmapList.length - 1 !== index && (
                  <div className={"my-[2px] ml-6"}>
                    <OrangeArrow height={20} width={12} />
                  </div>
                )}
              </Fragment>
            );
          })}
        </Accordion>
      </div>
    </section>
  );
};

export default Roadmap;
