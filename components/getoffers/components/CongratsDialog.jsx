import React from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import Close from "@/public/assets/icons/close";
import Typography from "@/components/ui/typography";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";
import useCongratsDialog from "@/store/useCongratsDialog";
import almostDone from "@/public/assets/icons/almost_done.svg";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { AUTH_VIEW, GET_AN_OFFER_VIEW } from "@/utils/constants";
import Link from "next/link";
import useAuthStore from "@/store/useAuthStore";
import { useSession } from "@/providers/SessionProvider";
import Cookies from "js-cookie";
import axios from "@/lib/axios";
import { useSWRConfig } from "swr";
import { useRouter } from "next/navigation";

const CircleCheck = ({ className, iconClassName }) => {
  return (
    <div
      className={cn(
        "w-[80px] h-[80px] rounded-full bg-[#1DCC00] flex items-center justify-center",
        className,
      )}
    >
      <Icon
        name={"check"}
        className={cn("text-white text-2xl", iconClassName)}
      />
    </div>
  );
};

const AlmostDoneIcon = () => {
  return (
    <div className={"relative"}>
      <CircleCheck
        className={
          "w-[32px] h-[32px] md:w-[40px] md:h-[40px] absolute -top-[15px] md:-top-[20px] left-1/2 -translate-x-1/2"
        }
        iconClassName={"text-sm"}
      />
      <Typography
        variant={"h5"}
        mobileVariant={"subtitle1"}
        className={
          "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
        }
      >
        75%
      </Typography>
      <Image
        src={almostDone}
        alt="almost done"
        width={116}
        height={116}
        className={"w-[80px] h-[80px] md:w-[116px] md:h-[116px]"}
      />
    </div>
  );
};

const UploadLaterUrl = () => {
  const token = Cookies.get("accessToken");
  const refreshToken = Cookies.get("refresh_token");
  const url = `${window.origin}/upload-latter?token=${token}&refreshtoken=${refreshToken}&offerview=${GET_AN_OFFER_VIEW.UPLOAD_IMAGES}`;

  const copyUrl = () => {
    navigator.clipboard.writeText(url).then(() => {});
  };
  return (
    <div
      className={
        "py-3 px-4 bg-blue-1 rounded-[8px] flex items-center cursor-pointer"
      }
      onClick={copyUrl}
    >
      <Typography
        variant={"subtitle1"}
        mobileVariant={"subtitle3"}
        className={"lowercase text-blue-6 truncate w-full "}
      >
        {url}
      </Typography>
      <Icon name={"copy"} className={"text-blue-6 text-lg"} />
    </div>
  );
};

const CongratsDialog = () => {
  const { isDone, isOpened, changeFields } = useCongratsDialog();
  const router = useRouter();
  const { changeFields: changeAuthFields } = useAuthStore();
  const session = useSession();
  const { mutate } = useSWRConfig();
  const title = isDone ? "Great, thank you" : "GREAT, ALMOST DONE";
  const description = isDone
    ? "Congratulations on moving forward with your home sale. We are sure you will be in your own Happy Home soon! We are working to make you our best offer. Your offer will arrive soon, usually between 4 to 12 hours"
    : "Copy this link to upload pictures when ready. Once your pictures are uploaded, we will review your details to make you our best offer";

  const handleCloseOffer = async () => {
    changeFields({ isOpened: false });
    await mutate("/offer/list", undefined, { revalidate: true });
    router.push("/");
  };

  const showLoginDialog = async () => {
    await handleCloseOffer();

    const { data } = await axios.get("/user/self");
    const { first_name, last_name, email, phone } = data.data;

    changeAuthFields({
      view: AUTH_VIEW.REGISTER,
      isLogin: false,
      isDialogOpened: true,
      isFromOffer: true,
      registerValues: {
        first_name,
        last_name,
        email,
        phone,
        accept_terms: undefined,
        confirm_password: undefined,
        password: undefined,
      },
    });
  };

  return (
    <Dialog open={isOpened} onOpenChange={handleCloseOffer}>
      <DialogContent
        className={"w-[648px] pb-10 h-auto"}
        overlayClassName={"z-[60] items-center"}
        disableOutsideClick
      >
        <div className={"flex justify-end"}>
          <Close
            width={16}
            height={16}
            className={"fill-black dark:fill-white cursor-pointer"}
            onClick={handleCloseOffer}
          />
        </div>
        <div className={"flex justify-center mt-6"}>
          {isDone ? <CircleCheck /> : <AlmostDoneIcon />}
        </div>
        <Typography
          variant={"h4"}
          mobileVariant={"h5"}
          className={"text-center mt-10"}
        >
          {title}
        </Typography>

        <Typography
          variant={"body1"}
          mobileVariant={"body3"}
          className={"text-center mt-3"}
        >
          {description}
        </Typography>

        <div className={"flex justify-center mt-10"}>
          {!session && isDone && (
            <Button size={"sm"} onClick={showLoginDialog}>
              REGISTER
            </Button>
          )}
          {session && isDone && (
            <Link href={"/dashboard"}>
              <Button size={"sm"}>GO TO DASHBOARD</Button>
            </Link>
          )}
        </div>

        {!isDone && <UploadLaterUrl />}
      </DialogContent>
    </Dialog>
  );
};

export default CongratsDialog;
