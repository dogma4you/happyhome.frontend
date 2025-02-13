"use client";
import React, { useEffect, useState, useTransition } from "react";
import Avatar from "@/components/ui/avatar";
import EditButton from "@/public/assets/icons/editbutton";
import { useDropzone } from "react-dropzone";
import Typography from "@/components/ui/typography";
import EditPassword from "@/components/dashboard/settings/EditPassword";
import { EDIT_TYPE } from "@/utils/constants";
import { cn } from "@/lib/utils";
import Icon from "@/components/ui/icon";
import ForgotPassword from "@/components/dashboard/settings/forgotPassword/ForgotPassword";
import EditUserName from "@/components/dashboard/settings/EditUserName";
import EditEmail from "@/components/dashboard/settings/EditEmail";
import EditPhone from "@/components/dashboard/settings/EditPhone";
import { useSession } from "next-auth/react";
import axios from "@/lib/axios";
import toast from "react-hot-toast";
import { uploadFile } from "@/utils/helper";

const UserImage = () => {
  const [uploadedImage, setUploadedImage] = useState();

  const { update, data } = useSession();

  const { getRootProps, getInputProps } = useDropzone({
    accept: {
      "image/jpeg": [],
      "image/png": [],
      "image/jpg": [],
      "image/webp": [],
    },
    maxSize: 1024 * 10000,
    onDrop: async (acceptedFiles) => {
      const uploadedFiles = acceptedFiles[0];
      const file = Object.assign(uploadedFiles, {
        preview: URL.createObjectURL(uploadedFiles),
      });

      try {
        const uploadFileResponse = await uploadFile(file);

        const imageName = uploadFileResponse.data.data;

        try {
          await axios.put("/user/personal_info", {
            avatar: imageName,
          });
          await update({
            ...data,
            user: { ...data.user, avatar: imageName },
          });
          toast.success("Avatar is updated!");
        } catch (e) {
          toast.error("User Avatar upload failed!");
        }

        setUploadedImage(file);
      } catch (e) {
        toast.error("Error uploading file");
      }
    },
    noDrag: true,
  });

  return (
    <div className={"relative inline-block"}>
      <Avatar src={uploadedImage?.preview} className={"w-[124px] h-[124px]"} />
      <div
        {...getRootProps({ className: "dropzone" })}
        className={
          "absolute bottom-0 right-0 size-10 min-w-10 bg-background rounded-full border border-gray-6 flex items-center justify-center hover:bg-gray-6 cursor-pointer transition-colors"
        }
      >
        <input {...getInputProps()} />
        <EditButton />
      </div>
    </div>
  );
};

const EditSettingButton = ({ isActive, className, onClick }) => {
  if (isActive)
    return (
      <div
        onClick={onClick}
        className={cn("rotate-45 cursor-pointer", className)}
      >
        <Icon
          name={"plus"}
          className={"block w-[20px] h-[20px] text-gray-11"}
        />
      </div>
    );
  return (
    <EditButton onClick={onClick} className={cn("cursor-pointer", className)} />
  );
};

