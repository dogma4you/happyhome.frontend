"use client";

import React, { useState } from "react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import Link from "next/link";
import Icon from "@/components/ui/icon";
import Typography from "@/components/ui/typography";
import { TableCell, TableRow } from "@/components/ui/table";
import Status from "@/components/ui/status";
import { formatCurrency, formatDate } from "@/utils/helper";
import DataTable from "@/components/ui/DataTable";
import { cn } from "@/lib/utils";
import Card from "@/components/ui/card";
import useTransactions from "@/queries/useTransactions";
import { Skeleton } from "@/components/ui/skeleton";
import PaginationField from "@/components/form/PaginationField";
import { TRANSACTIONS, TRANSACTIONS_TYPE } from "@/utils/constants";

const transactionsStatusData = {
  [TRANSACTIONS.PENDING]: {
    title: "PENDING",
    variant: "success",
  },
  [TRANSACTIONS.COMPLETED]: {
    title: "RECEIVED",
    variant: "success",
  },
  [TRANSACTIONS.REJECT]: {
    title: "REJECTED",
    variant: "danger",
  },
};

const transactionsTypeData = {
  [TRANSACTIONS_TYPE.BALANCE_FILL]: "Contract Purchase Balance Deposit",
  [TRANSACTIONS_TYPE.CREDITS_FILL]: "Unlock Listings Credit Balance Deposit",
  [TRANSACTIONS_TYPE.CREDIT_FILL_BY_ADMIN]:
    "Unlock Listings Credit Balance Deposit By Admin",
};

const TransactionsTableRow = (props) => {
  const { price, created_at, status, fee, credits, type } = props;

  const statusData = transactionsStatusData[status];

  return (
    <TableRow>
      <TableCell>
        <Typography variant={"body4"} className={"text-gray-12"}>
          {transactionsTypeData[type]}
        </Typography>
        {/*<Typography variant={"body4"} className={"text-gray-10"}>*/}
        {/*  504 Wellham Ave Glen Burnie, MD 21061*/}
        {/*</Typography>*/}
      </TableCell>
      <TableCell>
        <Typography variant={"body4"}>
          {formatDate(new Date(created_at))}
        </Typography>
      </TableCell>
      <TableCell>
        <Status title={statusData.title} variant={statusData.variant} />
      </TableCell>
      <TableCell>
        <Typography variant={"body4"}>
          {fee ? formatCurrency(fee) : "-"}
        </Typography>
      </TableCell>

      <TableCell>
        <Typography variant={"body4"}>{formatCurrency(price)}</Typography>

        {credits && (
          <Typography variant={"body4"}>+{credits} credit</Typography>
        )}
      </TableCell>
    </TableRow>
  );
};

const TransactionsTableMobileRow = (props) => {
  const { price, created_at, status, fee, credits, type } = props;

  const statusData = transactionsStatusData[status];
  return (
    <Card className={cn("p-3 bg-background rounded-md")}>
      <div className={"flex justify-between"}>
        <Typography variant={"subtitle3"}>Unlock Credits Purchase</Typography>
        <Status title={statusData.title} variant={statusData.variant} />
      </div>
      <div className={"mt-1 flex items-start justify-between"}>
        <Typography variant={"subtitle3"} className={"text-gray-10 text-xs"}>
          {formatDate(new Date(created_at))}
        </Typography>
        <div>
          <Typography
            variant={"body4"}
            className={"text-xs text-right font-bold"}
          >
            {formatCurrency(price)}
          </Typography>
          {credits && (
            <Typography
              variant={"body4"}
              className={"text-xs mt-[2px] text-right font-bold"}
            >
              +{credits} credits
            </Typography>
          )}
        </div>
      </div>

      <Card className={"bg-gray-3 mt-2 p-2 rounded-md"}>
        <div className={"flex justify-between"}>
          <Typography variant={"subtitle3"} className={"text-xs"}>
            {transactionsTypeData[type]}
          </Typography>
          {/*<Typography*/}
          {/*  variant={"subtitle3"}*/}
          {/*  className={"text-xs max-w-[150px] text-right"}*/}
          {/*>*/}
          {/*  504 Welham Ave Glen Burnie, MD 21061*/}
          {/*</Typography>*/}
        </div>

        <div className={"flex justify-between mt-1"}>
          <Typography variant={"subtitle3"} className={"text-xs"}>
            Assignment fee
          </Typography>
          <Typography
            variant={"subtitle3"}
            className={"text-xs max-w-[150px] text-right"}
          >
            {fee ? formatCurrency(fee) : "-"}
          </Typography>
        </div>

        <div className={"flex justify-between mt-1"}>
          <Typography variant={"subtitle3"} className={"text-xs"}>
            Price
          </Typography>
          <Typography
            variant={"subtitle3"}
            className={"text-xs max-w-[150px] text-right"}
          >
            {formatCurrency(-400000)}
          </Typography>
        </div>
      </Card>
    </Card>
  );
};

export default function () {
  const [page, setPage] = useState(1);
  const { isLoading, data } = useTransactions(page, 10);

  return (
    <div className={"dashboard-padding"}>
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink asChild>
              <Link href="/dashboard">Dashboard</Link>
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator>
            <Icon
              name={"arrow-right"}
              className={"text-base leading-[18px] text-gray-11"}
            />
          </BreadcrumbSeparator>
          <BreadcrumbItem>
            <BreadcrumbPage>Transactions</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <div className={"mt-6"}>
        <div className={"flex flex-col gap-y-6 "}></div>

        <Typography variant={"h5"} className={"text-gray-13 normal-case mb-4"}>
          Transactions
        </Typography>

        {isLoading ? (
          new Array(3)
            .fill(true)
            .map((_, index) => (
              <Skeleton key={index} className={"w-full h-[100px] mt-4"} />
            ))
        ) : (
          <>
            <DataTable
              data={data?.data?.data || []}
              tableClassName={"bg-background rounded-lg"}
              headerData={["Type", "Date", "Status", "Assignment FEE", "Price"]}
              renderContent={(tableRow) => {
                return <TransactionsTableRow {...tableRow} />;
              }}
              renderMobileContent={(tableRow) => {
                return <TransactionsTableMobileRow {...tableRow} />;
              }}
            />

            <PaginationField
              currentPage={page}
              pagePerView={10}
              totalCount={data?.data?.totalCount || 0}
              onPageChange={setPage}
            />
          </>
        )}
      </div>
    </div>
  );
}
