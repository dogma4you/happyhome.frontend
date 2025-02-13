import GetAnOfferHeader from "@/components/getoffers/GetAnOfferHeader";
import GetAnOfferFooter from "@/components/getoffers/GetAnOfferFooter";
import useGetAnOffer from "@/store/useGetAnOffer";
import { GET_AN_OFFER_VIEW, HOME_TYPE, PROPERTY_TYPE } from "@/utils/constants";
import Typography from "@/components/ui/typography";
import CardOption from "@/components/ui/card-option";
import homeProperty from "@/public/assets/home-property.jpeg";
import multiFamily from "@/public/assets/multi-family.jpeg";
import GetAnOfferFormHeader from "@/components/getoffers/GetAnOfferFormHeader";
import axios from "@/lib/axios";

const propertyTypesList = [
  {
    title: "Home",
    name: PROPERTY_TYPE.HOME,
    image: homeProperty,
  },
  {
    title: "Multi Family",
    name: PROPERTY_TYPE.MULTI_FAMILY,
    image: multiFamily,
  },
];

const homeTypeList = [
  {
    title: "Detached",
    name: HOME_TYPE.DETACHED,
  },
  {
    title: "Townhouse / Condo",
    name: HOME_TYPE.TOWNHOUSE_CONDO,
  },
];

const HomeType = () => {
  const { changeView, changeFields, propertyType, descriptionType, offerId } =
    useGetAnOffer((state) => state);

  const handleNext = async () => {
    try {
      await axios.put(`/offer/${offerId}`, {
        propertyType,
        descriptionType,
      });
      changeView(GET_AN_OFFER_VIEW.HOME_BUILT_INFO);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className={"flex flex-col h-full"}>
      <GetAnOfferHeader />
      <main className={"flex-1 container py-8"}>
        <GetAnOfferFormHeader
          title={"Basics of the property"}
          description={"Let’s learn about the basics of the property"}
        />

        <div className={"mt-10"}>
          <Typography variant={"subtitle1"} className={"mb-6 normal-case"}>
            Property Type
          </Typography>

          <div className={"flex items-center gap-x-4 md:gap-x-6"}>
            {propertyTypesList.map(({ title, name, image }) => {
              return (
                <CardOption
                  key={title}
                  title={title}
                  onClick={() => changeFields({ propertyType: name })}
                  isActive={propertyType === name}
                  image={image}
                  className={
                    "max-w-[282px] w-full py-3 px-3 gap-y-3 md:gap-y-4"
                  }
                />
              );
            })}
          </div>
        </div>

        <div className={"mt-10"}>
          <Typography
            variant={"subtitle1"}
            mobileVariant={"subtitle3"}
            className={"mb-6 normal-case"}
          >
            What best describes your home?
          </Typography>

          <div
            className={
              "flex items-start md:items-center gap-x-6 flex-col md:flex-row gap-y-4 md:gap-y-0"
            }
          >
            {homeTypeList.map(({ title, name }) => {
              return (
                <CardOption
                  key={title}
                  title={title}
                  onClick={() => changeFields({ descriptionType: name })}
                  isActive={descriptionType === name}
                  className={"p-4 w-full md:max-w-[282px] items-start"}
                />
              );
            })}
          </div>
        </div>
      </main>
      <GetAnOfferFooter
        step={1}
        progress={50}
        onClickBack={() => changeView(GET_AN_OFFER_VIEW.PROPERTY_TYPE)}
        onClickNext={handleNext}
      />
    </div>
  );
};

export default HomeType;
