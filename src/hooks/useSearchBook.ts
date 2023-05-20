import useSWR from 'swr'
import GoogleAPIClient from '@/lib/GoogleApiClient'
import { SearchBook } from '@/types/BooksResponse'
import GoogleBooksResponse from '@/types/GoogleBooksResponse'

export const useSearchBook = (searchWord: string) => {
  const fetcher = async (url: string): Promise<SearchBook[]> => {
    if (!searchWord) return []
    const res = await GoogleAPIClient.get<GoogleBooksResponse>(url)
    const items = res.data?.items || []
    return items.map((item) => {
      const volumeInfo = item.volumeInfo
      return {
        id: item.id,
        title: volumeInfo.title || '',
        author: volumeInfo.authors?.join(',') || '',
        imageUrl: volumeInfo.imageLinks?.smallThumbnail || '',
        publishedAt: volumeInfo.publishedDate || '',
        pageCount: volumeInfo.pageCount || 0,
        description: volumeInfo.description || '',
      }
    })
  }

  const { data, mutate } = useSWR(`books/v1/volumes?q=${searchWord}`, fetcher, {
    revalidateOnFocus: false,
    revalidateIfStale: false,
  })

  return {
    data,
    mutate,
  }
}
