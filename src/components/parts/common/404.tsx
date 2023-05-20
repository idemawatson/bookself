import { Paper, Typography } from '@mui/material'
import { ReactNode } from 'react'

type Props = {
  children?: ReactNode
}
const Error404: React.FC<Props> = ({ children }) => {
  return (
    <Paper
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        minHeight: '100vh',
        backgroundColor: '#eee',
      }}
    >
      <Typography
        variant='h5'
        sx={{ my: 1, color: 'primary.main', fontWeight: 'bold' }}
      >
        404: ページが存在しません
      </Typography>
      <Typography
        sx={{ my: 1, color: 'black', textAlign: 'center', lineHeight: 2 }}
      >
        <div>データが見つかりませんでした</div>
      </Typography>
      {children}
    </Paper>
  )
}

export default Error404
