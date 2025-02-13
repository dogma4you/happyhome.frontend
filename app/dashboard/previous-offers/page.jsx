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
import { format } from "date-fns";
import Typography from "@/components/ui/typography";
import SelectedTableFilterItems from "@/components/dashboard/SelectedTableFilterItems";
import TableFilter from "@/components/dashboard/TableFilter";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import Image from "next/image";
import mockImage from "@/public/assets/home-property.jpeg";
import Status from "@/components/ui/status";
import { formatCurrency } from "@/utils/helper";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import CustomPagination from "@/components/ui/custom-pagination";

export default function () {
  const [date, setDate] = useState();
  const [status, setStatus] = useState();
  const [rangeValue, setRangeValue] = useState([360000, 365000]);
  const [submittedFilters, setSubmittedFilters] = useState([]);
  const [page, setPage] = useState(1);

  const handleSubmit = () => {
    let filtersWithValues = [];
    if (date) {
      filtersWithValues.push({
        title: `${format(date.from, "LLL dd, y")} - ${format(
          date.to,
          "LLL dd, y",
        )}`,
        value: date,
        name: "date",
      });
    }

    if (status) {
      filtersWithValues.push({ title: status, value: status, name: "status" });
    }

    if (rangeValue) {
      filtersWithValues.push({
        title: `${rangeValue[0]} - ${rangeValue[1]}`,
        value: rangeValue,
        name: "rangeValue",
      });
    }

    setSubmittedFilters(filtersWithValues);
  };

  const handleClearAll = () => {
    setSubmittedFilters([]);
    setStatus("");
    setDate("");
    setRangeValue([360000, 365000]);
  };

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
            <BreadcrumbPage>Previous offers</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <div className={"mt-6"}>
        <div className={"flex flex-col gap-y-6 mb-4"}>
          <Typography variant={"h5"} className={"text-gray-13 normal-case"}>
            Previous offers
          </Typography>

          <div className={"flex items-center gap-x-2"}>
            <Input icon size={"sm"} placeholder={"Search"} />
            <TableFilter
              date={date}
              onChangeDate={setDate}
              status={status}
              onChangeStatus={setStatus}
              rangeValue={rangeValue}
              onChangeRangeValue={setRangeValue}
              onSubmit={handleSubmit}
              isHaveSubmittedFilters={submittedFilters.length}
              onClearAll={handleClearAll}
            />
            <SelectedTableFilterItems
              filterValues={submittedFilters}
              onRemoveFilter={() => {}}
              onClearAll={handleClearAll}
            />
          </div>
        </div>

        <Table className={"bg-background rounded-lg"}>
          <TableHeader>
            <TableRow>
              <TableHead>Address</TableHead>
              <TableHead>Listing time left</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Price</TableHead>
              <TableHead>Action</TableHead>
              <TableHead></TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell>
                <div className={"flex items-center gap-x-[15px]"}>
                  <div
                    className={
                      "size-[64px] min-w-[64px] relative overflow-hidden rounded-sm"
                    }
                  >
                    <Image
                      src={mockImage}
                      alt={"Saved listing"}
                      className={"image-cover"}
                    />
                  </div>

                  <div>
                    <Typography variant={"body4"}>504 Wellham Ave </Typography>
                    <Typography variant={"body4"}>
                      Glen Burnie, MD 21061
                    </Typography>
                  </div>
                </div>
              </TableCell>
              <TableCell>
                <Typography variant={"body4"}>May 31, 2024</Typography>
              </TableCell>
              <TableCell>
                <Status title={"Unlocked"} variant={"success"} />
              </TableCell>
              <TableCell>
                <Typography variant={"body4"}>
                  {formatCurrency(400000)}
                </Typography>
              </TableCell>
              <TableCell>
                <Button size={"sm"} className={"uppercase px-3 py-2"}>
                  Buy now
                </Button>
              </TableCell>

              <TableCell>
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className={
                    "stroke-gray-11 hover:stroke-error-10 cursor-pointer transition-colors"
                  }
                >
                  <path
                    d="M10 15L10 12"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                  <path
                    d="M14 15L14 12"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                  <path
                    d="M3 7H21V7C20.0681 7 19.6022 7 19.2346 7.15224C18.7446 7.35523 18.3552 7.74458 18.1522 8.23463C18 8.60218 18 9.06812 18 10V16C18 17.8856 18 18.8284 17.4142 19.4142C16.8284 20 15.8856 20 14 20H10C8.11438 20 7.17157 20 6.58579 19.4142C6 18.8284 6 17.8856 6 16V10C6 9.06812 6 8.60218 5.84776 8.23463C5.64477 7.74458 5.25542 7.35523 4.76537 7.15224C4.39782 7 3.93188 7 3 7V7Z"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                  <path
                    d="M10.0681 3.37059C10.1821 3.26427 10.4332 3.17033 10.7825 3.10332C11.1318 3.03632 11.5597 3 12 3C12.4403 3 12.8682 3.03632 13.2175 3.10332C13.5668 3.17033 13.8179 3.26427 13.9319 3.37059"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                <div className={"flex items-center gap-x-[15px]"}>
                  <div
                    className={
                      "size-[64px] min-w-[64px] relative overflow-hidden rounded-sm"
                    }
                  >
                    <Image
                      src={mockImage}
                      alt={"Saved listing"}
                      className={"image-cover"}
                    />
                  </div>

                  <div>
                    <Typography variant={"body4"}>504 Wellham Ave </Typography>
                    <Typography variant={"body4"}>
                      Glen Burnie, MD 21061
                    </Typography>
                  </div>
                </div>
              </TableCell>
              <TableCell>
                <Typography variant={"body4"}>May 31, 2024</Typography>
              </TableCell>
              <TableCell>
                <Status title={"Unlock now"} variant={"warning"} />
              </TableCell>
              <TableCell>
                <Typography variant={"body4"}>
                  {formatCurrency(400000)}
                </Typography>
              </TableCell>
              <TableCell>
                <Button size={"sm"} className={"uppercase px-3 py-2"}>
                  Buy now
                </Button>
              </TableCell>

              <TableCell>
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className={
                    "stroke-gray-11 hover:stroke-error-10 cursor-pointer transition-colors"
                  }
                >
                  <path
                    d="M10 15L10 12"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                  <path
                    d="M14 15L14 12"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                  <path
                    d="M3 7H21V7C20.0681 7 19.6022 7 19.2346 7.15224C18.7446 7.35523 18.3552 7.74458 18.1522 8.23463C18 8.60218 18 9.06812 18 10V16C18 17.8856 18 18.8284 17.4142 19.4142C16.8284 20 15.8856 20 14 20H10C8.11438 20 7.17157 20 6.58579 19.4142C6 18.8284 6 17.8856 6 16V10C6 9.06812 6 8.60218 5.84776 8.23463C5.64477 7.74458 5.25542 7.35523 4.76537 7.15224C4.39782 7 3.93188 7 3 7V7Z"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                  <path
                    d="M10.0681 3.37059C10.1821 3.26427 10.4332 3.17033 10.7825 3.10332C11.1318 3.03632 11.5597 3 12 3C12.4403 3 12.8682 3.03632 13.2175 3.10332C13.5668 3.17033 13.8179 3.26427 13.9319 3.37059"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>

        <CustomPagination
          currentPage={page}
          paginationLength={10}
          onChangePage={setPage}
        />
      </div>
    </div>
  );
}
