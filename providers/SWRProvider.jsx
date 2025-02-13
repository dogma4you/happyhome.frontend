"use client";
import React from "react";
import { fetcher } from "@/services/fetcher";
import { SWRConfig } from "swr";

const SwrProvider = ({ children }) => {
  return (
    <SWRConfig
      value={{
        fetcher,
        refreshInterval: 60 * 60 * 1000,
        revalidateIfStale: false,
        revalidateOnFocus: false,
        revalidateOnReconnect: false,
      }}
    >
      {children}
    </SWRConfig>
  );
};

export default SwrProvider;
