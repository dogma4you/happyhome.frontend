import useSWR from "swr";
import { useSearchParams } from "next/navigation";

const useGetSavedListing = ({ page = 1, limit = 10 }) => {
  const searchParams = useSearchParams();
  const newParams = new URLSearchParams(searchParams.toString());
  newParams.set("page", page);
  newParams.set("limit", limit);

  return useSWR(`/saved_lists?${newParams.toString()}`, {
    onErrorRetry: () => {},
  });
};

export default useGetSavedListing;
