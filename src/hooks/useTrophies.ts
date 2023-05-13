import { client } from "@/providers/AxiosClientProvider";
import { ClientTrophy } from "@/types/ClientTrophy";
import useSWR from "swr";

export const useTrophies = () => {
  const fetcher = async (url: string): Promise<ClientTrophy[]> => {
    const response = await client.get<ClientTrophy[]>(url);
    return response.data;
  };
  const { data, mutate } = useSWR(`trophies`, fetcher, {
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