const PersonalInformation = () => {
  const [currentEditType, setCurrentEditType] = useState();
  const { data, update } = useSession();
  const [isPending, startTransition] = useTransition();

  useEffect(() => {
    (async () => {
      await update();
    })();
  }, []);

  const user = data?.user || {};

  const handleResetEditType = () => {
    setCurrentEditType(undefined);
  };

  const isEditDisabled = (name) => currentEditType && currentEditType !== name;
  const handleEditType = (name) => {
    if (isEditDisabled(name)) {
      return;
    }

    if (currentEditType === name) {
      handleResetEditType();
    } else {
      setCurrentEditType(name);
    }
  };

  const handleForgotPassword = async () => {
    if (currentEditType === EDIT_TYPE.PASSWORD) return null;
    startTransition(async () => {
      try {
        await axios.get("/auth/reset_verification", {
          params: {
            type: 2,
            email: data.user.email,
          },
        });
        setCurrentEditType(EDIT_TYPE.FORGOT_PASSWORD);
      } catch (e) {
        toast.error(e?.response?.data?.message || "Something went wrong");
      }
    });
  };

  return (
    <div className={"dashboard-padding max-w-[550px]"}>
      <UserImage />

      <div className={"py-6 border-b border-b-gray-6"}>
        <div
          className={cn(
            "flex items-start justify-between",
            isEditDisabled(EDIT_TYPE.NAME) && "opacity-70",
          )}
        >
          <div>
            <Typography variant={"subtitle2"}>Name</Typography>
            <Typography variant={"body4"} className={"mt-2"}>
              {user.first_name} {user.last_name}
            </Typography>
          </div>
          <EditSettingButton
            isActive={currentEditType === EDIT_TYPE.NAME}
            onClick={() => handleEditType(EDIT_TYPE.NAME)}
            className={"cursor-pointer"}
          />
        </div>
        {currentEditType === EDIT_TYPE.NAME && (
          <EditUserName onSuccess={handleResetEditType} />
        )}
      </div>

      {![1, 2].includes(user.type) && (
        <div className={"py-6 border-b border-b-gray-6"}>
          <div
            className={cn(
              "flex items-start justify-between",
              isEditDisabled(EDIT_TYPE.EMAIL) && "opacity-70",
            )}
          >
            <div>
              <Typography variant={"subtitle2"}>Email</Typography>
              <Typography variant={"body4"} className={"mt-2"}>
                {user.email}
              </Typography>
            </div>
            <EditSettingButton
              isActive={currentEditType === EDIT_TYPE.EMAIL}
              onClick={() => handleEditType(EDIT_TYPE.EMAIL)}
              className={"cursor-pointer"}
            />
          </div>

          {currentEditType === EDIT_TYPE.EMAIL && (
            <EditEmail onSuccess={handleResetEditType} />
          )}
        </div>
      )}

      <div className={"border-b border-b-gray-6 py-6"}>
        <div
          className={cn(
            "flex items-start justify-between",
            isEditDisabled(EDIT_TYPE.PHONE) && "opacity-70",
          )}
        >
          <div>
            <Typography variant={"subtitle2"}>Phone</Typography>
            <Typography variant={"body4"} className={"mt-2"}>
              {user.phone}
            </Typography>
          </div>
          <EditSettingButton
            isActive={currentEditType === EDIT_TYPE.PHONE}
            onClick={() => handleEditType(EDIT_TYPE.PHONE)}
            className={"cursor-pointer"}
          />
        </div>
        {currentEditType === EDIT_TYPE.PHONE && (
          <EditPhone onSuccess={handleResetEditType} />
        )}
      </div>

      <div className={" py-6 border-b border-b-gray-6"}>
        <div
          className={cn(
            "flex items-start justify-between",
            isEditDisabled(EDIT_TYPE.FORGOT_PASSWORD) && "opacity-70",
          )}
        >
          <div>
            <Typography variant={"subtitle2"}>Password</Typography>
            <Typography variant={"body4"} className={"mt-2"}>
              **********
            </Typography>
          </div>
          <div className={"flex items-center"}>
            <span
              onClick={handleForgotPassword}
              className={cn(
                "text-xs font-bold leading-[18px] text-blue-6 uppercase mr-3 cursor-pointer",
                isPending && "opacity-70 pointer-events-none",
              )}
            >
              Forgot password?
            </span>

            <EditSettingButton
              isActive={currentEditType === EDIT_TYPE.PASSWORD}
              onClick={() => handleEditType(EDIT_TYPE.PASSWORD)}
              className={cn(
                "cursor-pointer",
                isEditDisabled(EDIT_TYPE.PASSWORD) && "opacity-70",
              )}
            />
          </div>
        </div>

        {currentEditType === EDIT_TYPE.PASSWORD && (
          <EditPassword onSuccess={handleResetEditType} />
        )}
        {currentEditType === EDIT_TYPE.FORGOT_PASSWORD && (
          <ForgotPassword onSuccess={handleResetEditType} />
        )}
      </div>
    </div>
  );
};

export default PersonalInformation;
