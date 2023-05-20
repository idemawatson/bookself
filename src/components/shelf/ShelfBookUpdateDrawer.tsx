import { yupResolver } from '@hookform/resolvers/yup'
import { Box, Button, Grid, SwipeableDrawer } from '@mui/material'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { KeyedMutator } from 'swr'
import BookCard from '@/components/parts/books/BookCard'
import { BaseButton } from '@/components/parts/common/BaseButton'
import UserLevelUpDialog from '@/components/parts/user/UserLevelUpDialog'
import ShelfBookUpdateForm from '@/components/shelf/ShelfBookUpdateForm'
import useUpdateBook from '@/hooks/shelf/useUpdateBook'
import { useSelectedBook } from '@/hooks/useSelectedBook'
import dayjs from '@/lib/importDayjs'
import { ClientBook } from '@/types/BooksResponse'
import { BookUpdateSchema, bookUpdateSchema } from '@/types/IBookForm'

type Props = {
  drawer: boolean
  setOpen: (value: boolean) => void
  mutate: KeyedMutator<ClientBook[][]>
}

const ShelfBookUpdateDrawer: React.FC<Props> = ({
  drawer,
  setOpen,
  mutate,
}) => {
  const { selectedBook: book } = useSelectedBook()
  const formMethods = useForm<BookUpdateSchema>({
    mode: 'onChange',
    resolver: yupResolver(bookUpdateSchema),
    defaultValues: {
      comment: book.comment,
      status: book.status,
      completedAt: dayjs(book?.completedAt).toDate(),
      rating: book.rating,
    },
  })
  const { updateBook } = useUpdateBook()
  const [newLevel, setNewLevel] = useState<number | null>(null)

  const handleSubmit = async (form: BookUpdateSchema) => {
    const res = await updateBook(form, mutate)
    if (res && !!res.newLevel) {
      setNewLevel(res.newLevel)
    }
    close()
  }

  const close = () => {
    setOpen(false)
    formMethods.reset()
  }

  return (
    <>
      <SwipeableDrawer
        anchor='bottom'
        open={drawer}
        onOpen={() => setOpen(true)}
        onClose={close}
        sx={{ zIndex: 1000 }}
      >
        <Box sx={{ p: 1 }}>
          {book && (
            <>
              <BookCard book={book} />
              <form onSubmit={formMethods.handleSubmit(handleSubmit)}>
                <Box sx={{ p: 1, mt: 2 }}>
                  <ShelfBookUpdateForm
                    control={formMethods.control}
                    watch={formMethods.watch}
                    setValue={formMethods.setValue}
                  />
                </Box>
                <Grid container>
                  <Grid item xs={6} sx={{ textAlign: 'left' }}>
                    <Button disableElevation onClick={close}>
                      閉じる
                    </Button>
                  </Grid>
                  <Grid item xs={6} sx={{ textAlign: 'right' }}>
                    <BaseButton
                      submit={true}
                      color='secondary'
                      disabled={!formMethods.formState.isValid}
                    >
                      更新
                    </BaseButton>
                  </Grid>
                </Grid>
              </form>
            </>
          )}
        </Box>
      </SwipeableDrawer>
      <UserLevelUpDialog
        dialog={!!newLevel}
        level={newLevel}
        close={() => setNewLevel(null)}
      />
    </>
  )
}

export default ShelfBookUpdateDrawer
