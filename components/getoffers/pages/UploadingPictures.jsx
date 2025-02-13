import Image from "next/image";
import Typography from "@/components/ui/typography";
import { Button } from "@/components/ui/button";
import Arrow from "@/public/assets/icons/arrow";
import { GET_AN_OFFER_VIEW, SELLER_TYPES } from "@/utils/constants";
import useGetAnOffer from "@/store/useGetAnOffer";
import conditionOfProperty from "@/public/assets/condition_of_property.jpeg";
import useCongratsDialog from "@/store/useCongratsDialog";
import GetAnOfferDefaultHeader from "@/components/getoffers/components/GetAnOfferDefaultHeader";

const UploadingPictures = () => {
  const changeView = useGetAnOffer(({ changeView }) => changeView);
  const sellerType = useGetAnOffer(({ sellerType }) => sellerType);

  const { changeFields } = useCongratsDialog();

  const description =
    sellerType === SELLER_TYPES.WHOLESALER
      ? "Our final step to listing your contract is uploading pictures, necessary documents, and agreeing to marketing agreement"
      : "Providing pictures of each room, and exterior features, is necessary to obtain an offer";

  return (
    <main className={"flex flex-col h-full"}>
      <GetAnOfferDefaultHeader />
      <section
        className={
          "flex items-center justify-center xl:justify-start w-full flex-1 gap-x-12"
        }
      >
        <div className={"w-[46%] h-full relative xl:block hidden"}>
          <Image
            src={conditionOfProperty}
            className={
              "w-full h-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 object-cover"
            }
            alt={"Get started to get offer in happy home"}
          />
        </div>

        <div
          className={
            "xl:max-w-[50%] xl:min-w-[700px] pl-6 py-6 pb-8 flex flex-col h-full"
          }
        >
          <div className={"flex flex-col flex-1 justify-center"}>
            <div className={"pr-6 md:pr-[120px]"}>
              <div
                className={
                  "size-9 md:size-14 bg-[#1DCC00]/10 rounded-full flex items-center justify-center mb-3"
                }
              >
                <Typography
                  variant={"h5"}
                  mobileVariant={"subtitle2"}
                  className={"text-[#1DCC00]"}
                >
                  3
                </Typography>
              </div>
              <Typography
                variant={"h3"}
                mobileVariant={"h4"}
                className={"mb-3 max-w-[510px]"}
              >
                upload photos
              </Typography>

              <Typography
                variant={"body1"}
                mobileVariant={"body3"}
                className={"mb-[60px]"}
              >
                {description}
              </Typography>
            </div>
          </div>

          <div
            className={
              "flex justify-between md:justify-end mt-10 pr-4 md:pr-12 md:gap-x-8"
            }
          >
            <Button
              variant={"ghost"}
              size={"lg"}
              mobileSize={"xs"}
              className={"uppercase text-gray-10 pl-0 group/back-button"}
              onClick={() => changeView(GET_AN_OFFER_VIEW.HOME_RATE)}
            >
              <Arrow
                width={10}
                height={15}
                className={
                  "stroke-white rotate-180 group-hover/back-button:stroke-blue-6 transition"
                }
              />
              back
            </Button>
            <div className={"md:ml-auto"}>
              <Button
                size={"lg"}
                mobileSize={"xs"}
                className={"uppercase px-3 md:px-6"}
                variant={"ghost"}
                onClick={() => changeFields({ isOpened: true, isDone: false })}
              >
                Upload later
              </Button>
              <Button
                size={"lg"}
                mobileSize={"xs"}
                className={"uppercase"}
                onClick={() => changeView(GET_AN_OFFER_VIEW.UPLOAD_IMAGES)}
              >
                Upload Now
                <Arrow width={10} height={15} className={"stroke-white"} />
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default UploadingPictures;
