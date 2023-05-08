import { client } from "@/providers/AxiosClientProvider";
import { BookRatioResponse } from "@/types/BookRatioResponse";
import useSWR from "swr";

export const useBookRatio = (year: number) => {
  const fetcher = async (url: string): Promise<BookRatioResponse> => {
    const response = await client.get<BookRatioResponse>(url);
    return response.data;
  };
  const { data, mutate } = useSWR(`ratio?year=${year}`, fetcher, {
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
