"use client";

import React, { useCallback, useEffect, useState } from "react";
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
import { Input } from "@/components/ui/input";
import SavedListingTable from "@/components/SavedListingTable";
import PaginationField from "@/components/form/PaginationField";
import useGetSavedListing from "@/queries/useGetSavedListing";
import { Skeleton } from "@/components/ui/skeleton";
import { useRouter, useSearchParams } from "next/navigation";
import toast from "react-hot-toast";

export default function () {
  const [date, setDate] = useState([null, null]);
  const [status, setStatus] = useState(0);

  const [rangeValue, setRangeValue] = useState([0, 1000000]);
  const [submittedFilters, setSubmittedFilters] = useState([]);
  const searchParams = useSearchParams();
  const router = useRouter();

  const priceToFilter = "priceTo";
  const priceFromFilter = "priceFrom";
  const statusFilter = "status";
  const dateFromFilter = "dateFrom";
  const dateToFilter = "dateTo";

  const { isLoading, data, mutate, error } = useGetSavedListing({
    page: 1,
    limit: 10,
  });

  const handleSubmit = () => {
    const newParams = new URLSearchParams(searchParams.toString());
    let filtersWithValues = [];
    if (date[0] && date[1]) {
      filtersWithValues.push({
        title: `${format(date[0], "LLL dd, y")} - ${format(
          date[0],
          "LLL dd, y",
        )}`,
        value: date,
        name: "date",
      });
      newParams.set(dateFromFilter, date[0].toISOString());
      newParams.set(dateToFilter, date[1].toISOString());
    }

    if (status) {
      const statusOptions = {
        0: "All",
        1: "Unlocked",
        2: "Locked",
      };
      const title = statusOptions[status];
      filtersWithValues.push({ title: title, value: status, name: "status" });
      newParams.set(statusFilter, status);
    }

    if (rangeValue) {
      filtersWithValues.push({
        title: `${rangeValue[0]} - ${rangeValue[1]}`,
        value: rangeValue,
        name: "rangeValue",
      });
      newParams.set(priceFromFilter, rangeValue[0]);
      newParams.set(priceToFilter, rangeValue[1]);
    }

    router.push(`?${newParams.toString()}`);

    setSubmittedFilters(filtersWithValues);
  };

  const handleClearAll = () => {
    const newParams = new URLSearchParams(searchParams.toString());
    setSubmittedFilters([]);
    setStatus("");
    setDate("");
    setRangeValue([0, 1000000]);
    newParams.delete(priceFromFilter);
    newParams.delete(priceToFilter);
    newParams.delete(statusFilter);
    newParams.delete(dateFromFilter);
    newParams.delete(dateToFilter);
    router.push(`?${newParams.toString()}`);
  };

  const setFiltersFromSearchParams = useCallback(() => {
    const newParams = new URLSearchParams(searchParams.toString());
    const totalAmountFrom = newParams.get(priceFromFilter);
    const totalAmountTo = newParams.get(priceToFilter);
    const status = newParams.get(statusFilter);
    const dateFrom = newParams.get(dateFromFilter);
    const dateTo = newParams.get(dateToFilter);

    let filtersWithValues = [];

    if (totalAmountFrom && totalAmountTo) {
      filtersWithValues.push({
        title: `${totalAmountFrom} - ${totalAmountTo}`,
        value: [totalAmountFrom, totalAmountTo],
        name: "rangeValue",
      });
    }

    if (status) {
      const statusOptions = {
        0: "All",
        1: "Unlocked",
        2: "Locked",
      };
      const title = statusOptions[status];
      filtersWithValues.push({ title: title, value: status, name: "status" });
    }

    if (dateFrom && dateTo) {
      filtersWithValues.push({
        title: `${format(dateFrom, "LLL dd, y")} - ${format(
          dateTo,
          "LLL dd, y",
        )}`,
        value: [dateFrom, dateTo],
        name: "date",
      });
    }

    setSubmittedFilters(filtersWithValues);
  }, [searchParams]);

  useEffect(() => {
    (async () => {
      await mutate();
    })();
  }, []);

  useEffect(() => {
    setFiltersFromSearchParams();
  }, [setFiltersFromSearchParams]);

  if (error) {
    router.push("/dashboard");
    toast.error("Error fetching data.");
    return null;
  }

  const handleRemoveFilter = (filterName) => {
    const newParams = new URLSearchParams(searchParams.toString());
    console.log("filterName", filterName);
    if (filterName === "rangeValue") {
      newParams.delete(priceFromFilter);
      newParams.delete(priceToFilter);
    }

    if (filterName === "status") {
      newParams.delete(statusFilter);
    }

    if (filterName === "date") {
      newParams.delete(dateFromFilter);
      newParams.delete(dateToFilter);
    }

    setSubmittedFilters((prev) => {
      return prev.filter(({ name }) => name !== filterName);
    });
    router.push(`?${newParams.toString()}`);
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
            <BreadcrumbPage>Saved listing</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <div className={"mt-6"}>
        <div className={"flex flex-col gap-y-6 mb-4"}>
          <Typography variant={"h5"} className={"text-gray-13 normal-case"}>
            Saved listing
          </Typography>

          <div className={"flex items-center gap-x-2 justify-start"}>
            <Input
              showIcon
              size={"sm"}
              placeholder={"Search"}
              className={"max-w-[256px]"}
              containerClassName={"w-auto"}
            />
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
              onRemoveFilter={handleRemoveFilter}
              onClearAll={handleClearAll}
            />
          </div>
        </div>

        {isLoading ? (
          <Skeleton className={"w-full h-50"} />
        ) : (
          <>
            <SavedListingTable data={data?.data?.data || []} mutate={mutate} />

            <PaginationField
              currentPage={1}
              pagePerView={10}
              totalCount={0}
              onPageChange={() => {}}
            />
          </>
        )}
      </div>
    </div>
  );
}
