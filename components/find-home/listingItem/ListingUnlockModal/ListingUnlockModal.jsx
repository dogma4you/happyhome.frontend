import React, { useMemo } from "react";
import { Dialog, DialogClose, DialogContent } from "@/components/ui/dialog";
import Close from "@/public/assets/icons/close";
import ListingUnlockModalContent from "@/components/find-home/listingItem/ListingUnlockModal/ListingUnlockModalContent";
import Contract from "@/public/assets/icons/contract";
import useBalanceStore from "@/store/useBalanceStore";
import BalanceIcon from "@/public/assets/icons/balanceIcon";
import { useRouter } from "next/navigation";
import axios from "@/lib/axios";
import toast from "react-hot-toast";

const ListingUnlockModal = ({ isOpened, setOpened, id, mutate }) => {
  const { credits } = useBalanceStore();
  const router = useRouter();

  const handleUnlockCredit = async () => {
    try {
      await axios.put("/contracts/unlock", {
        contract: id,
      });
      await mutate();
      toast.success("Contract has been unlocked.");
    } catch (e) {
      toast.error(e.response?.data?.message || e.message);
    }
  };

  const contentData = useMemo(() => {
    return [
      {
        icon: () => (
          <div
            className={
              "w-[88px] h-[88px] rounded-full bg-blue-1 flex items-center justify-center"
            }
          >
            <Contract width={50} height={50} />
          </div>
        ),
        title: "Unlock Listing",
        description: `You have ${credits} unlock listing credits, use 1 now to unlock listing`,
        buttonTitle: "use a credit",
        onSubmit: handleUnlockCredit,
        isShow: credits,
      },
      {
        icon: () => (
          <BalanceIcon
            className={"!rounded-full size-[80px]"}
            width={50}
            height={50}
          />
        ),
        title: "Unlock Listing",
        description: "You don’t have any unlock listing credits.",
        buttonTitle: "Purchase and unlock",
        onSubmit: () => router.push("/dashboard/unlock-listing"),
        isShow: !credits,
      },
    ];
  }, [credits]);

  return (
    <Dialog open={isOpened} onOpenChange={setOpened}>
      <DialogContent
        className={"max-w-[500px] px-14 pb-[30px] pt-10 ring-0 outline-none"}
      >
        <DialogClose className={"flex justify-end"}>
          <Close
            width={16}
            height={16}
            className={"fill-black dark:fill-white"}
          />
        </DialogClose>
        {contentData.map(
          ({ icon, title, description, buttonTitle, onSubmit, isShow }) => {
            if (!isShow) return null;
            return (
              <ListingUnlockModalContent
                icon={icon}
                title={title}
                description={description}
                buttonTitle={buttonTitle}
                onSubmit={onSubmit}
              />
            );
          },
        )}
      </DialogContent>
    </Dialog>
  );
};

export default ListingUnlockModal;
