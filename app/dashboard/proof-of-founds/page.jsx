"use client";

import React, { useEffect, useState, useTransition } from "react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import Link from "next/link";
import Icon from "@/components/ui/icon";
import Typography from "@/components/ui/typography";
import UploadFileField from "@/components/form/UploadFileField";
import UploadedFiles from "@/components/ui/uploaded-files";
import { Button } from "@/components/ui/button";
import useProofOfFounds from "@/store/useProofOfFounds";
import { getUploadedFiles, uploadFile } from "@/utils/helper";
import axios from "@/lib/axios";
import toast from "react-hot-toast";
import useGetOfferList from "@/queries/useGetProofOfFounds";
import { useRouter } from "next/navigation";

export default function () {
  const { files, setProofOfFound, uploaded_files } = useProofOfFounds();
  const [error, setError] = useState(false);
  const { mutate } = useGetOfferList();
  const [isPending, startTransition] = useTransition();

  const router = useRouter();

  useEffect(() => {
    (async () => {
      if (files.length) {
        const { data } = await getUploadedFiles(files);
        const fileDetails = data.data;
        const uploadedFiles = fileDetails.map((file) => ({
          ...file,
          isUploaded: true,
        }));
        setProofOfFound({ uploaded_files: uploadedFiles });
      }
    })();
  }, [files]);

  const handleRemoveFile = (index) => {
    setProofOfFound({
      uploaded_files: uploaded_files.filter(
        (_, fileIndex) => fileIndex !== index,
      ),
    });
  };

  const handleUploadFile = (value) => {
    setError(false);
    setProofOfFound({ uploaded_files: value });
  };

  const handleSubmit = () => {
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

        await axios.put(`/proof_of_founds`, {
          files: [...uploadedFilesNames, ...fileNames],
        });

        await mutate();

        toast.success("Your action uploaded successfully.");

        setProofOfFound({
          files: [...uploadedFilesNames, ...fileNames],
        });

        router.push("/dashboard");
      } catch (e) {
        toast.error("Something went wrong");
        setError({ message: "Something went wrong" });
      }
    });
  };

  return (
    <div className={"flex flex-col h-full"}>
      <div
        className={
          "dashboard-padding flex-grow h-[calc(100%_-_81px)] overflow-y-auto"
        }
      >
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink asChild>
                <Link href="/dashboard">Dashboard</Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator>
              <Icon
                name={"arrow-right"}
                className={"text-base leading-[18px] text-gray-11"}
              />
            </BreadcrumbSeparator>
            <BreadcrumbItem>
              <BreadcrumbPage>Proof of funds</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>

        <div className={"mt-6"}>
          <Typography
            variant={"h5"}
            className={"text-black dark:text-white normal-case mb-2"}
          >
            Proof of funds
          </Typography>

          <Typography variant={"body3"} className={"text-gray-11 normal-case"}>
            In order to Buy Contracts in the Exchange, All Buyers must have
            verified Proof of Funds and/or Pre-Approvals on File, and they are
            valid for 30 days from date of issue.
          </Typography>

          <div className={"mt-7"}>
            <UploadFileField
              value={uploaded_files}
              onChange={handleUploadFile}
              accept={{
                "image/jpeg": [],
                "image/png": [],
                "image/jpg": [],
                "image/webp": [],
                "application/pdf": [],
              }}
              error={error}
            />

            <div className={"mt-10"}>
              {!!uploaded_files.length && (
                <p
                  className={
                    "text-sm mb-4 uppercase mt-10 text-gray-10 font-bold"
                  }
                >
                  Uploaded files
                </p>
              )}

              <div className={"flex flex-col gap-y-3 mt-4 md:max-w-[588px]"}>
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
          </div>
        </div>
      </div>
      <div
        className={
          "flex justify-end py-5 px-8 border-t border-t-gray-7 bg-gray-3"
        }
      >
        <Button
          className={"uppercase"}
          onClick={handleSubmit}
          disabled={isPending}
        >
          Accept
        </Button>
      </div>
    </div>
  );
}
