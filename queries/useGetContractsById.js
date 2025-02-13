import useSWR from "swr";

const useGetContractsById = (id) => {
  return useSWR(`/contracts/${id}`, {
    onErrorRetry: () => {},
  });
};

export default useGetContractsById;
