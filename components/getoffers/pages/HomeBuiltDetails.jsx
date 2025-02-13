import GetAnOfferHeader from "@/components/getoffers/GetAnOfferHeader";
import GetAnOfferFooter from "@/components/getoffers/GetAnOfferFooter";
import useGetAnOffer from "@/store/useGetAnOffer";
import {
  AIR_CONDITIONING_OPTIONS,
  ELECTRIC_PANEL_OPTIONS,
  EXTERIOR_TYPE_OPTIONS,
  GET_AN_OFFER_VIEW,
  HEATING_OPTIONS,
  HOA_TYPE,
  HOME_TYPE,
  SEWER_OPTIONS,
  WATER_SUPPLY_OPTIONS,
} from "@/utils/constants";
import GetAnOfferFormHeader from "@/components/getoffers/GetAnOfferFormHeader";
import { FormProvider, useForm } from "react-hook-form";
import InputField from "@/components/form/InputField";
import SelectField from "@/components/form/SelectField";
import MultiSelectField from "@/components/form/MultySelectField";
import RadioField from "@/components/form/RadioField";
import axios from "@/lib/axios";
import { Label } from "@/components/ui/label";

const heatingOptions = [
  {
    value: HEATING_OPTIONS.NONE,
    title: "None",
  },
  {
    value: HEATING_OPTIONS.GAS,
    title: "Gas",
  },
  {
    value: HEATING_OPTIONS.ELECTRIC,
    title: "Electric",
  },
  {
    value: HEATING_OPTIONS.BASEBOARD,
    title: "Baseboard",
  },
  {
    value: HEATING_OPTIONS.OTHER,
    title: "Other",
  },
];

const airConditioningOptions = [
  {
    value: AIR_CONDITIONING_OPTIONS.NONE,
    title: "None",
  },
  {
    value: AIR_CONDITIONING_OPTIONS.CENTRAL_AIR,
    title: "Central Air",
  },
  {
    value: AIR_CONDITIONING_OPTIONS.WINDOW_UNIT,
    title: "Window Unit",
  },
  {
    value: AIR_CONDITIONING_OPTIONS.OTHER,
    title: "Other",
  },
];

const waterSupplyOptions = [
  {
    value: WATER_SUPPLY_OPTIONS.NONE,
    title: "None",
  },
  {
    value: WATER_SUPPLY_OPTIONS.MUNICIPAL_SUPPLY,
    title: "Municipal Supply (city / country)",
  },
  {
    value: WATER_SUPPLY_OPTIONS.WELL,
    title: "Well",
  },
];

const sewerOptions = [
  {
    value: SEWER_OPTIONS.NONE,
    title: "None",
  },
  {
    value: SEWER_OPTIONS.MUNICIPAL_WASTE,
    title: "Municipal Waste (city / country)",
  },
  {
    value: SEWER_OPTIONS.SEPTIC,
    title: "Septic",
  },
];

const electricPanelOptions = [
  {
    value: ELECTRIC_PANEL_OPTIONS.NONE,
    title: "None",
  },
  {
    value: ELECTRIC_PANEL_OPTIONS.AMP_100,
    title: "100 Amp",
  },
  {
    value: ELECTRIC_PANEL_OPTIONS.AMP_200,
    title: "200 Amp",
  },
  {
    value: ELECTRIC_PANEL_OPTIONS.OTHER,
    title: "unknown/other",
  },
];

const exteriorTypeFields = [
  {
    value: EXTERIOR_TYPE_OPTIONS.VINYL,
    title: "Vinyl",
  },
  {
    value: EXTERIOR_TYPE_OPTIONS.ALUMINUM,
    title: "Aluminum",
  },
  {
    value: EXTERIOR_TYPE_OPTIONS.BRICK,
    title: "Brick",
  },
  {
    value: EXTERIOR_TYPE_OPTIONS.CEDAR,
    title: "Cedar",
  },
  {
    value: EXTERIOR_TYPE_OPTIONS.OTHER,
    title: "Other",
  },
];

