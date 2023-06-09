import { Box, LinearProgress, styled } from '@mui/material'
import { FC } from 'react'
import { useLoading } from '@/hooks/useLoading'

export const TheLoading: FC = () => {
  const DisabledBackground = styled(Box)({
    width: '100%',
    height: '100%',
    position: 'fixed',
    background: '#ccc',
    opacity: 0.5,
    zIndex: 10000,
  })

  const { loading } = useLoading()

  if (loading)
    return (
      <>
        <LinearProgress />
        <DisabledBackground />
      </>
    )
  else return <></>
}
