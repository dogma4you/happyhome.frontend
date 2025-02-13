"use client";
import React, { useEffect, useState } from "react";
import FindContent from "@/components/find-home/FindContent";
import FilterContent from "@/components/find-home/FilterContent";
import useGetContracts from "@/queries/useGetContracts";
import useGetBalance from "@/queries/useGetBalance";
import useBalanceStore from "@/store/useBalanceStore";
import useSetContractFilters from "@/hooks/useSetContractFilters";
import Footer from "@/components/footer/Footer";
import useFindHome from "@/store/useFindHome";
import { useRouter, useSearchParams } from "next/navigation";
import useWindowSize from "@/hooks/useWindowSize";

const FindHome = () => {
  const {
    filters: { type },
  } = useFindHome();

  const searchParams = useSearchParams();
  const [page, setPage] = useState(1);
  const router = useRouter();

  useEffect(() => {
    const newParams = new URLSearchParams(searchParams.toString());
    if (newParams.get("page")) {
      setPage(+newParams.get("page"));
    }
  }, [searchParams]);

  const { isLoading, data, mutate } = useGetContracts({ type, page });
  const { isLoading: balanceLoading, data: balanceData } = useGetBalance();
  const { setMapOpened } = useFindHome();
  const { setBalance } = useBalanceStore();
  const { width } = useWindowSize();

  useEffect(() => {
    if (balanceData) {
      setBalance(balanceData.data);
    }
  }, [balanceData]);

  useEffect(() => {
    if (width <= 1280) {
      setMapOpened(false);
    }
  }, [width]);

  useSetContractFilters();

  const handleChangePage = (page) => {
    const newParams = new URLSearchParams(searchParams.toString());
    newParams.set("page", page);
    router.push(`?${newParams.toString()}`);
  };

  return (
    <>
      <div className={"flex items-start gap-x-3 container py-6"}>
        <FilterContent />
        <FindContent
          isLoading={isLoading || balanceLoading}
          contracts={data?.data || []}
          totalCount={data?.totalCount || 0}
          mutate={mutate}
          onChangePage={handleChangePage}
          page={page}
        />
      </div>
      <Footer className={"bg-black"} />
    </>
  );
};

export default FindHome;
