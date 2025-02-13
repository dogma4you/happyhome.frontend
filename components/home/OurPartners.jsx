"use client";

import * as React from "react";
import Image from "next/image";
import Typography from "@/components/ui/typography";
import partner1 from "@/public/assets/partner_1.png";
import partner2 from "@/public/assets/partner_2.png";
import partner3 from "@/public/assets/partner_3.png";
import partner4 from "@/public/assets/partner_4.png";
import { useEffect, useRef } from "react";
import useWindowSize from "@/hooks/useWindowSize";

const OurPartners = () => {
  const scrollRef = useRef(null);
  const partners = [partner1, partner2, partner3, partner4];

  const { isMobile } = useWindowSize();

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    let scrollInterval;

    const startAutoScroll = () => {
      scrollInterval = setInterval(() => {
        if (scrollContainer) {
          const { scrollLeft, scrollWidth } = scrollContainer;
          if (scrollLeft >= scrollWidth / 2) {
            scrollContainer.scrollTo({ left: 0, behavior: "instant" });
          } else {
            scrollContainer.scrollBy({ left: 2, behavior: "smooth" });
          }
        }
      }, 30);
    };

    if (isMobile) {
      startAutoScroll();
    }

    return () => clearInterval(scrollInterval);
  }, [isMobile]);

  return (
    <section className={"pt-6 md:pt-[80px] pb-10 bg-background"}>
      <div className={"container"}>
        <Typography
          variant={"h3"}
          mobileVariant={"h5"}
          className={"text-center mb-1 md:mb-3 text-black dark:text-white"}
        >
          our partners
        </Typography>
        <Typography
          variant={"body1"}
          mobileVariant={"body3"}
          className={"text-center mb-3 text-gray-11"}
        >
          Need a little additional help? Our partners have you covered.
        </Typography>

        <div
          ref={scrollRef}
          className={
            "flex items-center gap-x-16 justify-between mt-10 w-full overflow-x-hidden whitespace-nowrap"
          }
        >
          {partners.map((partnerImage, index) => (
            <div key={index} className={"shrink-0"}>
              <Image
                width={200} // Adjust width based on your design
                height={100} // Adjust height based on your design
                src={partnerImage}
                alt={"Happy home partner"}
              />
            </div>
          ))}
          {isMobile &&
            partners.map((partnerImage, index) => (
              <div key={index} className={"shrink-0"}>
                <Image
                  width={200} // Adjust width based on your design
                  height={100} // Adjust height based on your design
                  src={partnerImage}
                  alt={"Happy home partner"}
                />
              </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default OurPartners;
