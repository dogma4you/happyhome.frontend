import useSWR from "swr";
import Cookies from "js-cookie";

const useGetOfferList = () => {
  const accessToken = Cookies.get("accessToken");
  return useSWR(accessToken ? "/offer/list" : null);
};

export default useGetOfferList;
