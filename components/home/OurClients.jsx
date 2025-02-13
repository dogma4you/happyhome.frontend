"use client";

import Typography from "@/components/ui/typography";
import Image from "next/image";

import { Swiper, SwiperSlide, useSwiper } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import Arrow from "@/public/assets/icons/arrow";
import * as React from "react";
import Stars from "@/components/ui/stars";
import sarahImage from "@/public/assets/testimonals/sarah.png";
import dariusImage from "@/public/assets/testimonals/darius.png";
import rubyImage from "@/public/assets/testimonals/ruby.png";
import noahImage from "@/public/assets/testimonals/noah.png";
import kiaraImage from "@/public/assets/testimonals/kiara.png";
import masonImage from "@/public/assets/testimonals/mason.png";
import deborahImage from "@/public/assets/testimonals/deborah.png";
import carterImage from "@/public/assets/testimonals/carter.png";
import devonteImage from "@/public/assets/testimonals/devonte.png";
import avaImage from "@/public/assets/testimonals/ava.png";

const SwiperButtons = () => {
  const swiper = useSwiper();
  return (
    <div className={"flex items-center justify-center gap-x-4 mt-10"}>
      <button
        className={"our-client-swiper-arrows"}
        onClick={() => swiper.slidePrev()}
      >
        <Arrow width={10} height={15} className={"stroke-white rotate-180"} />
      </button>
      <button
        className={"our-client-swiper-arrows"}
        onClick={() => swiper.slideNext()}
      >
        <Arrow width={10} height={15} className={"stroke-white"} />
      </button>
    </div>
  );
};

const ourClientsData = [
  {
    avatar: sarahImage,
    username: "Sarah Beth P.",
    usertype: "Seller",
    title: "",
    description:
      "“I sold my house faster than I expected. They gave me a solid offer within a day, and I didn’t have to worry about showings or fixing anything. There were no fees, which was a huge plus. Overall, it was a very straightforward process.”",
    stars: 5,
  },
  {
    avatar: dariusImage,
    username: "Darius M.",
    usertype: "Seller",
    title: "",
    description:
      "“The Happy Home Initiative offered a good price for my home, and there were no hidden fees. I didn’t need to make any repairs, and the sale moved along without any major hiccups. It was easier than I thought it would be.”",
    stars: 5,
  },
  {
    avatar: rubyImage,
    username: "Ruby C.",
    usertype: "Seller",
    title: "",
    description:
      "“I needed to sell quickly, and this worked out perfectly. They inspected the house themselves, made an offer fast, and I didn’t have to pay any fees or deal with endless showings. It was a simple, smooth transaction.”",
    stars: 5,
  },
  {
    avatar: noahImage,
    username: "Noah D.",
    usertype: "Buyer",
    title: "",
    description:
      "“I’ve bought a few properties before, but this time was easier. The Happy Home Initiative gave me all the info upfront—inspection, scope of work, everything. It helped me make a quick decision, and I feel like I got a good deal.”",
    stars: 5,
  },
  {
    avatar: kiaraImage,
    username: "Kiara B.",
    usertype: "Buyer",
    title: "",
    description:
      "“They gave me a lot of useful information on the house, like the inspection report and market comparison. That made me feel confident about buying. No surprises, and the process was pretty quick.”",
    stars: 5,
  },
  {
    avatar: masonImage,
    username: "Mason O.",
    usertype: "Buyer",
    title: "",
    description:
      "“I was able to buy a house without much back and forth. They provided all the details, so I knew what I was getting into before making the offer. It saved a lot of time, and I felt good about the deal I got.”",
    stars: 5,
  },
  {
    avatar: deborahImage,
    username: "Deborah G.",
    usertype: "Seller",
    title: "",
    description:
      "“Honestly, I wasn’t sure about selling my place since it needed a lot of work, but Happy Home made the whole thing a breeze. No repairs, no fees, just a fast offer. They got it done in 24 hours—seriously, why did I wait so long? If you’re debating it, stop and just go for it.”",
    stars: 5,
  },
  {
    avatar: carterImage,
    username: "Carter P.",
    usertype: "Seller",
    title: "",
    description:
      "“I was on a tight schedule with an out-of-state move, and a buddy told me to try Happy Home. I’m glad I listened. They made me an offer with no fees, no need for repairs, and they helped me sort out the paperwork. If your house isn’t in perfect shape and you need a quick sale, this is the best option.”",
    stars: 5,
  },
  {
    avatar: devonteImage,
    username: "Devonte T.",
    usertype: "Buyer",
    title: "",
    description:
      "“I’ve been looking at investment properties for a while, and Happy Home stands out for one reason: transparency. They give you everything upfront—no guessing, no runaround. My advice? Stick with their listings if you want properties where you know what you’re walking into. Makes life way easier.”",
    stars: 5,
  },
  {
    avatar: avaImage,
    username: "Ava S.",
    usertype: "Buyer",
    title: "",
    description:
      "“This was my second time using Happy Home, and they didn’t disappoint. The process is super streamlined—no hidden surprises, just straight info upfront. One piece of advice for buyers: if you see something you like, don’t sit on it. Their listings move fast, and for good reason.”",
    stars: 5,
  },
];

const OurClients = () => {
  return (
    <section className={"py-6 md:py-[80px] bg-black"}>
      <div className={"container"}>
        <Typography
          variant={"h4"}
          mobileVariant={"h5"}
          className={"text-center text-white mb-1 md:mb-3"}
        >
          What our clients say
        </Typography>
        <Typography
          variant={"body1"}
          mobileVariant={"body3"}
          className={"text-center text-[#F9F9FB]"}
        >
          Experience the time saving benefits of this alternative approach to
          real estate
        </Typography>

        <Swiper
          breakpoints={{
            // when window width is >= 768px (md)
            320: {
              slidesPerView: 1,
              spaceBetween: 40,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 40,
            },
          }}
          className={"mt-6 md:mt-16"}
        >
          {ourClientsData.map(
            (
              { avatar, username, usertype, description, title, stars },
              index,
            ) => {
              return (
                <SwiperSlide className={"our-client-slide-item"} key={index}>
                  <div
                    className={
                      "flex md:items-center items-start flex-col md:flex-row md:justify-between gap-y-4 md:gap-y-0"
                    }
                  >
                    <div className={"flex items-center gap-x-4"}>
                      <div
                        className={
                          "w-10 md:w-[56px] h-10 md:h-[56px] rounded-full relative overflow-hidden"
                        }
                      >
                        <Image
                          width={"auto"}
                          height={"auto"}
                          src={avatar}
                          className={
                            "absolute object-cover top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2"
                          }
                          alt={title}
                        />
                      </div>

                      <Typography
                        variant={"subtitle1"}
                        mobileVariant={"subtitle3"}
                        className={"text-white normal-case font-semibold"}
                      >
                        {title}
                      </Typography>
                    </div>
                    <Stars count={stars} />
                  </div>
                  <Typography
                    variant={"body1"}
                    mobileVariant={"body3"}
                    className={" my-6 text-[#B9BBC6]"}
                  >
                    {description}
                  </Typography>
                  <div className={"flex items-center justify-between"}>
                    <Typography
                      variant={"subtitle2"}
                      className={"font-normal normal-case text-[#8B8D98]"}
                    >
                      {username}
                    </Typography>
                    <Typography
                      variant={"body2"}
                      className={"font-normal normal-case text-[#8B8D98]"}
                    >
                      {usertype}
                    </Typography>
                  </div>
                </SwiperSlide>
              );
            },
          )}
          <SwiperButtons />
        </Swiper>
      </div>
    </section>
  );
};

export default OurClients;
