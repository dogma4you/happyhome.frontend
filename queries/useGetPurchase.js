import useSWR from "swr";

const useGetPurchase = () => {
  return useSWR(`/contracts/purchase/list`, {
    onErrorRetry: () => {},
  });
};

export default useGetPurchase;
