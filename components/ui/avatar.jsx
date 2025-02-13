"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import userImage from "@/public/assets/icons/user-empty.svg";
import Cookies from "js-cookie";
import { BASE_URL } from "@/lib/axios";
import { useSession } from "next-auth/react";

const Avatar = ({ src, className, onClick = () => {} }) => {
  const [userAvatar, setUserAvatar] = useState(null);
  const { data, update } = useSession();
  const avatar = data?.user?.avatar;
  const accessToken = data?.user?.accessToken;
  const picture = data?.user?.picture;

  useEffect(() => {
    (async () => {
      await update();
    })();
  }, []);

  useEffect(() => {
    if (avatar) {
      const token = accessToken || Cookies.get("accessToken");
      setUserAvatar(`${BASE_URL}/files/${avatar}?token=${token}`);
    }
  }, [avatar]);

  return (
    <div
      onClick={onClick}
      className={cn(
        "size-12 border border-blue-6 rounded-full relative overflow-hidden cursor-pointer",
        className,
      )}
    >
      {src || userAvatar || picture ? (
        <img
          src={src || userAvatar || picture}
          className={"image-cover"}
          alt={"user account"}
        />
      ) : (
        <Image src={userImage} className={"image-cover"} alt={"user account"} />
      )}
    </div>
  );
};

export default Avatar;
