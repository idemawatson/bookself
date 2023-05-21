import { Grid, Paper, Typography } from '@mui/material'
import { GetServerSideProps } from 'next'
import Image from 'next/image'
import { getSession } from 'next-auth/react'
import { FC } from 'react'
import SignInButton from '@/components/parts/common/SignInButton'

type Props = {
  isLogin: boolean
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const session = await getSession(context)
  if (session) {
    return {
      redirect: {
        destination: '/shelf',
      },
      props: {},
    }
  }

  return { props: { isLogin: !!session } }
}

const Home: FC<Props> = () => {
  return (
    <Paper
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        bgcolor: '#eee',
      }}
    >
      <Grid container>
        <Grid item textAlign={'center'} xs={12}>
          <Image
            src='/logo.png'
            alt='boolself'
            // sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
            width={300}
            height={250}
          />
          <Typography
            sx={{
              fontSize: '4rem',
              fontWeight: 500,
              letterSpacing: '0.1rem',
            }}
            color={'primary.main'}
          >
            Book
            <Typography
              component={'span'}
              sx={{
                fontSize: '4rem',
                fontWeight: 500,
                letterSpacing: '0.1rem',
              }}
              color={'secondary.main'}
            >
              S
            </Typography>
            elf
          </Typography>
          <Typography
            sx={{
              fontSize: '1rem',
              fontWeight: 500,
              letterSpacing: '0.1rem',
            }}
            color={'negative.main'}
          >
            Record books by yourself.
          </Typography>
        </Grid>
        <Grid item textAlign='center' xs={12} sx={{ pt: 4 }}>
          <SignInButton />
        </Grid>
      </Grid>
    </Paper>
  )
}

export default Home
