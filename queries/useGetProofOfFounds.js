import useSWR from "swr";

const useGetProofOfFounds = () => {
  return useSWR("/proof_of_founds");
};

export default useGetProofOfFounds;
