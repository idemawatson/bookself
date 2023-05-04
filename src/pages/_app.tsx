import "@/styles/globals.css";
import { CssBaseline } from "@mui/material";
import { NextPage } from "next";
import type { AppProps } from "next/app";
import { FC, ReactNode } from "react";
import { MainLayout } from "@/components/layout/MainLayout";
import MyThemeProvider from "@/providers/MyThemeProvider";
import { SessionProvider } from "next-auth/react";
import { TheLoading } from "@/components/parts/TheLoading";
import { ErrorBoundary } from "react-error-boundary";
import Error500 from "@/components/parts/500";
import CSR from "@/components/CSR";

type NextPageWithLayout = NextPage & {
  layout?: typeof MainLayout;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

const MyApp: FC<AppPropsWithLayout> = ({
  Component,
  pageProps: { session, ...pageProps },
}: AppPropsWithLayout) => {
  const Layout =
    Component.layout ||
    (({ children }: { children: ReactNode }) => <>{children}</>);

  const onError = (error: Error) => {
    console.error(error);
  };

  return (
    <>
      <SessionProvider session={session}>
        <CssBaseline>
          <MyThemeProvider>
            <CSR>
              <ErrorBoundary FallbackComponent={Error500} onError={onError}>
                <TheLoading />
                <Layout>
                  <Component {...pageProps} />
                </Layout>
              </ErrorBoundary>
            </CSR>
          </MyThemeProvider>
        </CssBaseline>
      </SessionProvider>
    </>
  );
};

export default MyApp;
