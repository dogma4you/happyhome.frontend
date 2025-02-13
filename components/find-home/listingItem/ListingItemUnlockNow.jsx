"use client";

import Icon from "@/components/ui/icon";
import { Button } from "@/components/ui/button";
import ListingUnlockModal from "@/components/find-home/listingItem/ListingUnlockModal/ListingUnlockModal";
import { useState } from "react";
import { useSession } from "next-auth/react";
import { AUTH_VIEW } from "@/utils/constants";
import useAuthStore from "@/store/useAuthStore";

const ListingItemUnlockNow = ({ id, mutate }) => {
  const [isOpened, setOpened] = useState(false);
  const { data: session } = useSession();
  const { changeFields } = useAuthStore();

  const handleUnlockListing = () => {
    if (!session) {
      changeFields({
        view: AUTH_VIEW.LOGIN,
        isLogin: true,
        isDialogOpened: true,
      });
      return;
    }

    setOpened(true);
  };

  return (
    <>
      <ListingUnlockModal
        isOpened={isOpened}
        setOpened={setOpened}
        id={id}
        mutate={mutate}
      />
      <div
        className={
          "flex items-center justify-between mt-3 bg-orange-1 px-3 py-2 rounded-[8px]"
        }
      >
        <div className={"flex items-center gap-x-[10px]"}>
          <Icon name={"warning"} className={"text-orange-7 text-lg"} />
          <p className={"uppercase text-orange-7 text-xs font-bold"}>
            unlock now to view Photos, Contracts, Home Inspection, Scope of
            work, CMA and to Buy now.
          </p>
        </div>
        <Button
          onClick={handleUnlockListing}
          className={
            "px-3 py-2 uppercase text-xs bg-orange-7 border-orange-7 hover:bg-orange-8 hover:border-orange-8"
          }
        >
          unlock now
        </Button>
      </div>
    </>
  );
};

export default ListingItemUnlockNow;
