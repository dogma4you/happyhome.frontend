import GetAnOfferHeader from "@/components/getoffers/GetAnOfferHeader";
import GetAnOfferFooter from "@/components/getoffers/GetAnOfferFooter";
import useGetAnOffer from "@/store/useGetAnOffer";
import { GET_AN_OFFER_VIEW } from "@/utils/constants";
import GetAnOfferFormHeader from "@/components/getoffers/GetAnOfferFormHeader";
import ConditionOfPropertyItem from "@/components/getoffers/ConditionOfPropertyItem";

import roof_and_gutters from "@/public/assets/roof_and_gutter.jpeg";
import hvac from "@/public/assets/hvac.png";
import plumbing_and_gas from "@/public/assets/plumbing_and_gas.jpeg";
import electrical from "@/public/assets/electrical.jpeg";
import kitchen from "@/public/assets/kitchen.jpeg";
import bathroom from "@/public/assets/bathroom.jpeg";
import windows from "@/public/assets/windows.jpeg";
import doors from "@/public/assets/doors.png";
import water_heater from "@/public/assets/water_heater.jpeg";
import foundation from "@/public/assets/foundation.jpeg";
import framing from "@/public/assets/framing.jpeg";
import drywall_and_paint from "@/public/assets/drywall_and_paint.jpeg";
import flooring from "@/public/assets/flooring.jpeg";
import washer_and_dryer from "@/public/assets/washer_and_dryer.jpeg";
import slinding_and_exterior_trim from "@/public/assets/slinding_and_exterior_trim.jpeg";
import deck_patio_and_shed from "@/public/assets/deck_patio_and_shed.jpeg";
import driverways from "@/public/assets/driverways.jpeg";
import optional_features from "@/public/assets/optional_features.jpeg";
import { Controller, useForm } from "react-hook-form";
import axios from "@/lib/axios";

const homeRateFields = [
  {
    title: "Roof and gutters",
    description:
      "Includes underlayment and final layer, fascia board, gutters and downspouts",
    name: "roof_and_gutters",
    image: roof_and_gutters,
  },
  {
    title: "HVAC",
    description: "Includes heating, air conditioning and ventilation",
    name: "hvac",
    image: hvac,
  },
  {
    title: "Plumbing and Gas",
    description: "Includes pipes, toilets, sinks and fixtures",
    name: "plumbing_and_gas",
    image: plumbing_and_gas,
  },
  {
    title: "Electrical",
    description: "includes wiring, outlets and fixtures",
    name: "electrical",
    image: electrical,
  },
  {
    title: "Kitchen",
    description: "Includes cabinets, countertops, appliances and floors",
    name: "kitchen",
    image: kitchen,
  },
  {
    title: "Bathroom(s)",
    description:
      "Includes tub/shower, cabinets, countertops/vanities, mirrors and floor",
    name: "bathrooms",
    image: bathroom,
  },
  {
    title: "Windows",
    description: "Includes windows, locks, casing and screens",
    name: "windows",
    image: windows,
  },
  {
    title: "Doors",
    description: "Includes exterior, interior doors, hardware and casing",
    name: "doors",
    image: doors,
  },
  {
    title: "Water Heater",
    description: "Is it up-to-date and functional?",
    name: "water_heater",
    image: water_heater,
  },
  {
    title: "Foundation",
    description:
      "Includes block/concrete supporting the home, consider cracks, leaning and water intrusion in your rating",
    name: "foundation",
    image: foundation,
  },
  {
    title: "Framing",
    description:
      "Consider ceiling and floor state of level, termite and/or water damage",
    name: "framing",
    image: framing,
  },
  {
    title: "Drywall and Paint",
    description:
      "Includes all wall and ceiling surfaces. Consider cracks, holes",
    name: "dry_wall_and_paint",
    image: drywall_and_paint,
  },
  {
    title: "Flooring",
    description:
      "Includes subfloor and material. Consider stains, and overall condition",
    name: "flooring",
    image: flooring,
  },
  {
    title: "Washer and Dryer",
    description: "Are they up-to-date and functional",
    name: "washer_and_dryer",
    image: washer_and_dryer,
  },
  {
    title: "Siding and Exterior Trim",
    description: "Includes all exterior siding, window and door trim",
    name: "siding_and_exterior_trim",
    image: slinding_and_exterior_trim,
  },
  {
    title: "Deck, Patio and Shed",
    description:
      "Include exterior decks, patios and sheds. Consider overall condition of structures",
    name: "patio_and_shed",
    image: deck_patio_and_shed,
  },
  {
    title: "Driveways, walkways and landscaping",
    description:
      "Includes lawn, gardens, retaining and border walls, drainage, walkways and driveways",
    name: "landscaping",
    image: driverways,
  },
  {
    title: "Optional Features",
    description: "Pool, Hot Tub, Sauna, Fireplace(s), wood-burning stove",
    name: "optional_features",
    image: optional_features,
  },
];

const HomeRate = () => {
  const { changeView, changeFields, property_condition, offerId } =
    useGetAnOffer((state) => state);

  const methods = useForm({
    defaultValues: {
      property_condition,
    },
  });

  const onSubmit = async (value) => {
    try {
      changeFields(value);
      await axios.put(`/offer/${offerId}`, value);
      changeView(GET_AN_OFFER_VIEW.UPLOADING_PICTURES);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <div className={"flex flex-col h-full"}>
      <GetAnOfferHeader />
      <main className={"flex-1 container py-8"}>
        <GetAnOfferFormHeader
          title={"Basics of the property"}
          description={"Rate the following features of your home."}
          className={"mb-14"}
        />

        <Controller
          control={methods.control}
          name="property_condition"
          render={({ field }) => {
            return (
              <div className={"max-w-[1000px] flex flex-col gap-y-10"}>
                {homeRateFields.map(({ title, description, image, name }) => {
                  return (
                    <ConditionOfPropertyItem
                      key={title}
                      image={image}
                      title={title}
                      description={description}
                      onChange={(value) => {
                        field.onChange({
                          ...field.value,
                          [name]: value,
                        });
                      }}
                      value={field.value[name]}
                    />
                  );
                })}
              </div>
            );
          }}
        />
      </main>
      <GetAnOfferFooter
        step={2}
        progress={50}
        onClickBack={() =>
          changeView(GET_AN_OFFER_VIEW.CONDITION_OF_YOUR_PROPERTY)
        }
        onClickNext={methods.handleSubmit(onSubmit)}
      />
    </div>
  );
};

export default HomeRate;
