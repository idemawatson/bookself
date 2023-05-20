import { Box, Grid, styled } from '@mui/material'
import Image from 'next/image'
import { FC } from 'react'
import { ClientBook } from '@/types/BooksResponse'

type Props = {
  books: ClientBook[]
  onClickBook: (book: ClientBook) => void
}

const StyledGrid = styled(Grid)({
  backgroundColor: '#996840',
  borderBottom: '20px solid #b37a4b',
  padding: 8,
  paddingBottom: 0,
})

const ShelfStage: FC<Props> = ({ books, onClickBook }) => {
  const stage = books.map((book) => (
    <Grid item xs={4} key={book.id} sx={{ px: 0.5 }}>
      <Box onClick={() => onClickBook(book)}>
        <Image
          src={`${book.imageUrl}?fit=crop&auto=format`}
          alt={book.title}
          loading='lazy'
          height={160}
          width={100}
        />
      </Box>
    </Grid>
  ))
  return <StyledGrid container>{stage}</StyledGrid>
}

export default ShelfStage
