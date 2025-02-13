"use client";

import { Button } from "@/components/ui/button";
import Typography from "@/components/ui/typography";
import Icon from "@/components/ui/icon";
import { useEffect, useState } from "react";
import { Range } from "react-range";
import { formatCurrency, formatDate } from "@/utils/helper";
import axios from "@/lib/axios";
import useGetAcceptOffer from "@/store/useGetAcceptOffer";
import CardOption from "@/components/ui/card-option";
import { Textarea } from "@/components/ui/textarea";
import toast from "react-hot-toast";
import useGetOfferList from "@/queries/useGetOfferList";

const featureOptions = [
  {
    title: "Exquisite hardcaping",
    icon: "hardcaping",
    name: "premium_handcape",
  },
  {
    title: "Travertine floors",
    icon: "travertine",
    name: "luxury_flooring",
  },
  {
    title: "Custom woodwork",
    icon: "woodwork",
    name: "custom_framing",
  },
  {
    title: "Other",
    icon: "",
    name: "other",
  },
];

const AcceptYourOffer = () => {
  const {
    estimated_lower_price = 340000,
    estimated_higher_price = 370000,
    estimated_date,
    offerId,
    showAcceptOffer,
    image,
    address,
    closeAcceptOffer,
  } = useGetAcceptOffer();
  const { mutate } = useGetOfferList();

  const [values, setValues] = useState(undefined);
  const [featuresValue, setFeaturesValue] = useState({});
  const [description, setDescription] = useState("");

  useEffect(() => {
    if (showAcceptOffer) {
      const middlePrice = (estimated_lower_price + estimated_higher_price) / 2;
      setValues([middlePrice]);
    }
  }, [estimated_lower_price, estimated_higher_price, showAcceptOffer]);

  if (!values || !showAcceptOffer) return null;

  const handleSubmitPrice = async () => {
    try {
      await axios.put(`/offer/${offerId}`, {
        price: values[0],
      });
      await axios.post(`/offer/features/${offerId}`, {
        id: offerId,
        premium_handcape: featuresValue.premium_handcape,
        luxury_flooring: featuresValue.luxury_flooring,
        custom_framing: featuresValue.custom_framing,
        other: featuresValue.other,
        description: description,
      });
      await mutate();
      closeAcceptOffer();
    } catch (e) {
      toast.error(e.response?.data?.message || "Something went wrong");
    }
  };

  const handleChangeFeatureValue = (name) => {
    setFeaturesValue((prev) => ({
      ...prev,
      [name]: !prev[name],
    }));
  };

  return (
    <div
      className={
        "fixed top-0 left-0 h-full w-full overflow-y-auto z-50 bg-white dark:bg-black overscroll-contain"
      }
    >
      <div className={"flex flex-col h-full"}>
        <main
          className={
            "flex-grow grid grid-cols-1 xl:grid-cols-[486px_1fr] gap-x-6 container pt-4 pb-6 md:py-8"
          }
        >
          <div>
            <div
              className={
                "rounded-sm overflow-hidden relative w-full h-[320px] hidden md:block"
              }
            >
              <img
                src={image}
                className={"image-cover"}
                alt={"Accept your offer"}
              />
            </div>
            <div
              className={
                "flex items-center gap-x-1 px-4 py-2 rounded-full bg-blue-1 leading-none mt-0 md:mt-5"
              }
            >
              <Icon name={"map"} className={" text-blue-6 py-[2px] px-1"} />
              {address}
            </div>
          </div>
          <div className={"pt-4"}>
            <Typography variant={"h4"}>
              <div>Congratulations!</div> You are about to sell us your home!
            </Typography>
            <Typography variant={"body3"} className={"mt-2 md:mt-4"}>
              We leaned about the condition of your home, now, please describe
              what makes your ome Special.
            </Typography>

            <div className={"mt-5 md:mt-10 pt-[60px]"}>
              <Range
                step={1}
                min={estimated_lower_price}
                max={estimated_higher_price}
                values={values}
                onChange={(values) => setValues(values)}
                renderTrack={({ props, children }) => (
                  <div
                    {...props}
                    style={{
                      ...props.style,
                      height: "10px",
                      display: "flex",
                      width: "100%",
                    }}
                    className={"rounded-full bg-gray-6"}
                  >
                    {children}
                  </div>
                )}
                renderThumb={({ props: { key, style, ...ret } }) => (
                  <div
                    {...ret}
                    key={key}
                    className={
                      "size-6 bg-background rounded-full flex items-center justify-center"
                    }
                    style={style}
                  >
                    <div
                      className={"size-4 bg-[#1DB53F] rounded-full relative"}
                    >
                      <div
                        className={
                          "absolute -top-[49px] md:-top-[55px] left-1/2 -translate-x-1/2 py-1 px-2 bg-[#1DB53F] rounded-sm "
                        }
                      >
                        <Typography
                          variant={"h5"}
                          mobileVariant={"subtitle1"}
                          className={"whitespace-nowrap"}
                        >
                          {formatCurrency(values[0])}
                        </Typography>
                      </div>
                      <svg
                        width="12"
                        height="6"
                        viewBox="0 0 12 6"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className={
                          "absolute -top-[11px] left-1/2 -translate-x-1/2"
                        }
                      >
                        <path
                          d="M5.25259 5.67752C5.65038 6.10749 6.34962 6.10749 6.74741 5.67752L12 0H0L5.25259 5.67752Z"
                          fill="#1DB53F"
                        />
                      </svg>
                    </div>
                  </div>
                )}
              />
              <div className={"flex items-center justify-between mt-3"}>
                <Typography
                  variant={"subtitle1"}
                  mobileVariant={"subtitle3"}
                  className={"text-gray-10"}
                >
                  {formatCurrency(estimated_lower_price)}
                </Typography>
                <Typography
                  variant={"subtitle1"}
                  mobileVariant={"subtitle3"}
                  className={"text-gray-10"}
                >
                  {formatCurrency(estimated_higher_price)}
                </Typography>
              </div>
            </div>

            <Typography
              variant={"subtitle1"}
              className={"text-gray-12 mt-10 md:mt-12"}
            >
              Features
            </Typography>
            <Typography variant={"body3"} className={"text-gray-11"}>
              Homes with these, or similar features, and in similar condition,
              sell for up to [High Offer Range Value]. Without Special Features,
              homes sell for closer to [Low Offer Range Value]. Please describe
              why we should pay [Chosen Offer Amount] in the section below:
            </Typography>

            <div
              className={
                "grid grid-cols-1 md:grid-cols-2 grid-rows-2 gap-x-6 gap-y-3 mt-3"
              }
            >
              {featureOptions.map(({ title, icon, name }) => {
                return (
                  <CardOption
                    withCheckbox
                    title={title}
                    onClick={() => handleChangeFeatureValue(name)}
                    isActive={featuresValue[name]}
                    icon={icon}
                    className={"flex-row gap-x-3 flex-nowrap p-4"}
                  />
                );
              })}
              {featuresValue?.other && (
                <Textarea
                  className={"md:col-span-2"}
                  placeholder="Type your message here."
                  onChange={(e) => setDescription(e.target.value)}
                  value={description}
                />
              )}
            </div>
          </div>
        </main>
        <footer className={"border-t border-t-gray-6"}>
          <div className={"container flex items-center justify-between py-5"}>
            <div>
              <div className={"flex items-center gap-x-1"}>
                <Typography variant={"body3"}>Offer Date: </Typography>
                <Typography variant={"subtitle3"}>
                  {formatDate(new Date(estimated_date))}
                </Typography>
              </div>
            </div>
            <Button className={"uppercase"} onClick={handleSubmitPrice}>
              Accept
            </Button>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default AcceptYourOffer;
