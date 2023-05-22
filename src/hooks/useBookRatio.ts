import useSWR from 'swr'
import { client } from '@/providers/AxiosClientProvider'
import { BookRatioResponse } from '@/types/BookRatioResponse'

export const useBookRatio = () => {
  const fetcher = async (url: string): Promise<BookRatioResponse> => {
    const response = await client.get<BookRatioResponse>(url)
    return response.data
  }
  const { data, mutate } = useSWR(`ratio`, fetcher, {
    suspense: true,
    revalidateOnFocus: false,
    revalidateOnMount: true,
    revalidateIfStale: false,
  })

  return {
    data,
    mutate,
  }
}
