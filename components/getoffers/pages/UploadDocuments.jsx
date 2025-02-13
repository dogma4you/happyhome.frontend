import useGetAnOffer from "@/store/useGetAnOffer";
import GetAnOfferHeader from "@/components/getoffers/GetAnOfferHeader";
import GetAnOfferFooter from "@/components/getoffers/GetAnOfferFooter";
import GetAnOfferFormHeader from "@/components/getoffers/GetAnOfferFormHeader";
import Icon from "@/components/ui/icon";
import { GET_AN_OFFER_VIEW, SELLER_TYPES } from "@/utils/constants";
import { Checkbox } from "@/components/ui/checkbox";
import * as React from "react";
import Typography from "@/components/ui/typography";
import UploadFileField from "@/components/form/UploadFileField";
import UploadedFiles from "@/components/ui/uploaded-files";
import { useEffect, useState, useTransition } from "react";
import { getUploadedFiles, uploadFile } from "@/utils/helper";
import useCongratsDialog from "@/store/useCongratsDialog";
import axios from "@/lib/axios";
import { Label } from "@/components/ui/label";

const CheckboxesWithLabel = ({ label }) => {
  return (
    <div className="flex items-start space-x-2">
      <Checkbox id={"confirm-1"} />
      <Label
        htmlFor={"confirm-1"}
        className="text-xs md:text-xs leading-[20px] md:leading-[20px] text-gray-11 dark:text-white font-medium peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
      >
        {label}
      </Label>
    </div>
  );
};

const UploadDocuments = () => {
  const {
    changeView,
    sellerType,
    uploaded_files,
    changeFields,
    offerId,
    files,
  } = useGetAnOffer();

  const { changeFields: congratsChangeFields } = useCongratsDialog();
  const [isPending, startTransition] = useTransition();

  const [error, setError] = useState(false);

  useEffect(() => {
    (async () => {
      const { data } = await getUploadedFiles(files);
      const fileDetails = data.data;
      const uploadedFiles = fileDetails.map((file) => ({
        ...file,
        isUploaded: true,
      }));
      changeFields({ uploaded_files: uploadedFiles });
    })();
  }, []);

  const handleRemoveFile = (index) => {
    changeFields({
      uploaded_files: uploaded_files.filter(
        (_, fileIndex) => fileIndex !== index,
      ),
    });
  };

  const handleSubmit = async () => {
    if (uploaded_files.length === 0) {
      setError(true);
      return;
    }

    startTransition(async () => {
      try {
        const getFileNamePromises = [];

        const notUploadedFiles = uploaded_files.filter(
          ({ isUploaded }) => !isUploaded,
        );

        const uploadedFilesNames = uploaded_files
          .filter(({ isUploaded }) => isUploaded)
          .map(({ name }) => name);

        for (let i = 0; i < notUploadedFiles.length; i++) {
          getFileNamePromises.push(uploadFile(notUploadedFiles[i]));
        }
        const response = await Promise.all(getFileNamePromises);
        const fileNames = response.map(({ data }) => data.data);

        await axios.put(`/offer/${offerId}`, {
          files: [...uploadedFilesNames, ...fileNames],
        });

        await axios.put(`/offer/submit/${offerId}`);

        changeFields({
          files: [...uploadedFilesNames, ...fileNames],
        });

        congratsChangeFields({ isOpened: true, isDone: true });
      } catch (e) {
        console.error("error", e);
        setError({ message: "Something went wrong" });
      }
    });
  };

  const headerTitle =
    SELLER_TYPES.WHOLESALER === sellerType ? "list your contract" : "Get offer";

  return (
    <div className={"flex flex-col h-full"}>
      <GetAnOfferHeader title={headerTitle} />
      <div
        className={
          "flex flex-col-reverse md:flex-col items-start container md:pt-8 px-0 md:px-4"
        }
      >
        <GetAnOfferFormHeader
          title={"UPLOAD"}
          description={"Upload documents, and agreeing to marketing agreement"}
          infoText={
            "Upload Assignment contract and Assignable real estate purchase agreement"
          }
          className={
            "w-full px-4 pt-4 md:px-0 md:pt-0 [&>div]:block [&>div]:mt-4 xl:[&>div]:mt-0 flex-col-reverse xl:flex-row items-start"
          }
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
      <main className={"flex-1 container md:py-8 pb-6"}>
        <UploadFileField
          value={uploaded_files}
          onChange={(value) => {
            setError(false);
            changeFields({
              uploaded_files: value,
            });
          }}
          accept={{
            "image/jpeg": [],
            "image/png": [],
            "image/jpg": [],
            "image/webp": [],
            "application/pdf": [],
          }}
          error={error}
        />

        {!!uploaded_files.length && (
          <div className={"mt-10"}>
            <p
              className={"text-sm mb-4 uppercase mt-10 text-gray-10 font-bold"}
            >
              Uploaded files
            </p>
            <div className={"flex flex-col gap-y-3 mt-4 max-w-[588px]"}>
              {uploaded_files.map((file, index) => {
                return (
                  <UploadedFiles
                    file={file}
                    onRemove={() => handleRemoveFile(index)}
                  />
                );
              })}
            </div>
          </div>
        )}

        <Typography
          variant={"subtitle3"}
          className={"mt-4 md:mt-[64px] normal-case text-xs md:text-base"}
        >
          Terms and conditions
        </Typography>
        <div className={"flex flex-col gap-y-3 mt-4"}>
          <CheckboxesWithLabel
            label={"Must pay for or supply third-party home inspection."}
            name={"checkbox-1"}
          />
          <CheckboxesWithLabel
            label={
              "You agree to list your property exclusively on our website. This entails sharing links to the listing."
            }
            name={"checkbox-2"}
          />
          <CheckboxesWithLabel
            label={"You agree to disclose any collectible upfront fees."}
            name={"checkbox-3"}
          />
        </div>

        <Typography
          variant={"subtitle3"}
          className={"mt-4 md:mt-[64px] normal-case text-xs md:text-base"}
        >
          Marketing and Collection Agreement
        </Typography>
        <div className={"flex flex-col gap-y-3 mt-4"}>
          <CheckboxesWithLabel
            label={
              "I authorize The Happy Home Initiative, LLC to market my contract, in exchange for a marketing fee of $5000. I authorize The Happy Home Initiative, LLC to collect assignment, finder’s fees on my behalf, from contract buyer. I authorize The Happy Home Initiative, LLC to deduct $5000 marketing fee from aggregate collected fees. I authorize The Happy Home Initiative, LLC to transfer Earnest Money Deposit to designated title company."
            }
            name={"checkbox-4"}
          />
        </div>
      </main>
      <GetAnOfferFooter
        step={3}
        progress={50}
        showSubmitButton={true}
        isLoading={isPending}
        handleSubmit={handleSubmit}
        onClickBack={() => changeView(GET_AN_OFFER_VIEW.UPLOAD_IMAGES)}
      />
    </div>
  );
};

export default UploadDocuments;
