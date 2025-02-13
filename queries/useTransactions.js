import useSWR from "swr";

const useTransactions = (page, limit) => {
  return useSWR(`/transactions?limit=${limit}&page=${page}`);
};

export default useTransactions;
