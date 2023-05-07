import { client } from "@/providers/AxiosClientProvider";
import { StatisticsResponse } from "@/types/StatisticsResponse";
import useSWR from "swr";

export const useStatistics = (year: number) => {
  const fetcher = async (url: string): Promise<StatisticsResponse> => {
    const response = await client.get<StatisticsResponse>(url);
    return response.data;
  };
  const { data, mutate } = useSWR(`statistics?year=${year}`, fetcher, {
    suspense: true,
    revalidateOnFocus: false,
    revalidateOnMount: false,
    revalidateIfStale: false,
  });

  return {
    data,
    mutate,
  };
};
