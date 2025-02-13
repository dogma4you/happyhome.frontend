import useSWR from "swr";

const useGetNotifications = (session) => {
  return useSWR(session ? "/notifications" : null);
};

export default useGetNotifications;
