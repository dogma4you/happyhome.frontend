import Image from "next/image";
import getStartedImage from "@/public/assets/get-offer-get-started.jpeg";
import Typography from "@/components/ui/typography";
import { GET_AN_OFFER_VIEW, SELLER_TYPES } from "@/utils/constants";
import useGetAnOffer from "@/store/useGetAnOffer";
import CardOption from "@/components/ui/card-option";

import {
  getStartedViewValidation,
  getStartedViewValidationGuest,
} from "@/validations/getAnOfferValidations";
import GetStartedSteps from "@/components/getoffers/components/GetStartedSteps";
import GetStartedFormContent from "@/components/getoffers/components/GetStartedFormContent";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import Arrow from "@/public/assets/icons/arrow";
import GetAnOfferDefaultHeader from "@/components/getoffers/components/GetAnOfferDefaultHeader";
import { useSession } from "@/providers/SessionProvider";
import axios from "@/lib/axios";
import GetOfferGuestVerifyEmail from "@/components/getoffers/components/GetOfferGuestVerifyEmail";
import { FormProvider, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

const sellerTypesList = [
  {
    id: SELLER_TYPES.HOMEOWNER,
    title: "Homeowner",
    icon: "homeowner",
  },
  {
    id: SELLER_TYPES.REAL_ESTATE_AGENT,
    title: "Real estate agent",
    icon: "homeowner",
  },
  {
    id: SELLER_TYPES.WHOLESALER,
    title: "Wholesaler",
    icon: "wholesaler",
  },
];

const GetStarted = () => {
  const [loading, setLoading] = useState(false);
  const [openVerifyEmailModal, setOpenVerifyEmailModal] = useState(false);
  const {
    changeView,
    sellerType,
    changeFields,
    offerId,
    address,
    terms,
    user,
    isGuestAuth,
  } = useGetAnOffer();
  const session = useSession();
  const formValidation = session
    ? getStartedViewValidation
    : getStartedViewValidationGuest;

  const methods = useForm({
    defaultValues: {
      address: address,
      terms,
      first_name: user.first_name,
      last_name: user.last_name,
      email: user.email,
      phone: user.phone,
    },
    resolver: zodResolver(formValidation),
    onSubmit: { handleSubmit },
  });

  async function handleSubmit(values) {
    setLoading(true);

    try {
      changeFields({
        terms: values.terms,
        address: values.address,
      });
      if (!session) {
        changeFields({
          user: {
            first_name: values.first_name,
            last_name: values.last_name,
            email: values.email,
            phone: values.phone,
          },
        });
        if (user.email !== values.email) {
          try {
            await axios.get("/auth/verify_email", {
              params: {
                email: values.email,
                type: 1,
              },
            });
            setOpenVerifyEmailModal(true);
          } catch (e) {
            methods.setError("email", {
              type: "manual",
              message: e.response?.data?.message || "Error",
            });
            setLoading(false);
          }

          return;
        }

        if (!isGuestAuth) {
          await axios.put(`/user/personal_info`, {
            first_name: values.first_name,
            last_name: values.last_name,
            email: values.email,
            phone: values.phone,
          });

          changeFields({
            user: {
              first_name: values.first_name,
              last_name: values.last_name,
              email: values.email,
              phone: values.phone,
            },
            isGuestAuth: true,
          });
        }
      }

      await axios.put(`/offer/${offerId}`, {
        address: values.address,
        sellerType,
      });

      changeView(GET_AN_OFFER_VIEW.PROPERTY_TYPE);
    } catch (e) {
      console.error("error", e);
    }

    setLoading(false);
  }

  const handleVerifyEmail = async () => {
    await handleSubmit({
      address,
      terms,
      first_name: user.first_name,
      last_name: user.last_name,
      email: user.email,
      phone: user.phone,
    });
  };

  return (
    <>
      <GetOfferGuestVerifyEmail
        open={openVerifyEmailModal}
        onClose={() => setOpenVerifyEmailModal(false)}
        onSuccess={handleVerifyEmail}
      />
      <main className={"flex flex-col h-full"}>
        <GetAnOfferDefaultHeader />
        <section
          className={
            "flex items-center justify-center xl:justify-start w-full flex-1 gap-x-12"
          }
        >
          <div className={"w-[46%] h-full relative xl:block hidden"}>
            <Image
              src={getStartedImage}
              className={
                "w-full h-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 object-cover"
              }
              alt={"Get started to get offer in happy home"}
            />
          </div>

          <div className={"xl:max-w-[700px] pb-8 px-4 xl:pl-0 xl:pr-[120px]"}>
            <Typography variant={"h4"} className={" mt-[34px] max-w-[300px]"}>
              Let’s get started
            </Typography>

            <div className={"mt-10 mb-6 md:mb-0"}>
              <Typography variant={"subtitle2"} className={"mb-3 normal-case"}>
                Seller Type
              </Typography>

              <div
                className={
                  "flex items-center gap-x-6 flex-col md:flex-row gap-y-4 md:gap-y-0"
                }
              >
                {sellerTypesList.map(({ id, title, icon }) => {
                  return (
                    <CardOption
                      key={title}
                      title={title}
                      onClick={() => changeFields({ sellerType: id })}
                      isActive={sellerType === id}
                      icon={icon}
                      className={
                        "flex-row gap-x-3 flex-nowrap w-full md:w-auto justify-start md:justify-center p-4 md:py-6 "
                      }
                    />
                  );
                })}
              </div>
            </div>

            <GetStartedSteps />

            <FormProvider {...methods}>
              <form
                onSubmit={methods.handleSubmit((values) =>
                  handleSubmit(values, methods.setError),
                )}
              >
                <GetStartedFormContent isGuestAuth={isGuestAuth} />
                <div className={"flex justify-end mt-10"}>
                  <Button
                    size={"lg"}
                    className={"uppercase"}
                    disabled={loading}
                  >
                    get offer
                    <Arrow width={10} height={15} className={"stroke-white"} />
                  </Button>
                </div>
              </form>
            </FormProvider>
          </div>
        </section>
      </main>
    </>
  );
};

export default GetStarted;
