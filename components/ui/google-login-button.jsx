"use client";
import { useTransition } from "react";
import Image from "next/image";
import { twMerge } from "tailwind-merge";
import cn from "classnames";
import googleIcon from "@/public/assets/icons/google.svg";
import google from "@/actions/google";
import Typography from "@/components/ui/typography";

export default function GoogleLoginButton() {
  const [isPending, startTransition] = useTransition();
  const signinGoogle = async () => {
    if (isPending) return;
    startTransition(async () => {
      await google("google");
    });
  };
  return (
    <div
      onClick={signinGoogle}
      className={twMerge(
        cn(
          "py-3 px-5 flex items-center justify-center gap-x-[15px] rounded-full border border-gray-8  transition-colors hover:bg-gray-1 cursor-pointer",
          {
            "opacity-20": isPending,
          },
        ),
      )}
    >
      <Image
        src={googleIcon}
        width={24}
        height={24}
        alt={"sign in with google"}
      />
      <Typography variant={"subtitle3"} className={"text-gray-11 normal-case"}>
        Sign In with Google
      </Typography>
    </div>
  );
}
