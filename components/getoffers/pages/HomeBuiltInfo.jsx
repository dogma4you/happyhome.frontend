import GetAnOfferHeader from "@/components/getoffers/GetAnOfferHeader";
import GetAnOfferFooter from "@/components/getoffers/GetAnOfferFooter";
import useGetAnOffer from "@/store/useGetAnOffer";
import { GET_AN_OFFER_VIEW, PROPERTY_TYPE } from "@/utils/constants";
import Icon from "@/components/ui/icon";
import GetAnOfferFormHeader from "@/components/getoffers/GetAnOfferFormHeader";
import NumberField from "@/components/form/NumberField";
import { Button } from "@/components/ui/button";
import DatePickerField from "@/components/form/DatePickerField";
import InputField from "@/components/form/InputField";
import { cn } from "@/lib/utils";
import trash from "@/public/assets/icons/trash.svg";
import Image from "next/image";
import { FormProvider, useFieldArray, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { homePropertyValidation } from "@/validations/getAnOfferValidations";
import axios from "@/lib/axios";

const HomeBuiltInfo = () => {
  const { changeView, changeFields, propertyType, offerId, builtYear, areas } =
    useGetAnOffer();
  const methods = useForm({
    defaultValues: {
      builtYear: new Date(builtYear),
      areas,
    },
    resolver: zodResolver(homePropertyValidation),
  });

  const { fields, append, remove } = useFieldArray({
    control: methods.control,
    name: "areas",
  });

  const onSubmit = async (values) => {
    const builtYearDate = values.builtYear;
    const builtYearTimeOffset = new Date(
      builtYearDate.getTime() - builtYearDate.getTimezoneOffset() * 60000,
    ).toISOString();
    try {
      await axios.put(`/offer/${offerId}`, {
        builtYear: builtYearTimeOffset,
        areas: values.areas,
      });
      changeFields({
        builtYear: values.builtYear,
        areas: values.areas,
      });
      changeView(GET_AN_OFFER_VIEW.HOME_BUILT_DETAILS);
    } catch (e) {
      console.error(e);
    }
  };

  const renderYearContent = (year) => {
    return <div>{year}</div>;
  };

  return (
    <FormProvider {...methods}>
      <div className={"flex flex-col h-full"}>
        <GetAnOfferHeader />
        <main className={"flex-1 container py-8"}>
          <GetAnOfferFormHeader
            title={"Property basics"}
            description={"Tell us about the basics of the property"}
            className={"mb-14"}
          />

          <div className={"max-w-[600px]"}>
            <DatePickerField
              label={"Year built"}
              name={"builtYear"}
              showYearPicker
              dateFormat={"yyyy"}
              placeholderText={"Ex. 2018"}
              renderYearContent={renderYearContent}
              yearClassName={() =>
                "p-2 text-center hover:bg-blue-7 hover:text-white rounded-lg"
              }
              popperClassName={"popperClassName"}
              className={"p-4 md:p-6"}
            />

            {fields.map(({ square_feet, bedrooms, bathrooms }, index, arr) => {
              const isLastLoop = index === arr.length - 1;
              return (
                <div className={"mt-4"} key={index}>
                  <div
                    className={cn(
                      "mt-4",
                      propertyType === PROPERTY_TYPE.MULTI_FAMILY &&
                        "border border-gray-6 p-4 rounded-lg",
                    )}
                  >
                    <InputField
                      name={`areas.${index}.square_feet`}
                      label="Square feet"
                      type={"number"}
                      placeholder={"0 ft square"}
                      size={"lg"}
                      className={"col-span-2"}
                      inputProps={{
                        mobileSize: "default",
                      }}
                    />
                    <div className={"grid grid-cols-2 gap-6 mt-4"}>
                      <NumberField
                        name={`areas.${index}.bedrooms`}
                        title={"Bedrooms"}
                        maxValue={99}
                      />

                      <NumberField
                        name={`areas.${index}.bathrooms`}
                        title={"Bathrooms"}
                        maxValue={99}
                      />

                      {arr.length > 1 && (
                        <div className={"col-span-2 text-right"}>
                          <Button
                            variant={"ghost"}
                            size={"sm"}
                            className={
                              "uppercase text-error-10 hover:text-error-11 "
                            }
                            onClick={() => remove(index)}
                          >
                            <Image
                              width={20}
                              height={20}
                              src={trash}
                              alt={"trash"}
                            />
                            delete a unit
                          </Button>
                        </div>
                      )}
                    </div>
                  </div>

                  {propertyType === PROPERTY_TYPE.MULTI_FAMILY && (
                    <div className={"flex items-center justify-end mt-5"}>
                      {isLastLoop && (
                        <Button
                          variant={"ghost"}
                          size={"sm"}
                          className={"uppercase"}
                          onClick={() =>
                            append({
                              square_feet: undefined,
                              bedrooms: 1,
                              bathrooms: 1,
                            })
                          }
                        >
                          <Icon name={"plus"} /> Add A Unit
                        </Button>
                      )}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </main>
        <GetAnOfferFooter
          step={1}
          progress={50}
          onClickBack={() => changeView(GET_AN_OFFER_VIEW.HOME_TYPE)}
          onClickNext={methods.handleSubmit(onSubmit)}
        />
      </div>
    </FormProvider>
  );
};

export default HomeBuiltInfo;
