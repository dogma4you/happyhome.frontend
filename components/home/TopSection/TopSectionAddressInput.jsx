"use client";
import { Button } from "@/components/ui/button";
import { addressValidation } from "@/validations/getAnOfferValidations";
import useGetAnOffer from "@/store/useGetAnOffer";
import Form from "@/components/form/Form";
import GoogleAddressAutoCompleteField from "@/components/form/GoogleAddressAutoCompleteField";
import { useRouter } from "next/navigation";

const TopSectionAddressInput = ({ buttonTitle = "Get Offer", sellerType }) => {
  const { changeFields } = useGetAnOffer();
  const router = useRouter();

  const handleSubmit = ({ address }) => {
    if (address) {
      changeFields({
        address,
        sellerType: sellerType,
      });
      router.push("/getoffer");
    }
  };
  return (
    <Form
      initialValues={{}}
      validationSchema={addressValidation}
      onSubmit={handleSubmit}
    >
      <div className={"mt-6 flex items-center w-full relative max-w-[646px]"}>
        <GoogleAddressAutoCompleteField
          name={"address"}
          id={"address2"}
          placeholder={"Street, house, city, country"}
          className={
            "bg-white/40 border-0 ring-0 focus:ring-0 placeholder:text-white text-white backdrop-blur rounded-[20px] h-[62px] md:h-[72px] pl-[60px] pr-[140px] md:pr-[180px] truncate md:text-clip"
          }
          iconClassName={"text-white text-xl left-[28px]"}
          icon={"map"}
        />
        <Button
          size={"lg"}
          variant={"default-white"}
          className={
            "uppercase font-bold absolute right-2 -translate-y-1/2 top-1/2 py-[10px] px-5 text-md h-auto"
          }
          onClick={handleSubmit}
        >
          {buttonTitle}
        </Button>
      </div>
    </Form>
  );
};

export default TopSectionAddressInput;
