import React from "react";
import { useDropzone } from "react-dropzone";
import { cn } from "@/lib/utils";
import Icon from "@/components/ui/icon";

const UploadFileField = ({ value, onChange, accept, error }) => {
  const { getRootProps, getInputProps } = useDropzone({
    accept: accept,
    onDrop: (acceptedFiles) => {
      const acceptedFilesMap = acceptedFiles.map((file) => {
        return Object.assign(file, {
          preview: URL.createObjectURL(file),
        });
      });
      onChange([...value, ...acceptedFilesMap]);
    },
  });
  return (
    <div>
      <div
        {...getRootProps({ className: "dropzone" })}
        className={cn(
          "inline-block rounded-lg p-6 border border-dashed border-[#B0B0B0] mt-4 md:mt-10 col-span-2 row-span-2 w-full md:w-auto md:min-w-[588px]",
          error && "border-error-10",
        )}
      >
        <input {...getInputProps()} />
        <div className={"flex items-center gap-x-4"}>
          <Icon
            name={"upload-file"}
            className={cn(
              "text-[35px] leading-[35px] md:text-[40px] md:leading-[40px] text-black dark:text-white",
              error && "text-error-10 dark:text-error-10",
            )}
          />
          <div>
            <p
              className={
                "font-bold leading-[24px] uppercase text-gray-12 m-0 font-openSans text-sm md:text-base"
              }
            >
              Drop your files here, or{" "}
              <span className={"text-blue-6"}>browse</span>
            </p>
            <span className={"text-gray-10 text-xs md:text-sm font-openSans"}>
              Supports: PDF, JPG, JPEG, WEBP
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UploadFileField;
