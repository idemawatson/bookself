import useSWR from 'swr'
import { client } from '@/providers/AxiosClientProvider'
import { ClientUser } from '@/types/ClientUser'

export const useUser = () => {
  const fetcher = async (url: string): Promise<ClientUser> => {
    const response = await client.get<ClientUser>(url)
    return response.data
  }
  const { data, mutate } = useSWR(`user`, fetcher, {
    suspense: true,
    revalidateOnFocus: false,
    revalidateOnMount: false,
    revalidateIfStale: false,
  })

  return {
    data,
    mutate,
  }
}
