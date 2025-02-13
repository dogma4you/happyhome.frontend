import React from "react";
import DataTable from "@/components/ui/DataTable";
import { TableCell, TableRow } from "@/components/ui/table";
import Typography from "@/components/ui/typography";
import Status from "@/components/ui/status";
import { formatCurrency, formatDate, getAddressValue } from "@/utils/helper";
import Delete from "@/public/assets/icons/delete";
import Card from "@/components/ui/card";
import axios, { BASE_URL } from "@/lib/axios";
import Cookies from "js-cookie";
import { useSession } from "next-auth/react";
import { cn } from "@/lib/utils";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import BuyNowButton from "@/components/find-home/BuyNowButton";

const SavedListingTableRow = ({
  id,
  image,
  address,
  expire_at,
  price,
  unlocked,
  handleRemoveSavedItem,
  mutate,
}) => {
  const router = useRouter();
  const addressValue = getAddressValue(address, unlocked);

  const lockedStatus = { title: "Locked", variant: "warning" };
  const unlockedStatus = { title: "Unlocked", variant: "success" };
  const statusData = unlocked ? unlockedStatus : lockedStatus;

  const handleOpenPage = () => {
    if (!unlocked) return;
    router.push(`/find-home/${id}`);
  };

  return (
    <TableRow
      key={id}
      className={cn(
        "last:border-b-0",
        unlocked && "cursor-pointer hover:bg-gray-2",
      )}
      onClick={handleOpenPage}
    >
      <TableCell>
        <div className={"flex items-center gap-x-[15px]"}>
          <div
            className={
              "size-[64px] min-w-[64px] relative overflow-hidden rounded-sm"
            }
          >
            <img src={image} alt={"Saved listing"} className={"image-cover"} />
          </div>

          <div>
            {!unlocked && (
              <Typography
                variant={"subtitle3"}
                className={cn("normal-case", !unlocked && "blur")}
              >
                xxxx xxxxxx xxxx
              </Typography>
            )}

            <Typography variant={"body4"}>{addressValue}</Typography>
          </div>
        </div>
      </TableCell>
      <TableCell>
        <Typography variant={"body4"}>
          {expire_at && formatDate(new Date(expire_at))}
        </Typography>
      </TableCell>
      <TableCell>
        <Status title={statusData.title} variant={statusData.variant} />
      </TableCell>
      <TableCell>
        <Typography variant={"body4"}>{formatCurrency(price)}</Typography>
      </TableCell>
      <TableCell>
        <BuyNowButton
          size={"sm"}
          className={"uppercase px-3 py-2"}
          disabled={!unlocked}
          id={id}
          onSuccess={() => mutate()}
        />
      </TableCell>

      <TableCell onClick={(e) => handleRemoveSavedItem(e, id)}>
        <Delete />
      </TableCell>
    </TableRow>
  );
};
const SavedListingMobileRow = ({
  id,
  image,
  address,
  expire_at,
  price,
  handleRemoveSavedItem,
  unlocked,
  mutate,
}) => {
  const router = useRouter();
  const addressValue = getAddressValue(address, unlocked);

  const handleOpenPage = () => {
    if (!unlocked) return;
    router.push(`/find-home/${id}`);
  };

  return (
    <Card
      className={"p-[10px] flex gap-x-5 bg-background items-center"}
      key={id}
      onClick={handleOpenPage}
    >
      <div className={"size-[96px] rounded-lg relative overflow-hidden"}>
        <img src={image} alt={"Saved listing"} className={"image-cover"} />
      </div>
      <div className={"flex-1 flex flex-col justify-between"}>
        <div className={"flex items-start justify-between gap-x-4"}>
          <div>
            <Typography variant={"body4"} className={"text-xs text-error-10"}>
              {expire_at && formatDate(new Date(expire_at))}
            </Typography>
            {!unlocked && (
              <Typography
                variant={"subtitle3"}
                className={cn("normal-case", !unlocked && "blur")}
              >
                xxxx xxxxxx xxxx
              </Typography>
            )}
            <Typography variant={"body4"}>{addressValue}</Typography>
          </div>
          <div onClick={(e) => handleRemoveSavedItem(e, id)}>
            <Delete />
          </div>
        </div>
        <div className={"flex justify-between items-center mt-2"}>
          <Typography variant={"body3"} className={"font-bold"}>
            {formatCurrency(price)}
          </Typography>
          <BuyNowButton
            size={"xs"}
            className={"uppercase"}
            disabled={!unlocked}
            id={id}
            onSuccess={() => mutate()}
          />
        </div>
      </div>
    </Card>
  );
};

const SavedListingTable = ({ data, mutate }) => {
  const session = useSession();
  const token = session?.user?.accessToken || Cookies.get("accessToken");

  const handleRemoveSavedItem = async (e, id) => {
    e.stopPropagation();
    try {
      const res = await axios.delete(`/saved_lists/${id}`);
      await mutate();
      if (res.data.status === 400) {
        toast.error(res.data.message);
        return;
      }
      toast.success(res.data.message);
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <DataTable
      data={data}
      tableClassName={"bg-background rounded-lg hidden md:table"}
      headerData={[
        "Address",
        "Listing time left",
        "Status",
        "Price",
        "Action",
        "",
      ]}
      renderContent={(tableRow) => {
        const { images } = tableRow;
        return (
          <SavedListingTableRow
            {...tableRow}
            image={`${BASE_URL}/files/${images[0]}?token=${token}`}
            handleRemoveSavedItem={handleRemoveSavedItem}
            mutate={mutate}
          />
        );
      }}
      renderMobileContent={(tableRow) => {
        const { images } = tableRow;
        return (
          <SavedListingMobileRow
            {...tableRow}
            image={`${BASE_URL}/files/${images[0]}?token=${token}`}
            handleRemoveSavedItem={handleRemoveSavedItem}
            mutate={mutate}
          />
        );
      }}
    />
  );
};

export default SavedListingTable;
