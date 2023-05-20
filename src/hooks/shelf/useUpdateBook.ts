import { KeyedMutator, useSWRConfig } from 'swr'
import { useLoading } from '@/hooks/useLoading'
import { useNotification } from '@/hooks/useNotification'
import { useSelectedBook } from '@/hooks/useSelectedBook'
import dayjs from '@/lib/importDayjs'
import { client } from '@/providers/AxiosClientProvider'
import { ClientBook } from '@/types/BooksResponse'
import { BOOK_STATUSES, BookUpdateSchema } from '@/types/IBookForm'
import { UpdateBookResponse } from '@/types/UpdateBookResponse'

const useUpdateBook = () => {
  const { selectedBook: book } = useSelectedBook()
  const { showLoading, hideLoading } = useLoading()
  const { showSuccess, showError } = useNotification()
  const { mutate: mutateAll } = useSWRConfig()

  const updateBook = async (
    form: BookUpdateSchema,
    mutate: KeyedMutator<ClientBook[][]>,
  ) => {
    try {
      showLoading()
      const req = {
        ...form,
        completedAt:
          form.status === BOOK_STATUSES.COMPLETED
            ? dayjs(form.completedAt).toDate()
            : undefined,
        rating:
          form.status === BOOK_STATUSES.COMPLETED ? form.rating : undefined,
      }
      const res = await client.patch<BookUpdateSchema, UpdateBookResponse>(
        `/books/${book.book_id}`,
        req,
      )
      showSuccess('更新しました')
      mutateAll(
        (key) => typeof key === 'string' && key.startsWith('books?'),
        undefined,
        {
          revalidate: true,
        },
      )
      mutate()
      return res.data
    } catch (err) {
      console.error(err)
      showError('エラーが発生しました')
    } finally {
      hideLoading()
    }
  }
  return { updateBook }
}

export default useUpdateBook
