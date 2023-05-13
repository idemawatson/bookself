import { client } from "@/providers/AxiosClientProvider";
import { ClientUserRecord } from "@/types/ClientUserRecord";
import useSWR from "swr";

export const useUserRecord = () => {
  const fetcher = async (url: string): Promise<ClientUserRecord> => {
    const response = await client.get<ClientUserRecord>(url);
    return response.data;
  };
  const { data, mutate } = useSWR(`userRecord`, fetcher, {
    suspense: true,
    revalidateOnFocus: false,
    revalidateOnMount: true,
    revalidateIfStale: false,
  });

  return {
    data,
    mutate,
  };
};
