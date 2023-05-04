import useSWRInfinite from "swr/infinite";
import backendApiClient from "@/lib/BackendApiClient";
import { ClientBook } from "@/types/BooksResponse";

export const useBooks = (status: number) => {
  const getKey = (pageIndex: number, previousPageData: ClientBook[]) => {
    if (previousPageData && !previousPageData.length) return null;
    return `books?page=${pageIndex + 1}&status=${status}`;
  };
  const fetcher = async (url: string): Promise<ClientBook[]> => {
    const client = backendApiClient;
    const response = await client.get(url);
    return response.data as ClientBook[];
  };
  const { data, mutate, size, setSize } = useSWRInfinite(getKey, fetcher, {
    suspense: true,
    initialSize: 1,
    persistSize: true,
    revalidateFirstPage: false,
    revalidateOnFocus: false,
    revalidateOnMount: false,
    revalidateIfStale: false,
  });

  return {
    data,
    mutate,
    size,
    setSize,
  };
};
