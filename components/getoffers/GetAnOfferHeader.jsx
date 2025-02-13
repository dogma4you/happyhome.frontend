import Typography from "@/components/ui/typography";
import { Button } from "@/components/ui/button";
import { useSWRConfig } from "swr";
import { useRouter } from "next/navigation";

const GetAnOfferHeader = ({ title = "Get Offer" }) => {
  const { mutate } = useSWRConfig();
  const router = useRouter();

  const handleClose = async () => {
    await mutate("/offer/list", undefined, { revalidate: true });
    router.push("/");
  };
  return (
    <header className={"border-b border-b-[#DDD]"}>
      <div className={"container flex justify-between py-6 items-center"}>
        <Typography variant={"h4"} mobileVariant={"subtitle2"}>
          {title}
        </Typography>
        <Button
          variant={"outline"}
          className={"border-gray-8 text-gray-11 uppercase"}
          onClick={handleClose}
          mobileSize={"xs"}
        >
          save and exit
        </Button>
      </div>
    </header>
  );
};

export default GetAnOfferHeader;
