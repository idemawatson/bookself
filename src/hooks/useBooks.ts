import useSWRInfinite from "swr/infinite";
import { ClientBook } from "@/types/BooksResponse";
import { client } from "@/providers/AxiosClientProvider";

export const useBooks = (status?: number) => {
  const getKey = (pageIndex: number, previousPageData: ClientBook[]) => {
    if (previousPageData && !previousPageData.length) return null;
    let url = `books?page=${pageIndex + 1}`;
    return status != null ? `${url}&status=${status}` : url;
  };
  const fetcher = async (url: string): Promise<ClientBook[]> => {
    const response = await client.get(url);
    return response.data as ClientBook[];
  };
  const { data, mutate, size, setSize } = useSWRInfinite(getKey, fetcher, {
    suspense: true,
    initialSize: 1,
    persistSize: true,
    revalidateFirstPage: true,
    revalidateOnFocus: true,
    revalidateOnMount: true,
    revalidateIfStale: true,
  });

  return {
    data,
    mutate,
    size,
    setSize,
  };
};
