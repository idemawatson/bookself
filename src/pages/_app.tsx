import '@/styles/globals.css'
import { CssBaseline } from '@mui/material'
import { NextPage } from 'next'
import type { AppProps } from 'next/app'
import { SessionProvider } from 'next-auth/react'
import { FC, ReactNode } from 'react'
import { ErrorBoundary } from 'react-error-boundary'
import CSR from '@/components/CSR'
import { MainLayout } from '@/components/layout/MainLayout'
import Error500 from '@/components/parts/common/500'
import { BaseButton } from '@/components/parts/common/BaseButton'
import { TheLoading } from '@/components/parts/common/TheLoading'
import { TheNotificationToast } from '@/components/parts/common/TheNotification'
import AxiosClientProvider from '@/providers/AxiosClientProvider'
import MyThemeProvider from '@/providers/MyThemeProvider'

type NextPageWithLayout = NextPage & {
  layout?: typeof MainLayout
}

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}

const MyApp: FC<AppPropsWithLayout> = ({
  Component,
  pageProps: { session, ...pageProps },
}: AppPropsWithLayout) => {
  const Layout =
    Component.layout ||
    (({ children }: { children: ReactNode }) => <>{children}</>)

  const onError = (error: Error) => {
    console.error(error)
  }

  const ErrorFallback = () => {
    return (
      <Error500>
        <BaseButton
          sx={{ my: 1 }}
          color='negative'
          onClick={() => window.location.reload()}
        >
          再読み込み
        </BaseButton>
      </Error500>
    )
  }

  return (
    <>
      <SessionProvider session={session}>
        <CssBaseline>
          <MyThemeProvider>
            <CSR>
              <ErrorBoundary
                FallbackComponent={ErrorFallback}
                onError={onError}
              >
                <TheLoading />
                <TheNotificationToast />
                <Layout>
                  <AxiosClientProvider>
                    <Component {...pageProps} />
                  </AxiosClientProvider>
                </Layout>
              </ErrorBoundary>
            </CSR>
          </MyThemeProvider>
        </CssBaseline>
      </SessionProvider>
    </>
  )
}

export default MyApp
