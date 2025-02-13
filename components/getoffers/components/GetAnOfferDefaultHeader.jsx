import React from "react";
import Logo from "@/public/assets/Logo";
import { useSWRConfig } from "swr";
import { useRouter } from "next/navigation";

const GetAnOfferDefaultHeader = () => {
  const router = useRouter();
  const { mutate } = useSWRConfig();

  const handleClose = async () => {
    await mutate("/offer/list", undefined, { revalidate: true });
    router.push("/");
  };
  return (
    <header className={"py-4 flex justify-center border-b border-b-gray-6 "}>
      <div className={"cursor-pointer"} onClick={handleClose}>
        <Logo onlyDesktopView className={"pointer-events-none"} />
      </div>
    </header>
  );
};

export default GetAnOfferDefaultHeader;
