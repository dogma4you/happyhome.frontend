"use client";

import axios from "@/lib/axios";
import useGetAnOffer from "@/store/useGetAnOffer";
import { GET_AN_OFFER_VIEW, SELLER_TYPES } from "@/utils/constants";
import GetStarted from "@/components/getoffers/pages/GetStarted";
import HomeType from "@/components/getoffers/pages/HomeType";
import HomeBuiltInfo from "@/components/getoffers/pages/HomeBuiltInfo";
import HomeBuiltDetails from "@/components/getoffers/pages/HomeBuiltDetails";
import ConditionOfProperty from "@/components/getoffers/pages/ConditionOfProperty";
import HomeRate from "@/components/getoffers/pages/HomeRate";
import UploadingPictures from "@/components/getoffers/pages/UploadingPictures";
import UploadImages from "@/components/getoffers/pages/UploadImages";
import UploadDocuments from "@/components/getoffers/pages/UploadDocuments";
import PropertyType from "@/components/getoffers/pages/PropertyType";
import CongratsDialog from "@/components/getoffers/components/CongratsDialog";
import { useEffect, useState } from "react";
import { useSession } from "next-auth/react";

const GetOfferMain = () => {
  const { view, sellerType, changeFields, address, user, resetGetAnOffer } =
    useGetAnOffer();

  const [isLoading, setIsLoading] = useState(true);
  const session = useSession();

  useEffect(() => {
    (async () => {
      setIsLoading(true);
      try {
        const { data } = await axios.get("/offer");
        let userInfo = user;
        if (!session.data) {
          const { data: userData } = await axios.get("/user/self");
          if (userData.data.email) {
            changeFields({
              isGuestAuth: true,
            });
          }
          userInfo = userData.data;
        }

        const {
          address: addressFromResponse,
          propertyType,
          descriptionType,
          areas,
          builtYear,
          heating,
          id,
          airConditioning,
          waterSupply,
          sewer,
          electricPanel,
          exteriorType,
          lotSize,
          currentHOA,
          property_condition,
          images,
          sellerType: sellerTypeData,
          files,
          estimated_lower_price,
          estimated_higher_price,
          estimated_date,
        } = data.data;

        changeFields({
          user: userInfo,
        });

        if (Object.entries(data.data).length === 2) {
          changeFields({
            offerId: id,
          });
          setIsLoading(false);
          return;
        }

        const addressValue = address?.country ? address : addressFromResponse;
        const sellerTypeValue = sellerTypeData || sellerType;
        const areasInitialState = [
          {
            square_feet: undefined,
            bedrooms: 1,
            bathrooms: 1,
          },
        ];

        changeFields({
          offerId: id,
          address: addressValue,
          sellerType: sellerTypeValue,
          propertyType,
          descriptionType,
          areas: areas?.length ? areas : areasInitialState,
          builtYear: builtYear ? builtYear : new Date(),
          heating: heating || "",
          airConditioning: airConditioning || "",
          waterSupply: waterSupply || "",
          sewer: sewer || "",
          electricPanel: electricPanel || "",
          exteriorType: exteriorType ?? [],
          lotSize,
          currentHOA,
          property_condition: Object.fromEntries(
            Object.entries(property_condition).map(([key, value]) => {
              if (value || (!value && key === "id")) {
                return [key, value];
              } else {
                return [key, 0];
              }
            }),
          ),
          images,
          files,
          estimated_lower_price,
          estimated_higher_price,
          estimated_date,
        });
        setIsLoading(false);
      } catch (err) {
        console.log(err);
      }
    })();

    return () => {
      resetGetAnOffer();
    };
  }, []);

  return (
    <>
      <CongratsDialog />
      <div
        className={
          "fixed top-0 left-0 h-full w-full overflow-y-auto z-50 bg-white dark:bg-black overscroll-contain"
        }
      >
        {isLoading ? (
          <div
            className={
              "black-window bg-black/50 opacity-100 flex justify-center items-center text-white text-2xl z-20 pointer-events-auto"
            }
          >
            Loading...
          </div>
        ) : (
          <>
            {view === GET_AN_OFFER_VIEW.GET_STARTED && <GetStarted />}
            {view === GET_AN_OFFER_VIEW.PROPERTY_TYPE && <PropertyType />}
            {view === GET_AN_OFFER_VIEW.HOME_TYPE && <HomeType />}
            {view === GET_AN_OFFER_VIEW.HOME_BUILT_INFO && <HomeBuiltInfo />}
            {view === GET_AN_OFFER_VIEW.HOME_BUILT_DETAILS && (
              <HomeBuiltDetails />
            )}
            {view === GET_AN_OFFER_VIEW.CONDITION_OF_YOUR_PROPERTY && (
              <ConditionOfProperty />
            )}
            {view === GET_AN_OFFER_VIEW.HOME_RATE && <HomeRate />}
            {view === GET_AN_OFFER_VIEW.UPLOADING_PICTURES && (
              <UploadingPictures />
            )}
            {view === GET_AN_OFFER_VIEW.UPLOAD_IMAGES && <UploadImages />}
            {view === GET_AN_OFFER_VIEW.UPLOAD_DOCUMENTS &&
              sellerType === SELLER_TYPES.WHOLESALER && <UploadDocuments />}
          </>
        )}
      </div>
    </>
  );
};

export default GetOfferMain;
