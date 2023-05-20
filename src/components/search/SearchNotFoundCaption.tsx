import { Alert, AlertTitle } from '@mui/material'

const SearchNotFoundCaption = () => {
  return (
    <Alert severity='warning' sx={{ mt: 2 }}>
      <AlertTitle>Not Found</AlertTitle>
      <div>書籍が見つかりませんでした</div>
      <div>検索ワードを変えてお試しください</div>
    </Alert>
  )
}

export default SearchNotFoundCaption
