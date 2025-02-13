"use client";
import React from "react";
import DataTable from "@/components/ui/DataTable";
import { TableCell, TableRow } from "@/components/ui/table";
import Image from "next/image";
import Typography from "@/components/ui/typography";
import { formatCurrency, formatDate, getAddressValue } from "@/utils/helper";
import Card from "@/components/ui/card";
import Cookies from "js-cookie";
import { BASE_URL } from "@/lib/axios";
import { useSession } from "next-auth/react";

const PurchasedContractTableRow = ({
  id,
  images,
  address,
  expire_at,
  price,
  totalAmount,
}) => {
  const { data: session } = useSession();
  const token = session?.user?.accessToken || Cookies.get("accessToken");
  const image = `${BASE_URL}/files/${images[0]}?token=${token}`;

  const addressValue = getAddressValue(address, true);
  return (
    <TableRow key={id} className={"last:border-b-0"}>
      <TableCell>
        <div className={"flex items-center gap-x-[15px]"}>
          <div
            className={
              "size-[64px] min-w-[64px] relative overflow-hidden rounded-sm"
            }
          >
            <Image
              width={96}
              height={96}
              src={image}
              alt={"Saved listing"}
              className={"image-cover"}
            />
          </div>

          <Typography variant={"body4"}>{addressValue}</Typography>
        </div>
      </TableCell>
      <TableCell>
        <Typography variant={"body4"}>
          {expire_at && formatDate(new Date(expire_at))}
        </Typography>
      </TableCell>
      <TableCell>
        <Typography variant={"body4"}>{formatCurrency(price)}</Typography>
      </TableCell>
      <TableCell>
        <Typography variant={"body4"}>{formatCurrency(totalAmount)}</Typography>
      </TableCell>
    </TableRow>
  );
};
const PurchasedContractTableMobileRow = ({
  id,
  images,
  address,
  expire_at,
  price,
  totalAmount,
}) => {
  const { data: session } = useSession();
  const token = session?.user?.accessToken || Cookies.get("accessToken");
  const image = `${BASE_URL}/files/${images[0]}?token=${token}`;

  const addressValue = getAddressValue(address, true);
  return (
    <Card
      className={"p-[10px] flex gap-x-5 bg-background items-center"}
      key={id}
    >
      <div className={"size-[96px] rounded-lg relative overflow-hidden"}>
        <Image
          src={image}
          alt={"Happy home want to buy a property"}
          className={"image-cover"}
          width={96}
          height={96}
        />
      </div>
      <div className={"flex-1 flex flex-col justify-between"}>
        <div className={"flex items-start justify-between gap-x-4"}>
          <div>
            <Typography variant={"body4"} className={"text-xs text-error-10"}>
              {expire_at && formatDate(new Date(expire_at))}
            </Typography>
            <Typography variant={"body4"}>{addressValue}</Typography>
          </div>
        </div>
        <div className={"flex justify-start items-center mt-2 gap-2"}>
          <Typography variant={"body4"}>Required deposit:</Typography>
          <Typography variant={"body3"} className={"font-bold"}>
            {formatCurrency(price)}
          </Typography>
        </div>

        <div className={"flex justify-start items-center gap-2"}>
          <Typography variant={"body4"}>Total price due at closing:</Typography>
          <Typography variant={"body3"} className={"font-bold"}>
            {formatCurrency(totalAmount)}
          </Typography>
        </div>
      </div>
    </Card>
  );
};

const PurchasedContractTable = ({ data }) => {
  return (
    <DataTable
      data={data}
      tableClassName={"bg-background rounded-lg hidden md:table"}
      headerData={[
        "Address",
        "Listing time left",
        "required deposit",
        " total price due at closing",
      ]}
      renderContent={(tableRow) => {
        return <PurchasedContractTableRow {...tableRow} />;
      }}
      renderMobileContent={(tableRow) => {
        return <PurchasedContractTableMobileRow {...tableRow} />;
      }}
    />
  );
};

export default PurchasedContractTable;
