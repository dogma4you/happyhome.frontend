import useSWR from "swr";

const useGetBalance = () => {
  return useSWR("/balance");
};

export default useGetBalance;
