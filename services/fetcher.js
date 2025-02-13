import axios from "@/lib/axios";

export const fetcher = async (url) => {
  return axios.get(url).then((response) => response.data);
};
