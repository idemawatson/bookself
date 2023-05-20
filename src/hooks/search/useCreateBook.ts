import { isAxiosError } from 'axios'
import { CREATE_BOOK_DUPLICATE } from '@/helpers/errorCodes'
import { useLoading } from '@/hooks/useLoading'
import { useNotification } from '@/hooks/useNotification'
import { client } from '@/providers/AxiosClientProvider'
import { SearchBook } from '@/types/BooksResponse'
import { CreateBookRequest } from '@/types/CreateBookRequest'
import { CreateBookResponse } from '@/types/CreateBookResponse'
import { BookStatuses } from '@/types/IBookForm'

const useCreateBook = () => {
  const { showLoading, hideLoading } = useLoading()
  const { showSuccess, showError } = useNotification()
  const createBook = async (
    book: SearchBook | undefined,
    status: BookStatuses,
  ) => {
    try {
      if (!book) return
      showLoading()
      const res = await client.put<CreateBookRequest, CreateBookResponse>(
        '/books',
        {
          ...book,
          book_id: book.id,
          status,
        },
      )
      showSuccess('本棚に追加しました')
      return res.data
    } catch (err) {
      console.error(err)
      if (
        isAxiosError(err) &&
        err.response?.data?.code === CREATE_BOOK_DUPLICATE
      ) {
        showError('すでに登録済みです')
      } else {
        showError('エラーが発生しました')
      }
    } finally {
      hideLoading()
    }
  }
  return { createBook }
}

export default useCreateBook