const hoaOptions = [
  {
    title: "Monthly",
    value: HOA_TYPE.MONTLY,
  },
  {
    title: "Annual",
    value: HOA_TYPE.ANNUAL,
  },
];

const allDetailsSelectOptions = [
  {
    label: "Heating",
    placeholder: "Select heating",
    options: heatingOptions,
    name: "heating",
  },
  {
    label: "Air Conditioning",
    placeholder: "Select air conditioning",
    options: airConditioningOptions,
    name: "airConditioning",
  },
  {
    label: "Water Supply",
    placeholder: "Select Water Supply",
    options: waterSupplyOptions,
    name: "waterSupply",
  },
  {
    label: "Sewer",
    placeholder: "Select Sewer",
    options: sewerOptions,
    name: "sewer",
  },
  {
    label: "Electric Panel",
    placeholder: "Select Electric Panel",
    options: electricPanelOptions,
    name: "electricPanel",
  },
];

const HomeBuiltDetails = () => {
  const {
    changeView,
    changeFields,
    exteriorType,
    lotSize,
    currentHOA,
    descriptionType,
    heating,
    airConditioning,
    waterSupply,
    sewer,
    electricPanel,
    offerId,
  } = useGetAnOffer((state) => state);

  const methods = useForm({
    defaultValues: {
      exteriorType,
      lotSize,
      currentHOA,
      heating,
      airConditioning,
      waterSupply,
      sewer,
      electricPanel,
    },
    // resolver: zodResolver(homeBuiltDetailsValidation),
  });

  const onSubmit = async (values) => {
    const {
      exteriorType,
      lotSize,
      currentHOA,
      heating,
      airConditioning,
      waterSupply,
      sewer,
      electricPanel,
    } = values;

    try {
      await axios.put(`/offer/${offerId}`, values);

      changeFields({
        heating,
        airConditioning,
        waterSupply,
        sewer,
        electricPanel,
        exteriorType,
        lotSize,
        currentHOA,
      });

      changeView(GET_AN_OFFER_VIEW.CONDITION_OF_YOUR_PROPERTY);
    } catch (e) {
      console.error("error", e);
    }
  };

  return (
    <FormProvider {...methods}>
      <div className={"flex flex-col h-full"}>
        <GetAnOfferHeader />
        <main className={"flex-1 container py-8"}>
          <GetAnOfferFormHeader
            title={"Basics of the property"}
            description={"Let’s learn about the basics of the property"}
            className={"mb-14"}
          />

          <div className={"max-w-[600px] flex flex-col gap-y-4 md:gap-y-10"}>
            {allDetailsSelectOptions.map(
              ({ label, options, name, placeholder }) => (
                <SelectField
                  name={name}
                  key={label}
                  label={label}
                  placeholder={placeholder}
                  options={options}
                />
              ),
            )}

            <div>
              <Label className={"label"}>Exterior Type</Label>

              <MultiSelectField
                name={"exteriorType"}
                fields={exteriorTypeFields}
              />
            </div>

            <div>
              <Label className={"label"}>Lot size</Label>

              <InputField
                type={"number"}
                placeholder={"0 ft square"}
                size={"lg"}
                inputProps={{
                  mobileSize: "default",
                }}
                className={"col-span-2"}
                name={"lotSize"}
              />
            </div>

            {descriptionType === HOME_TYPE.TOWNHOUSE_CONDO && (
              <RadioField
                name={"currentHOA"}
                options={hoaOptions}
                label="Current HOA"
              />
            )}
          </div>
        </main>
        <GetAnOfferFooter
          step={1}
          progress={50}
          onClickBack={() => changeView(GET_AN_OFFER_VIEW.HOME_BUILT_INFO)}
          onClickNext={methods.handleSubmit(onSubmit)}
        />
      </div>
    </FormProvider>
  );
};

export default HomeBuiltDetails;
