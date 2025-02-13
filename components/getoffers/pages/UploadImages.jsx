import GetAnOfferHeader from "@/components/getoffers/GetAnOfferHeader";
import GetAnOfferFooter from "@/components/getoffers/GetAnOfferFooter";
import useGetAnOffer from "@/store/useGetAnOffer";
import { GET_AN_OFFER_VIEW, SELLER_TYPES } from "@/utils/constants";
import GetAnOfferFormHeader from "@/components/getoffers/GetAnOfferFormHeader";
import Icon from "@/components/ui/icon";
import { useDropzone } from "react-dropzone";
import Typography from "@/components/ui/typography";
import { cn } from "@/lib/utils";
import { useEffect, useState, useTransition } from "react";
import useCongratsDialog from "@/store/useCongratsDialog";
import EmptyDragZoneContent from "@/components/getoffers/components/EmptyDragZoneContent";
import AddMoreDragZoneContent from "@/components/getoffers/components/AddMoreDragZoneContent";
import UploadImageItem from "@/components/getoffers/components/UploadImageItem";
import WhoLeSellerUploadImageItem from "@/components/getoffers/components/WhoLeSellerUploadImageItem";
import { uploadFile } from "@/utils/helper";
import { useSession } from "@/providers/SessionProvider";
import axios from "@/lib/axios";
import { BASE_URL } from "@/lib/axios";
import Cookies from "js-cookie";

const UploadImages = () => {
  const { changeView, sellerType, images, changeFields, offerId } =
    useGetAnOffer();

  const [isPending, startTransition] = useTransition();

  const { changeFields: congratsChangeFields } = useCongratsDialog();

  const session = useSession();
  const accessToken = session?.user?.accessToken;
  const [uploadedImages, setUploadedImages] = useState([]);

  useEffect(() => {
    if (images.length) {
      const token = accessToken || Cookies.get("accessToken");
      setUploadedImages(
        images.map((image) => ({
          isUploaded: true,
          name: image,
          preview: `${BASE_URL}/files/${image}?token=${token}`,
        })),
      );
    }
  }, [images]);

  const [error, setError] = useState(false);

  const headerTitle =
    SELLER_TYPES.WHOLESALER === sellerType ? "list your contract" : "Get offer";

  const { getRootProps, getInputProps } = useDropzone({
    accept: {
      "image/jpeg": [],
      "image/png": [],
      "image/jpg": [],
      "image/webp": [],
      // "application/pdf": [],
    },
    onDrop: (acceptedFiles) => {
      const acceptedFilesMap = acceptedFiles.map((file) => {
        return Object.assign(file, {
          preview: URL.createObjectURL(file),
        });
      });

      setUploadedImages((prev) => [...prev, ...acceptedFilesMap]);
      setError(false);
    },
  });

  const UploadImageItemComponent =
    sellerType === SELLER_TYPES.WHOLESALER
      ? WhoLeSellerUploadImageItem
      : UploadImageItem;

  const onSubmit = () => {
    if (uploadedImages.length === 0) {
      setError({ message: "Please choose an image" });
      return;
    }

    startTransition(async () => {
      try {
        const getImageNamePromises = [];

        const notUploadedImages = uploadedImages.filter(
          ({ isUploaded }) => !isUploaded,
        );
        const uploadedImagesNames = uploadedImages
          .filter(({ isUploaded }) => isUploaded)
          .map(({ name }) => name);

        for (let i = 0; i < notUploadedImages.length; i++) {
          getImageNamePromises.push(uploadFile(notUploadedImages[i], i));
        }
        const response = await Promise.all(getImageNamePromises);
        const imageNames = response.map(({ data }) => data.data);

        await axios.put(`/offer/${offerId}`, {
          images: [...uploadedImagesNames, ...imageNames],
        });
        changeFields({
          images: [...uploadedImagesNames, ...imageNames],
        });

        if (sellerType === SELLER_TYPES.WHOLESALER) {
          changeView(GET_AN_OFFER_VIEW.UPLOAD_DOCUMENTS);
        } else {
          await axios.put(`/offer/submit/${offerId}`);
          congratsChangeFields({ isOpened: true, isDone: true });
        }
      } catch (e) {
        console.error("error", e);
        setError({ message: "Something went wrong" });
      }
    });
  };

  const isImageExist = uploadedImages.length > 0;

  const handleDelete = (index) => {
    setUploadedImages((prev) =>
      prev.filter((_, fileIndex) => fileIndex !== index),
    );
  };

  const handleCoverImage = (file, index) => {
    setUploadedImages((prev) => {
      const filteredImages = prev.filter(
        (_, imageIndex) => imageIndex !== index,
      );

      return [file, ...filteredImages];
    });
  };

  return (
    <div className={"flex flex-col h-full"}>
      <GetAnOfferHeader title={headerTitle} />
      <div
        className={
          "flex flex-col-reverse md:flex-col items-start container md:pt-8 px-0 md:px-4"
        }
      >
        <GetAnOfferFormHeader
          description={
            "Upload current photos of each room, and the exterior photos of the structure and land"
          }
          className={"w-full px-4 pt-4 md:px-0 md:pt-0"}
        />

        <div
          className={
            "inline-flex items-center gap-x-[10px] px-3 py-2 bg-gray-5 md:rounded-sm md:mt-4 w-full md:w-auto"
          }
        >
          <Icon name={"warning"} className={"text-gray-11 text-lg"} />
          <span className={"text-gray-11 text-sm"}>
            If you can not upload now, an email will be sent with a link, to
            upload later.
          </span>
        </div>
      </div>
      <main className={"flex-1 container pb-8"}>
        <div className={"mt-4 md:mt-10"}>
          <Typography variant={"subtitle2"} mobileVariant={"subtitle3"}>
            Upload pictures
          </Typography>
          <div
            className={
              "grid grid-cols-2 gap-4 max-w-[690px] auto-rows-[140px] sm:auto-rows-[180px] md:auto-rows-[228px] mt-4"
            }
          >
            {uploadedImages.map((file, index) => (
              <UploadImageItemComponent
                key={index}
                file={file}
                index={index}
                onDelete={() => handleDelete(index)}
                handleCoverImage={() => handleCoverImage(file, index)}
              />
            ))}
            <div
              {...getRootProps({ className: "dropzone" })}
              className={cn(
                "inline-block rounded-lg px-[60px] py-[37px] md:px-[126px] md:py-[120px] border border-dashed border-[#B0B0B0] md:mt-3 col-span-2 row-span-2",
                isImageExist && "p-0 md:p-0 col-span-1 row-span-1 mt-0 md:mt-0",
                error && "border-error-10",
              )}
            >
              <input {...getInputProps()} />
              {isImageExist ? (
                <AddMoreDragZoneContent />
              ) : (
                <EmptyDragZoneContent error={error} />
              )}
            </div>
          </div>
        </div>
      </main>
      <GetAnOfferFooter
        step={3}
        progress={50}
        showSubmitButton={SELLER_TYPES.WHOLESALER !== sellerType}
        handleSubmit={onSubmit}
        onClickBack={() => changeView(GET_AN_OFFER_VIEW.UPLOADING_PICTURES)}
        onClickNext={onSubmit}
        isLoading={isPending}
      />
    </div>
  );
};

export default UploadImages;
